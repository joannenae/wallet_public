import SendPresenter from "./send.presenter";

export default function SendContainer() {
  const onChangeToken = (value: string) => {
    console.log(`selected ${value}`);
  };

  return <SendPresenter onChangeToken={onChangeToken} />;
}
