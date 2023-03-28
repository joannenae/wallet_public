import { Mobile, PC } from "../../../../commons/hooks/mediaquery";
import * as S from "./getwallet.styles";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { IGetWalletPresenter } from "./getwallet.types";
import { ChangeEvent } from "react";

export default function GetWalletPresenter(props: IGetWalletPresenter) {
  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 12,
    },
  }));

  return (
    <>
      <Mobile>
        <S.PcWrapper>
          <S.PcHeader>
            <div style={{ display: "flex" }}>
              <LightTooltip title="돌아가기">
                <S.PcBack
                  src="/image/arrowback.png"
                  onClick={props.onClickMoveToPage("/complete")}
                />
              </LightTooltip>
              <S.PcLogo>DreamWallet</S.PcLogo>
            </div>
          </S.PcHeader>
          <S.MoDownHeader>
            비밀 복구 구문으로 계정(지갑) 가져오기
          </S.MoDownHeader>
          <S.MoCheckBox>
            {props.number.map((el: any, i: number) => {
              return (
                <S.MoCheckDiv key={i}>
                  <div
                    style={{
                      fontSize: "2rem",
                      width: "5%",
                    }}
                  >
                    {el}
                  </div>
                  <S.MoCheckInput
                    type="text"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      props.onChangeWord(e, i);
                    }}
                  />
                </S.MoCheckDiv>
              );
            })}
          </S.MoCheckBox>
          <S.MoCheckButton onClick={props.onClickGetWallet} type="button">
            가져오기
          </S.MoCheckButton>
        </S.PcWrapper>
      </Mobile>
      <PC>
        <S.PcWrapper>
          <S.PcHeader>
            <div style={{ display: "flex" }}>
              <LightTooltip title="돌아가기">
                <S.PcBack
                  src="/image/arrowback.png"
                  onClick={props.onClickMoveToPage("/complete")}
                />
              </LightTooltip>
              <S.PcLogo>DreamWallet</S.PcLogo>
            </div>
          </S.PcHeader>
          <S.PcDownHeader>
            비밀 복구 구문으로 계정(지갑) 가져오기
          </S.PcDownHeader>
          <S.PcCheckBox>
            {props.number.map((el: any, i: number) => {
              return (
                <S.PcCheckDiv key={i}>
                  <div
                    style={{
                      fontSize: "2rem",
                      width: "5%",
                    }}
                  >
                    {el}
                  </div>
                  <S.PcCheckInput
                    type="text"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      props.onChangeWord(e, i);
                    }}
                  />
                </S.PcCheckDiv>
              );
            })}
          </S.PcCheckBox>
          <S.PcCheckButton onClick={props.onClickGetWallet} type="button">
            가져오기
          </S.PcCheckButton>
        </S.PcWrapper>
      </PC>
    </>
  );
}
