import { Modal } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useMovetoPage } from "../../hooks/movepage";
import { IUserInfo, userInfoState } from "../../store";
import HeaderPresenter from "./header.presenter";

export default function HeaderContainer() {
  const router = useRouter();
  const { onClickMoveToPage } = useMovetoPage();
  const [active, setActive] = useState(false);
  const [accountActive, setAccountActive] = useState(false);
  const [userinfo, setUserinfo] = useRecoilState(userInfoState);
  const walletMain = async () => {
    try {
      await axios({
        url: "/v1/main/wallet-main",
        method: "GET",
      }).then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          setUserinfo(response.data.result);
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
  console.log("userinfo", userinfo);
  console.log("1");

  useEffect(() => {
    walletMain();
  }, []);

  const onClickActive = () => {
    setActive((prev) => !prev);
    setAccountActive(false);
  };

  const onClickAccountActive = () => {
    setAccountActive((prev) => !prev);
    setActive(false);
  };

  const onClickNetWork = () => {
    if (router.asPath === "/network/") {
      setActive(false);
    }
  };

  const onClickLogOut = async () => {
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
    />
  );
}
