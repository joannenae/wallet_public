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
  const [array] = useState<any>([
    "1.",
    "2.",
    "3.",
    "4.",
    "5.",
    "6.",
    "7.",
    "8.",
    "9.",
    "10.",
    "11.",
    "12.",
  ]);

  const { onClickMoveToPage } = useMovetoPage();
  const router = useRouter();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
    setHash([]);
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
  const mnemonicArr: string[] = [];
  // 비밀 복구 확인
  const onChangeMnemonic = (
    event: ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const value = event.target.value;
    if (value.length < 20) {
      const tempArr = [...hash];
      tempArr[i] = value;
      setHash(tempArr);
    } else {
      const temp = value.split(" ");
      temp.map((el) => {
        const temp2 = el.split(".")[1];
        mnemonicArr.push(temp2);
      });
      const filtered = mnemonicArr.filter((arr) => arr !== undefined);
      setHash([...filtered]);
    }
  };

  const onClickCreate = async () => {
    try {
      await axios
        .post("/v1/wallet/init-wallet", {
          // 배열 -> 문자열 -> 쉼표를 공백으로 치환
          mnemonic: hash?.toString().replace(/,/gi, " "),
        })
        .then((response) => {
          console.log(response);
          if (response.data.status === 200) {
            setSuccess(true);
            Modal.success({ content: "지갑이 생성되었습니다." });
          }
          if (response.data.status === 101) {
            Modal.error({ content: "유효하지 않은 비밀 복구 구문입니다." });
          }
          if (response.data.status === 500) {
            Modal.error({ content: "토큰 정보 추가 실패." });
          }
          if (response.data.status === 501) {
            Modal.error({ content: "통신 오류." });
          }
          if (response.data.status === 300) {
            Modal.error({ content: "예상치 못한 오류." });
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
      array={array}
    />
  );
}
