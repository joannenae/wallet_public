import { useState } from "react";
import { useMovetoPage } from "../../../commons/hooks/movepage";
import MainPresenter from "./main.presenter";
import copy from "copy-to-clipboard";

export default function MainContainer() {
  const { onClickMoveToPage } = useMovetoPage();
  // // 클립보드 복사
  const [isCopy, setIsCopy] = useState(false);
  // tab
  const [tab, setTab] = useState(false);
  // 계정 정보 모달 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 토큰 추가 모달 state
  const [token, setToken] = useState(false);
  // 토큰 전송 모달  state
  const [send, setSend] = useState(false);
  // 스왑 모달  state
  const [swap, setSwap] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    // setChange(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    // setChange(false);
  };
  // 전송 모달
  const showSend = () => {
    setSend(true);
  };
  const sendOk = () => {
    setSend(false);
  };
  const sendCancel = () => {
    setSend(false);
  };
  // 토큰 추가 모달
  const showToken = () => {
    setToken(true);
  };
  const tokenOk = () => {
    setToken(false);
  };
  const tokenCancel = () => {
    setToken(false);
  };
  // 스왑 모달
  const showSwap = () => {
    setSwap(true);
  };
  const swapOk = () => {
    setSwap(false);
  };
  const swapCancel = () => {
    setSwap(false);
  };
  // 복사
  const handleCopyClipBoard = (text: string) => {
    copy(text);
    setTimeout(() => {
      setIsCopy(true);
    }, 500);
  };

  setTimeout(() => {
    setIsCopy(false);
  }, 3500);

  // -------토큰 , 트랜잭션 tab-------------------

  const onClickTokenList = () => {
    setTab(false);
  };
  const onClickTransaction = () => {
    setTab(true);
  };

  return (
    <MainPresenter
      onClickMoveToPage={onClickMoveToPage}
      handleCopyClipBoard={handleCopyClipBoard}
      isCopy={isCopy}
      onClickTokenList={onClickTokenList}
      onClickTransaction={onClickTransaction}
      tab={tab}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isModalOpen={isModalOpen}
      showToken={showToken}
      tokenCancel={tokenCancel}
      tokenOk={tokenOk}
      token={token}
      showSend={showSend}
      sendOk={sendOk}
      sendCancel={sendCancel}
      send={send}
      showSwap={showSwap}
      swapOk={swapOk}
      swapCancel={swapCancel}
      swap={swap}
    />
  );
}
