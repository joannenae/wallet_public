import { ChangeEvent, useEffect, useState } from "react";
import SwapPresenter from "./swap.presenter";
import { ISwapContainer } from "./swap.types";

export default function SwapContainer(props: ISwapContainer) {
  const [inputValue, setInputValue] = useState({ first: "", second: "" });

  const onChangeTokenFrom = (value: any, id: string) => {
    setInputValue({ ...inputValue, [id]: value });
    props.setFromId(value?.value);
  };
  const onChangeTokenTo = (value: any, id: string) => {
    setInputValue({ ...inputValue, [id]: value });
    props.setToId(value?.value);
  };
  const onClickChange = () => {
    const tempObj = { ...inputValue };
    setInputValue({ first: tempObj.second, second: tempObj.first });
  };

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    props.setValue(event.target.value);
  };

  return (
    <SwapPresenter
      onClickChange={onClickChange}
      onChangeTokenFrom={onChangeTokenFrom}
      onChangeTokenTo={onChangeTokenTo}
      inputValue={inputValue}
      result={props.result}
      onChangeValue={onChangeValue}
      swapEs={props.swapEs}
    />
  );
}
