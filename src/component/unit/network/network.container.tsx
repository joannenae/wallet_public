import NetworkPresenter from "./network.presenter";
import { useState } from "react";
import { useMovetoPage } from "../../../commons/hooks/movepage";

export default function NetworkContainer() {
  // 네트워크 선택 모달 state
  const [network, setNetwork] = useState(false);
  const { onClickMoveToPage } = useMovetoPage();

  // 네트워크 선택 모달 open
  const showNetwork = () => {
    setNetwork(true);
  };
  const networkOk = () => {
    setNetwork(false);
  };
  const networkCancel = () => {
    setNetwork(false);
  };

  return (
    <NetworkPresenter
      showNetwork={showNetwork}
      networkCancel={networkCancel}
      networkOk={networkOk}
      network={network}
      onClickMoveToPage={onClickMoveToPage}
    />
  );
}
