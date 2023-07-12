import { Mobile, PC } from "../../../../commons/hooks/mediaquery";
import * as S from "./createwallet.styles";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Button, Steps } from "antd";
import { v4 as uuidv4 } from "uuid";
import { ICreatePresenter } from "./createwallet.types";
import { useState } from "react";

export default function CreateWalletPresenter(props: ICreatePresenter) {
  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    // <Tooltip {...props} classes={{ popper: className }} />
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
        <S.MoWrapper>
          <S.MoHeader>
            <div style={{ display: "flex" }}>
              <LightTooltip title="돌아가기">
                <S.MoBack
                  src="/image/arrowback.png"
                  onClick={props.onClickMoveToPage("/complete")}
                />
              </LightTooltip>
              <S.MoLogo>DreamWallet</S.MoLogo>
            </div>
            {props.current === 0 && <S.MoText>비밀 복구 구문</S.MoText>}
            {props.current === 1 && <S.MoText>비밀 백업 구문 확인</S.MoText>}
            {props.current === 2 && <S.MoText>지갑 생성 완료 !</S.MoText>}
          </S.MoHeader>
          <S.MoContent>
            <>
              {props.current === 0 && (
                <S.MoPwBox>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "1.3rem",
                      lineHeight: 1.5,
                      fontWeight: 600,
                    }}
                  >
                    비밀 백업 구문으로 계정을 백업하고 복구할 수 있습니다.{" "}
                    <br />
                    *백업구문은 본인 외 절대 공개하지 마세요!
                  </div>
                  {/*   배열로 바꾼 뒤 map 돌려서 해당 index로 들어가게끔 */}
                  <S.MoPwCenter>
                    {props.blur === true ? (
                      props.mnemonic?.map((el, i) => {
                        return (
                          <S.MoPwItem key={uuidv4()}>
                            {i + 1}.{el}
                          </S.MoPwItem>
                        );
                      })
                    ) : (
                      <>
                        <S.MoPwItem> 1.east</S.MoPwItem>
                        <S.MoPwItem> 2.east</S.MoPwItem>
                        <S.MoPwItem> 3.east</S.MoPwItem>
                        <S.MoPwItem> 4.east</S.MoPwItem>
                        <S.MoPwItem> 5.east</S.MoPwItem>
                        <S.MoPwItem> 6.east</S.MoPwItem>
                        <S.MoPwItem> 7.east</S.MoPwItem>
                        <S.MoPwItem> 8.east</S.MoPwItem>
                        <S.MoPwItem> 9.east</S.MoPwItem>
                        <S.MoPwItem> 10.east</S.MoPwItem>
                        <S.MoPwItem> 11.east</S.MoPwItem>
                        <S.MoPwItem> 12.east</S.MoPwItem>
                      </>
                    )}
                  </S.MoPwCenter>
                  {/* 블러 처리 */}
                  {props.blur === false && (
                    <S.MoBlur onClick={props.onClickMnemonic}>
                      <S.MoLock src="/image/lock.png" />
                      <S.MoMessage>
                        암호를 확인하려면 여기를 클릭하세요.
                      </S.MoMessage>
                    </S.MoBlur>
                  )}
                </S.MoPwBox>
              )}
              {props.current === 1 && (
                <>
                  <S.MoPwBox>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "1.3rem",
                        fontWeight: 600,
                      }}
                    >
                      구문을 적어 올바른지 확인해주세요.
                    </div>
                    <S.MoCheckBox>
                      {props.array.map((el, i) => {
                        return (
                          <S.MoCheckDiv key={i}>
                            <div
                              style={{
                                fontSize: "1.5rem",
                                width: "5%",
                              }}
                            >
                              {el}
                            </div>
                            <S.MoCheckInput
                              type="text"
                              onChange={(e) => {
                                props.onChangeMnemonic(e, i);
                              }}
                              value={props?.hash?.[i]}
                            />
                          </S.MoCheckDiv>
                        );
                      })}
                    </S.MoCheckBox>
                  </S.MoPwBox>
                </>
              )}
              {props.current === 2 && (
                <S.MoPwBox>
                  <S.MoPwHeader>
                    {" "}
                    환영합니다! 시드 구문을 안전하게 보관할 책임은 귀하에게
                    있으니 주의하세요:)
                  </S.MoPwHeader>
                  <S.MoPwWelcome>
                    * 비밀 구문을 누구와도 공유하지 마세요. <br />* 해킹을
                    조심하세요. 직접 종이에 메모하는 것을 추천합니다. <br />
                  </S.MoPwWelcome>
                  <S.MoHeart src="/image/heart.png" />
                </S.MoPwBox>
              )}
              <div
                style={{
                  paddingTop: 110,
                  textAlign: "center",
                }}
              >
                {props.current > 0 && (
                  <Button
                    style={{
                      margin: "0 8px",
                    }}
                    onClick={() => props.prev()}
                    disabled={props.success === true}
                  >
                    이 전
                  </Button>
                )}
                {props.current === props.steps.length - 1 && (
                  <Button
                    type="primary"
                    onClick={props.onClickMoveToPage("/main")}
                  >
                    완 료
                  </Button>
                )}
                {props.current < props.steps.length - 1 &&
                  (props.current === 1 && props.success === false ? (
                    <>
                      <Button
                        type="primary"
                        onClick={() => {
                          props.success === false
                            ? props.onClickCreate()
                            : props.next();
                        }}
                        disabled={props?.hash?.length !== 12}
                      >
                        확인
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        type="primary"
                        onClick={() => {
                          props.next();
                        }}
                        disabled={props.blur === false}
                      >
                        다 음
                      </Button>
                    </>
                  ))}
              </div>
            </>
          </S.MoContent>
        </S.MoWrapper>
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
            {props.current === 0 && <S.PcText>비밀 복구 구문</S.PcText>}
            {props.current === 1 && <S.PcText>비밀 백업 구문 확인</S.PcText>}
            {props.current === 2 && <S.PcText>지갑 생성 완료 !</S.PcText>}
          </S.PcHeader>
          <S.PcContent>
            <>
              <Steps
                current={props.current}
                items={props.items}
                style={{ fontSize: 50 }}
              />
              {props.current === 0 && (
                <S.PcPwBox>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "1.6rem",
                      paddingTop: 20,
                      lineHeight: 1.5,
                      fontWeight: 600,
                    }}
                  >
                    비밀 백업 구문으로 계정을 백업하고 복구할 수 있습니다.{" "}
                    <br />
                    *백업구문은 본인 외 절대 공개하지 마세요!
                  </div>
                  <S.PcPwCenter>
                    {props.blur === true ? (
                      props.mnemonic?.map((el, i) => {
                        return (
                          <S.PcPwItem key={uuidv4()}>
                            {i + 1}.{el}
                          </S.PcPwItem>
                        );
                      })
                    ) : (
                      <>
                        <S.PcPwItem> 1.east</S.PcPwItem>
                        <S.PcPwItem> 2.east</S.PcPwItem>
                        <S.PcPwItem> 3.east</S.PcPwItem>
                        <S.PcPwItem> 4.east</S.PcPwItem>
                        <S.PcPwItem> 5.east</S.PcPwItem>
                        <S.PcPwItem> 6.east</S.PcPwItem>
                        <S.PcPwItem> 7.east</S.PcPwItem>
                        <S.PcPwItem> 8.east</S.PcPwItem>
                        <S.PcPwItem> 9.east</S.PcPwItem>
                        <S.PcPwItem> 10.east</S.PcPwItem>
                        <S.PcPwItem> 11.east</S.PcPwItem>
                        <S.PcPwItem> 12.east</S.PcPwItem>
                      </>
                    )}
                  </S.PcPwCenter>
                  {/* 블러 처리 */}
                  {props.blur === false && (
                    <S.PcBlur onClick={props.onClickMnemonic}>
                      <S.PcLock src="/image/lock.png" />
                      <S.PcMessage>
                        암호를 확인하려면 여기를 클릭하세요.
                      </S.PcMessage>
                    </S.PcBlur>
                  )}
                </S.PcPwBox>
              )}
              {props.current === 1 && (
                <>
                  <S.PcPwBox>
                    <div
                      style={{
                        textAlign: "center",
                        paddingTop: 30,
                        fontSize: "1.5rem",
                        fontWeight: 600,
                      }}
                    >
                      구문을 적어 올바른지 확인해주세요.
                    </div>
                    <S.PcCheckBox>
                      {props.array.map((el, i) => {
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
                              onChange={(e) => {
                                props.onChangeMnemonic(e, i);
                              }}
                              value={props?.hash?.[i]}
                            />
                          </S.PcCheckDiv>
                        );
                      })}
                    </S.PcCheckBox>
                  </S.PcPwBox>
                </>
              )}
              {props.current === 2 && (
                <S.PcPwBox>
                  <S.PcPwHeader>
                    {" "}
                    환영합니다! 시드 구문을 안전하게 보관할 책임은 귀하에게
                    있으니 주의하세요:)
                  </S.PcPwHeader>
                  <S.PcPwWelcome>
                    * 비밀 구문을 누구와도 공유하지 마세요. <br />* 해킹을
                    조심하세요. 직접 종이에 메모하는 것을 추천합니다. <br />
                  </S.PcPwWelcome>
                  <S.PcHeart src="/image/bigheart.png" />
                </S.PcPwBox>
              )}
              <div
                style={{
                  marginTop: 30,
                  textAlign: "center",
                }}
              >
                {props.current > 0 && (
                  <Button
                    style={{
                      margin: "0 8px",
                    }}
                    onClick={() => props.prev()}
                    disabled={props.success === true}
                  >
                    이 전
                  </Button>
                )}
                {props.current === props.steps.length - 1 && (
                  <Button
                    type="primary"
                    onClick={props.onClickMoveToPage("/main")}
                  >
                    완 료
                  </Button>
                )}
                {props.current < props.steps.length - 1 &&
                  (props.current === 1 && props.success === false ? (
                    <>
                      <Button
                        type="primary"
                        onClick={() => {
                          props.success === false
                            ? props.onClickCreate()
                            : props.next();
                        }}
                        disabled={props?.hash?.length !== 12}
                      >
                        확인
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        type="primary"
                        onClick={() => {
                          props.next();
                        }}
                        disabled={props.blur === false}
                      >
                        다 음
                      </Button>
                    </>
                  ))}
              </div>
            </>
          </S.PcContent>
        </S.PcWrapper>
      </PC>
    </>
  );
}
