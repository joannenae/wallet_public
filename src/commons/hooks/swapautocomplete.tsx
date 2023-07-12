import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from "react";
import styled from "@emotion/styled";

interface IInputValue {
  isHaveInputValue2: boolean;
  close2: boolean;
  inputValue2: string;
  changeInputValue2: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDropDownKey2: (event: KeyboardEvent<HTMLInputElement>) => void;
  status2: boolean;
  dropDownList2: string[];
  dropDownItemIndex2: Number;
  setInputValue2: Dispatch<SetStateAction<string>>;
  setClose2: Dispatch<SetStateAction<boolean>>;
  setIsHaveInputValue2: Dispatch<SetStateAction<boolean>>;
  setDropDownItemIndex2: Dispatch<SetStateAction<number>>;
  clickDropDownItem2: (clickedItem: string) => void;
}
interface IInputstyle {
  isHaveInputValue2: boolean;
  close2: boolean;
}

const SwapAutoComplete = (props: IInputValue) => {
  return (
    <>
      <div>
        <WholeBox>
          <InputBox
            isHaveInputValue2={props.isHaveInputValue2}
            close2={props.close2}
          >
            {props.close2 === true ? (
              <>
                {" "}
                <Input
                  type="text"
                  value={
                    props.change === false
                      ? props.inputValue2
                      : props.inputValue
                  }
                  onChange={props.changeInputValue2}
                  onKeyUp={props.handleDropDownKey2}
                  placeholder="토큰 선택"
                />
                <DeleteButton onClick={() => props.setInputValue2("")}>
                  {props.status2 === false ? (
                    <div style={{ fontSize: "1.5rem" }}> &times;</div>
                  ) : (
                    <img
                      src="/image/sortdown.png"
                      onClick={() =>
                        props.setIsHaveInputValue2((prev) => !prev)
                      }
                      style={{ width: "60%" }}
                    />
                  )}
                </DeleteButton>
              </>
            ) : (
              <Choose onClick={() => props.setClose2((prev) => !prev)}>
                토큰 선택 {">"}
              </Choose>
            )}
          </InputBox>

          {props.isHaveInputValue2 && props.close2 === true && (
            <DropDownBox>
              {props.dropDownList2.length === 0 && (
                <DropDownItem>해당하는 단어가 없습니다</DropDownItem>
              )}
              {props.dropDownList2.map((dropDownItem, dropDownIndex) => {
                return (
                  <DropDownItem
                    key={dropDownIndex}
                    onClick={() => props.clickDropDownItem2(dropDownItem)}
                    onMouseOver={() =>
                      props.setDropDownItemIndex2(dropDownIndex)
                    }
                    className={
                      props.dropDownItemIndex2 === dropDownIndex
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
    props.close2 === true ? "1px solid rgba(0, 0, 0, 0.3)" : "none"};
  border-radius: ${(props) =>
    props.isHaveInputValue2 ? activeBorderRadius : inactiveBorderRadius};
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

export default SwapAutoComplete;
