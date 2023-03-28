import { useState } from "react";
import { useMovetoPage } from "../../../../commons/hooks/movepage";
import DetailPresenter from "./detail.presenter";

export default function DetailContainer() {
  const { onClickMoveToPage } = useMovetoPage();
  // 토큰 추가 모달 state
  const [token, setToken] = useState(false);
  // 토큰 전송 모달  state
  const [send, setSend] = useState(false);
  // 스왑 모달  state
  const [swap, setSwap] = useState(false);
  // 토큰 거래 내역 모달 state
  const [trans, setTrans] = useState(false);

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
  // 토큰 거래 내역 모달
  const showTrans = () => {
    setTrans(true);
  };
  const transOk = () => {
    setTrans(false);
  };
  const transCancel = () => {
    setTrans(false);
  };

  return (
    <DetailPresenter
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
      showTrans={showTrans}
      transOk={transOk}
      transCancel={transCancel}
      trans={trans}
      onClickMoveToPage={onClickMoveToPage}
    />
  );
}
