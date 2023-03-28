import { useRouter } from "next/router";
import { useState } from "react";
import { useMovetoPage } from "../../hooks/movepage";
import HeaderPresenter from "./header.presenter";

export default function HeaderContainer() {
  const router = useRouter();
  const { onClickMoveToPage } = useMovetoPage();
  const [active, setActive] = useState(false);
  const [accountActive, setAccountActive] = useState(false);

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

  return (
    <HeaderPresenter
      onClickActive={onClickActive}
      active={active}
      onClickAccountActive={onClickAccountActive}
      setAccountActive={setAccountActive}
      accountActive={accountActive}
      onClickMoveToPage={onClickMoveToPage}
      onClickNetWork={onClickNetWork}
    />
  );
}
