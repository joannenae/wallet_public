import { Input } from "antd";
import { Mobile, PC } from "../../../commons/hooks/mediaquery";

import * as S from "./keystore.styles";
import { IKeystorePresenter } from "./keystore.types";

export default function KeystorePresenter(props: IKeystorePresenter) {
  //   console.log(props.match);
  return (
    <>
      <Mobile>
        <div></div>
      </Mobile>
      <PC>
        <S.PcHeader>키스토어 비밀 번호 설정</S.PcHeader>
        <S.PcTitle>키스토어 비밀 번호 입력</S.PcTitle>
        <Input.Password
          onChange={props.onChangePw}
          style={{
            width: "100%",
            height: 35,
            marginTop: 10,
            marginBottom: 10,
          }}
          placeholder="비밀번호"
        />
        <S.PcPwError>
          {props.isPassword === false &&
            "* 영문, 숫자, 특수문자를 포함한 8자리~16자리입니다."}
        </S.PcPwError>

        <S.PcTitle>키스토어 비밀 번호 확인</S.PcTitle>
        <Input.Password
          onChange={props.onChangePwCheck}
          style={{
            width: "100%",
            height: 35,
            marginTop: 10,
            marginBottom: 10,
          }}
          placeholder="비밀번호 확인"
        />
        <S.PcError>
          {props.isPasswordConfirm === true && "비밀번호가 일치합니다"}
        </S.PcError>
      </PC>
    </>
  );
}
