import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import * as S from "./login.styles";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ILoginPresenter } from "./login.types";

// 로그인
export default function LoginPresenter(props: ILoginPresenter) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  return (
    <>
      {/* Mobile version */}
      <>
        <Mobile>
          <S.MobileMain data-aos="fade-in">
            <S.MobileMainContainer>
              <S.MoContent>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: 20,
                  }}
                >
                  <S.MobileLogo src="/image/wallet-small.png" />
                  <div
                    style={{
                      fontSize: "1.8rem",
                      color: "#0c70f2",
                      fontWeight: 600,
                    }}
                  >
                    We are DreamWallet
                  </div>
                </div>
                <S.MoInput
                  placeholder="이메일 주소 또는 아이디"
                  onChange={props.onChangeEmail}
                />
                <S.MoInputBox>
                  <S.MoInput
                    placeholder="비밀번호"
                    type={props.visible ? "text" : "password"}
                    onChange={props.onChangePassword}
                  />
                  <div style={{ position: "absolute", top: 37, right: 0 }}>
                    <S.MoEye
                      src={
                        props.visible
                          ? "/image/visible.png"
                          : "/image/invisible.png"
                      }
                      onClick={props.onClickVisible}
                    />
                  </div>
                </S.MoInputBox>
                <S.MoBottom>
                  <S.MoGo onClick={props.onClickMoveToPage("/find")}>
                    아이디 / 비밀번호 찾기
                  </S.MoGo>
                  <S.MoGo onClick={props.onClickMoveToPage("/join")}>
                    회원가입
                  </S.MoGo>
                </S.MoBottom>
                <S.MoLogin
                  onClick={props.onClickLogin}
                  disabled={!props.email || !props.password}
                >
                  로그인
                </S.MoLogin>
              </S.MoContent>
            </S.MobileMainContainer>
          </S.MobileMain>
        </Mobile>
      </>
      {/* PC version */}
      <>
        <PC>
          <S.PcMain>
            <S.PcLeftContainer data-aos="fade-right">
              <S.PcImageBox>
                <S.H1>
                  <span>W</span>
                  <span>e</span>
                  <span>l</span>
                  <span>c</span>
                  <span>o</span>
                  <span>m</span>
                  <span>e</span>
                </S.H1>
                <S.PcLogoText> We are DreamWallet !</S.PcLogoText>
              </S.PcImageBox>
            </S.PcLeftContainer>
            <S.PcRightContainer data-aos="fade-left">
              <S.PcContent>
                <S.PcInput
                  placeholder="이메일 주소 또는 아이디"
                  onChange={props.onChangeEmail}
                />
                <S.PcInputBox>
                  <S.PcInput
                    placeholder="비밀번호"
                    type={props.visible ? "text" : "password"}
                    onChange={props.onChangePassword}
                    onKeyDown={props.handelEnter}
                  />
                  <div style={{ position: "absolute", top: 40, right: 0 }}>
                    <S.PcEye
                      src={
                        props.visible
                          ? "/image/visible.png"
                          : "/image/invisible.png"
                      }
                      onClick={props.onClickVisible}
                    />
                  </div>
                </S.PcInputBox>
                <S.PcLog
                  type="button"
                  onClick={props.onClickLogin}
                  disabled={!props.email || !props.password}
                >
                  로그인
                </S.PcLog>
                <S.PcBottom>
                  <S.PcGo onClick={props.onClickMoveToPage("/find")}>
                    아이디 / 비밀번호 찾기
                  </S.PcGo>
                  <S.PcGo onClick={props.onClickMoveToPage("/join")}>
                    회원가입
                  </S.PcGo>
                </S.PcBottom>
              </S.PcContent>
            </S.PcRightContainer>
          </S.PcMain>
        </PC>
      </>
    </>
  );
}
