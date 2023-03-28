import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import * as S from "./transaction.styles";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { ITransactionPresenter } from "./transaction.types";

export default function TransactionPresenter(props: ITransactionPresenter) {
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

  return (
    <>
      <Mobile>
        <S.MoTransBox>
          <S.MoTransType>SUCCESS / LEGACY </S.MoTransType>
          <S.MoTransAmount> -10 eth </S.MoTransAmount>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              paddingTop: "4%",
            }}
          >
            <div style={{ fontSize: "1.2rem", width: "30%" }}>보내는 주소</div>
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
                <img src="/image/clipboard.png" style={{ width: "16%" }} />
              </div>
            </LightTooltip>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              paddingTop: "4%",
            }}
          >
            <div style={{ fontSize: "1.2rem", width: "30%" }}>받는 주소</div>

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
                <img src="/image/clipboard.png" style={{ width: "16%" }} />
              </div>
            </LightTooltip>
          </div>
          <S.MoTransFee>
            <div style={{ fontSize: "1.2rem", width: "30%" }}>지불 수수료</div>
            <div style={{ fontSize: "1.3rem" }}>0.00025 eth</div>
          </S.MoTransFee>
          <S.MoTransLog>
            <div style={{ fontSize: "1.2rem", width: "30%" }}>활동 로그</div>
          </S.MoTransLog>
        </S.MoTransBox>
      </Mobile>
      <PC>
        <S.PcTransBox>
          <S.PcTransType>SUCCESS / LEGACY </S.PcTransType>
          <S.PcTransAmount> -10 eth </S.PcTransAmount>
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
                  {test}
                  <img src="/image/clipboard.png" style={{ width: "16%" }} />
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
              <div style={{ fontSize: "1.5rem", width: "40%" }}>받는 주소</div>

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
                  <img src="/image/clipboard.png" style={{ width: "16%" }} />
                </div>
              </LightTooltip>
            </div>
          </S.PcTransAddress>
          <S.PcTransFee>
            <div style={{ fontSize: "1.5rem", width: "20%" }}>지불 수수료</div>
            <div style={{ fontSize: "1.5rem" }}>0.00025 eth</div>
          </S.PcTransFee>
          <S.PcTransLog>
            <div style={{ fontSize: "1.5rem", width: "20%" }}>활동 로그</div>
            <div style={{ fontSize: "1.5rem", marginLeft: 62 }}></div>
          </S.PcTransLog>
        </S.PcTransBox>
      </PC>
    </>
  );
}
