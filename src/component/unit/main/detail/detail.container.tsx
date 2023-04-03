import { Modal } from "antd";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import DetailPresenter from "./detail.presenter";
import copy from "copy-to-clipboard";
import { IDetailContainer } from "./detail.types";
import { useRouter } from "next/router";

export default function DetailContainer(props: IDetailContainer) {
  // 계정 이름 변경 state
  const [change, setChange] = useState(false);
  // 클립보드 복사
  const [isCopy, setIsCopy] = useState(false);
  // 비공개키 내보내기 모달 state
  const [secret, setSecret] = useState(false);
  // 비공개키 입력 state
  const [password, setPassword] = useState("");
  //비공개키 비밀번호 변경 state
  const [status, setStatus] = useState(false);
  //키스토어 모달 state
  const [keyOpen, setKeyOpen] = useState(false);
  // 키스토어 비밀번호 입력 state - keystore.container에 props로 내리기
  const [keypass, setKeyPass] = useState("");
  const [keypassConfirm, setKeyPassConfirm] = useState("");

  const [privatekey, setPrivateKey] = useState("");
  const [error, setError] = useState("");

  // 계정 이름 input
  const [edit, setEdit] = useState("");

  const router = useRouter();

  // 비공개키 내보내기 모달
  const showSecret = () => {
    setSecret(true);
  };
  const secretOk = () => {
    setSecret(false);
    setStatus(false);
    setPassword("");
  };
  const secretCancel = () => {
    setSecret(false);
    setStatus(false);
    setPassword("");
    setError("");
  };
  // 비공개키 입력
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // 비공개키 입력 버튼
  const onClickPassword = async () => {
    try {
      await axios
        .post("/v1/wallet/wallet-pk", {
          address: props.address,
          password: password,
        })
        .then((response) => {
          if (response.data.status === 200) {
            setStatus(true);
            setPrivateKey(response.data.result);
          }
          if (response.data.status !== 200) {
            setStatus(false);
            setError(response.data.result);
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
  // 키스토어 비밀번호 설정 모달
  const showKeystore = () => {
    setKeyOpen(true);
  };

  const keystoreOk = async () => {
    if (keypass && keypassConfirm) {
      try {
        await axios
          .post("/v1/wallet/export-keystore", {
            address: props.address,
            password: keypass,
          })
          .then((response) => {
            console.log(response);
            if (response.data.status === 200) {
              const address = response.data.result.keystore.address;
              let fileName = "DreamWallet-" + address + ".json";
              let output = JSON.stringify(response.data.result.keystore);
              const element = document.createElement("a");
              const file = new Blob([output], {
                type: "application/json",
              });
              element.href = URL.createObjectURL(file);
              console.log(URL.createObjectURL(file));
              element.download = fileName;
              document.body.appendChild(element); // FireFox
              element.click();
            }
            if (response.data.status === 101) {
              Modal.error({ content: "비밀번호 생성 오류" });
            }
            if (response.data.status === 102) {
              Modal.error({ content: "통신 오류" });
            }
            if (response.data.status === 103) {
              Modal.error({ content: "정보 저장 오류" });
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
  };
  const keystoreCancel = () => {
    setKeyOpen(false);
  };

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

  // 계정 이름 수정
  const onChangeEdit = () => {
    setChange(true);
  };

  const onChangeCancel = () => {
    setChange(false);
  };

  const onChangeEditName = (event: ChangeEvent<HTMLInputElement>) => {
    setEdit(event.target.value);
  };

  const onClickEdit = async () => {
    try {
      await axios
        .post("/v1/wallet/walletName-change", {
          address: props.address,
          name: edit,
        })
        .then((response) => {
          if (response.data.status === 200) {
            Modal.success({ content: "계정 이름이 변경 되었습니다." });
            setChange(false);
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
    <DetailPresenter
      change={change}
      isCopy={isCopy}
      secret={secret}
      password={password}
      status={status}
      keyOpen={keyOpen}
      keypass={keypass}
      setKeyPass={setKeyPass}
      keypassConfirm={keypassConfirm}
      setKeyPassConfirm={setKeyPassConfirm}
      onChangeEdit={onChangeEdit}
      showSecret={showSecret}
      secretOk={secretOk}
      secretCancel={secretCancel}
      onChangePassword={onChangePassword}
      onClickPassword={onClickPassword}
      showKeystore={showKeystore}
      keystoreOk={keystoreOk}
      keystoreCancel={keystoreCancel}
      handleCopyClipBoard={handleCopyClipBoard}
      onChangeCancel={onChangeCancel}
      address={props.address}
      userNm={props.userNm}
      privatekey={privatekey}
      error={error}
      onChangeEditName={onChangeEditName}
      onClickEdit={onClickEdit}
      edit={edit}
    />
  );
}
