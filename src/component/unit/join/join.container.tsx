import JoinPresenter from "./join.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMovetoPage } from "../../../commons/hooks/movepage";
import { ChangeEvent, useRef, useState } from "react";
import { Modal } from "antd";
import axios from "axios";
import { IFormValues } from "./join.types";

const schema = yup.object({
  pw: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&< >(^)])[A-Za-z\d@$!%*#?&< >(^)]{8,16}$/,
      "영문, 숫자, 특수문자를 포함한 8자리~16자리입니다."
    )
    .required("비밀번호는 필수 입력 사항입니다"),

  pwCheck: yup
    .string()
    .nullable()
    .oneOf([yup.ref("pw")], "비밀번호가 일치하지 않습니다")
    .required("비밀번호를 확인하세요."),
});

export default function JoinContainer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [active, setActive] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const [status, setStatus] = useState(false);
  const [visible, setVisible] = useState(false);

  const { onClickMoveToPage } = useMovetoPage();

  const onClickVisible = () => {
    setVisible((prev) => !prev);
  };

  const { register, handleSubmit, formState, watch } = useForm<IFormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setActive(true);
  };

  const emailCheck = async () => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
      Modal.error({ content: "이메일 형식을 확인해주세요" });
      return;
    }
    try {
      await axios
        .post("/v1/account/email-check", {
          email: email,
        })
        .then((response) => {
          if (response.data.status === 200) {
            setDuplicate(true);
            Modal.success({ content: "사용가능한 이메일입니다!." });
          }
          if (response.data.status === 101) {
            Modal.error({ content: "사용중인 이메일입니다." });
          }
          if (response.data.status === 300) {
            Modal.error({ content: "예상치 못한 오류입니다." });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const element = useRef<HTMLInputElement>(null);

  const onClickStart = async (data: IFormValues) => {
    if (duplicate === false) {
      Modal.error({ content: "이메일 중복 확인을 먼저 해주세요!" });
      return;
    }
    if (email && data.pw && name) {
      try {
        await axios
          .post("/v1/account/sign-up", {
            email: email,
            name: name,
            password: data.pw,
          })
          .then((response) => {
            if (response.data.status === 200) {
              setTimeout(() => {
                setStatus(true);
                element.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }, 1000);
            }
            if (response.data.status === 500) {
              Modal.error({ content: "DB 저장 오류." });
            }
            if (response.data.status === 300) {
              Modal.error({ content: "시스템 오류! 다시 시도해주세요" });
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <JoinPresenter
      onChangeEmail={onChangeEmail}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickMoveToPage={onClickMoveToPage}
      onClickStart={onClickStart}
      email={email}
      name={name}
      emailCheck={emailCheck}
      onChangeName={onChangeName}
      active={active}
      duplicate={duplicate}
      status={status}
      onClickVisible={onClickVisible}
      visible={visible}
      watch={watch}
    />
  );
}
