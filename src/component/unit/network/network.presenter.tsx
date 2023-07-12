import { Button, Divider, Modal } from "antd";
import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import * as S from "./network.styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { INetworkPresenter } from "./network.types";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export default function NetworkPresenter(props: INetworkPresenter) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  const empty = Object.keys(props?.data).length === 0;

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
                    disabled={empty}
                  >
                    수동 추가
                  </Button>,
                ]}
              >
                <S.PcModal>
                  <S.PcFlexbox>
                    <S.PcTitle>새 RPC URL</S.PcTitle>
                    <S.PcInput
                      onChange={props.onChangeRPC}
                      placeholder="추가하고싶은 RPC URL을 입력하세요."
                    />
                    <div style={{ color: "red" }}>
                      {" "}
                      {props.value.length !== 0 ? props.error : ""}
                      {/* {props.error} */}
                    </div>
                  </S.PcFlexbox>
                  <S.PcFlexbox>
                    <S.PcTitle>네트워크 이름</S.PcTitle>
                    <S.PcInput
                      disabled={empty}
                      value={props?.data?.networkName}
                    />
                  </S.PcFlexbox>
                  <S.PcFlexbox>
                    <S.PcTitle>체인 ID</S.PcTitle>
                    <S.PcInput disabled={empty} value={props?.data?.chainId} />
                  </S.PcFlexbox>
                  <S.PcFlexbox>
                    <S.PcTitle>심볼</S.PcTitle>
                    <S.PcInput disabled={empty} value={props?.data?.Symbol} />
                  </S.PcFlexbox>
                  <S.PcFlexbox>
                    <S.PcTitle>블록 탐색기 URL </S.PcTitle>
                    <S.PcInput disabled={empty} value={props?.data?.explorer} />
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
              {props.dummyList.map((el) => {
                return (
                  <>
                    <S.PcListBox
                      key={uuidv4()}
                      onClick={() => {
                        props.onClickNetwork(el.url);
                      }}
                    >
                      <S.MoImgBox>
                        <S.MoListImg src={el.src} />
                        <S.MoList>{el.name}</S.MoList>
                      </S.MoImgBox>
                      <S.MoImgAdd src="/image/addnewsmall.png" />
                    </S.PcListBox>
                  </>
                );
              })}
              <Modal
                title="이 네트워크를 추가할까요?"
                open={props.isModalOpen}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
                footer={[
                  <Button
                    key="back"
                    onClick={props.handleCancel}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    취소
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={props.handleOk}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    추가
                  </Button>,
                ]}
              >
                <div
                  style={{
                    border: "1px solid black",
                    padding: 15,
                    margin: 20,
                    fontSize: "2.1rem",
                    borderRadius: "15px",
                  }}
                >
                  <S.PcNetDiv>네트워크 이름</S.PcNetDiv>
                  <div>{props.netData?.networkName}</div>
                  <S.PcNetDiv>네트워크 URL</S.PcNetDiv>
                  <div>{props.netData?.rpcUrl}</div>
                  <S.PcNetDiv>체인ID</S.PcNetDiv>
                  <div>{props.netData?.chainId}</div>
                  <S.PcNetDiv>통화 기호</S.PcNetDiv>
                  <div>eth</div>
                  <S.PcNetDiv>블록탐색기 URL</S.PcNetDiv>
                  <div>
                    {" "}
                    <Link href={`${props.netData?.explorer}`}>
                      <a target="_blank">
                        <div style={{ fontSize: "1.3rem" }}>
                          {props.netData?.explorer}
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </Modal>
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
                    disabled={empty}
                  >
                    수동 추가
                  </Button>,
                ]}
              >
                <S.PcModal>
                  <S.PcFlexbox>
                    <S.PcTitle>새 RPC URL</S.PcTitle>
                    <S.PcInput
                      onChange={props.onChangeRPC}
                      placeholder="추가하고싶은 RPC URL을 입력하세요."
                    />
                    <div style={{ color: "red" }}>
                      {" "}
                      {props.value.length !== 0 ? props.error : ""}
                      {/* {props.error} */}
                    </div>
                  </S.PcFlexbox>
                  <S.PcFlexbox>
                    <S.PcTitle>네트워크 이름</S.PcTitle>
                    <S.PcInput
                      disabled={empty}
                      value={props?.data?.networkName}
                    />
                  </S.PcFlexbox>
                  <S.PcFlexbox>
                    <S.PcTitle>체인 ID</S.PcTitle>
                    <S.PcInput disabled={empty} value={props?.data?.chainId} />
                  </S.PcFlexbox>
                  <S.PcFlexbox>
                    <S.PcTitle>심볼</S.PcTitle>
                    <S.PcInput disabled={empty} value={props?.data?.Symbol} />
                  </S.PcFlexbox>
                  <S.PcFlexbox>
                    <S.PcTitle>블록 탐색기 URL </S.PcTitle>
                    <S.PcInput disabled={empty} value={props?.data?.explorer} />
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
              {props.dummyList.map((el) => {
                return (
                  <>
                    <S.PcListBox
                      key={uuidv4()}
                      onClick={() => {
                        props.onClickNetwork(el.url);
                      }}
                    >
                      <S.PcImgBox>
                        <S.PcListImg src={el.src} />
                        <S.PcList>{el.name}</S.PcList>
                      </S.PcImgBox>
                      <S.PcImgAdd src="/image/addnewsmall.png" />
                    </S.PcListBox>
                  </>
                );
              })}
              <Modal
                title="이 네트워크를 추가할까요?"
                open={props.isModalOpen}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
                footer={[
                  <Button
                    key="back"
                    onClick={props.handleCancel}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    취소
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={props.handleOk}
                    style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                  >
                    추가
                  </Button>,
                ]}
              >
                <div
                  style={{
                    border: "1px solid black",
                    padding: 15,
                    margin: 20,
                    fontSize: "2.1rem",
                    borderRadius: "15px",
                  }}
                >
                  <S.PcNetDiv>네트워크 이름</S.PcNetDiv>
                  <div>{props.netData?.networkName}</div>
                  <S.PcNetDiv>네트워크 URL</S.PcNetDiv>
                  <div>{props.netData?.rpcUrl}</div>
                  <S.PcNetDiv>체인ID</S.PcNetDiv>
                  <div>{props.netData?.chainId}</div>
                  <S.PcNetDiv>통화 기호</S.PcNetDiv>
                  <div>eth</div>
                  <S.PcNetDiv>블록탐색기 URL</S.PcNetDiv>
                  <div>
                    {" "}
                    <Link href={`${props.netData?.explorer}`}>
                      <a target="_blank">
                        <div style={{ fontSize: "1.3rem" }}>
                          {props.netData?.explorer}
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </Modal>
            </S.PcBottom>
          </S.PcWrapper>
        </>
      </PC>
    </>
  );
}
