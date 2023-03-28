import { Mobile, PC } from "../../../../commons/hooks/mediaquery";
import * as S from "./modal.styles";
import { IModalPresenter } from "./modal.types";

export default function ModalPresenter(props: IModalPresenter) {
  return (
    <>
      <Mobile>
        <S.MoTokenHead>커스텀 토큰</S.MoTokenHead>
        <S.MoModal>
          <S.MoModalText>토큰 컨트랙트 주소</S.MoModalText>
          <S.MoModalInput placeholder="토큰 컨트랙트 주소" />
          <S.MoModalText>토큰 심볼</S.MoModalText>
          <S.MoModalInput placeholder="토큰 심볼" />
          <S.MoModalText>소수자릿수</S.MoModalText>
          <S.MoModalInput placeholder="소수자릿수" />
        </S.MoModal>
      </Mobile>
      <PC>
        <S.PcTokenHead>커스텀 토큰</S.PcTokenHead>
        <S.PcModal>
          <S.PcModalText>토큰 컨트랙트 주소</S.PcModalText>
          <S.PcModalInput placeholder="토큰 컨트랙트 주소" />
          <S.PcModalText>토큰 심볼</S.PcModalText>
          <S.PcModalInput placeholder="토큰 심볼" />
          <S.PcModalText>소수자릿수</S.PcModalText>
          <S.PcModalInput placeholder="소수자릿수" />
        </S.PcModal>
      </PC>
    </>
  );
}
