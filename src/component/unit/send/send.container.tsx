import { Modal } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import SendPresenter from "./send.presenter";
import { ISendContainer } from "./send.types";

export default function SendContainer(props: ISendContainer) {
  const [token, setToken] = useState("");
  // const [address, setAddress] = useState("");
  // const [balance, setBalance] = useState("");
  const [txFee, setTxFee] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  // 토큰 선택
  const onChangeToken = (value: string) => {
    console.log(`selected ${value}`);
    setToken(value);
  };

  //받는 사람 주소
  const onChangeGetAddress = (event: ChangeEvent<HTMLInputElement>) => {
    props.setAdr(event.target.value);
  };

  // 수량 입력
  const onChangeBalance = (event: ChangeEvent<HTMLInputElement>) => {
    props.setBal(event.target.value);
  };

  // 예상 수수료 확인 버튼
  const sentToken = async () => {
    if (
      !props.walletId ||
      !props.adr ||
      !props.bal
      // router.query.chainId === "" ||
      // Object.keys(router.query).length === 0
      //   ? "1"
      //   : router.query.chainId
    ) {
      Modal.confirm({ content: "입력칸을 모두 입력해주세요!" });
      return;
    } else {
      try {
        await axios
          .post("/v1/balance/estimate", {
            chainId:
              router.query.chainId === "" ||
              Object.keys(router.query).length === 0
                ? "1"
                : router.query.chainId,
            walletId: props.walletId,
            toAddress: props.adr,
            value: props.bal,
          })
          .then((response) => {
            console.log(response);
            if (response.data.status === 200) {
              props.setAdd(true);
              setTxFee(response.data.result.txFee);
            }
            if (response.data.status == 500) {
              setError("DB 오류입니다.");
              setToken("");
              props.setAdr("");
              props.setBal("");
              props.setAdd(false);
            }
            if (response.data.status == 501) {
              setError("통신 오류입니다.");
              setToken("");
              props.setAdr("");
              props.setBal("");
              props.setAdd(false);
            }
            if (response.data.status == 300) {
              setError(response.data.result);
              setToken("");
              props.setAdr("");
              props.setBal("");
              props.setAdd(false);
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <SendPresenter
      onChangeToken={onChangeToken}
      address={props.address}
      symbol={props.symbol}
      userNm={props.userNm}
      userinfo={props.userinfo}
      token={token}
      onChangeGetAddress={onChangeGetAddress}
      onChangeBalance={onChangeBalance}
      txFee={txFee}
      sentToken={sentToken}
      add={props.add}
      error={error}
    />
  );
}
