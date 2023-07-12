import { ChangeEvent } from "react";
export interface INetworkPresenter {
  network: boolean;
  showNetwork: () => void;
  networkCancel: () => void;
  networkOk: () => void;
  onClickMoveToPage: (path: string) => () => void;
  dummyList: {
    id: number;
    name: string;
    url: string;
    src: string;
  }[];
  onClickNetwork: (url: string) => void;
  isModalOpen: boolean;

  handleOk: () => void;
  handleCancel: () => void;
  netData: {
    networkName: string;
    networkType: string;
    chainId: string;
    rpcUrl: string;
    explorer: string;
  };

  onChangeRPC: (event: ChangeEvent<HTMLInputElement>) => void;
  error: string;
  value: string;
  data: {
    networkName?: string;
    chainId?: string;
    explorer?: string;
    Symbol?: string;
  };
}
