import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import * as S from "./transaction.styles";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { ITransactionPresenter } from "./transaction.types";
import { Spin } from "antd";
import { useRecoilValue } from "recoil";
import { explorerState } from "../../../commons/store";

export default function TransactionPresenter(props: ITransactionPresenter) {
  // 보내는 주소
  let arr = "0xeccfe9da751317921ef767d2a96975188bfe3d96";
  let test =
    arr.substring(0, 3) + "******" + arr.substring(arr.length - 3, arr.length);

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

  const explorer = useRecoilValue(explorerState);

  console.log(props.trans.length === 0);

  return (
    <>
      <Mobile>
        {props.loading === false ? (
          <div
            style={{
              width: "50%",
              margin: "0 auto",
              marginTop: 70,
              textAlign: "center",
            }}
          >
            <Spin tip="로딩 중 ..." size="large" />
          </div>
        ) : props.trans?.length === 0 ? (
          <div
            style={{
              width: "50%",
              margin: "0 auto",
              marginTop: 70,
              fontSize: "1.6rem",
              color: "gray",
              textAlign: "center",
            }}
          >
            거래 내역이 없습니다.
          </div>
        ) : (
          props?.trans?.map((el: any, i: any) => {
            return (
              <S.MoTransBox key={i}>
                <S.MoTransType>{el.txType} </S.MoTransType>
                <S.MoTransAmount> {el.txBalance}</S.MoTransAmount>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    paddingTop: "2%",
                  }}
                >
                  <div style={{ fontSize: "1.2rem", width: "30%" }}>
                    보내는 주소
                  </div>
                  <LightTooltip title={props.isCopy ? "Success!" : "Paste!"}>
                    <div
                      onClick={() => props.handleCopyClipBoard(arr)}
                      style={{
                        marginLeft: 35,
                        fontSize: "1.5rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "#fffdf2",
                      }}
                    >
                      {el.ttxFromWallet.address.substring(0, 3) +
                        "******" +
                        el.ttxFromWallet.address.substring(
                          el.ttxFromWallet.address.length - 3,
                          el.ttxFromWallet.address.length
                        )}
                      <img
                        src="/image/clipboard.png"
                        style={{ width: "16%" }}
                      />
                    </div>
                  </LightTooltip>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    paddingTop: "2%",
                  }}
                >
                  <div style={{ fontSize: "1.2rem", width: "30%" }}>
                    받는 주소
                  </div>

                  <LightTooltip title={props.isCopy ? "Success!" : "Paste!"}>
                    <div
                      onClick={() => props.handleCopyClipBoard(arr)}
                      style={{
                        marginLeft: 35,
                        fontSize: "1.5rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "#fffdf2",
                      }}
                    >
                      {test}
                      <img
                        src="/image/clipboard.png"
                        style={{ width: "16%" }}
                      />
                    </div>
                  </LightTooltip>
                </div>
                <S.MoTransFee>
                  <div style={{ fontSize: "1.2rem", width: "30%" }}>
                    지불 수수료
                  </div>
                  <div style={{ fontSize: "1.3rem" }}>
                    {" "}
                    {el.ttxPayWallet === null
                      ? el.ttxFromWallet.ttxGas
                      : el.ttxPayWallet.ttxGas}
                  </div>
                </S.MoTransFee>
                <S.PcTransFee>
                  <div style={{ fontSize: "1.2rem", width: "20%" }}>
                    트랜잭션 해쉬
                  </div>
                  <div style={{ fontSize: "1.3rem" }}>{el.txHash}</div>
                </S.PcTransFee>
                {explorer === "null" ? (
                  <></>
                ) : (
                  <S.MoTransLog>
                    <div style={{ fontSize: "1.2rem", width: "30%" }}>
                      활동 로그
                    </div>
                    <div
                      style={{ fontSize: "1.2rem" }}
                      onClick={() => {
                        window.open(explorer);
                      }}
                    >
                      {explorer}
                    </div>
                  </S.MoTransLog>
                )}
              </S.MoTransBox>
            );
          })
        )}
      </Mobile>
      <PC>
        {props.loading === false ? (
          <div
            style={{
              width: "50%",
              margin: "0 auto",
              marginTop: 70,
              textAlign: "center",
            }}
          >
            <Spin tip="로딩 중 ..." size="large" />
          </div>
        ) : props.trans?.length === 0 ? (
          <div
            style={{
              width: "50%",
              margin: "0 auto",
              marginTop: 70,
              fontSize: "1.6rem",
              color: "gray",
              textAlign: "center",
            }}
          >
            거래 내역이 없습니다.
          </div>
        ) : (
          props.trans.map((el: any, i: any) => {
            return (
              <S.PcTransBox key={i}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "2.2rem",
                    marginBottom: 5,
                  }}
                >
                  <S.PcTransType>{el.txType} </S.PcTransType>
                  <div
                    style={{
                      color: "#00B649F9",
                      marginLeft: 15,
                    }}
                  >
                    {" "}
                    {el.createdAt.substring(0, 10)}
                  </div>
                </div>
                <S.PcTransAmount> {el.txBalance} </S.PcTransAmount>
                <S.PcTransAddress>
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <div style={{ fontSize: "1.5rem", width: "40%" }}>
                      보내는 주소
                    </div>
                    <LightTooltip title={props.isCopy ? "Success!" : "Paste!"}>
                      <div
                        onClick={() => props.handleCopyClipBoard(arr)}
                        style={{
                          marginLeft: 35,
                          fontSize: "1.5rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          background: "#fffdf2",
                        }}
                      >
                        {el.ttxFromWallet.address.substring(0, 3) +
                          "******" +
                          el.ttxFromWallet.address.substring(
                            el.ttxFromWallet.address.length - 3,
                            el.ttxFromWallet.address.length
                          )}
                        <img
                          src="/image/clipboard.png"
                          style={{ width: "16%" }}
                        />
                      </div>
                    </LightTooltip>
                  </div>
                  <img
                    src="/image/rightarrow.png"
                    style={{ padding: "0px 25px 0px 25px" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                    }}
                  >
                    <div style={{ fontSize: "1.5rem", width: "40%" }}>
                      받는 주소
                    </div>

                    <LightTooltip title={props.isCopy ? "Success!" : "Paste!"}>
                      <div
                        onClick={() => props.handleCopyClipBoard(arr)}
                        style={{
                          marginLeft: 35,
                          fontSize: "1.5rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          background: "#fffdf2",
                        }}
                      >
                        {el.ttxGetWallet.address.substring(0, 3) +
                          "******" +
                          el.ttxGetWallet.address.substring(
                            el.ttxGetWallet.address.length - 3,
                            el.ttxGetWallet.address.length
                          )}
                        <img
                          src="/image/clipboard.png"
                          style={{ width: "16%" }}
                        />
                      </div>
                    </LightTooltip>
                  </div>
                </S.PcTransAddress>
                <S.PcTransFee>
                  <div style={{ fontSize: "1.5rem", width: "20%" }}>
                    지불 주소
                  </div>
                  <div style={{ fontSize: "1.5rem" }}>
                    {el.ttxPayWallet === null
                      ? el.ttxFromWallet.address.substring(0, 3) +
                        "******" +
                        el.ttxFromWallet.address.substring(
                          el.ttxFromWallet.address.length - 3,
                          el.ttxFromWallet.address.length
                        )
                      : el.ttxPayWallet.address.substring(0, 3) +
                        "******" +
                        el.ttxPayWallet.address.substring(
                          el.ttxPayWallet.address.length - 3,
                          el.ttxPayWallet.address.length
                        )}
                  </div>
                </S.PcTransFee>
                <S.PcTransFee>
                  <div style={{ fontSize: "1.5rem", width: "20%" }}>
                    지불 수수료
                  </div>
                  <div style={{ fontSize: "1.5rem" }}>
                    {el.ttxPayWallet === null
                      ? el.ttxFromWallet.ttxGas
                      : el.ttxPayWallet.ttxGas}
                  </div>
                </S.PcTransFee>
                <S.PcTransFee>
                  <div style={{ fontSize: "1.5rem", width: "20%" }}>
                    트랜잭션 해쉬
                  </div>
                  <div style={{ fontSize: "1.5rem" }}>{el.txHash}</div>
                </S.PcTransFee>
                {explorer === "null" ? (
                  <></>
                ) : (
                  <S.PcTransLog>
                    <div style={{ fontSize: "1.5rem", width: "20%" }}>
                      활동 로그
                    </div>
                    <div
                      style={{ fontSize: "1.5rem" }}
                      onClick={() => {
                        window.open(explorer);
                      }}
                    >
                      {explorer}
                    </div>
                  </S.PcTransLog>
                )}
              </S.PcTransBox>
            );
          })
        )}
      </PC>
    </>
  );
}
