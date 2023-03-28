import TransactionPresenter from "./transaction.presenter";
import copy from "copy-to-clipboard";
import { useState } from "react";

export default function TransactionContainer() {
  // 클립보드 복사
  const [isCopy, setIsCopy] = useState(false);

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

  return (
    <TransactionPresenter
      handleCopyClipBoard={handleCopyClipBoard}
      isCopy={isCopy}
    />
  );
}
