export interface INetworkPresenter {
  network: boolean;
  showNetwork: () => void;
  networkCancel: () => void;
  networkOk: () => void;
  onClickMoveToPage: (path: string) => () => void;
}
