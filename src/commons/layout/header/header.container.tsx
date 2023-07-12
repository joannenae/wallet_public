import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useMovetoPage } from "../../hooks/movepage";
import { explorerState, userChainIdState, walletIdState } from "../../store";
import HeaderPresenter from "./header.presenter";

export default function HeaderContainer() {
  const router = useRouter();
  const queries = router.query;
  const { onClickMoveToPage } = useMovetoPage();
  const [active, setActive] = useState(false);
  const [accountActive, setAccountActive] = useState(false);
  const [userinfo, setUserinfo] = useState<any>();
  const [chainId, setChainId] = useState("");
  const [status, setStatus] = useState(false);
  const [recoilChainId, setRecoilChainId] = useRecoilState(userChainIdState);
  const [explorer, setExplorer] = useRecoilState(explorerState);

  const [test, setTest] = useState("");

  const [token, setToken] = useState("");

  const walletMain = async () => {
    try {
      await axios({
        url: "/v1/main/wallet-main",
        method: "GET",
      }).then((response) => {
        if (response.data.status === 200) {
          console.log(response.data.result);
          setUserinfo(response.data.result);
          setTest(response.data.result.mainWallet.walletId);

          // console.log(response.data.result.userNet[0]);
        }
        if (response.data.status === 301) {
          Modal.error({
            content: "세션이 만료되었습니다.다시 로그인해주세요.",
          });
          router.push(`/`);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    walletMain();
    setStatus(false);
  }, []);

  const onClickActive = () => {
    setActive((prev) => !prev);
    setAccountActive(false);
  };

  const onClickAccountActive = () => {
    setAccountActive((prev) => !prev);
    setActive(false);

    userinfo?.wallets?.map((el: any) => {
      el.userToken?.map((v: any) => {
        // console.log("vvvvvv", v.tokens);
        if (router.query.chainId === v.chainId) {
          // if (v.type === "NetDefault") {
          setToken(v.tokenSym);
          // }
        }
      });
    });
  };

  //  네트워크 페이지 이동시 chainId , networkName 전송 : 네트워크 추가시 필요함(라우터에 정보 없을시 default 보냄)
  const onClickNetWork = () => {
    router.push({
      pathname: "/network/",
      query: {
        chainId:
          Object.keys(router.query).length === 0 ? "1" : router.query.chainId,
        networkName:
          Object.keys(router.query).length === 0 || !router.query.networkName
            ? userinfo?.userNet[0]?.networkName
            : router.query.networkName,
        walletId: test,
      },
    });
    if (router.asPath === "/network/") {
      setActive(false);
    }
  };

  const onClickLogOut = () => {
    Modal.confirm({
      content: "로그아웃 할까요?",
      icon: <ExclamationCircleFilled />,
      okText: "확인",
      cancelText: "취소",
      async onOk() {
        try {
          await axios({
            url: "/v1/account/logout",
            method: "GET",
          }).then((response) => {
            if (response.data.status === 200) {
              Modal.success({ content: "로그아웃 되었습니다." });
              router.push(`/`);
            }
          });
        } catch (error) {
          console.log(error);
        }
      },
    });
  };

  // 네트워크 선택
  const onClickNetList = (
    chainId: string,
    network: string,
    explorer: string
  ) => {
    console.log(network);
    console.log(chainId);
    setActive(false);
    setStatus(true);
    setChainId(chainId);
    setRecoilChainId(chainId);
    setExplorer(explorer);
    // setNetworkName(network);
    router.push({
      pathname: "/main",
      query: {
        networkName: network,
        chainId: chainId,
        walletId: router.query.walletId ?? test,
      },
    });
  };

  // 토큰 상세 페이지에서 저장한 walletId recoil에 저장 후 페이지 이동시 데이터 전달하기
  const walletId = useRecoilValue(walletIdState);

  const onClickMain = () => {
    router.push({
      pathname: "/main",
      query: {
        tokenId: queries.tokenId,
        networkName: queries.networkName,
        chainId: queries.chainId,
        walletId: router.query.walletId ? router.query.walletId : walletId,
      },
    });
  };

  return (
    <HeaderPresenter
      onClickActive={onClickActive}
      active={active}
      onClickAccountActive={onClickAccountActive}
      setAccountActive={setAccountActive}
      accountActive={accountActive}
      onClickMoveToPage={onClickMoveToPage}
      onClickNetWork={onClickNetWork}
      userinfo={userinfo}
      onClickLogOut={onClickLogOut}
      onClickNetList={onClickNetList}
      walletMain={walletMain}
      chainId={chainId}
      status={status}
      token={token}
      onClickMain={onClickMain}
    />
  );
}
