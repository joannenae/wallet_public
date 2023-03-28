import { useRouter } from "next/router";
import AccountContainer from "../../../component/unit/account/account.container";
import { Mobile, PC } from "../../hooks/mediaquery";
import * as S from "./header.styles";
import { IHeaderPresenter } from "./header.types";

export default function HeaderPresenter(props: IHeaderPresenter) {
  const router = useRouter();
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
                  <AccountContainer setAccountActive={props.setAccountActive} />
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
            <S.PcNetCirBox>
              <S.PcActive onClick={props.onClickActive}>
                <S.PcCir>●</S.PcCir>
                <S.PcNet>Baobab 테스트넷</S.PcNet>
                <div>
                  {props.active ? (
                    <img
                      src="/image/sortup.png"
                      style={{ width: "38%", marginLeft: 10 }}
                    />
                  ) : (
                    <img
                      src="/image/sortdown.png"
                      style={{ width: "38%", marginLeft: 10 }}
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
                      <S.PcList>메인넷</S.PcList>
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
                style={{ width: "37%" }}
                onClick={props.onClickAccountActive}
              />
              {props.accountActive && (
                <S.PcAccountActive>
                  <AccountContainer setAccountActive={props.setAccountActive} />
                </S.PcAccountActive>
              )}
            </S.PcAccount>
          </S.PcHeaderRight>
        </S.PcHeader>
      </PC>
    </>
  );
}
