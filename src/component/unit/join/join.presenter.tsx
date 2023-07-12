import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import * as S from "./join.styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import JoinComplete from "../../../../pages/complete";
import { IJoinPresenter } from "./join.types";

export default function JoinPresenter(props: IJoinPresenter) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  return (
    <>
      <Mobile>
        {props.status === true ? (
          <></>
        ) : (
          <S.MobileContainer data-aos="fade-down">
            <S.MoHeader>
              <S.MoBack
                src="/image/arrowsmall.png"
                onClick={props.onClickMoveToPage("/")}
              />
              <S.MoTitle>회원가입</S.MoTitle>
            </S.MoHeader>
            <form onSubmit={props.handleSubmit(props.onClickStart)}>
              <S.MoContent>
                <S.MoText>아이디(이메일)</S.MoText>
                <S.MoInputBox>
                  <S.MoInput
                    placeholder="이메일 주소"
                    onChange={props.onChangeEmail}
                  />
                  <S.MoCheckButton
                    disabled={!props.email}
                    onClick={props.emailCheck}
                    type="button"
                  >
                    중복확인
                  </S.MoCheckButton>
                </S.MoInputBox>
                <S.MoText>비밀번호</S.MoText>
                <S.MoInput
                  placeholder="비밀번호"
                  {...props.register("pw")}
                  type="password"
                />
                <S.MoError>{props.formState.errors.pw?.message}</S.MoError>
                <S.MoText>비밀번호 확인</S.MoText>
                <S.MoInput
                  type="password"
                  placeholder="비밀번호 확인"
                  {...props.register("pwCheck")}
                />
                <S.MoError>{props.formState.errors.pwCheck?.message}</S.MoError>
                <S.MoText>이름</S.MoText>
                <S.MoInput placeholder="이름" onChange={props.onChangeName} />
                <S.MoJoinButton
                  disabled={
                    !props.formState.isValid ||
                    !props.name ||
                    props.duplicate === false
                  }
                >
                  시작하기
                </S.MoJoinButton>
              </S.MoContent>
            </form>
          </S.MobileContainer>
        )}
        {props.status === true && <JoinComplete />}
      </Mobile>
      <PC>
        {props.status === true ? (
          <></>
        ) : (
          <S.PcContainer data-aos="fade-down">
            <S.PcHeader>
              <S.PcBack
                src="/image/arrowlarge.png"
                onClick={props.onClickMoveToPage("/")}
              />
              <S.PcTitle>회원가입</S.PcTitle>
            </S.PcHeader>
            <form onSubmit={props.handleSubmit(props.onClickStart)}>
              <S.PcContent>
                <S.Text>아이디(이메일)</S.Text>
                <S.InputBox>
                  <S.Input
                    placeholder="이메일 주소"
                    onChange={props.onChangeEmail}
                  />
                  <S.CheckButton
                    disabled={!props.email}
                    onClick={props.emailCheck}
                    type="button"
                  >
                    중복확인
                  </S.CheckButton>
                </S.InputBox>
                <S.Text>비밀번호</S.Text>
                <S.InputBox>
                  <S.Input
                    type={props.visible ? "text" : "password"}
                    placeholder="비밀번호"
                    {...props.register("pw")}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 15,
                      right: 0,
                    }}
                  >
                    <S.PcEye
                      src={
                        props.visible
                          ? "/image/visible.png"
                          : "/image/invisible.png"
                      }
                      onClick={props.onClickVisible}
                    />
                  </div>
                </S.InputBox>
                <S.Error>{props.formState.errors.pw?.message}</S.Error>
                <S.Text>비밀번호 확인</S.Text>
                <S.InputBox>
                  <S.Input
                    type={props.visible ? "text" : "password"}
                    placeholder="비밀번호"
                    {...props.register("pwCheck")}
                    disabled={!props.watch("pw")}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 15,
                      right: 0,
                    }}
                  >
                    <S.PcEye
                      src={
                        props.visible
                          ? "/image/visible.png"
                          : "/image/invisible.png"
                      }
                      onClick={props.onClickVisible}
                    />
                  </div>
                </S.InputBox>
                <S.Error>{props.formState.errors.pwCheck?.message}</S.Error>
                <S.Text>이름</S.Text>
                <S.Input placeholder="이름" onChange={props.onChangeName} />
                <S.PcJoinButton
                  disabled={
                    !props.formState.isValid ||
                    !props.name ||
                    props.duplicate === false
                  }
                >
                  시작하기
                </S.PcJoinButton>
              </S.PcContent>
            </form>
          </S.PcContainer>
        )}
        {props.status === true && (
          <>
            <JoinComplete />
          </>
        )}
      </PC>
    </>
  );
}
