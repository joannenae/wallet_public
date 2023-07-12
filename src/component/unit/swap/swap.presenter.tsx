import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import * as S from "./swap.styles";
import { ISwapPresenter } from "./swap.types";
import Select from "react-select";

export default function SwapPresenter(props: ISwapPresenter) {
  const transformedOptionsFrom = props.result?.userTokenList?.map(
    (option: any) => ({
      value: option.tokenId,
      label: option.tokenSym,
    })
  );
  const transformedOptionsTo = props.result?.tokenList?.map((option: any) => ({
    value: option.tokenId,
    label: option.tokenSym,
  }));

  return (
    <>
      <Mobile>
        <S.MoTitle>다음에서 스왑</S.MoTitle>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid gray",
            width: "100%",
            marginBottom: "5%",
          }}
        >
          <Select
            // @ts-ignore
            options={transformedOptionsFrom}
            placeholder="선택하세요"
            isSearchable={true}
            isClearable={true}
            onChange={(value) => props.onChangeTokenFrom(value, "first")}
            value={props.inputValue.first || ""}
          />
          <S.MoSwapInput placeholder="0" onChange={props.onChangeValue} />
        </div>
        <div style={{ width: "100%" }}>
          <img
            // onClick={props.onClickChange}
            src="/image/updown.png"
            style={{
              width: "7%",
              marginLeft: "48%",
              marginTop: "2%",
              cursor: "pointer",
            }}
          />
        </div>
        <S.MoTitle>다음으로 스왑</S.MoTitle>
        <div style={{ marginBottom: 50 }}>
          <Select
            // @ts-ignore
            options={transformedOptionsTo}
            placeholder="선택하세요"
            isSearchable={true}
            isClearable={true}
            onChange={(value) => props.onChangeTokenTo(value, "second")}
            value={props.inputValue.second || ""}
          />
        </div>
      </Mobile>
      <PC>
        <div
          style={{
            position: "relative",
            marginTop: 20,
            // height: "100%",
          }}
        >
          <S.PcTitle>다음에서 스왑</S.PcTitle>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              width: "100%",
              marginBottom: "5%",
            }}
          >
            <div>
              <S.StyledSelect
                // @ts-ignore
                options={transformedOptionsFrom}
                placeholder="선택하세요"
                isSearchable={true}
                isClearable={true}
                onChange={(value) => props.onChangeTokenFrom(value, "first")}
                value={props.inputValue.first || ""}
              />
            </div>
            <S.PcSwapInput placeholder="0" onChange={props.onChangeValue} />
          </div>
          {/* 바꿔주는 버튼 */}
          <div style={{ width: "100%" }}>
            <img
              // onClick={props.onClickChange}
              src="/image/updown.png"
              style={{
                width: "5%",
                marginLeft: "48%",
                marginTop: "2%",
                cursor: "pointer",
              }}
            />
          </div>
          <S.PcTitle>다음으로 스왑</S.PcTitle>
          <div style={{ marginBottom: 50 }}>
            <div style={{ width: "50%", margin: "0 auto" }}>
              <S.StyledSelect
                // @ts-ignore
                options={transformedOptionsTo}
                placeholder="선택하세요"
                isSearchable={true}
                isClearable={true}
                onChange={(value) => props.onChangeTokenTo(value, "second")}
                value={props.inputValue.second || ""}
              />
            </div>
          </div>
          {props.swapEs && <div> {props?.swapEs}</div>}
        </div>
      </PC>
    </>
  );
}
