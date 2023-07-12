import { useEffect } from "react";
import * as S from "./contracts.styles";
import { styled } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import { Button, Checkbox, Divider, Input, Modal, Radio, Select } from "antd";
import { IContractPresenter } from "./contracts.types";
import ToastUiComponent from "./toast";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LoadingOutlined,
} from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}
const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{
      children: <span className="MuiTabs-indicatorSpan" />,
    }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    border: "1px solid #0c70f2",
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(25),
  marginRight: theme.spacing(1),
  color: "gray",
  // tab 클릭시
  "&.Mui-selected": {
    color: "#0c70f2",
    backgroundColor: "#fffdf2",
    borderRadius: "10px",
  },
}));

const { Option } = Select;

export default function ContractsComponentIndex(props: IContractPresenter) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  return (
    <>
      <Mobile>
        <div>hi</div>
      </Mobile>
      <PC>
        <Box sx={{ width: "100%" }} data-aos="fade-left">
          <Box
            sx={{
              width: "80%",
              margin: "0 auto",
              paddingTop: 5,
            }}
          >
            <StyledTabs
              value={props.value}
              onChange={props.handleChange}
              aria-label="styled tabs example"
              sx={{
                "& button:hover": { color: "#0c70f2" },
              }}
            >
              <StyledTab label="ERC20" />
              <StyledTab label="ERC721" />
              <StyledTab label="ERC1155" />
            </StyledTabs>
            <Box>
              <S.PcWrapper>
                <S.PcLeft>
                  <>
                    <S.PcHeader>
                      <div style={{ display: "flex", fontSize: "2.4rem" }}>
                        <div style={{ color: "red" }}>*</div>
                        <div style={{ paddingLeft: 5 }}>SETTINGS</div>
                      </div>
                    </S.PcHeader>
                    <div style={{ height: 100 }}>
                      <S.PcArticle>
                        <div
                          style={{
                            width: "20%",
                            fontSize: "1.5rem",
                            margin: "10px 10px 10px 0px",
                          }}
                        >
                          Name
                        </div>
                        {props.value === 2 ? (
                          <></>
                        ) : (
                          <div
                            style={{
                              width: "10%",
                              fontSize: "1.5rem",
                              margin: "10px",
                            }}
                          >
                            Symbol
                          </div>
                        )}
                        <div
                          style={{
                            width: "25%",
                            margin: "10px",
                            fontSize: "1.5rem",
                            color: "gray",
                          }}
                        >
                          {props.value === 0 && "Premint"}
                          {props.value === 1 && "BaseURI"}
                          {props.value === 2 && "URI"}
                        </div>
                      </S.PcArticle>
                      <S.PcArticle>
                        <Input
                          style={{ width: "20%", margin: "5px 10px 10px 0px" }}
                          onChange={props.onChangeName}
                          value={props.name}
                        />
                        {props.value === 2 ? (
                          ""
                        ) : (
                          <Input
                            style={{
                              width: "10%",
                              margin: "5px 10px 10px 10px",
                            }}
                            onChange={props.onChangeSymbol}
                            value={props.symbol}
                          />
                        )}
                        <Input
                          style={{ width: "25%", margin: "5px 10px 10px 10px" }}
                          placeholder={props.value === 0 ? "0" : "https://..."}
                          onChange={props.onChangeUri}
                          value={props.uri}
                        />
                      </S.PcArticle>
                    </div>
                    <Divider />
                    <S.PcHeader>FEATURES</S.PcHeader>
                    <div
                      style={{
                        height: 60,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Checkbox.Group onChange={props.onChangeFeature}>
                        <div
                          style={{
                            height: 60,
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {props.value === 0 &&
                            props.erc20.map((el, i) => {
                              return (
                                <S.PcDiv key={i}>
                                  <Checkbox value={el} />
                                  <S.PcText>{el}</S.PcText>
                                </S.PcDiv>
                              );
                            })}
                          {props.value === 1 &&
                            props.erc721.map((el, i) => {
                              return (
                                <S.PcDiv key={i}>
                                  <Checkbox value={el} />
                                  <S.PcText>{el}</S.PcText>
                                </S.PcDiv>
                              );
                            })}
                          {props.value === 2 &&
                            props.erc1155.map((el, i) => {
                              return (
                                <S.PcDiv key={i}>
                                  <Checkbox value={el} />
                                  <S.PcText>{el}</S.PcText>
                                </S.PcDiv>
                              );
                            })}
                        </div>
                      </Checkbox.Group>
                    </div>
                    <Divider />
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <S.PcHeader style={{ width: "35%" }}>
                        ACCESS CONTROL
                        <Checkbox
                          style={{ marginLeft: 10 }}
                          onChange={props.onChangeAccess}
                          checked={props.access}
                          disabled={props.status === true}
                        />
                      </S.PcHeader>
                      <S.PcHeader>
                        UPGRADEABILITY
                        <Checkbox
                          style={{ marginLeft: 10 }}
                          onChange={props.onChangeUpgrade}
                          checked={props.upgrade}
                        />
                      </S.PcHeader>
                    </div>
                    <div style={{ display: "flex", marginBottom: 20 }}>
                      <div style={{ height: 50, width: "35%" }}>
                        <div style={{ marginTop: 20 }}>
                          <Radio.Group
                            onChange={props.onChangeOwnable}
                            value={props.ownable}
                          >
                            <Radio value={1} style={{ color: "gray" }}>
                              Ownable
                            </Radio>
                            <Radio value={2} style={{ color: "gray" }}>
                              Roles
                            </Radio>
                          </Radio.Group>
                        </div>
                      </div>
                      <div style={{ height: 50 }}>
                        <div style={{ marginTop: 20 }}>
                          <Radio.Group
                            onChange={props.onChangeTransparent}
                            value={props.transparent}
                          >
                            <Radio value={1} style={{ color: "gray" }}>
                              Transparent
                            </Radio>
                            <Radio value={2} style={{ color: "gray" }}>
                              UUPS
                            </Radio>
                          </Radio.Group>
                        </div>
                      </div>
                    </div>
                    <Divider />
                    <S.PcHeader>INFO</S.PcHeader>
                    <div>
                      <div
                        style={{
                          fontSize: "1.4rem",
                          marginTop: 10,
                          marginBottom: 10,
                          color: "gray",
                        }}
                      >
                        Security Contract
                      </div>
                      <Input
                        style={{ width: "30%" }}
                        onChange={props.onChangeContract}
                      />
                      <div
                        style={{
                          fontSize: "1.4rem",
                          marginTop: 10,
                          marginBottom: 10,
                          color: "gray",
                        }}
                      >
                        License
                      </div>
                      <Input
                        style={{ width: "30%" }}
                        onChange={props.onChangeLicense}
                      />
                    </div>
                  </>
                </S.PcLeft>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 10,
                  }}
                >
                  <S.PcButton onClick={props.onClickWizard}>Wizard</S.PcButton>
                </div>
                <S.PcRight data={props.data}>
                  <ToastUiComponent data={props.data} />
                </S.PcRight>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 20,
                    padding: 10,
                  }}
                >
                  <S.PcButton onClick={props.onClickCompile}>
                    {props.loading ? <LoadingOutlined /> : "Compile"}
                  </S.PcButton>
                  <S.PcButton
                    disabled={props.result.length === 0}
                    onClick={props.onClickList}
                  >
                    Deploy
                  </S.PcButton>
                </div>
                <Modal
                  destroyOnClose={true}
                  open={props.open}
                  title="Smart Contract Deploy"
                  onOk={props.handleOk}
                  onCancel={props.handleCancel}
                  footer={[
                    <Button key="back" onClick={props.handleCancel}>
                      취소
                    </Button>,
                    <Button
                      key="submit"
                      type="primary"
                      onClick={
                        props.check === true
                          ? props.handleOk
                          : props.onClickFeeCheck
                      }
                    >
                      {props.check === true ? "배포" : "수수료 확인"}
                    </Button>,
                  ]}
                >
                  <>
                    <div style={{ fontSize: 14 }}>
                      배포할 네트워크 및 지갑을 선택해주세요.
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 30,
                      }}
                    >
                      <div style={{ fontSize: 13, marginRight: 20, width: 50 }}>
                        네트워크:
                      </div>
                      <Select
                        placeholder="네트워크 선택"
                        style={{ width: "50%" }}
                        allowClear
                        onChange={props.onChangeNetwork}
                      >
                        {props.network.map((el: any) => (
                          <Option value={el.networkId} key={uuidv4()}>
                            <div style={{ fontSize: "1.3rem" }}>
                              {el.networkName}
                            </div>
                          </Option>
                        ))}
                      </Select>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 30,
                        marginBottom: 30,
                      }}
                    >
                      <div style={{ fontSize: 13, marginRight: 20, width: 50 }}>
                        지갑:
                      </div>
                      <Select
                        placeholder="지갑 선택"
                        style={{ width: "50%" }}
                        allowClear
                        onChange={props.onChangeWallet}
                      >
                        {props.wallet.map((el: any) => (
                          <Option value={el.walletId} key={uuidv4()}>
                            <div style={{ fontSize: "1.3rem" }}>
                              {el.walletName}
                              <br />
                              주소:{" "}
                              {el.address.substring(0, 3) +
                                "******" +
                                el.address.substring(
                                  el.address.length - 3,
                                  el.address.length
                                )}
                            </div>
                          </Option>
                        ))}
                      </Select>
                    </div>
                    <Button onClick={props.onClickOnlyKlay}>
                      대납 지갑 사용하기
                    </Button>
                    <br />
                    {props.only === true ? (
                      <Input.Password
                        onChange={props.onChangeOnlyKlay}
                        placeholder="대납 지갑의 비밀 키를 입력하세요."
                        style={{ width: 300, marginTop: 15 }}
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    ) : (
                      <></>
                    )}
                    {props.check && (
                      <>
                        <Divider />
                        <div
                          style={{
                            fontSize: 22,
                            marginBottom: 25,
                            padding: "10px 10px 10px 0px",
                            fontWeight: 530,
                            lineHeight: 1.7,
                            textAlign: "right",
                          }}
                        >
                          <div>가스비 : {props?.depFee?.gasPrice} </div>
                          <div>
                            전송 트랜잭션 가스비: {props?.depFee?.estimatedGas}{" "}
                          </div>
                          <div>최종 수수료: {props?.depFee?.txFee} </div>
                        </div>
                      </>
                    )}
                  </>
                </Modal>
                <Modal
                  open={props.success}
                  title="Smart Contract Deploy"
                  onOk={props.successOk}
                  onCancel={props.successCancel}
                ></Modal>
              </S.PcWrapper>
            </Box>
          </Box>
        </Box>
      </PC>
    </>
  );
}
