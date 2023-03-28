import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import { ITokenPresenter } from "./token.types";
import * as S from "./token.styles";

export default function TokenPresenter(props: ITokenPresenter) {
  return (
    <>
      <Mobile>
        <S.MoTokenBox>
          <S.MoTokenContent>
            <S.MoTokenLogo src="/image/ethereum.png" />
            <S.MoTokenAmount>
              <div style={{ fontWeight: "bold" }}>0 ETH</div>
              <div style={{ marginTop: "10%" }}>$0.00 USD</div>
            </S.MoTokenAmount>
          </S.MoTokenContent>
          <img src="/image/tokenarrow.png" style={{ width: "10%" }} />
        </S.MoTokenBox>
      </Mobile>
      <PC>
        <S.PcTokenBox>
          <S.PcTokenContent>
            <S.PcTokenLogo src="/image/ethereum.png" />
            <S.PcTokenAmount>
              <div style={{ fontWeight: "bold" }}>0 ETH</div>
              <div style={{ marginTop: "10%" }}>$0.00 USD</div>
            </S.PcTokenAmount>
          </S.PcTokenContent>
          <img src="/image/tokenarrow.png" />
        </S.PcTokenBox>
        {/* <S.PcTokenBox>
          <S.PcTokenContent>
            <S.PcTokenLogo src="/image/ethereum.png" />
            <S.PcTokenAmount>
              <div style={{ fontWeight: "bold" }}>0 ETH</div>
              <div style={{ marginTop: "10%" }}>$0.00 USD</div>
            </S.PcTokenAmount>
          </S.PcTokenContent>
          <img src="/image/tokenarrow.png" />
        </S.PcTokenBox>
        <S.PcTokenBox>
          <S.PcTokenContent>
            <S.PcTokenLogo src="/image/ethereum.png" />
            <S.PcTokenAmount>
              <div style={{ fontWeight: "bold" }}>0 ETH</div>
              <div style={{ marginTop: "10%" }}>$0.00 USD</div>
            </S.PcTokenAmount>
          </S.PcTokenContent>
          <img src="/image/tokenarrow.png" />
        </S.PcTokenBox>
        <S.PcTokenBox>
          <S.PcTokenContent>
            <S.PcTokenLogo src="/image/ethereum.png" />
            <S.PcTokenAmount>
              <div style={{ fontWeight: "bold" }}>0 ETH</div>
              <div style={{ marginTop: "10%" }}>$0.00 USD</div>
            </S.PcTokenAmount>
          </S.PcTokenContent>
          <img src="/image/tokenarrow.png" />
        </S.PcTokenBox> */}
      </PC>
    </>
  );
}
