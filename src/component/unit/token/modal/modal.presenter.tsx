import { Tabs } from "antd";
import { useMemo } from "react";

const { TabPane } = Tabs;

import { Mobile, PC } from "../../../../commons/hooks/mediaquery";
import * as S from "./modal.styles";
import { IModalPresenter } from "./modal.types";

export default function ModalPresenter(props: IModalPresenter) {
  const transformedOptions = props.tokenResult?.tokenList?.map(
    (option: any) => ({
      value: option.tokenId,
      label: option.tokenSym,
    })
  );
  const items = [
    {
      key: "1",
      label: "검색",
      children: (
        <>
          <S.StyledSelect
            // @ts-ignore
            options={transformedOptions}
            placeholder="선택하세요"
            isSearchable={true}
            isClearable={true}
            onChange={props.onChangeTokenAdd}
          />
        </>
      ),
    },
    {
      key: "2",
      label: "커스텀 토큰",
      children: (
        <>
          <S.PcModal>
            <S.PcModalText>토큰 컨트랙트 주소</S.PcModalText>
            <S.PcModalInput placeholder="토큰 컨트랙트 주소" />
            <S.PcModalText>토큰 심볼</S.PcModalText>
            <S.PcModalInput placeholder="토큰 심볼" />
            <S.PcModalText>소수자릿수</S.PcModalText>
            <S.PcModalInput placeholder="소수자릿수" />
          </S.PcModal>
        </>
      ),
    },
  ];
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
        <S.PcTokenHead>토큰 가져오기</S.PcTokenHead>
        <Tabs
          destroyInactiveTabPane={true}
          style={{ marginTop: 20 }}
          onChange={props.onChangeToken}
          defaultActiveKey={"1"}
          items={items}
        />
      </PC>
    </>
  );
}
