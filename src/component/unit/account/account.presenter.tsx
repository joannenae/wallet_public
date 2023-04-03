import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import * as S from "./account.styles";
import { Button, Input, Modal, SelectProps } from "antd";
import { Tabs } from "antd";
import { Select } from "antd";
import { IAccountPresenter } from "./account.types";
const TabPane = Tabs.TabPane;

export default function AccountPresenter(props: IAccountPresenter) {
  return (
    <>
      <Mobile>
        <S.PcAccountHeaderBox>
          <S.PcAccountHeader>지갑 관리</S.PcAccountHeader>
          <img
            src="/image/close.png"
            style={{
              width: "6%",
              position: "absolute",
              right: 0,
              marginRight: 10,
            }}
            onClick={props.onClickCloseAccount}
          />
        </S.PcAccountHeaderBox>
        <div style={{ overflowY: "scroll", height: 200 }}>
          <S.PcAccountContainer>
            <S.PcAccountName>attosiss</S.PcAccountName>
            <S.PcAccountAmount>299.616891 KLAY</S.PcAccountAmount>
          </S.PcAccountContainer>
          <S.PcAccountContainer>
            <S.PcAccountName>attosiss</S.PcAccountName>
            <S.PcAccountAmount>299.616891 KLAY</S.PcAccountAmount>
          </S.PcAccountContainer>
        </div>
        <S.PcAccountFooter>
          <S.PcAccountButton
            onClick={() => {
              props.createModal();
              props.changeCreate();
            }}
          >
            생성
          </S.PcAccountButton>
          <Modal
            destroyOnClose={true}
            open={props.isCreateModal}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
            width={600}
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
                확인
              </Button>,
            ]}
          >
            <div
              style={{
                width: "100%",
                paddingTop: 20,
              }}
            >
              <Tabs
                onTabClick={props.onChangeTab}
                activeKey={props.tab}
                destroyInactiveTabPane={true}
              >
                <TabPane tab="지갑 생성" key="1">
                  {props.tab === "1" && (
                    <div
                      style={{
                        fontSize: "1.5rem",
                        padding: "30px 10px 10px 10px",
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        color: "gray",
                      }}
                    >
                      계정 이름은 본인에게만 보여집니다.
                      <S.PCAccountInput type="text" />
                    </div>
                  )}
                </TabPane>
                <TabPane tab="지갑 가져오기" key="2">
                  {props.tab === "2" && (
                    <div style={{ width: "60%", margin: "0 auto" }}>
                      <div style={{ paddingTop: 20, fontSize: "1.3rem" }}>
                        지갑 가져오기
                      </div>
                      <Select
                        labelInValue
                        //@ts-ignore
                        defaultValue={{
                          value: "privatekey",
                          label: "개인키",
                        }}
                        style={{
                          width: "100%",
                          height: 45,
                          marginTop: 10,
                        }}
                        onChange={props.selectChange}
                        options={[
                          {
                            value: "privatekey",
                            label: "개인키",
                          },
                          {
                            value: "keystore",
                            label: "키 스토어(key store)",
                          },
                        ]}
                      />
                      {props.status === "keystore" ? (
                        <>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "2rem",
                              // width: "100%",
                              width: 400,
                              marginTop: 10,
                            }}
                          >
                            <div>파일 업로드 (JSON) :</div>
                            {!props.name ? (
                              <label
                                htmlFor="input-file"
                                style={{
                                  marginLeft: 10,
                                  color: "#0c70f2",
                                  cursor: "pointer",
                                  textDecoration: "underline",
                                }}
                              >
                                업로드하러 가기
                              </label>
                            ) : (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: 10,
                                  color: "#0c70f2",
                                  cursor: "pointer",
                                  textDecoration: "underline",
                                  fontSize: "2rem",
                                  width: "100%",
                                }}
                              >
                                <div>{props.name}</div>
                                <img
                                  onClick={props.destoryFile}
                                  src="/image/close.png"
                                  style={{ width: 15, marginLeft: 5 }}
                                />
                              </div>
                            )}
                            <input
                              type="file"
                              style={{ display: "none" }}
                              id="input-file"
                              onChange={props.onChangeFile}
                            />
                            {/* <S.PcUpload type="file" /> */}
                          </div>
                          <div style={{ paddingTop: 20, fontSize: "1.3rem" }}>
                            키 스토어 비밀번호 입력
                          </div>
                          <Input.Password
                            style={{
                              width: "100%",
                              height: 35,
                              marginTop: 10,
                              marginBottom: 40,
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <div style={{ paddingTop: 20, fontSize: "1.3rem" }}>
                            개인키 입력
                          </div>
                          <Input.Password
                            style={{
                              width: "100%",
                              height: 35,
                              marginTop: 10,
                              marginBottom: 40,
                            }}
                          />
                        </>
                      )}
                    </div>
                  )}
                </TabPane>
              </Tabs>
            </div>
          </Modal>
          <S.PcAccountButton
            onClick={() => {
              props.createModal();
              props.changeGet();
            }}
          >
            가져오기
          </S.PcAccountButton>
        </S.PcAccountFooter>
      </Mobile>
      <PC>
        <S.PcAccountHeaderBox>
          <S.PcAccountHeader>지갑 관리</S.PcAccountHeader>
          <img
            src="/image/close.png"
            style={{
              width: "6%",
              position: "absolute",
              right: 0,
              marginRight: 10,
            }}
            onClick={props.onClickCloseAccount}
          />
        </S.PcAccountHeaderBox>
        <div style={{ overflowY: "scroll", height: 200 }}>
          {props.userinfo.wallet.map((el) => {
            return (
              <S.PcAccountContainer>
                <S.PcAccountName>{el.walletNm}</S.PcAccountName>
                {el.token.map((v, i) => {
                  return <S.PcAccountAmount>{v.balance}</S.PcAccountAmount>;
                })}
              </S.PcAccountContainer>
            );
          })}
        </div>
        <S.PcAccountFooter>
          <S.PcAccountButton
            onClick={() => {
              props.createModal();
              props.changeCreate();
            }}
          >
            생성
          </S.PcAccountButton>
          <Modal
            destroyOnClose={true}
            open={props.isCreateModal}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
            width={600}
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
                onClick={() => {
                  props.tab === "1"
                    ? props.handleOk()
                    : props.onClickWalletPk();
                  props.status === "keystore" && props.onClickKeystore();
                }}
                style={{ fontSize: 18, paddingTop: 0, height: 35 }}
                disabled={
                  props.createName.length === 0 &&
                  props.privatekey.length === 0 &&
                  !props.name &&
                  props.keypassword.length === 0
                }
              >
                {props.tab === "1" ? "생성" : "가져오기"}
              </Button>,
            ]}
          >
            <div
              style={{
                width: "100%",
                paddingTop: 20,
              }}
            >
              <Tabs
                onTabClick={props.onChangeTab}
                activeKey={props.tab}
                destroyInactiveTabPane={true}
              >
                <TabPane tab="지갑 생성" key="1">
                  {props.tab === "1" && (
                    <div
                      style={{
                        fontSize: "1.5rem",
                        padding: "30px 10px 10px 10px",
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        color: "gray",
                      }}
                    >
                      계정 이름은 본인에게만 보여집니다.
                      <S.PCAccountInput
                        type="text"
                        onChange={props.onChangeCreate}
                      />
                    </div>
                  )}
                </TabPane>
                <TabPane tab="지갑 가져오기" key="2">
                  {props.tab === "2" && (
                    <div style={{ width: "90%", margin: "0 auto" }}>
                      <div style={{ paddingTop: 20, fontSize: "1.3rem" }}>
                        지갑 가져오기
                      </div>
                      <Select
                        labelInValue
                        //@ts-ignore
                        defaultValue={{
                          value: "privatekey",
                          label: "개인키",
                        }}
                        style={{
                          width: "100%",
                          height: 35,
                          padding: 1,
                          marginTop: 10,
                        }}
                        onChange={props.selectChange}
                        options={[
                          {
                            value: "privatekey",
                            label: "개인키",
                          },
                          {
                            value: "keystore",
                            label: "키 스토어(key store)",
                          },
                        ]}
                      />
                      {props.status === "keystore" ? (
                        <>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "2rem",
                              marginTop: 10,
                            }}
                          >
                            <div style={{ width: "17%" }}>
                              파일 업로드 (JSON) :
                            </div>
                            {!props.name ? (
                              <label
                                htmlFor="input-file"
                                style={{
                                  marginLeft: 10,
                                  color: "#0c70f2",
                                  cursor: "pointer",
                                  textDecoration: "underline",
                                }}
                              >
                                업로드하러 가기
                              </label>
                            ) : (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  color: "#0c70f2",
                                  cursor: "pointer",
                                  textDecoration: "underline",
                                  fontSize: "2rem",
                                  width: "100%",
                                }}
                              >
                                <div>{props.name}</div>
                                <img
                                  onClick={props.destoryFile}
                                  src="/image/close.png"
                                  style={{ width: 15, marginLeft: 5 }}
                                />
                              </div>
                            )}
                            <input
                              type="file"
                              style={{
                                display: "none",
                              }}
                              id="input-file"
                              onChange={props.onChangeFile}
                            />
                          </div>
                          <div style={{ paddingTop: 20, fontSize: "1.3rem" }}>
                            키 스토어 비밀번호 입력
                          </div>
                          <Input.Password
                            onChange={props.onChangeKeyPass}
                            style={{
                              width: "100%",
                              height: 35,
                              marginTop: 10,
                              marginBottom: 40,
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <div style={{ paddingTop: 20, fontSize: "1.3rem" }}>
                            개인키 입력
                          </div>
                          <Input.Password
                            onChange={props.onChangePrivateKey}
                            style={{
                              width: "100%",
                              height: 35,
                              marginTop: 10,
                              marginBottom: 40,
                            }}
                          />
                        </>
                      )}
                    </div>
                  )}
                </TabPane>
              </Tabs>
            </div>
          </Modal>
          <S.PcAccountButton
            onClick={() => {
              props.createModal();
              props.changeGet();
            }}
          >
            가져오기
          </S.PcAccountButton>
        </S.PcAccountFooter>
      </PC>
    </>
  );
}
