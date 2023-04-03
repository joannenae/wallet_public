import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import * as S from "./main.styles";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Button, Divider, Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import TransactionContainer from "../transaction/transaction.container";
import TokenContainer from "../token/token.container";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ModalContainer from "../token/modal/modal.container";
import SendContainer from "../send/send.container";
import SwapContainer from "../swap/swap.container";
import DetailContainer from "./detail/detail.container";
import { IMainPresenter } from "./main.types";

export default function MainPresenter(props: IMainPresenter) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  let arr: string = props.address;
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
        <S.MoWrapper data-aos="fade-right">
          <S.MoContainer>
            <S.MoConTop>
              <LightTooltip title="계정 정보">
                <Button
                  type="link"
                  onClick={props.showModal}
                  style={{
                    color: "black",
                    fontSize: "2.3rem",
                    height: "45px",
                    paddingTop: 0,
                    fontWeight: "bold",
                  }}
                >
                  attosiss {">"}
                </Button>
              </LightTooltip>
              <Modal
                title="계정 세부 정보"
                destroyOnClose={true}
                open={props.isModalOpen}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
                closeIcon={<CloseOutlined style={{ fontSize: "2.8rem" }} />}
                footer={[
                  <Button
                    key="back"
                    onClick={props.handleCancel}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    취소
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={props.handleOk}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    확인
                  </Button>,
                ]}
              >
                <DetailContainer
                  userNm={props.userNm}
                  address={props.address}
                />
              </Modal>
              <LightTooltip title={props.isCopy ? "Success!" : "Paste!"}>
                <S.MoWalletAddress
                  onClick={() => props.handleCopyClipBoard(arr)}
                >
                  {test}
                  <img src="/image/clipboard.png" style={{ width: "7%" }} />
                </S.MoWalletAddress>
              </LightTooltip>
            </S.MoConTop>
            <S.PcContent>
              <S.MoImgBox>
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
              </S.MoImgBox>
            </S.PcContent>
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
            <S.MoTabBox>
              <S.MoTabTitle onClick={props.onClickTokenList} tab={props.tab}>
                토큰목록
              </S.MoTabTitle>
              <S.MoTabTrans onClick={props.onClickTransaction} tab={props.tab}>
                트랜잭션 내역
              </S.MoTabTrans>
            </S.MoTabBox>
            {props.tab ? (
              <div
                style={{
                  height: "300px",
                  overflowY: "scroll",
                  paddingBottom: "3%",
                }}
              >
                <TransactionContainer />
              </div>
            ) : (
              <div
                style={{
                  height: "300px",
                  overflowY: "scroll",
                  paddingBottom: "3%",
                }}
              >
                <TokenContainer
                  balance={props.balance}
                  symbol={props.symbol}
                  tokenId={props.tokenId}
                />
              </div>
            )}
          </S.MoContainer>
        </S.MoWrapper>
      </Mobile>
      {/* pc */}
      <PC>
        <S.PcWrapper data-aos="fade-right">
          {/* container */}
          <S.PcContainer>
            <S.PcConTop>
              <LightTooltip title="계정 정보">
                <Button
                  type="link"
                  onClick={props.showModal}
                  style={{
                    color: "black",
                    fontSize: "3.5rem",
                    height: "45px",
                    paddingTop: 0,
                    fontWeight: "600",
                  }}
                >
                  {props.userNm}
                  {" >"}
                </Button>
              </LightTooltip>
              <Modal
                title="계정 세부 정보"
                destroyOnClose={true}
                open={props.isModalOpen}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
                closeIcon={<CloseOutlined style={{ fontSize: "3.5rem" }} />}
                footer={[
                  <Button
                    key="back"
                    onClick={props.handleCancel}
                    style={{ fontSize: 20, paddingTop: 0, height: 40 }}
                  >
                    취소
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={props.handleOk}
                    style={{ fontSize: 20, paddingTop: 0, height: 40 }}
                  >
                    확인
                  </Button>,
                ]}
              >
                <DetailContainer
                  userNm={props.userNm}
                  address={props.address}
                />
              </Modal>

              <Divider
                type="vertical"
                style={{
                  backgroundColor: "lightgray",
                  marginLeft: "30px",
                }}
              />
              <LightTooltip title={props.isCopy ? "Success!" : "Paste!"}>
                <S.PcWalletAddress
                  onClick={() => props.handleCopyClipBoard(arr)}
                >
                  {test}
                  <img src="/image/clipboard.png" style={{ width: "16%" }} />
                </S.PcWalletAddress>
              </LightTooltip>
            </S.PcConTop>
            <S.PcContent>
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
                <S.PcAmount>
                  {props.balance}
                  {props.symbol}
                </S.PcAmount>
              </S.PcImgBox>
            </S.PcContent>
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
            <S.PcTabBox>
              <S.PcTabTitle onClick={props.onClickTokenList} tab={props.tab}>
                토큰목록
              </S.PcTabTitle>
              <S.PcTabTrans onClick={props.onClickTransaction} tab={props.tab}>
                트랜잭션 내역
              </S.PcTabTrans>
            </S.PcTabBox>
            {props.tab ? (
              <div
                style={{
                  overflowY: "scroll",
                  paddingBottom: "3%",
                }}
              >
                <TransactionContainer />
              </div>
            ) : (
              <div
                style={{
                  height: "250px",
                  overflowY: "scroll",
                  paddingBottom: "3%",
                }}
              >
                <TokenContainer
                  balance={props.balance}
                  symbol={props.symbol}
                  tokenId={props.tokenId}
                />
              </div>
            )}
          </S.PcContainer>
        </S.PcWrapper>
      </PC>
    </>
  );
}
