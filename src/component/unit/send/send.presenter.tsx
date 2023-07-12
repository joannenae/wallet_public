import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import * as S from "./send.styles";
import { Divider, Input, Select } from "antd";
import { ISendPresenter } from "./send.types";
const { Option } = Select;
import { v4 as uuidv4 } from "uuid";

export default function SendPresenter(props: ISendPresenter) {
  let arr = props.address;
  let test =
    arr.substring(0, 3) + "******" + arr.substring(arr.length - 3, arr.length);

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
          <div style={{ fontSize: "1.3rem" }}>{props.userNm}</div>
          <span style={{ fontSize: "1.1rem", color: "gray" }}>{test}</span>
        </div>
      </div>
    );
  };

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
            <S.PcInfo>
              <Input
                style={{ width: 240 }}
                placeholder="받는 주소를 입력하세요."
                onChange={props.onChangeGetAddress}
              />
            </S.PcInfo>
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
                {props.userinfo.mainWallet?.userToken.map((item) => (
                  <Option key={item.tokenSym}>
                    <div style={{ fontSize: "1.3rem" }}>
                      {item.tokenSym}
                      <br />
                      잔액: {item.balance}
                    </div>
                  </Option>
                ))}
              </Select>
            </S.MoToken>
            <S.MoToken>
              <S.MoTitle>수량</S.MoTitle>
              <S.PcAmount>
                <S.PcAmountInput
                  style={{ marginRight: 10 }}
                  placeholder="0"
                  onChange={props.onChangeBalance}
                />
                {props.token}
              </S.PcAmount>
            </S.MoToken>
            <div
              onClick={props.sentToken}
              style={{
                width: 100,
                padding: 5,
                textAlign: "center",
                margin: "0px auto",
                fontSize: "1.3rem",
                cursor: "pointer",
                color: "#0f55ef",
                border: "1px solid #0f55ef",
                borderRadius: 5,
              }}
            >
              예상 수수료 확인
            </div>
            {props.error && (
              <div
                style={{
                  textAlign: "center",
                  color: "red",
                  marginTop: 10,
                  fontSize: "1.3rem",
                }}
              >
                * {props.error}!
              </div>
            )}
            {props.add && (
              <S.MoToken>
                <S.MoTitle>예상 수수료</S.MoTitle>
                <S.PcAmount>0.00001 ETH</S.PcAmount>
              </S.MoToken>
            )}
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
                <Input
                  style={{ width: 260 }}
                  placeholder="받는 주소를 입력하세요."
                  onChange={props.onChangeGetAddress}
                />
              </S.PcInfo>
            </S.PcBox>
          </S.PcFlex>
          <S.PcContainer>
            <S.PcToken>
              <S.PcTitle>토큰</S.PcTitle>
              <Select
                placeholder="토큰 목록"
                style={{ width: "50%" }}
                allowClear
                onChange={props.onChangeToken}
              >
                {props.userinfo.mainWallet?.userToken.map((item) => (
                  <Option value={item.tokenSym} key={uuidv4()}>
                    <div style={{ fontSize: "1.3rem" }}>
                      {item.tokenSym}
                      <br />
                      잔액: {item.balance}
                    </div>
                  </Option>
                ))}
              </Select>
            </S.PcToken>
            <S.PcToken>
              <S.PcTitle>수량</S.PcTitle>
              <S.PcAmount>
                <S.PcAmountInput
                  style={{ marginRight: 10 }}
                  placeholder="0"
                  onChange={props.onChangeBalance}
                />
                {props.token}
              </S.PcAmount>
            </S.PcToken>
            <div
              onClick={props.sentToken}
              style={{
                width: 150,
                textAlign: "center",
                margin: "0 auto",
                fontSize: "1.3rem",
                cursor: "pointer",
                color: "#0f55ef",
                border: "1px solid #0f55ef",
                borderRadius: 5,
              }}
            >
              예상 수수료 확인
            </div>
            {props.error && (
              <div
                style={{
                  textAlign: "center",
                  color: "red",
                  marginTop: 10,
                  fontSize: "1.3rem",
                }}
              >
                * {props.error}!
              </div>
            )}
            {props.add && (
              <S.PcToken>
                <S.PcTitle>예상 수수료</S.PcTitle>
                <S.PcAmount>
                  {props.txFee}
                  {props.token}
                </S.PcAmount>
              </S.PcToken>
            )}
          </S.PcContainer>
        </S.PcWrapper>
      </PC>
    </>
  );
}
