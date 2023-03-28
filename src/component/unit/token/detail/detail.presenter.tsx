import { Button, Modal } from "antd";
import { Mobile, PC } from "../../../../commons/hooks/mediaquery";
import SendContainer from "../../send/send.container";
import SwapContainer from "../../swap/swap.container";
import ModalContainer from "../modal/modal.container";
import * as S from "./detail.styles";
import { ITokenDetailPresenter } from "./detail.types";

export default function DetailPresenter(props: ITokenDetailPresenter) {
  let arr = "0xeccfe9da751317921ef767d2a96975188bfe3d96";
  let test =
    arr.substring(0, 3) + "******" + arr.substring(arr.length - 3, arr.length);
  return (
    <>
      <Mobile>
        <S.MoWrapper data-aos="fade-right">
          {/* container */}
          <S.MoContainer>
            <S.MoContent>
              <S.PcConTop>
                <img
                  src="/image/arrowsmall.png"
                  style={{ width: "10%", cursor: "pointer" }}
                  onClick={props.onClickMoveToPage("/main")}
                />
                <div
                  style={{
                    color: "black",
                    fontSize: "2rem",
                    fontWeight: "600",
                    paddingLeft: 15,
                  }}
                >
                  attosiss
                </div>
                <div style={{ paddingLeft: 10 }}>{"/"}</div>
                <S.MoWalletAddress>ETH</S.MoWalletAddress>
              </S.PcConTop>
              <S.PcImgBox>
                <div
                  style={{
                    margin: "0 auto",
                    width: "35%",
                    borderRadius: "50px",
                    background: "white",
                  }}
                >
                  <img
                    src="/image/ethereum.png"
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
                <S.MoAmount>0 ETH</S.MoAmount>
                <S.MoMoney>$0.00 USD</S.MoMoney>
              </S.PcImgBox>
            </S.MoContent>
          </S.MoContainer>
          <S.MoContainerRight>
            <S.MoButtonBox>
              <S.MoButton onClick={props.showSend}>
                전송
                <img
                  src="/image/transfer.png"
                  style={{ width: "15%", marginLeft: 5 }}
                />
              </S.MoButton>
              <Modal
                destroyOnClose={true}
                open={props.send}
                onOk={props.sendOk}
                onCancel={props.sendCancel}
                footer={[
                  <Button
                    key="back"
                    onClick={props.sendCancel}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    취소
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={props.sendOk}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    추가
                  </Button>,
                ]}
              >
                <SendContainer />
              </Modal>
              <S.MoButton onClick={props.showSwap}>
                스왑{" "}
                <img
                  src="/image/swap.png"
                  style={{ width: "15%", marginLeft: 5 }}
                />
              </S.MoButton>
              <Modal
                destroyOnClose={true}
                open={props.swap}
                onOk={props.swapOk}
                onCancel={props.swapCancel}
                footer={[
                  <Button
                    key="back"
                    onClick={props.swapCancel}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    취소
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={props.swapOk}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    스왑
                  </Button>,
                ]}
              >
                <SwapContainer />
              </Modal>
              <S.MoButton onClick={props.showToken}>
                토큰 추가{" "}
                <img
                  src="/image/plus.png"
                  style={{ width: "15%", marginLeft: 5 }}
                />
              </S.MoButton>
              <Modal
                open={props.token}
                onOk={props.tokenOk}
                onCancel={props.tokenCancel}
                footer={[
                  <Button
                    key="back"
                    onClick={props.tokenCancel}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    취소
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={props.tokenOk}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    추가
                  </Button>,
                ]}
              >
                <ModalContainer />
              </Modal>
            </S.MoButtonBox>
            {/* 10개이상 -> 더보기 누르면 로딩 - 무한스크롤형식 */}
            <S.MoTransBox>
              <S.PcTrans onClick={props.showTrans}>
                <div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                    받기
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      paddingTop: 7,
                    }}
                  >
                    발신 : {test}{" "}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                    1.5ETH
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                      textAlign: "right",
                      color: "#00B649F9",
                    }}
                  >
                    Mar 16
                  </div>
                </div>
              </S.PcTrans>
              <S.PcTrans onClick={props.showTrans}>
                <div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                    받기
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      paddingTop: 7,
                    }}
                  >
                    발신 : {test}{" "}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                    1.5ETH
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                      textAlign: "right",
                      color: "#00B649F9",
                    }}
                  >
                    Mar 16
                  </div>
                </div>
              </S.PcTrans>
              <S.PcTrans onClick={props.showTrans}>
                <div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                    받기
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      paddingTop: 7,
                    }}
                  >
                    발신 : {test}{" "}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                    1.5ETH
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                      textAlign: "right",
                      color: "#00B649F9",
                    }}
                  >
                    Mar 16
                  </div>
                </div>
              </S.PcTrans>
              <S.PcTrans onClick={props.showTrans}>
                <div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                    받기
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      paddingTop: 7,
                    }}
                  >
                    발신 : {test}{" "}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                    1.5ETH
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                      textAlign: "right",
                      color: "#00B649F9",
                    }}
                  >
                    Mar 16
                  </div>
                </div>
              </S.PcTrans>
              <S.PcTrans onClick={props.showTrans}>
                <div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                    받기
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      paddingTop: 7,
                    }}
                  >
                    발신 : {test}{" "}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                    1.5ETH
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                      textAlign: "right",
                      color: "#00B649F9",
                    }}
                  >
                    Mar 16
                  </div>
                </div>
              </S.PcTrans>

              <Modal
                title="받기"
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
                    <S.PcConLeft>가스비</S.PcConLeft>
                  </S.PcFlex>
                  <S.PcFlex>
                    <S.PcCon>{test}</S.PcCon>
                    <S.PcCon>45.278793</S.PcCon>
                  </S.PcFlex>
                  <S.PcFlex>
                    <S.PcConLeft>받는 주소</S.PcConLeft>
                    <S.PcConLeft>지불 수수료</S.PcConLeft>
                  </S.PcFlex>
                  <S.PcFlex>
                    <S.PcCon>{test}</S.PcCon>
                    <S.PcCon>0.000025 ETH</S.PcCon>
                  </S.PcFlex>
                </div>
                <S.PcBlue>트랜잭션 ID 복사 {">"}</S.PcBlue>
                <S.PcBlue>블록탐색기에서 보기 {">"}</S.PcBlue>
                <div
                  style={{
                    textAlign: "right",
                    padding: 10,
                    fontSize: "1.5rem",
                    fontWeight: 600,
                  }}
                >
                  합계 : 0.98344473{" "}
                </div>
              </Modal>
            </S.MoTransBox>
          </S.MoContainerRight>
        </S.MoWrapper>
      </Mobile>
      <PC>
        <S.PcWrapper data-aos="fade-right">
          {/* container */}
          <S.PcContainer>
            <S.PcContent>
              <S.PcConTop>
                <img
                  src="/image/arrowsmall.png"
                  style={{ width: "10%", cursor: "pointer" }}
                  onClick={props.onClickMoveToPage("/main")}
                />
                <div
                  style={{
                    color: "black",
                    fontSize: "2.3rem",
                    fontWeight: "600",
                    paddingLeft: 15,
                  }}
                >
                  attosiss
                </div>
                <div style={{ paddingLeft: 10 }}>{"/"}</div>
                <S.PcWalletAddress>ETH</S.PcWalletAddress>
              </S.PcConTop>
              <S.PcImgBox>
                <div
                  style={{
                    margin: "0 auto",
                    width: "15%",
                    borderRadius: "50px",
                    background: "white",
                  }}
                >
                  <img
                    src="/image/ethereum.png"
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
                <S.PcAmount>0 ETH</S.PcAmount>
                <S.PcMoney>$0.00 USD</S.PcMoney>
              </S.PcImgBox>
            </S.PcContent>
          </S.PcContainer>
          <S.PcContainerRight>
            <S.PcButtonBox>
              <S.PcButton onClick={props.showSend}>
                전송
                <img
                  src="/image/transfer.png"
                  style={{ width: "15%", marginLeft: 5 }}
                />
              </S.PcButton>
              <Modal
                destroyOnClose={true}
                open={props.send}
                onOk={props.sendOk}
                onCancel={props.sendCancel}
                footer={[
                  <Button
                    key="back"
                    onClick={props.sendCancel}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    취소
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={props.sendOk}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    추가
                  </Button>,
                ]}
              >
                <SendContainer />
              </Modal>
              <S.PcButton onClick={props.showSwap}>
                스왑{" "}
                <img
                  src="/image/swap.png"
                  style={{ width: "15%", marginLeft: 5 }}
                />
              </S.PcButton>
              <Modal
                destroyOnClose={true}
                open={props.swap}
                onOk={props.swapOk}
                onCancel={props.swapCancel}
                footer={[
                  <Button
                    key="back"
                    onClick={props.swapCancel}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    취소
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={props.swapOk}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    스왑
                  </Button>,
                ]}
              >
                <SwapContainer />
              </Modal>
              <S.PcButton onClick={props.showToken}>
                토큰 추가{" "}
                <img
                  src="/image/plus.png"
                  style={{ width: "15%", marginLeft: 5 }}
                />
              </S.PcButton>
              <Modal
                open={props.token}
                onOk={props.tokenOk}
                onCancel={props.tokenCancel}
                footer={[
                  <Button
                    key="back"
                    onClick={props.tokenCancel}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    취소
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={props.tokenOk}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    추가
                  </Button>,
                ]}
              >
                <ModalContainer />
              </Modal>
            </S.PcButtonBox>
            {/* 10개이상 -> 더보기 누르면 로딩 - 무한스크롤형식 */}
            <S.PcTransBox>
              <S.PcTrans onClick={props.showTrans}>
                <div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>
                    받기
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                    }}
                  >
                    발신 : {test}{" "}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>
                    1.5ETH
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                      textAlign: "right",
                      color: "#00B649F9",
                    }}
                  >
                    Mar 16
                  </div>
                </div>
              </S.PcTrans>
              <S.PcTrans onClick={props.showTrans}>
                <div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>
                    받기
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                    }}
                  >
                    발신 : {test}{" "}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>
                    1.5ETH
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                      textAlign: "right",
                      color: "#00B649F9",
                    }}
                  >
                    Mar 16
                  </div>
                </div>
              </S.PcTrans>
              <S.PcTrans onClick={props.showTrans}>
                <div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>
                    받기
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                    }}
                  >
                    발신 : {test}{" "}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>
                    1.5ETH
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                      textAlign: "right",
                      color: "#00B649F9",
                    }}
                  >
                    Mar 16
                  </div>
                </div>
              </S.PcTrans>
              <S.PcTrans onClick={props.showTrans}>
                <div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>
                    받기
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                    }}
                  >
                    발신 : {test}{" "}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>
                    1.5ETH
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                      textAlign: "right",
                      color: "#00B649F9",
                    }}
                  >
                    Mar 16
                  </div>
                </div>
              </S.PcTrans>
              <S.PcTrans onClick={props.showTrans}>
                <div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>
                    받기
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                    }}
                  >
                    발신 : {test}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>
                    1.5ETH
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                      textAlign: "right",
                      color: "#00B649F9",
                    }}
                  >
                    Mar 16
                  </div>
                </div>
              </S.PcTrans>
              <S.PcTrans onClick={props.showTrans}>
                <div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>
                    받기
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                    }}
                  >
                    발신 : {test}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>
                    1.5ETH
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                      textAlign: "right",
                      color: "#00B649F9",
                    }}
                  >
                    Mar 16
                  </div>
                </div>
              </S.PcTrans>
              <S.PcTrans onClick={props.showTrans}>
                <div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>
                    받기
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                    }}
                  >
                    발신 : {test}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 600 }}>
                    1.5ETH
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      paddingTop: 7,
                      textAlign: "right",
                      color: "#00B649F9",
                    }}
                  >
                    Mar 16
                  </div>
                </div>
              </S.PcTrans>

              <Modal
                title="받기"
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
                    <S.PcConLeft>가스비</S.PcConLeft>
                  </S.PcFlex>
                  <S.PcFlex>
                    <S.PcCon>{test}</S.PcCon>
                    <S.PcCon>45.278793</S.PcCon>
                  </S.PcFlex>
                  <S.PcFlex>
                    <S.PcConLeft>받는 주소</S.PcConLeft>
                    <S.PcConLeft>지불 수수료</S.PcConLeft>
                  </S.PcFlex>
                  <S.PcFlex>
                    <S.PcCon>{test}</S.PcCon>
                    <S.PcCon>0.000025 ETH</S.PcCon>
                  </S.PcFlex>
                </div>
                <S.PcBlue>트랜잭션 ID 복사 {">"}</S.PcBlue>
                <S.PcBlue>블록탐색기에서 보기 {">"}</S.PcBlue>
                <div
                  style={{
                    textAlign: "right",
                    padding: 10,
                    fontSize: "1.5rem",
                    fontWeight: 600,
                  }}
                >
                  합계 : 0.98344473{" "}
                </div>
              </Modal>
            </S.PcTransBox>
          </S.PcContainerRight>
        </S.PcWrapper>
      </PC>
    </>
  );
}
