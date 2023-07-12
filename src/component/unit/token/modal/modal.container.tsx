import ModalPresenter from "./modal.presenter";
import { IModalContainer } from "./modal.types";

export default function ModalContainer(props: IModalContainer) {
  const onChangeTokenAdd = (value: any) => {
    props.setTokenAdd(value?.value);
  };

  return (
    <ModalPresenter
      onChangeToken={props.onChangeToken}
      // @ts-ignore
      tokenResult={props.tokenResult}
      onChnageTokenAdd={onChangeTokenAdd}
    />
  );
}
