import { Modal } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useMovetoPage } from "../../../../commons/hooks/movepage";
import CreateWalletPresenter from "./createwallet.presenter";

const steps = [
  {
    title: "First",
  },
  {
    title: "Second",
  },
  {
    title: "Last",
  },
];

export default function CreateWalletContainer() {
  const [current, setCurrent] = useState(0);
  const [blur, setBlur] = useState(false);
  const [mnemonic, setMnemonic] = useState([] as any);
  const [hash, setHash] = useState<any | null>(null);
  const [success, setSuccess] = useState(false);
  const { onClickMoveToPage } = useMovetoPage();
  const router = useRouter();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  // 비밀 구문 생성
  const onClickMnemonic = async () => {
    setBlur(true);
    try {
      await axios({
        method: "GET",
        url: "/v1/wallet/create-mnemonic",
      }).then((response) => {
        console.log("mnemonic", response);
        if (response.data.status === 200) {
          const result = response.data.result;
          // 니모닉 문자열 - 배열로 변환
          const arr = result.split(" ");
          setMnemonic(arr);
        }
        if (response.data.status === 300) {
          Modal.error({ content: "비밀 복구 구문 생성 오류" });
        }
        if (response.data.status === 301) {
          Modal.error({
            content: "세션이 만료되었습니다.다시 로그인해주세요.",
          });
          router.push(`/`);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 비밀 복구 확인
  const onChangeMnemonic = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      let value = event.target.value;
      const arr = [];
      arr.push(value);
      let arr2: string[] = [];
      const word = value.split(" ");
      word.map((el) => {
        let first = el.split(".")[1];
        arr2.push(first);
      });
      const filtered = arr2.filter((arr2) => arr2 !== undefined);
      setHash(filtered);
    }
  };

  const onClickCreate = async () => {
    try {
      await axios
        .post("/v1/wallet/init-wallet", { mnemonic: hash?.toString() })
        .then((response) => {
          console.log(response);
          if (response.data.status === 200) {
            setSuccess(true);
            Modal.success({ content: "지갑이 생성되었습니다." });
          }
          if (response.data.result === "DB 오류TOKEN") {
            Modal.error({ content: "지갑 생성에 실패하였습니다." });
          }
          if (response.data.result === "DB 오류") {
            Modal.error({ content: "지갑 정보 저장 오류" });
          }
          if (response.data.status === 300) {
            Modal.error({ content: "예상치 못한 오류입니다." });
          }
          if (response.data.status === 301) {
            Modal.error({
              content: "세션이 만료되었습니다.다시 로그인해주세요.",
            });
            router.push(`/`);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateWalletPresenter
      current={current}
      items={items}
      next={next}
      prev={prev}
      steps={steps}
      onClickMoveToPage={onClickMoveToPage}
      blur={blur}
      onClickMnemonic={onClickMnemonic}
      mnemonic={mnemonic}
      onChangeMnemonic={onChangeMnemonic}
      hash={hash}
      onClickCreate={onClickCreate}
      success={success}
    />
  );
}
