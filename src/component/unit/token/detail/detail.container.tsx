import { Modal } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMovetoPage } from "../../../../commons/hooks/movepage";
import DetailPresenter from "./detail.presenter";
import copy from "copy-to-clipboard";
import { useRecoilState } from "recoil";
import { walletIdState } from "../../../../commons/store";

export default function DetailContainer() {
  const { onClickMoveToPage } = useMovetoPage();
  // 토큰 추가 모달 state
  const [token, setToken] = useState(false);
  // 토큰 전송 모달  state
  const [send, setSend] = useState(false);
  // 스왑 모달  state
  const [swap, setSwap] = useState(false);
  // 해당 토큰 내용
  const [result, setResult] = useState<any>();
  // 로딩
  const [loading, setLoading] = useState(false);

  // 클립보드 복사
  const [isCopy, setIsCopy] = useState(false);

  //지갑 id
  const [walletId, setWalletId] = useRecoilState(walletIdState);

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

  //--------------------------------
  const router = useRouter();
  const queries = router.query; // 전달받은 쿼리 내용

  const getToken = async () => {
    setLoading(false);
    try {
      await axios
        .post("/v1/main/token-trans", {
          userTokenId: queries.tokenId,
        })
        .then((response) => {
          setTimeout(() => {
            setLoading(true);
          }, 500);
          if (response.data.status === 200) {
            setResult(response.data.result);
            setWalletId(response.data.result.walletId);
          }
          if (response.data.status === 500) {
            Modal.error({ content: "조회 실패!" });
          }
          if (response.data.status === 300) {
            Modal.error({ content: "예상치 못한 오류입니다." });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!router.isReady) return;
    getToken();
  }, [router.isReady]);

  const onClickMain = () => {
    router.push({
      pathname: "/main",
      query: {
        tokenId: queries.tokenId,
        networkName: queries.networkName,
        chainId: queries.chainId,
        walletId: result.walletId,
      },
    });
  };

  console.log(queries);
  console.log("result", result);

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
      onClickMoveToPage={onClickMoveToPage}
      result={result}
      loading={loading}
      onClickMain={onClickMain}
      handleCopyClipBoard={handleCopyClipBoard}
      isCopy={isCopy}
    />
  );
}
