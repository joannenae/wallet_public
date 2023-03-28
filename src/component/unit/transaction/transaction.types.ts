export interface ITransactionPresenter {
  handleCopyClipBoard: (text: string) => void;
  isCopy: boolean;
}
