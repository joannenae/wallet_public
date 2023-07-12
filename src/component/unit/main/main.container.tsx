import { useEffect, useState } from "react";
import { useMovetoPage } from "../../../commons/hooks/movepage";
import MainPresenter from "./main.presenter";
import copy from "copy-to-clipboard";
import axios from "axios";
import { userInfoState, walletInfoState } from "../../../commons/store";
import { useRecoilState } from "recoil";
import { Modal } from "antd";
import { useRouter } from "next/router";

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
  const [confirmLoading, setConfirmLoading] = useState(false);
  // 토큰 전송 모달 - 추가 활성화
  const [add, setAdd] = useState(false);
  //토큰 전송 balance , address
  const [adr, setAdr] = useState("");
  const [bal, setBal] = useState("");
  // 스왑 모달  state
  const [swap, setSwap] = useState(false);

  // recoil
  const [userinfo, setUserInfo] = useRecoilState(userInfoState);

  // userNm
  const [userNm, setUserNm] = useState("");

  const [walletId, setWalletId] = useState(0);
  const [address, setAddress] = useState("");

  const [balance, setBalance] = useState("");
  const [symbol, setSymbol] = useState("");
  const [tokenId, setTokenId] = useState(0);
  const [status, setStatus] = useState(false);
  //swap
  const [result, setResult] = useState({});
  const [fromId, setFromId] = useState("");
  const [toId, setToId] = useState("");
  const [value, setValue] = useState("");
  const [check, setCheck] = useState(false);
  const [swapEs, setSwapEs] = useState();
  // add token
  const [tokenResult, setTokenResult] = useState({});
  const [tokenAdd, setTokenAdd] = useState("");
  const [key, setKey] = useState("");

  // ------- transaction
  const [trans, setTrans] = useState([]);

  // 로딩
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const getUserInfo = async () => {
    setStatus(false);
    try {
      await axios({
        url: "/v1/main/wallet-main",
        method: "GET",
      }).then((response) => {
        if (response.data.status === 200) {
          const wallet = response.data.result.mainWallet;
          {
            // recoil에 저장하기 ?
            setWalletId(wallet.walletId);
            setUserNm(wallet.walletName);
            setAddress(wallet.address);
            setBalance(wallet?.userToken[0].balance);
            setSymbol(wallet?.userToken[0].tokenSym);
          }
          setUserInfo(response.data.result);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const postUserInfo = async () => {
    setStatus(true);

    try {
      await axios
        .post("/v1/main/wallet-info", {
          walletId: router.query.walletId,
        })
        .then((response) => {
          console.log("response??", response.data);

          if (response.data.status === 200) {
            const wallet = response.data.result.mainWallet;
            {
              setWalletId(wallet.walletId);
              setUserNm(wallet.walletName);
              setAddress(wallet.address);
              wallet?.userToken.map((v: any) => {
                if (v.chainId === router.query.chainId) {
                  if (v.type === "NetDefault") {
                    setSymbol(v.tokenSym);
                    setBalance(v.balance);
                    // setTokenId(v.userTokenId);
                  }
                }
              });
            }
            setUserInfo(response.data.result);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  // next 새로고침 - ssr 문제로 , 빈객체 반환이 도ㅣ면 return , 쿼리 잇으면 랜더링 하게끔
  useEffect(() => {
    if (!router.isReady) return;
    if (
      Object.keys(router.query).length === 0 ||
      (!router.query.walletId &&
        !router.query.chainId &&
        !router.query.networkName)
    ) {
      getUserInfo();
    } else if (Object.keys(router.query).length !== 0) {
      console.log("2");
      postUserInfo();
    }
  }, [router.query, router.isReady]);

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
  const sendOk = async () => {
    setConfirmLoading(true);
    try {
      await axios
        .post("/v1/balance/send", {
          chainId:
            router.query.chainId === "" ||
            Object.keys(router.query).length === 0
              ? "1"
              : router.query.chainId,
          walletId: walletId,
          toAddress: adr,
          value: bal,
        })
        .then((response) => {
          if (response.data.status === 200) {
            Modal.success({ content: "전송 성공!" });
            setConfirmLoading(false);
            setSend(false);
          }
          if (response.data.status === 500) {
            setConfirmLoading(false);
            Modal.error({ content: "DB 오류입니다." });
          }
          if (response.data.status === 501) {
            setConfirmLoading(false);
            Modal.error({ content: "통신 오류입니다." });
          }
        });
    } catch (error) {
      console.log(error);
    }
    // setSend(false);
  };
  const sendCancel = () => {
    setSend(false);
  };
  // 토큰 추가 모달---------------
  const showToken = async () => {
    setToken(true);
    try {
      await axios
        .post("/v1/token/list", {
          walletId: walletId,
          networkNm:
            Object.keys(router.query).length === 0 || !router.query.networkName
              ? "Ethereum Mainnet"
              : router.query.networkName,
        })
        .then((response) => {
          console.log("swap", response);
          if (response.data.status === 200) {
            setTokenResult(response.data.result);
            // 보유하고 있는 토큰 : tokenList
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const tokenOk = () => {
    setToken(false);
  };
  const tokenCancel = () => {
    setToken(false);
  };
  const onChangeToken = (key: string) => {
    console.log("key", key);
    setKey(key);
  };
  // 스왑 모달(버튼 클릭시 리스트 받아옴)--------------
  const showSwap = async () => {
    setSwap(true);
    try {
      await axios
        .post("/v1/token/list", {
          walletId: walletId,
          networkNm:
            Object.keys(router.query).length === 0 || !router.query.networkName
              ? "Ethereum Mainnet"
              : router.query.networkName,
        })
        .then((response) => {
          console.log("swap", response);
          if (response.data.status === 200) {
            setResult(response.data.result);
            // 보유하고 있는 토큰 : tokenList
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  // 스왑 수수료 받아오는 함수
  const swapEstimate = async () => {
    if (!fromId || !toId || !value) {
      Modal.confirm({ content: "필수항목을 선택 및 입력해주세요!" });
    } else {
      try {
        await axios
          .post("/v1/token/estimate", {
            fromTokenId: fromId,
            toTokenId: toId,
            value: value,
          })
          .then((response) => {
            console.log("estimate", response);
            if (response.data.status === 200) {
              setCheck(true);
              setSwapEs(response.data.result);
            }
            if (response.data.status !== 200) {
              Modal.error({ content: response.data.result });
              setCheck(false);
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  //스왑 하는 함수
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
  const onClickTransaction = async () => {
    setTab(true);
    setLoading(false);
    console.log("trans1");
    try {
      await axios
        .post("/v1/main/wallet-trans", {
          walletId: walletId,
          networkNm: router.query.networkName
            ? router.query.networkName
            : "Ethereum Mainnet",
        })
        .then((response) => {
          setTimeout(() => {
            setLoading(true);
          }, 500);
          console.log("바뀐거", response);
          if (response.data.status === 200) {
            const result = response.data.result;
            console.log(result);
            setTrans(result);
          }
          if (response.data.status === 500) {
            Modal.error({ content: "트랜잭션 조회 실패" });
          }
          if (response.data.status === 300) {
            Modal.error({ content: "예상치 못한 오류입니다." });
          }
        });
    } catch (error) {
      console.log(error);
    }
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
      // @ts-ignore
      userinfo={userinfo}
      userNm={userNm}
      address={address}
      balance={balance}
      symbol={symbol}
      tokenId={tokenId}
      walletId={walletId}
      trans={trans}
      loading={loading}
      setAdd={setAdd}
      add={add}
      setAdr={setAdr}
      setBal={setBal}
      adr={adr}
      bal={bal}
      setTrans={setTrans}
      confirmLoading={confirmLoading}
      // @ts-ignore
      result={result}
      // chainId={chainId}
      setFromId={setFromId}
      setToId={setToId}
      setValue={setValue}
      check={check}
      swapEstimate={swapEstimate}
      swapEs={swapEs}
      onChangeToken={onChangeToken}
      tokenResult={tokenResult}
      setTokenAdd={setTokenAdd}
      key={key}
    />
  );
}
