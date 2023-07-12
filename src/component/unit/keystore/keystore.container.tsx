import { useCallback, useState } from "react";
import KeystorePresenter from "./keystore.presenter";
import { IKeystoreContainer } from "./keystore.types";

export default function KeystoreContainer(props: IKeystoreContainer) {
  //  제일 상위 컴포넌트로 옮기고 여기로 state 넘겨주기
  //   const [password, setPassword] = useState("");
  //   const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onChangePw = useCallback((e: any) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&< >(^)])[A-Za-z\d@$!%*#?&< >(^)]{8,16}$/;
    const passwordCurrent = e.target.value;
    props.setKeyPass(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  }, []);

  // 비밀번호 확인
  const onChangePwCheck = useCallback(
    (e: any) => {
      const passwordConfirmCurrent = e.target.value;
      props.setKeyPassConfirm(passwordConfirmCurrent);
      if (props.keypass === passwordConfirmCurrent) {
        setIsPasswordConfirm(true);
      } else {
        setIsPasswordConfirm(false);
      }
    },
    [props.keypass]
  );

  return (
    <KeystorePresenter
      onChangePwCheck={onChangePwCheck}
      onChangePw={onChangePw}
      isPassword={isPassword}
      isPasswordConfirm={isPasswordConfirm}
      //   passwordConfirm={passwordConfirm}
    />
  );
}
