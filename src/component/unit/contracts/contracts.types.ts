import { RadioChangeEvent } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { ChangeEvent } from "react";

export interface IContractPresenter {
  erc20: string[];
  erc1155: string[];
  erc721: string[];
  value: number;
  ownable: number;
  access: boolean;
  status: boolean;
  name: string;
  symbol: string;
  uri: string;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  onChangeAccess: (e: CheckboxChangeEvent) => void;
  onChangeOwnable: (e: RadioChangeEvent) => void;

  onChangeUpgrade: (e: CheckboxChangeEvent) => void;
  onChangeTransparent: (e: RadioChangeEvent) => void;
  upgrade: boolean;
  transparent: number;

  onChangeFeature: (checkedValue: CheckboxValueType[]) => void;
  // erc20
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSymbol: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeUri: (event: ChangeEvent<HTMLInputElement>) => void;
  // info
  onChangeLicense: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContract: (event: ChangeEvent<HTMLInputElement>) => void;
  //wizard
  onClickWizard: () => void;
  data: string;
  // compile
  onClickCompile: () => void;
  result: any;
  //loading
  loading: boolean;
  // deploy modal
  handleCancel: () => void;
  handleOk: () => void;
  onClickList: () => void;
  open: boolean;
  network: any;
  wallet: any;
  // network: [
  //   {
  //     networkName: string;
  //   }
  // ];
  // wallet: [
  //   {
  //     address: string;
  //     walletName: string;
  //   }
  // ];
  onChangeNetwork: (value: string) => void;
  onChangeWallet: (value: string) => void;
  onClickFeeCheck: () => void;
  check: boolean;
  onClickOnlyKlay: () => void;
  only: boolean;
  onChangeOnlyKlay: (event: ChangeEvent<HTMLInputElement>) => void;
  depFee?: {
    gasPrice: string;
    estimatedGas: string;
    txFee: string;
  };
  success: boolean;
  successCancel: () => void;
  successOk: () => void;
}
