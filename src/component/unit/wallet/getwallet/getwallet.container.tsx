import { Modal } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useMovetoPage } from "../../../../commons/hooks/movepage";
import GetWalletPresenter from "./getwallet.presenter";

export default function GetWalletContainer() {
  const [number] = useState<any>([
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

  const [word, setWord] = useState<any>("");

  const { onClickMoveToPage } = useMovetoPage();
  const router = useRouter();

  const mnemonic: string[] = [];

  const onChangeWord = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    const value = e.target.value;
    if (value.length < 20) {
      const tempArr = [...word];
      tempArr[i] = value;
      setWord(tempArr);
    } else {
      const temp = value.split(" ");
      temp.map((el) => {
        const temp2 = el.split(".")[1];
        mnemonic.push(temp2);
      });
      const filtered = mnemonic.filter((arr) => arr !== undefined);
      setWord([...filtered]);
    }
  };
  const onClickGetWallet = async () => {
    if (word) {
      if (word.length === 12) {
        let cnt = 0;
        for (let i = 0; i < 11; i++) {
          if (word[i] == undefined) {
            cnt + 1;
          }
        }
        if (cnt !== 0) {
          Modal.error({ content: "비밀 복구 구문 12개를 모두 입력해주세요!" });
        } else {
          try {
            await axios
              .post("/v1/wallet/init-wallet", {
                mnemonic: word.toString(),
              })
              .then((response) => {
                console.log(response.data);
                if (response.data.status === 200) {
                  Modal.success({ content: "지갑 가져오기 성공 !" });
                  router.push("/main");
                }
                if (response.data.status === 101) {
                  Modal.error({ content: "잘못된 복구 구문입니다." });
                }
                if (response.data.status === 500) {
                  Modal.error({ content: "토큰 정보 추가 실패 !" });
                }
                if (response.data.status === 501) {
                  Modal.error({ content: "통신 오류 !" });
                }
                if (response.data.status === 300) {
                  Modal.error({ content: "예상치 못한 오류 !" });
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
        }
      } else {
        Modal.error({ content: "비밀 복구 구문 12개를 모두 입력해주세요!" });
      }
    } else if (!word) {
      Modal.error({ content: "비밀 복구 구문을 입력해주세요" });
    }
  };

  return (
    <>
      <GetWalletPresenter
        onClickMoveToPage={onClickMoveToPage}
        onChangeWord={onChangeWord}
        onClickGetWallet={onClickGetWallet}
        word={word}
        number={number}
      />
    </>
  );
}
