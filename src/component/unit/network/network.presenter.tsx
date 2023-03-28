import { Button, Divider, Modal } from "antd";
import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import * as S from "./network.styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { INetworkPresenter } from "./network.types";
export default function NetworkPresenter(props: INetworkPresenter) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  return (
    <>
      <Mobile>
        <>
          <S.MoWrapper data-aos="fade-down">
            <S.MoHeader>
              <S.MoLeft>{">"} 네트워크 추가</S.MoLeft>
              <S.MoRight onClick={props.showNetwork}>
                네트워크 수동 추가 {"+"}
              </S.MoRight>
              <Modal
                destroyOnClose={true}
                open={props.network}
                onOk={props.networkOk}
                onCancel={props.networkCancel}
                style={{ top: 50 }}
                footer={[
                  <Button
                    key="back"
                    onClick={props.networkCancel}
                    style={{ fontSize: 20, paddingTop: 0, height: 40 }}
                  >
                    취소
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={props.networkOk}
                    style={{ fontSize: 20, paddingTop: 0, height: 40 }}
                  >
                    추가
                  </Button>,
                ]}
              >
                <S.PcModal>
                  <S.PcFlexbox>
                    <S.PcTitle>네트워크 이름</S.PcTitle>
                    <S.PcInput />
                  </S.PcFlexbox>
                  <S.PcFlexbox>
                    <S.PcTitle>새 RPC URL</S.PcTitle>
                    <S.PcInput />
                  </S.PcFlexbox>
                  <S.PcFlexbox>
                    <S.PcTitle>체인 ID</S.PcTitle>
                    <S.PcInput />
                  </S.PcFlexbox>
                  <S.PcFlexbox>
                    <S.PcTitle>심볼(선택)</S.PcTitle>
                    <S.PcInput />
                  </S.PcFlexbox>
                  <S.PcFlexbox>
                    <S.PcTitle>블록 탐색기 URL(선택)</S.PcTitle>
                    <S.PcInput />
                  </S.PcFlexbox>
                </S.PcModal>
              </Modal>
            </S.MoHeader>
            <div style={{ width: "85%", margin: "0 auto", fontSize: "1.2rem" }}>
              주요 네트워크 목록에서 추가하거나 네트워크를 직접 추가할 수
              있습니다.
            </div>
            <Divider />
            <S.MoBottom>
              <S.PcListBox>
                <S.MoImgBox>
                  <S.MoListImg src="/image/binance.png" />
                  <S.MoList>Binance Mainnet</S.MoList>
                </S.MoImgBox>
                <S.MoImgAdd src="/image/addnewsmall.png" />
              </S.PcListBox>
              <S.PcListBox>
                <S.MoImgBox>
                  <S.MoListImg src="/image/binance.png" />
                  <S.MoList>Binance Testnet</S.MoList>
                </S.MoImgBox>
                <S.MoImgAdd src="/image/addnewsmall.png" />
              </S.PcListBox>
              <S.PcListBox>
                <S.MoImgBox>
                  <S.MoListImg src="/image/ethereum.png" />
                  <S.MoList>Ethereum Mainnet</S.MoList>
                </S.MoImgBox>
                <S.MoImgAdd src="/image/addnewsmall.png" />
              </S.PcListBox>
              <S.PcListBox>
                <S.MoImgBox>
                  <S.MoListImg src="/image/etc.png" />
                  <S.MoList>Goerli Testnet</S.MoList>
                </S.MoImgBox>
                <S.MoImgAdd src="/image/addnewsmall.png" />
              </S.PcListBox>
              <S.PcListBox>
                <S.MoImgBox>
                  <S.MoListImg src="/image/sepolia.png" />
                  <S.MoList>Sepolia Testnet</S.MoList>
                </S.MoImgBox>
                <S.MoImgAdd src="/image/addnewsmall.png" />
              </S.PcListBox>
              <S.PcListBox>
                <S.MoImgBox>
                  <S.MoListImg src="/image/polygon.png" />
                  <S.MoList>Polygon Mainnet</S.MoList>
                </S.MoImgBox>
                <S.MoImgAdd src="/image/addnewsmall.png" />
              </S.PcListBox>
              <S.PcListBox>
                <S.MoImgBox>
                  <S.MoListImg src="/image/polygon.png" />
                  <S.MoList>Polygon Testnet</S.MoList>
                </S.MoImgBox>
                <S.MoImgAdd src="/image/addnewsmall.png" />
              </S.PcListBox>
            </S.MoBottom>
          </S.MoWrapper>
        </>
      </Mobile>
      <PC>
        <>
          <S.PcWrapper data-aos="fade-down">
            <S.PcHeader>
              <S.PcLeft>{">"} 네트워크 추가</S.PcLeft>
              <S.PcRight onClick={props.showNetwork}>
                네트워크 수동 추가 {"+"}
              </S.PcRight>
              <Modal
                destroyOnClose={true}
                open={props.network}
                onOk={props.networkOk}
                onCancel={props.networkCancel}
                style={{ top: 50 }}
                footer={[
                  <Button
                    key="back"
                    onClick={props.networkCancel}
                    style={{ fontSize: 20, paddingTop: 0, height: 40 }}
                  >
                    취소
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={props.networkOk}
                    style={{ fontSize: 20, paddingTop: 0, height: 40 }}
                  >
                    추가
                  </Button>,
                ]}
              >
                <S.PcModal>
                  <S.PcFlexbox>
                    <S.PcTitle>네트워크 이름</S.PcTitle>
                    <S.PcInput />
                  </S.PcFlexbox>
                  <S.PcFlexbox>
                    <S.PcTitle>새 RPC URL</S.PcTitle>
                    <S.PcInput />
                  </S.PcFlexbox>
                  <S.PcFlexbox>
                    <S.PcTitle>체인 ID</S.PcTitle>
                    <S.PcInput />
                  </S.PcFlexbox>
                  <S.PcFlexbox>
                    <S.PcTitle>심볼(선택)</S.PcTitle>
                    <S.PcInput />
                  </S.PcFlexbox>
                  <S.PcFlexbox>
                    <S.PcTitle>블록 탐색기 URL(선택)</S.PcTitle>
                    <S.PcInput />
                  </S.PcFlexbox>
                </S.PcModal>
              </Modal>
            </S.PcHeader>
            <div style={{ width: "85%", margin: "0 auto", fontSize: "1.5rem" }}>
              주요 네트워크 목록에서 추가하거나 네트워크를 직접 추가할 수
              있습니다.
            </div>
            <Divider />
            <S.PcBottom>
              <S.PcListBox>
                <S.PcImgBox>
                  <S.PcListImg src="/image/binance.png" />
                  <S.PcList>Binance Mainnet</S.PcList>
                </S.PcImgBox>
                <S.PcImgAdd src="/image/addnewsmall.png" />
              </S.PcListBox>
              <S.PcListBox>
                <S.PcImgBox>
                  <S.PcListImg src="/image/binance.png" />
                  <S.PcList>Binance Testnet</S.PcList>
                </S.PcImgBox>
                <S.PcImgAdd src="/image/addnewsmall.png" />
              </S.PcListBox>
              <S.PcListBox>
                <S.PcImgBox>
                  <S.PcListImg src="/image/ethereum.png" />
                  <S.PcList>Ethereum Mainnet</S.PcList>
                </S.PcImgBox>
                <S.PcImgAdd src="/image/addnewsmall.png" />
              </S.PcListBox>
              <S.PcListBox>
                <S.PcImgBox>
                  <S.PcListImg src="/image/etc.png" />
                  <S.PcList>Goerli Testnet</S.PcList>
                </S.PcImgBox>
                <S.PcImgAdd src="/image/addnewsmall.png" />
              </S.PcListBox>
              <S.PcListBox>
                <S.PcImgBox>
                  <S.PcListImg src="/image/sepolia.png" />
                  <S.PcList>Sepolia Testnet</S.PcList>
                </S.PcImgBox>
                <S.PcImgAdd src="/image/addnewsmall.png" />
              </S.PcListBox>
              <S.PcListBox>
                <S.PcImgBox>
                  <S.PcListImg src="/image/polygon.png" />
                  <S.PcList>Polygon Mainnet</S.PcList>
                </S.PcImgBox>
                <S.PcImgAdd src="/image/addnewsmall.png" />
              </S.PcListBox>
              <S.PcListBox>
                <S.PcImgBox>
                  <S.PcListImg src="/image/polygon.png" />
                  <S.PcList>Polygon Testnet</S.PcList>
                </S.PcImgBox>
                <S.PcImgAdd src="/image/addnewsmall.png" />
              </S.PcListBox>
            </S.PcBottom>
          </S.PcWrapper>
        </>
      </PC>
    </>
  );
}
