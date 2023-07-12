import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { walletInfoState } from "../../../commons/store";
import AccountPresenter from "./account.presenter";
import { IAccountContainer } from "./account.types";

export default function AccountContainer(props: IAccountContainer) {
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [tab, setTab] = useState("");
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState();
  const [status, setStatus] = useState("");
  const [createName, setCreateName] = useState("");
  const [privatekey, setPrivateKey] = useState("");
  const [keypassword, setKeyPassword] = useState("");
  const [symbol, setSymbol] = useState("");

  // 지갑 recoil
  const [walletinfo, setWalletInfo] = useRecoilState(walletInfoState);

  const router = useRouter();

  const onClickCloseAccount = () => {
    props.setAccountActive(false);
  };

  const createModal = () => {
    setIsCreateModal(true);
  };
  //지갑 생성 버튼(탭)
  const handleOk = async () => {
    setStatus("");
    setName("");
    try {
      await axios
        .post("/v1/wallet/add-wallet", { walletNm: createName })
        .then((response) => {
          console.log(response);
          if (response.data.status === 200) {
            Modal.success({ content: "지갑이 생성 되었습니다." });
            setIsCreateModal(false);
          }
          if (response.data.status === 500) {
            Modal.error({ content: "DB 오류." });
          }
          if (response.data.status === 501) {
            Modal.error({ content: "통신 오류!" });
          }
          if (response.data.status === 300) {
            Modal.error({ content: "예상치 못한 오류!" });
          }
          // if (response.data.status === 301) {
          //   Modal.error({
          //     content: "세션이 만료되었습니다.다시 로그인해주세요.",
          //   });
          //   router.push(`/`);
          // }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = () => {
    setIsCreateModal(false);
    setStatus("");
    setName("");
  };
  // tab
  const onChangeTab = (key: string) => {
    if (key === "1") {
      setTab("1");
    }
    if (key === "2") {
      setTab("2");
      setStatus("");
    }
  };
  // 계정 생성 버튼
  const changeCreate = () => {
    setNum("1");
    setTab("1");
  };
  const onChangeCreate = (event: ChangeEvent<HTMLInputElement>) => {
    setCreateName(event.target.value);
  };
  //---------------------------------가져오기
  // 계정 가져오기 버튼
  const changeGet = () => {
    setNum("2");
    setTab("2");
  };
  // 게정 가져오기 탭 - 방식 선택
  const selectChange = (value: string | any) => {
    setStatus(value.value);
  };
  //지갑 가져오기 버튼(탭)
  const onClickWalletPk = async () => {
    try {
      await axios
        .post("/v1/wallet/add-walletPk", { pk: privatekey })
        .then((response) => {
          if (response.data.status === 200) {
            Modal.success({ content: "지갑 가져오기 성공!" });
            setIsCreateModal(false);
          }
          if (response.data.status === 500) {
            Modal.error({ content: "DB 오류!" });
          }
          if (response.data.status === 501) {
            Modal.error({ content: "통신 오류!" });
          }
          if (response.data.status === 300) {
            Modal.error({ content: "예상치 못한 오류!" });
          }
          // if (response.data.status === 301) {
          //   Modal.error({
          //     content: "세션이 만료되었습니다.다시 로그인해주세요.",
          //   });
          //   router.push(`/`);
          // }
        });
    } catch (error) {
      console.log(error);
    }
  };
  // 개인키 입력
  const onChangePrivateKey = (event: ChangeEvent<HTMLInputElement>) => {
    setPrivateKey(event.target.value);
  };
  // 키스토어 파일 선택
  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setName(e.target.files[0].name);
      const fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (e: any) => {
        console.log("e.target.result", e?.target?.result);
        setFile(e?.target?.result);
      };
    }
  };

  const destoryFile = () => {
    setName("");
  };

  const onChangeKeyPass = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyPassword(event.target.value);
  };

  //  키스토어 파일 업로드
  const onClickKeystore = async () => {
    try {
      await axios
        .post("/v1/wallet/add-keystore", {
          keystore: file,
          password: keypassword,
        })
        .then((response) => {
          if (response.data.status === 200) {
            Modal.success({ content: "지갑 가져오기 성공" });
            setIsCreateModal(false);
          }
          if (response.data.status === 500) {
            Modal.error({ content: "DB 오류!" });
          }
          if (response.data.status === 501) {
            Modal.error({ content: "통신 오류!" });
          }
          if (response.data.status === 300) {
            Modal.error({ content: "예상치 못한 오류!" });
          }
          // if (response.data.status === 301) {
          //   Modal.error({
          //     content: "세션이 만료되었습니다.다시 로그인해주세요.",
          //   });
          //   router.push(`/`);
          // }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onClickDeleteWallet = (walletId: number) => {
    Modal.confirm({
      content: "지갑을 삭제하시겠습니까?",
      icon: <ExclamationCircleFilled />,
      okText: "확인",
      cancelText: "취소",
      async onOk() {
        try {
          await axios
            .post("/v1/wallet/delete-wallet", {
              walletId: walletId,
            })
            .then((response) => {
              if (response.data.status === 200) {
                Modal.success({ content: "지갑이 삭제되었습니다." });
                props.walletMain();
              }
              if (response.data.status === 500) {
                Modal.error({ content: "지갑 삭제 실패." });
              }
              if (response.data.status === 300) {
                Modal.error({ content: "예상치 못한 오류." });
              }
            });
        } catch (error) {
          console.log(error);
        }
      },
    });
  };

  // 지갑 화면 전환
  const onClickWallet = async (walletId: number) => {
    router.push({
      pathname: "/main",
      query: {
        walletId: walletId,
        chainId: router.query.chainId,
        networkName: router.query.networkName,
      },
    });
  };

  return (
    <AccountPresenter
      onClickCloseAccount={onClickCloseAccount}
      createModal={createModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isCreateModal={isCreateModal}
      onChangeTab={onChangeTab}
      tab={tab}
      setTab={setTab}
      changeCreate={changeCreate}
      changeGet={changeGet}
      num={num}
      selectChange={selectChange}
      status={status}
      onChangeFile={onChangeFile}
      name={name}
      destoryFile={destoryFile}
      onChangeCreate={onChangeCreate}
      createName={createName}
      onChangePrivateKey={onChangePrivateKey}
      onClickWalletPk={onClickWalletPk}
      privatekey={privatekey}
      onChangeKeyPass={onChangeKeyPass}
      keypassword={keypassword}
      onClickKeystore={onClickKeystore}
      file={file}
      userinfo={props.userinfo}
      onClickDeleteWallet={onClickDeleteWallet}
      onClickWallet={onClickWallet}
      symbol={symbol}
      token={props.token}
    />
  );
}
