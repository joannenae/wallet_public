import { useRouter } from "next/router";
// import { useRecoilValue } from "recoil";
// import { userChainIdState } from "../../../commons/store";

import TokenPresenter from "./token.presenter";
import { ITokenContainer } from "./token.types";

export default function TokenContainer(props: ITokenContainer) {
  const router = useRouter();

  const network = router.query.networkName;

  // const recoilChainId = useRecoilValue(userChainIdState);
  // 해당 토큰 상세 페이지로 이동
  const onClickTokenDetail = async (tokenId: string) => {
    router.push({
      pathname: `/main/detail`,
      query: {
        tokenId: tokenId,
        networkName: network,
        // chainId: recoilChainId,
        chainId:
          Object.keys(router.query).length === 0 ? "1" : router.query.chainId,
        walletId: router.query.walletId,
      },
    });
  };
  return (
    <TokenPresenter
      userNm={props.userNm}
      balance={props.balance}
      symbol={props.symbol}
      // tokenId={props.tokenId}
      onClickTokenDetail={onClickTokenDetail}
      userinfo={props.userinfo}
    />
  );
}
