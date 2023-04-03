import { DownloadOutlined } from "@ant-design/icons";
import { Button, Input, Modal, QRCode } from "antd";
import { Mobile, PC } from "../../../../commons/hooks/mediaquery";
import KeystoreContainer from "../../keystore/keystore.container";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import * as S from "./detail.styles";
import { IDetailPresenter } from "./detail.types";

export default function DetailPresenter(props: IDetailPresenter) {
  let arr = props.address;

  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  return (
    <>
      <Mobile>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.change === true ? (
            <div
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* 받아오는 계정 명을 defaultValue에 넣어줘야 수정 가능 */}
              <S.MoEditInput
                defaultValue="attosiss"
                style={{
                  height: 30,
                  padding: 10,
                  fontSize: "1.4rem",
                  borderRadius: "15px",
                  border: "1px solid gray",
                }}
              />
              <div>
                <S.MoEditName>수정</S.MoEditName>
                <S.MoEditCancel onClick={props.onChangeCancel}>
                  취소
                </S.MoEditCancel>
              </div>
            </div>
          ) : (
            <>
              {" "}
              <div
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "600",
                  marginTop: 20,
                }}
              >
                attosiss
              </div>
              <img
                onClick={props.onChangeEdit}
                src="/image/edit.png"
                style={{ width: "7%", marginLeft: 5, marginTop: 20 }}
              />
            </>
          )}
        </div>
        <div
          style={{
            width: "70%",
            margin: "0 auto",
            marginTop: 20,
          }}
        >
          <QRCode
            value="0xeccfe9da751317921ef767d2a96975188bfe3d96"
            style={{ margin: "0 auto" }}
          />
        </div>
        <LightTooltip title={props.isCopy ? "Success!" : "Paste!"}>
          <S.MoModalAddress onClick={() => props.handleCopyClipBoard(arr)}>
            {arr}
            <img
              src="/image/clipboard.png"
              style={{ width: "5%", marginLeft: 5 }}
            />
          </S.MoModalAddress>
        </LightTooltip>
        <S.MoPrivateKey onClick={props.showSecret}>
          비공개키 내보내기
        </S.MoPrivateKey>
        <Modal
          destroyOnClose={true}
          open={props.secret}
          onOk={props.secretOk}
          onCancel={props.secretCancel}
          bodyStyle={{ height: 380 }}
          footer={[
            <Button
              key="back"
              onClick={props.secretCancel}
              style={{ fontSize: 20, paddingTop: 0, height: 40 }}
            >
              취소
            </Button>,
            <Button
              key="submit"
              type="primary"
              onClick={props.secretOk}
              style={{ fontSize: 20, paddingTop: 0, height: 40 }}
            >
              확인
            </Button>,
          ]}
        >
          <div
            style={{
              fontSize: "1.6rem",
              fontWeight: "600",
              marginTop: 20,
              textAlign: "center",
            }}
          >
            attosiss
          </div>
          <div
            style={{
              width: "100%",
              padding: "10px 0px 20px 0px",
              textAlign: "center",
              borderBottom: "1px solid gainsboro",
              fontSize: "1.2rem",
            }}
          >
            0x7168BD1A2340994430310f7d184450A596B3177c
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "1.4rem",
              fontWeight: "600",
              paddingTop: 20,
            }}
          >
            비공개키 표시
          </div>
          {props.status === true ? (
            <>
              {" "}
              <div
                style={{
                  fontSize: "1.4rem",
                  paddingTop: 30,
                  marginBottom: 10,
                }}
              >
                비공개키
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  fontSize: "1.4rem",
                  paddingTop: 30,
                  marginBottom: 10,
                }}
              >
                DreamWallet 비밀번호를 입력하세요.
              </div>
            </>
          )}

          {props.status === true ? (
            <div
              style={{
                height: 40,
                fontSize: "1.2rem",
                padding: 10,
                marginBottom: 30,
                border: "1px solid red",
              }}
            >
              비공개키 들어감
            </div>
          ) : (
            <div style={{ marginBottom: 20 }}>
              <Input.Password
                style={{
                  width: "100%",
                  height: 40,
                  fontSize: "1.5rem",
                  padding: 10,
                  marginBottom: 20,
                }}
                onChange={props.onChangePassword}
              />
              <Button
                type="primary"
                disabled={!props.password}
                onClick={props.onClickPassword}
                style={{
                  width: "40%",
                  height: 40,
                  marginLeft: 70,
                }}
              >
                확인
              </Button>{" "}
            </div>
          )}
          <div
            style={{
              fontSize: "1.1rem",
              margin: "0 auto",
              background: "#fffdf2",
              color: "#DD5757",
              textAlign: "center",
            }}
          >
            경고: 이 키를 노출하지 마세요! <br />
            비공개 키가 있는 사람이라면 누구든 귀하의 계정에 있는 자산을 소유할
            수 있습니다.
          </div>
          {props.status === true && (
            <>
              <Button
                type="link"
                icon={<DownloadOutlined />}
                style={{
                  marginTop: 20,
                  fontSize: "18px",
                  width: "50%",
                  margin: "0 auto",
                }}
                onClick={props.showKeystore}
              >
                키스토어 파일로 저장
              </Button>
              <Modal
                bodyStyle={{ height: 380 }}
                destroyOnClose={true}
                open={props.keyOpen}
                onOk={props.keystoreOk}
                onCancel={props.keystoreCancel}
                footer={[
                  <Button
                    key="back"
                    onClick={props.keystoreCancel}
                    style={{
                      fontSize: 18,
                      paddingTop: 0,
                      height: 35,
                    }}
                  >
                    취소
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={props.keystoreOk}
                    style={{
                      fontSize: 18,
                      paddingTop: 0,
                      height: 35,
                    }}
                  >
                    완료
                  </Button>,
                ]}
              >
                <KeystoreContainer
                  setKeyPass={props.setKeyPass}
                  setKeyPassConfirm={props.setKeyPassConfirm}
                  keypass={props.keypass}
                  keypassConfirm={props.keypassConfirm}
                />
              </Modal>
            </>
          )}
        </Modal>
      </Mobile>
      <PC>
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.change === true ? (
              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                }}
              >
                {/* 받아오는 계정 명을 defaultValue에 넣어줘야 수정 가능 */}
                <S.PcEditInput
                  defaultValue={props.userNm}
                  value={props.edit}
                  style={{
                    height: 30,
                    padding: 10,
                    fontSize: "1.4rem",
                    borderRadius: "15px",
                    border: "1px solid gray",
                  }}
                  onChange={props.onChangeEditName}
                />
                <S.PcEditName onClick={props.onClickEdit}>수정</S.PcEditName>
                <S.PcEditCancel onClick={props.onChangeCancel}>
                  취소
                </S.PcEditCancel>
              </div>
            ) : (
              <>
                <div
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "600",
                    marginTop: 20,
                  }}
                >
                  {props.change === false ? props.edit : props.userNm}
                </div>
                <img
                  src="/image/edit.png"
                  style={{
                    width: "4%",
                    marginLeft: 5,
                    marginTop: 20,
                    cursor: "pointer",
                  }}
                  onClick={props.onChangeEdit}
                />
              </>
            )}
          </div>
          <div
            style={{
              width: "35%",
              margin: "0 auto",
              marginTop: 20,
            }}
          >
            <QRCode value={props.address} />
          </div>
          <LightTooltip title={props.isCopy ? "Success!" : "Paste!"}>
            <S.PcModalAddress onClick={() => props.handleCopyClipBoard(arr)}>
              {arr}
              <img
                src="/image/clipboard.png"
                style={{ width: "5%", marginLeft: 5 }}
              />
            </S.PcModalAddress>
          </LightTooltip>
          <S.PcPrivateKey onClick={props.showSecret}>
            비공개키 내보내기
          </S.PcPrivateKey>
          <Modal
            destroyOnClose={true}
            open={props.secret}
            onOk={props.secretOk}
            onCancel={props.secretCancel}
            bodyStyle={{ height: 380 }}
            footer={[
              <Button
                key="back"
                onClick={props.secretCancel}
                style={{ fontSize: 20, paddingTop: 0, height: 40 }}
              >
                취소
              </Button>,
              <Button
                key="submit"
                type="primary"
                onClick={props.secretOk}
                style={{ fontSize: 20, paddingTop: 0, height: 40 }}
              >
                확인
              </Button>,
            ]}
          >
            <div
              style={{
                fontSize: "1.8rem",
                fontWeight: "600",
                marginTop: 20,
                textAlign: "center",
              }}
            >
              {props.userNm}
            </div>
            <div
              style={{
                width: "100%",
                padding: "20px 0px 20px 0px",
                textAlign: "center",
                borderBottom: "1px solid gainsboro",
                fontSize: "1.4rem",
              }}
            >
              {props.address}
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "1.6rem",
                fontWeight: "600",
                paddingTop: 20,
              }}
            >
              비공개키 표시
            </div>
            {props.status === true ? (
              <>
                {" "}
                <div
                  style={{
                    fontSize: "1.4rem",
                    paddingTop: 30,
                    marginBottom: 10,
                  }}
                >
                  비공개키
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    fontSize: "1.4rem",
                    paddingTop: 30,
                    marginBottom: 10,
                  }}
                >
                  DreamWallet 비밀번호를 입력하세요.
                </div>
              </>
            )}

            {props.status === true ? (
              <div
                style={{
                  width: "100%",
                  fontSize: "1.5rem",
                  padding: 10,
                  marginBottom: 30,
                  borderRadius: 10,
                  border: "1px solid lightgray",
                }}
              >
                {props.privatekey}
              </div>
            ) : (
              <>
                <Input.Password
                  style={{
                    width: "80%",
                    height: 40,
                    fontSize: "1.5rem",
                    padding: 10,
                  }}
                  onChange={props.onChangePassword}
                />
                <S.PcError>{props.error}</S.PcError>
                <Button
                  type="primary"
                  disabled={!props.password}
                  onClick={props.onClickPassword}
                >
                  확인
                </Button>{" "}
              </>
            )}

            <div
              style={{
                fontSize: "1.3rem",
                margin: "0 auto",
                background: "#fffdf2",
                color: "#DD5757",
                textAlign: "center",
              }}
            >
              경고: 이 키를 노출하지 마세요! <br />
              비공개 키가 있는 사람이라면 누구든 귀하의 계정에 있는 자산을
              소유할 수 있습니다.
            </div>
            {props.status === true && (
              <>
                <Button
                  type="link"
                  icon={<DownloadOutlined />}
                  style={{ marginTop: 10 }}
                  onClick={props.showKeystore}
                >
                  키스토어 파일로 저장
                </Button>
                <Modal
                  bodyStyle={{ height: 375 }}
                  destroyOnClose={true}
                  open={props.keyOpen}
                  onOk={props.keystoreOk}
                  onCancel={props.keystoreCancel}
                  footer={[
                    <Button
                      key="back"
                      onClick={props.keystoreCancel}
                      style={{
                        fontSize: 18,
                        paddingTop: 0,
                        height: 35,
                      }}
                    >
                      취소
                    </Button>,
                    <Button
                      key="submit"
                      type="primary"
                      onClick={props.keystoreOk}
                      style={{
                        fontSize: 18,
                        paddingTop: 0,
                        height: 35,
                      }}
                    >
                      완료
                    </Button>,
                  ]}
                >
                  <KeystoreContainer
                    setKeyPass={props.setKeyPass}
                    setKeyPassConfirm={props.setKeyPassConfirm}
                    keypass={props.keypass}
                    keypassConfirm={props.keypassConfirm}
                  />
                </Modal>
              </>
            )}
          </Modal>
        </>
      </PC>
    </>
  );
}
