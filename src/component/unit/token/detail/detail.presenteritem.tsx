import * as S from "./detail.styles";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Mobile, PC } from "../../../../commons/hooks/mediaquery";
import { Modal } from "antd";
import { useState } from "react";
import { ITokenDetailPresenterItem } from "./detail.types";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export default function DetailPresenterItem(props: ITokenDetailPresenterItem) {
  // 토큰 거래 내역 모달 state
  const [trans, setTrans] = useState(false);

  // 토큰 거래 내역 모달
  const showTrans = () => {
    setTrans(true);
  };
  const transOk = () => {
    setTrans(false);
  };
  const transCancel = () => {
    setTrans(false);
  };

  return (
    <>
      <Mobile>
        <>
          <S.MoTransBox>
            <S.PcTrans onClick={props.showTrans}>
              <div>
                <div style={{ fontSize: "1.4rem", fontWeight: 600 }}>받기</div>
                <div
                  style={{
                    fontSize: "1.2rem",
                    paddingTop: 7,
                  }}
                >
                  발신 :{" "}
                  {props.el.ttxPayWallet === null
                    ? props.el?.ttxFromWallet?.address?.substring(0, 3) +
                      "******" +
                      props.el.ttxFromWallet?.address.substring(
                        props.el.ttxFromWallet.address.length - 3,
                        props.el.ttxFromWallet.address.length
                      )
                    : props.el?.ttxPayWallet?.address?.substring(0, 3) +
                      "******" +
                      props.el.ttxPayWallet?.address.substring(
                        props.el.ttxPayWallet.address.length - 3,
                        props.el.ttxPayWallet.address.length
                      )}
                </div>
              </div>
              <div>
                <div style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                  {props.el.txBalance}
                </div>
                <div
                  style={{
                    fontSize: "1.4rem",
                    paddingTop: 7,
                    textAlign: "right",
                    color: "#00B649F9",
                  }}
                >
                  {props.el.createdAt.substring(0, 10)}
                </div>
              </div>
            </S.PcTrans>
            <Modal
              title={props.el.txType}
              open={props.trans}
              onCancel={props.transCancel}
              onOk={props.transOk}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px 0px 40px 0px",
                }}
              >
                <S.PcFlex>
                  <S.PcConLeft>보내는 주소</S.PcConLeft>
                  <S.PcConLeft>지불 수수료</S.PcConLeft>
                </S.PcFlex>
                <S.PcFlex>
                  <S.PcCon>
                    {" "}
                    {props.el.ttxFromWallet.address.substring(0, 3) +
                      "******" +
                      props.el.ttxFromWallet?.address.substring(
                        props.el.ttxFromWallet?.address.length - 3,
                        props.el.ttxFromWallet.address.length
                      )}
                  </S.PcCon>
                  <S.PcCon>
                    {props.el.ttxPayWallet === null
                      ? props.el.ttxFromWallet.ttxGas
                      : props.el.ttxPayWallet?.ttxGas}
                  </S.PcCon>
                </S.PcFlex>
                <S.PcFlex>
                  <S.PcConLeft>받는 주소</S.PcConLeft>
                </S.PcFlex>
                <S.PcFlex>
                  <S.PcCon>
                    {" "}
                    {props.el.ttxGetWallet.address.substring(0, 3) +
                      "******" +
                      props.el.ttxGetWallet.address.substring(
                        props.el.ttxGetWallet.address.length - 3,
                        props.el.ttxGetWallet.address.length
                      )}
                  </S.PcCon>
                </S.PcFlex>
              </div>
              <LightTooltip
                title={props.isCopy ? "복사 완료!" : "클릭 후 복사!"}
              >
                <S.PcBlue
                  onClick={() => props.handleCopyClipBoard(props.el.txHash)}
                >
                  트랜잭션 ID : {""}
                  {props.el.txHash.substring(0, 5) +
                    "******" +
                    props.el.txHash.substring(
                      props.el.txHash.length - 3,
                      props.el.txHash.length
                    )}
                </S.PcBlue>
              </LightTooltip>
              <S.PcBlue>블록탐색기에서 보기 {">"}</S.PcBlue>
            </Modal>
          </S.MoTransBox>
        </>
      </Mobile>
      <PC>
        <S.PcTrans onClick={showTrans}>
          <div>
            <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>
              {props.el.txType}
            </div>
            <div
              style={{
                fontSize: "1.4rem",
                paddingTop: 7,
              }}
            >
              발신 :
              {props.el.ttxPayWallet === null
                ? props.el?.ttxFromWallet?.address?.substring(0, 3) +
                  "******" +
                  props.el.ttxFromWallet?.address.substring(
                    props.el.ttxFromWallet.address.length - 3,
                    props.el.ttxFromWallet.address.length
                  )
                : props.el?.ttxPayWallet?.address?.substring(0, 3) +
                  "******" +
                  props.el.ttxPayWallet?.address.substring(
                    props.el.ttxPayWallet.address.length - 3,
                    props.el.ttxPayWallet.address.length
                  )}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>
              {props.el.txBalance}
            </div>
            <div
              style={{
                fontSize: "1.4rem",
                paddingTop: 7,
                textAlign: "right",
                color: "#00B649F9",
              }}
            >
              {props.el.createdAt.substring(0, 10)}
            </div>
          </div>
        </S.PcTrans>
        <Modal
          title={props.el.txType}
          open={trans}
          onCancel={transCancel}
          onOk={transOk}
        >
          <div style={{ fontSize: "1.3rem", color: "#00B649F9" }}>
            {props.el.createdAt.substring(0, 10)}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0px 40px 0px",
            }}
          >
            <S.PcFlex>
              <S.PcConLeft>보내는 주소</S.PcConLeft>
              <S.PcConLeft>지불 수수료</S.PcConLeft>
            </S.PcFlex>
            <S.PcFlex>
              <S.PcCon>
                {" "}
                {props.el.ttxFromWallet.address.substring(0, 3) +
                  "******" +
                  props.el.ttxFromWallet?.address.substring(
                    props.el.ttxFromWallet?.address.length - 3,
                    props.el.ttxFromWallet.address.length
                  )}
              </S.PcCon>
              <S.PcCon>
                {props.el.ttxPayWallet === null
                  ? props.el.ttxFromWallet.ttxGas
                  : props.el.ttxPayWallet?.ttxGas}
              </S.PcCon>
            </S.PcFlex>
            <S.PcFlex>
              <S.PcConLeft>받는 주소</S.PcConLeft>
            </S.PcFlex>
            <S.PcFlex>
              <S.PcCon>
                {" "}
                {props.el.ttxGetWallet.address.substring(0, 3) +
                  "******" +
                  props.el.ttxGetWallet.address.substring(
                    props.el.ttxGetWallet.address.length - 3,
                    props.el.ttxGetWallet.address.length
                  )}
              </S.PcCon>
            </S.PcFlex>
          </div>
          <LightTooltip title={props.isCopy ? "복사 완료!" : "클릭 후 복사!"}>
            <S.PcBlue
              onClick={() => props.handleCopyClipBoard(props.el.txHash)}
            >
              트랜잭션 ID : {""}
              {props.el.txHash.substring(0, 5) +
                "******" +
                props.el.txHash.substring(
                  props.el.txHash.length - 3,
                  props.el.txHash.length
                )}
            </S.PcBlue>
          </LightTooltip>
          <S.PcBlue>블록탐색기에서 보기 {">"}</S.PcBlue>
        </Modal>
      </PC>
    </>
  );
}
