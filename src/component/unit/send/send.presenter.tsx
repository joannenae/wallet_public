import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import * as S from "./send.styles";
import { Divider, Select } from "antd";
import { ISendPresenter } from "./send.types";
const { Option } = Select;
let arr = "0xeccfe9da751317921ef767d2a96975188bfe3d96";
let test =
  arr.substring(0, 3) + "******" + arr.substring(arr.length - 3, arr.length);
// 토큰 목록
const TokenList = () => {
  return (
    <div style={{ width: "120px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/image/ethereum.png"
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <span style={{ fontSize: "1.4rem" }}>ETH</span>
      </div>
    </div>
  );
};
const GetAddress = () => {
  return (
    <div style={{ width: "120px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <div style={{ fontSize: "1.3rem" }}>attosiss</div>
        <span style={{ fontSize: "1.1rem", color: "gray" }}>{test}</span>
      </div>
    </div>
  );
};

export default function SendPresenter(props: ISendPresenter) {
  return (
    <>
      <Mobile>
        <S.PcWrapper>
          <S.PcHeader>전송</S.PcHeader>
          <Divider />
          <S.MoBox>
            <S.MoSend>보내는 사람</S.MoSend>
            <S.MoInfo>{test}</S.MoInfo>
          </S.MoBox>
          <S.MoBox>
            <S.MoSend>받는 사람</S.MoSend>
            <Select
              placeholder="받는 주소"
              style={{ width: 150 }}
              allowClear
              onChange={props.onChangeToken}
            >
              {/* main 불러올때 게정 목록 recoil에 담아 불러오기 */}
              <Option value="ETH">
                <GetAddress />
              </Option>
            </Select>
          </S.MoBox>
          <S.MoContainer>
            <S.MoToken>
              <S.MoTitle>토큰</S.MoTitle>
              <Select
                placeholder="토큰 목록"
                style={{ width: 150 }}
                allowClear
                onChange={props.onChangeToken}
              >
                {/* 토큰 목록 map으로 */}
                <Option value="ETH">
                  <TokenList />
                </Option>
              </Select>
            </S.MoToken>
            <S.MoToken>
              <S.MoTitle>수량</S.MoTitle>
              <S.PcAmount>
                <S.PcAmountInput style={{ marginRight: 10 }} placeholder="0" />
                ETH
              </S.PcAmount>
            </S.MoToken>
            <S.MoToken>
              <S.MoTitle>예상 수수료</S.MoTitle>
              <S.PcAmount>0.00001 ETH</S.PcAmount>
            </S.MoToken>
          </S.MoContainer>
        </S.PcWrapper>
      </Mobile>
      <PC>
        <S.PcWrapper>
          <S.PcHeader>전송</S.PcHeader>
          <Divider />
          <S.PcFlex>
            <S.PcBox>
              <S.PcSend>보내는 사람</S.PcSend>
              <S.PcInfo>{test}</S.PcInfo>
            </S.PcBox>
            <img src="/image/rightarrow.png" width={20} />
            <S.PcBox>
              <S.PcSend>받는 사람</S.PcSend>
              <S.PcInfo>
                {" "}
                <Select
                  placeholder="받는 주소"
                  style={{ width: 150 }}
                  allowClear
                  onChange={props.onChangeToken}
                >
                  {/* main 불러올때 게정 목록 recoil에 담아 불러오기 */}
                  <Option value="ETH">
                    <GetAddress />
                  </Option>
                </Select>
              </S.PcInfo>
            </S.PcBox>
          </S.PcFlex>
          <S.PcContainer>
            <S.PcToken>
              <S.PcTitle>토큰</S.PcTitle>
              <Select
                placeholder="토큰 목록"
                style={{ width: 150 }}
                allowClear
                onChange={props.onChangeToken}
              >
                {/* 토큰 목록 map으로 */}
                <Option value="ETH">
                  <TokenList />
                </Option>
              </Select>
            </S.PcToken>
            <S.PcToken>
              <S.PcTitle>수량</S.PcTitle>
              <S.PcAmount>
                <S.PcAmountInput style={{ marginRight: 10 }} placeholder="0" />
                ETH
              </S.PcAmount>
            </S.PcToken>
            <S.PcToken>
              <S.PcTitle>예상 수수료</S.PcTitle>
              <S.PcAmount>0.00001 ETH</S.PcAmount>
            </S.PcToken>
          </S.PcContainer>
        </S.PcWrapper>
      </PC>
    </>
  );
}
