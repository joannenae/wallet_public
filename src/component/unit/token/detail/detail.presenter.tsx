import { Button, Divider, Modal, Spin } from "antd";
import { useEffect, useState } from "react";
import { Mobile, PC } from "../../../../commons/hooks/mediaquery";
import SendContainer from "../../send/send.container";
import SwapContainer from "../../swap/swap.container";
import ModalContainer from "../modal/modal.container";
import * as S from "./detail.styles";
import { ITokenDetailPresenter } from "./detail.types";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import DetailPresenterItem from "./detail.presenteritem";
import { v4 as uuidv4 } from "uuid";

export default function DetailPresenter(props: ITokenDetailPresenter) {
  // 해당 토큰의 거래내역에 있는 지갑 주소를 넣어야함
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
        <S.MoWrapper data-aos="fade-right">
          {/* container */}
          <S.MoContainer>
            <S.MoContent>
              <S.PcConTop>
                <img
                  src="/image/arrowsmall.png"
                  style={{ width: "5%", cursor: "pointer" }}
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
                  {props.result?.walletName}
                </div>
                <div style={{ paddingLeft: 10 }}>{"/"}</div>
                <S.MoWalletAddress>
                  {" "}
                  {props?.result?.tokenInfo?.tokens?.tokenSym}
                </S.MoWalletAddress>
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
                <S.MoAmount>{props?.result?.tokenInfo?.balance}</S.MoAmount>
                <S.MoMoney>
                  {props?.result?.tokenInfo?.tokens?.tokenSym}
                </S.MoMoney>
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
                {/* @ts-ignore */}
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
            <Divider />
            {props.loading === false ? (
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "40%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                <Spin tip="로딩 중 ..." size="large" />
              </div>
            ) : props?.result?.trans?.length === 0 ? (
              <div
                style={{
                  borderLeft: "1px solid gainsboro",
                  width: "80%",
                  height: "100%",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "1.4rem",
                    position: "absolute",
                    left: "60%",
                    top: "40%",
                    transform: "translate(-50%,-50%)",
                    color: "gray",
                  }}
                >
                  거래 내역이 없습니다.
                </div>
              </div>
            ) : (
              <S.PcTransBox>
                {props.result?.trans?.map((el: any) => {
                  return (
                    <>
                      <DetailPresenterItem
                        key={uuidv4()}
                        el={el}
                        handleCopyClipBoard={props.handleCopyClipBoard}
                        showTrans={function (): void {
                          throw new Error("Function not implemented.");
                        }}
                        transOk={function (): void {
                          throw new Error("Function not implemented.");
                        }}
                        transCancel={function (): void {
                          throw new Error("Function not implemented.");
                        }}
                        trans={false}
                        isCopy={false}
                      />
                    </>
                  );
                })}
              </S.PcTransBox>
            )}
          </S.MoContainerRight>
        </S.MoWrapper>
      </Mobile>
      <PC>
        <S.PcWrapper data-aos="fade-right">
          {/* container */}
          <S.PcContainer>
            <div style={{ margin: 35 }}>
              <img
                src="/image/arrowsmall.png"
                style={{ width: "8%", cursor: "pointer" }}
                onClick={props.onClickMain}
              />
            </div>
            <S.PcContent>
              {" "}
              <S.PcConTop>
                <div
                  style={{
                    color: "black",
                    fontSize: "2.3rem",
                    fontWeight: "600",
                    paddingLeft: 15,
                  }}
                >
                  {props.result?.walletName}
                </div>
                <div style={{ paddingLeft: 10 }}>{"/"}</div>
                <S.PcWalletAddress>
                  {props?.result?.tokenInfo?.tokens?.tokenSym}
                </S.PcWalletAddress>
              </S.PcConTop>
              <S.PcImgBox>
                <div
                  style={{
                    margin: "0 auto",
                    width: "40%",
                    borderRadius: "50px",
                    background: "white",
                    paddingBottom: 15,
                  }}
                >
                  <img
                    src="/image/ethereum.png"
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
                <S.PcMoney>{props?.result?.tokenInfo?.balance} </S.PcMoney>
                <S.PcMoney>
                  {props?.result?.tokenInfo?.tokens?.tokenSym}{" "}
                </S.PcMoney>
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
                {/* @ts-ignore */}
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
            {props.loading === false ? (
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "40%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                <Spin tip="로딩 중 ..." size="large" />
              </div>
            ) : props?.result?.trans?.length === 0 ? (
              <div
                style={{
                  borderLeft: "1px solid gainsboro",
                  width: "80%",
                  height: "100%",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "1.6rem",
                    position: "absolute",
                    left: "60%",
                    top: "40%",
                    transform: "translate(-50%,-50%)",
                    color: "gray",
                  }}
                >
                  거래 내역이 없습니다.
                </div>
              </div>
            ) : (
              <S.PcTransBox>
                {props.result?.trans?.map((el: any) => {
                  return (
                    <>
                      <DetailPresenterItem
                        key={uuidv4()}
                        el={el}
                        handleCopyClipBoard={props.handleCopyClipBoard}
                        showTrans={function (): void {
                          throw new Error("Function not implemented.");
                        }}
                        transOk={function (): void {
                          throw new Error("Function not implemented.");
                        }}
                        transCancel={function (): void {
                          throw new Error("Function not implemented.");
                        }}
                        trans={false}
                        isCopy={false}
                      />
                    </>
                  );
                })}
              </S.PcTransBox>
            )}
          </S.PcContainerRight>
        </S.PcWrapper>
      </PC>
    </>
  );
}
