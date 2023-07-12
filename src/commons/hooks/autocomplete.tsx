import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from "react";
import styled from "@emotion/styled";

interface IInputValue {
  isHaveInputValue: boolean;
  close: boolean;
  inputValue: string;
  changeInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDropDownKey: (event: KeyboardEvent<HTMLInputElement>) => void;
  status: boolean;
  dropDownList: string[];
  dropDownItemIndex: Number;
  setInputValue: Dispatch<SetStateAction<string>>;
  setClose: Dispatch<SetStateAction<boolean>>;
  setIsHaveInputValue: Dispatch<SetStateAction<boolean>>;
  setDropDownItemIndex: Dispatch<SetStateAction<number>>;
  clickDropDownItem: (clickedItem: string) => void;
}
interface IInputstyle {
  isHaveInputValue: boolean;
  close: boolean;
}

const AutoComplete = (props: IInputValue) => {
  return (
    <>
      <div>
        <WholeBox>
          <InputBox
            isHaveInputValue={props.isHaveInputValue}
            close={props.close}
          >
            {props.close === true ? (
              <>
                {" "}
                <Input
                  type="text"
                  value={
                    props.change === false
                      ? props.inputValue
                      : props.inputValue2
                  }
                  onChange={props.changeInputValue}
                  onKeyUp={props.handleDropDownKey}
                  placeholder="토큰 선택"
                />
                <DeleteButton onClick={() => props.setInputValue("")}>
                  {props.status === false ? (
                    <div style={{ fontSize: "1.5rem" }}> &times;</div>
                  ) : (
                    <img
                      src="/image/sortdown.png"
                      onClick={() => props.setIsHaveInputValue((prev) => !prev)}
                      style={{ width: "60%" }}
                    />
                  )}
                </DeleteButton>
              </>
            ) : (
              <Choose onClick={() => props.setClose((prev) => !prev)}>
                토큰 선택 {">"}
              </Choose>
            )}
          </InputBox>

          {props.isHaveInputValue && props.close === true && (
            <DropDownBox>
              {props.dropDownList.length === 0 && (
                <DropDownItem>해당하는 단어가 없습니다</DropDownItem>
              )}
              {props.dropDownList.map((dropDownItem, dropDownIndex) => {
                return (
                  <DropDownItem
                    key={dropDownIndex}
                    onClick={() => props.clickDropDownItem(dropDownItem)}
                    onMouseOver={() =>
                      props.setDropDownItemIndex(dropDownIndex)
                    }
                    className={
                      props.dropDownItemIndex === dropDownIndex
                        ? "selected"
                        : ""
                    }
                  >
                    {dropDownItem}
                  </DropDownItem>
                );
              })}
            </DropDownBox>
          )}
        </WholeBox>
      </div>
    </>
  );
};

const activeBorderRadius: string = "10px 10px 0 0";
const inactiveBorderRadius: string = "10px";

const WholeBox = styled.div`
  position: absolute;
  width: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

const Choose = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

const InputBox = styled.div<IInputstyle>`
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-bottom: ${(props) =>
    props.close === true ? "1px solid rgba(0, 0, 0, 0.3)" : "none"};
  border-radius: ${(props) =>
    props.isHaveInputValue ? activeBorderRadius : inactiveBorderRadius};
  z-index: 3;

  &:focus-within {
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  }
`;

const Input = styled.input`
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.5rem;
`;

const DeleteButton = styled.div`
  cursor: pointer;
`;

const DropDownBox = styled.ul`
  height: 110px;
  overflow-y: scroll;
  display: block;
  margin: 0 auto;
  padding: 8px 0;
  background-color: white;
  border-top: none;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  list-style-type: none;
  z-index: 3;
`;

const DropDownItem = styled.li`
  padding: 0 16px;
  font-size: 1.5rem;
  cursor: pointer;

  &.selected {
    background-color: lightgray;
  }
`;

export default AutoComplete;
