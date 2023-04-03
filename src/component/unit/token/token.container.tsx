import { useRouter } from "next/router";
import TokenPresenter from "./token.presenter";
import { ITokenContainer } from "./token.types";

export default function TokenContainer(props: ITokenContainer) {
  const router = useRouter();

  // 상세 페이지로 이동
  const onClickTokenDetail = () => {
    router.push(`/main/token-${props.tokenId}`);
  };

  return (
    <TokenPresenter
      balance={props.balance}
      symbol={props.symbol}
      tokenId={props.tokenId}
      onClickTokenDetail={onClickTokenDetail}
    />
  );
}
