import { useState } from "react";
import SwapPresenter from "./swap.presenter";

export default function SwapContainer() {
  const [status, setStatus] = useState(false);
  const [jest, setJest] = useState("");
  const [test, setTest] = useState("");

  const onChangeToken = (value: string) => {
    console.log(`selected ${value}`);
    console.log(value);
    setJest("ETH1");
    if (status === false) {
      setJest(test);
    }
  };
  const onChangeTest = (value: string) => {
    console.log(`selected ${value}`);

    setTest("ETH2");
    if (status === false) {
      setTest(jest);
    }
  };

  const onClickChange = () => {
    setStatus((prev) => !prev);
  };

  return (
    <SwapPresenter
      onChangeToken={onChangeToken}
      onClickChange={onClickChange}
      status={status}
      onChangeTest={onChangeTest}
      jest={jest}
      test={test}
    />
  );
}
