export interface ISwapPresenter {
  onChangeToken: (value: string) => void;
  onChangeTest: (value: string) => void;
  onClickChange: () => void;
  jest: string;
  test: string;
  status: boolean;
}
