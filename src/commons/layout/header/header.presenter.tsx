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
          <S.MoLogo onClick={props.onClickMain}>DreamWallet</S.MoLogo>
          <S.MoHeaderContract onClick={props.onClickMoveToPage("/contracts")}>
            ＋ Smart Contracts
          </S.MoHeaderContract>
          <S.MoHeaderRight>
            {router.pathname === "/contracts" ? (
              <></>
            ) : (
              <>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "500",
                    letterSpacing: 1.3,
                    background: "#fffdf2",
                  }}
                >
                  {props?.userinfo?.userInfo?.userName} 님
                </div>
                <S.MoNetCirBox>
                  <S.MoActive onClick={props.onClickActive}>
                    <S.MoCir>●</S.MoCir>
                    <S.MoNet>
                      {Object.keys(router.query).length === 0 ||
                      !router.query.networkName
                        ? props?.userinfo?.userNet[0]?.networkName
                        : router.query.networkName}
                    </S.MoNet>

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
                      <div>
                        {props.userinfo?.userNet?.map((el) => {
                          return (
                            <S.MoNetlist
                              onClick={() => {
                                props.onClickNetList(
                                  el.chainId,
                                  el.networkName,
                                  el.explorer
                                );
                              }}
                            >
                              <>
                                <S.MoListCir>●</S.MoListCir>
                                <S.MoList>{el.networkName}</S.MoList>
                              </>
                            </S.MoNetlist>
                          );
                        })}
                        <S.MoNetAdd
                          onClick={() => {
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
                    style={{ width: "27%", marginLeft: 30 }}
                    // style={{ width: "27%", margin: "0 auto" }}
                    onClick={props.onClickAccountActive}
                  />
                  {props.accountActive && (
                    <S.MoAccountActive>
                      <AccountContainer
                        setAccountActive={props.setAccountActive}
                        // @ts-ignore
                        userinfo={props.userinfo}
                        walletMain={props.walletMain}
                        chainId={props.chainId}
                        token={props.token}
                        // networkName={props.networkName}
                      />
                    </S.MoAccountActive>
                  )}
                </S.PcAccount>
                <LightTooltip title="로그아웃">
                  {/* <div>Logout</div> */}
                  <img
                    src="/image/logout.png"
                    style={{ height: 20, cursor: "pointer" }}
                    onClick={props.onClickLogOut}
                  />
                </LightTooltip>
              </>
            )}
          </S.MoHeaderRight>
        </S.MoHeader>
      </Mobile>
      <PC>
        <S.PcHeader>
          <S.PcHeaderFlex>
            <S.PcLogo onClick={props.onClickMain}>DreamWallet</S.PcLogo>
            <S.PcHeaderContract onClick={props.onClickMoveToPage("/contracts")}>
              ＋ Smart Contracts
            </S.PcHeaderContract>
          </S.PcHeaderFlex>
          <S.PcHeaderRight>
            {router.pathname === "/contracts" ? (
              <></>
            ) : (
              <>
                <div
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "500",
                    letterSpacing: 1.3,
                    background: "#fffdf2",
                  }}
                >
                  {props?.userinfo?.userInfo?.userName} 님
                </div>
                <S.PcNetCirBox>
                  <S.PcActive onClick={props.onClickActive}>
                    <S.PcCir>●</S.PcCir>{" "}
                    {/* router 쿼리에 데이터 담은 후 데이터가 있으면 선택한 network , 없으면 default network */}
                    <S.PcNet>
                      {Object.keys(router.query).length === 0 ||
                      !router.query.networkName
                        ? props?.userinfo?.userNet[0]?.networkName
                        : router.query.networkName}
                    </S.PcNet>
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
                  {props.active && (
                    <S.PcNetBox>
                      <div
                        style={{
                          position: "relative",
                          height: 200,
                        }}
                      >
                        {props.userinfo?.userNet?.map((el) => {
                          return (
                            <S.PcNetlist
                              onClick={() => {
                                props.onClickNetList(
                                  el.chainId,
                                  el.networkName,
                                  el.explorer
                                );
                              }}
                            >
                              <>
                                <S.PcListCir>●</S.PcListCir>
                                <S.PcList>{el.networkName}</S.PcList>
                              </>
                            </S.PcNetlist>
                          );
                        })}
                        <S.PcNetAdd
                          onClick={() => {
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
                  <S.PcUser
                    src="/image/user.png"
                    onClick={props.onClickAccountActive}
                  />
                  {props.accountActive && (
                    <S.PcAccountActive>
                      <AccountContainer
                        setAccountActive={props.setAccountActive}
                        // @ts-ignore
                        userinfo={props.userinfo}
                        walletMain={props.walletMain}
                        chainId={props.chainId}
                        token={props.token}
                        // networkName={props.networkName}
                      />
                    </S.PcAccountActive>
                  )}
                </S.PcAccount>
                <LightTooltip title="로그아웃">
                  {/* <div>Logout</div> */}
                  <img
                    src="/image/logout.png"
                    style={{ width: 30, cursor: "pointer" }}
                    onClick={props.onClickLogOut}
                  />
                </LightTooltip>
              </>
            )}
          </S.PcHeaderRight>
        </S.PcHeader>
      </PC>
    </>
  );
}
