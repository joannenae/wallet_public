import { Modal } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useMovetoPage } from "../../../commons/hooks/movepage";
import LoginPresenter from "./login.presenter";

export default function LoginContainer() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { onClickMoveToPage } = useMovetoPage();

  const onClickVisible = () => {
    setVisible((prev) => !prev);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handelEnter = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      onClickLogin();
    }
  };

  const onClickLogin = async () => {
    try {
      await axios
        .post("/v1/account/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.data.status === 200) {
            Modal.success({ content: "로그인에 성공하였습니다!" });
            router.push(`/main`);
          }
          if (response.data.status === 101) {
            Modal.error({ content: "비밀번호를 확인해주세요." });
          }
          if (response.data.status === 500) {
            Modal.error({ content: "존재하지 않는 이메일입니다." });
          }
          if (response.data.status === 300) {
            Modal.error({ content: "시스템 오류! 다시 시도해주세요" });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginPresenter
      visible={visible}
      onClickVisible={onClickVisible}
      onClickMoveToPage={onClickMoveToPage}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      email={email}
      password={password}
      handelEnter={handelEnter}
    />
  );
}
