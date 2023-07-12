import TransactionPresenter from "./transaction.presenter";
import copy from "copy-to-clipboard";
import { useEffect, useState } from "react";
import { ITransactionContainer } from "./transaction.types";
import axios from "axios";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { walletIdState } from "../../../commons/store";

export default function TransactionContainer(props: ITransactionContainer) {
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
  const router = useRouter();

  const Transaction = async () => {
    try {
      await axios
        .post("/v1/main/wallet-trans", {
          walletId: router.query.walletId
            ? router.query.walletId
            : props.walletId,
          networkNm: router.query.networkName
            ? router.query.networkName
            : "Ethereum Mainnet",
        })
        .then((response) => {
          setTimeout(() => {}, 500);
          if (response.data.status === 200) {
            const result = response.data.result;
            console.log("trans", result);
            props.setTrans(result);
          }
          if (response.data.status === 500) {
            Modal.error({ content: "트랜잭션 조회 실패??" });
          }
          if (response.data.status === 300) {
            Modal.error({ content: "예상치 못한 오류입니다." });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Object.keys(router.query).length !== 0) {
      console.log("trans2");
      Transaction();
    }
  }, [router.query]);

  return (
    <TransactionPresenter
      handleCopyClipBoard={handleCopyClipBoard}
      isCopy={isCopy}
      trans={props.trans}
      loading={props.loading}
    />
  );
}
