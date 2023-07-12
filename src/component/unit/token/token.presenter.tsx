import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import { ITokenPresenter } from "./token.types";
import * as S from "./token.styles";
import { useRouter } from "next/router";

export default function TokenPresenter(props: ITokenPresenter) {
  const router = useRouter();
  // 선택한 네트워크의 chainId(쿼리에 담긴), token list chainId 비교해서 일치하는 것만 보여주기위함
  const chainId =
    Object.keys(router.query).length === 0 ? "1" : router.query.chainId;
  return (
    <>
      <Mobile>
        {props.userinfo?.mainWallet?.userToken?.map((v: any, i: number) => {
          return (
            <S.MoTokenBox
              onClick={() => {
                props.onClickTokenDetail(v.userTokenId);
              }}
              key={i}
            >
              <S.MoTokenContent>
                <S.MoTokenLogo src="/image/ethereum.png" />
                <S.MoTokenAmount>
                  <div style={{ fontWeight: "bold" }}>
                    {v.balance}
                    {v.tokenSym}
                  </div>
                  <div style={{ marginTop: "10%" }}>$0.00 USD</div>
                </S.MoTokenAmount>
              </S.MoTokenContent>
              <img src="/image/tokenarrow.png" style={{ width: "10%" }} />
            </S.MoTokenBox>
          );
        })}
      </Mobile>
      <PC>
        {props.userinfo?.mainWallet?.userToken?.map((v: any, i: number) => {
          return (
            v.chainId === chainId && (
              <S.PcTokenBox
                onClick={() => {
                  props.onClickTokenDetail(v.userTokenId);
                }}
                key={i}
              >
                <S.PcTokenContent>
                  <S.PcTokenLogo src="/image/ethereum.png" />
                  <S.PcTokenAmount>
                    <div
                      style={{
                        display: "flex",
                        fontSize: "2.7rem",
                        fontWeight: "bold",
                      }}
                    >
                      <div>{v.balance}</div>
                      <div style={{ marginLeft: 5 }}>{v.tokenSym}</div>
                    </div>
                    <div style={{ marginTop: "4%" }}>$0.00 USD</div>
                  </S.PcTokenAmount>
                </S.PcTokenContent>
                <img src="/image/tokenarrow.png" />
              </S.PcTokenBox>
            )
          );
        })}
      </PC>
    </>
  );
}
