import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import { Select } from "antd";
const { Option } = Select;
import * as S from "./swap.styles";
import { ISwapPresenter } from "./swap.types";
export default function SwapPresenter(props: ISwapPresenter) {
  const TokenList = (status: any) => {
    console.log("status", status);
    return (
      <div style={{ width: "120px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/image/ethereum.png"
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <span style={{ fontSize: "1.4rem" }}>
            {status === true ? "ETH1" : "ETH2"}
          </span>
        </div>
      </div>
    );
  };
  const Test = (status: any) => {
    return (
      <div style={{ width: "120px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/image/ethereum.png"
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <span style={{ fontSize: "1.4rem" }}>
            {" "}
            {status === true ? "ETH2" : "ETH1"}
          </span>
        </div>
      </div>
    );
  };
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
            placeholder="토큰 목록"
            className="ant-select-selection-placeholder"
            style={{ width: 300 }}
            allowClear
            onChange={props.onChangeToken}
            bordered={false}
          >
            {/* 토큰 목록 map으로 */}
            <Option value={props.status === true ? props.jest : props.test}>
              <TokenList status={props.status} />
            </Option>
          </Select>
          <S.MoSwapInput placeholder="0" />
        </div>
        <div style={{ width: "100%" }}>
          <img
            onClick={props.onClickChange}
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
            placeholder="토큰 목록"
            style={{ width: "100%" }}
            allowClear
            onChange={props.onChangeTest}
          >
            {/* 토큰 목록 map으로 */}
            <Option value={props.status === true ? props.test : props.jest}>
              <Test status={props.status} />
            </Option>
          </Select>
        </div>
      </Mobile>
      <PC>
        <S.PcTitle>다음에서 스왑</S.PcTitle>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid gray",
            width: "70%",
            margin: "0 auto",
            marginBottom: "5%",
          }}
        >
          <Select
            placeholder="토큰 목록"
            style={{ width: 150 }}
            allowClear
            onChange={props.onChangeToken}
            bordered={false}
          >
            {/* 토큰 목록 map으로 */}
            <Option value={props.status === true ? props.jest : props.test}>
              <TokenList status={props.status} />
            </Option>
          </Select>
          <S.PcSwapInput placeholder="0" />
        </div>
        <div style={{ width: "100%" }}>
          <img
            onClick={props.onClickChange}
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
          <Select
            placeholder="토큰 목록"
            style={{ width: 200, marginLeft: "28%" }}
            allowClear
            onChange={props.onChangeTest}
          >
            {/* 토큰 목록 map으로 */}
            <Option value={props.status === true ? props.test : props.jest}>
              <Test status={props.status} />
            </Option>
          </Select>
        </div>
      </PC>
    </>
  );
}
