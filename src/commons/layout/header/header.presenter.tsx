import { useRouter } from "next/router";
import AccountContainer from "../../../component/unit/account/account.container";
import { Mobile, PC } from "../../hooks/mediaquery";
import * as S from "./header.styles";
import { IHeaderPresenter } from "./header.types";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

export default function HeaderPresenter(props: IHeaderPresenter) {
  const router = useRouter();
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
        <S.MoHeader>
          <S.MoLogo onClick={props.onClickMoveToPage("/main")}>
            DreamWallet
          </S.MoLogo>
          <S.MoHeaderRight>
            <S.MoNetCirBox>
              <S.MoActive onClick={props.onClickActive}>
                <S.MoCir>●</S.MoCir>
                <S.MoNet>Baobab 테스트넷</S.MoNet>
                <div>
                  {props.active ? (
                    <img
                      src="/image/sortup.png"
                      style={{ width: "38%", marginLeft: 5 }}
                    />
                  ) : (
                    <img
                      src="/image/sortdown.png"
                      style={{ width: "38%", marginLeft: 5 }}
                    />
                  )}
                </div>
              </S.MoActive>
              {props.active && (
                <S.MoNetBox>
                  <div
                    style={{
                      overflowY: "scroll",
                    }}
                  >
                    <S.MoNetlist>
                      <S.MoListCir>●</S.MoListCir>
                      <S.MoList>메인넷</S.MoList>
                    </S.MoNetlist>
                    <S.MoNetAdd
                      onClick={() => {
                        router.push("/network");
                        props.onClickNetWork();
                      }}
                    >
                      ＋ 네트워크 추가
                    </S.MoNetAdd>
                  </div>
                </S.MoNetBox>
              )}
            </S.MoNetCirBox>
            <S.PcAccount>
              <img
                src="/image/user.png"
                style={{ width: "40%", marginLeft: 45 }}
                onClick={props.onClickAccountActive}
              />
              {props.accountActive && (
                <S.MoAccountActive>
                  <AccountContainer
                    setAccountActive={props.setAccountActive}
                    userinfo={props.userinfo}
                  />
                </S.MoAccountActive>
              )}
            </S.PcAccount>
          </S.MoHeaderRight>
        </S.MoHeader>
      </Mobile>
      <PC>
        <S.PcHeader>
          <S.PcLogo onClick={props.onClickMoveToPage("/main")}>
            DreamWallet
          </S.PcLogo>
          <S.PcHeaderRight>
            <div
              style={{
                fontSize: "1.8rem",
                fontWeight: "500",
                letterSpacing: 3,
                background: "#fffdf2",
              }}
            >
              {props.userinfo.name} 님
            </div>
            <S.PcNetCirBox>
              <S.PcActive onClick={props.onClickActive}>
                <S.PcCir>●</S.PcCir>
                {props.userinfo?.userNet?.map((el) => {
                  return (
                    <>
                      <S.PcNet>{el.networkType}</S.PcNet>
                    </>
                  );
                })}
                <div>
                  {props.active ? (
                    <img
                      src="/image/sortup.png"
                      style={{ width: "38%", marginLeft: 7 }}
                    />
                  ) : (
                    <img
                      src="/image/sortdown.png"
                      style={{ width: "38%", marginLeft: 7 }}
                    />
                  )}
                </div>
              </S.PcActive>
              {/* 네트워크 */}
              {props.active && (
                <S.PcNetBox>
                  <div
                    style={{
                      position: "relative",
                      height: 200,
                    }}
                  >
                    <S.PcNetlist>
                      <S.PcListCir>●</S.PcListCir>
                      {props.userinfo?.userNet?.map((el) => {
                        return (
                          <>
                            <S.PcList>{el.networkType}</S.PcList>
                          </>
                        );
                      })}
                    </S.PcNetlist>
                    <S.PcNetAdd
                      onClick={() => {
                        router.push("/network");
                        props.onClickNetWork();
                      }}
                    >
                      ＋ 네트워크 추가
                    </S.PcNetAdd>
                  </div>
                </S.PcNetBox>
              )}
            </S.PcNetCirBox>
            <S.PcAccount>
              <img
                src="/image/user.png"
                style={{ width: "30%" }}
                onClick={props.onClickAccountActive}
              />
              {props.accountActive && (
                <S.PcAccountActive>
                  <AccountContainer
                    setAccountActive={props.setAccountActive}
                    userinfo={props.userinfo}
                  />
                </S.PcAccountActive>
              )}
            </S.PcAccount>
            <LightTooltip title="로그아웃">
              <img
                src="/image/logout.png"
                style={{ width: 30, cursor: "pointer" }}
                onClick={props.onClickLogOut}
              />
            </LightTooltip>
          </S.PcHeaderRight>
        </S.PcHeader>
      </PC>
    </>
  );
}
