import { useState } from "react";

function useCopyClipBoard() {
  const [isCopy, setIsCopy] = useState(false);

  const onCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(true);

      return true;
    } catch (error) {
      console.error(error);
      setIsCopy(false);

      return false;
    }
  };

  return [isCopy, onCopy, setIsCopy];
}

export default useCopyClipBoard;
