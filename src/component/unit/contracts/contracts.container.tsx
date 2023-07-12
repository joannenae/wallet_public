import { Modal, RadioChangeEvent } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import ContractsComponentIndex from "./contracts.presenter";

export default function ContractsContainer() {
  const erc20 = [
    "Mintable",
    "Burnable",
    "Pausable",
    "Permit",
    "Votes",
    "FlashMinting",
    "Snapshots",
  ];

  const erc721 = [
    "Mintable",
    "AutoIncrementIds",
    "Burnable",
    "Pausable",
    "Votes",
    "Enumerable",
    "URIStorage",
  ];

  const erc1155 = [
    "Mintable",
    "Burnable",
    "Pausable",
    "Updatable URI",
    "Supply",
  ];

  interface IFeature {
    Votes: boolean;
    Mintable: boolean;
    Burnable: boolean;
    Pausable: boolean;
    Permit: boolean;
    FlashMinting: boolean;
    Snapshots: boolean;
    URIStorage: boolean;
    AutoIncrementIds: boolean;
    Enumerable: boolean;
    Supply: boolean;
  }

  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [uri, setUri] = useState<any>();
  //feature
  const [feature, setFeature] = useState<IFeature | undefined>();
  // Access Control state
  const [access, setAccess] = useState(false);
  const [ownable, setOwnable] = useState(0);
  const [status, setStatus] = useState(false);
  // Upgradeability state
  const [upgrade, setUpgrade] = useState(false);
  const [transparent, setTransparent] = useState(0);
  // info
  const [contract, setContract] = useState("");
  const [license, setLicense] = useState("");
  // wizard data
  const [data, setData] = useState("");
  // compile data
  const [result, setResult] = useState([]);
  const [abi, setAbi] = useState([]);
  const [bytecode, setByteCode] = useState("");
  //loading
  const [loading, setLoading] = useState(false);
  // Deploy Modal
  const [open, setOpen] = useState(false);
  const [network, setNetwork] = useState([]);
  const [wallet, setWallet] = useState([]);
  const [netFee, setNetFee] = useState("");
  const [walletFee, setWalletFee] = useState("");
  const [check, setCheck] = useState(false);
  // Deploy fee
  const [depFee, setDepFee] = useState();
  //대납지갑
  const [only, setOnly] = useState(false);
  const [klayaddress, setKlayAddress] = useState("");
  // 배포 성공 모달
  const [success, setSuccess] = useState(false);

  // tab
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setData("");
    setName("");
    setSymbol("");
    setUri("");
  };

  // --------------------------Settings-----------------
  // Name
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  //Symbol
  const onChangeSymbol = (event: ChangeEvent<HTMLInputElement>) => {
    setSymbol(event.target.value);
  };
  //premint , baseUri , uri
  const onChangeUri = (event: ChangeEvent<HTMLInputElement>) => {
    setUri(event.target.value);
  };

  // --------------------Features - AccessControl On--------------

  const onChangeFeature = (checkedValues: CheckboxValueType[]) => {
    // checkedValues 배열 -> 체크 되면 true , 아니면 false 객체로 만들어주는 로직
    let tempObj: any = {};
    if (checkedValues) {
      if (value === 0) {
        erc20.forEach(
          (el) =>
            (tempObj = {
              ...tempObj,
              [el]: checkedValues.includes(el) ? true : false,
            })
        );
        setFeature(tempObj);
      }
      if (value === 1) {
        erc721.forEach(
          (el) =>
            (tempObj = {
              ...tempObj,
              [el]: checkedValues.includes(el) ? true : false,
            })
        );
        setFeature(tempObj);
      }
      if (value === 2) {
        erc1155.forEach(
          (el) =>
            (tempObj = {
              ...tempObj,
              [el]: checkedValues.includes(el) ? true : false,
            })
        );
        setFeature(tempObj);
      }

      //------------------------
      const result = checkedValues.some((i) =>
        // @ts-ignore
        ["Mintable", "Pausable", "Snapshots", "Updatable URI"].includes(i)
      );
      if (result === true) {
        setAccess(true);
        setOwnable(1);
        setStatus(true);
      } else {
        setStatus(false);
      }
    }
  };
  // --------------AccessControl Checkbox & radio(Ownable) -------------
  const onChangeAccess = (e: CheckboxChangeEvent) => {
    setAccess(e.target.checked);
    if (e.target.checked === true) {
      setOwnable(1);
    } else {
      setOwnable(0);
    }
  };
  const onChangeOwnable = (e: RadioChangeEvent) => {
    console.log("value", e.target.value);
    setOwnable(e.target.value);
    if (e.target.value) {
      setAccess(true);
    }
  };

  // ---------------Upgradeability CheckBox & radio(transparent)-----------
  const onChangeUpgrade = (e: CheckboxChangeEvent) => {
    setUpgrade(e.target.checked);
    if (e.target.checked === true) {
      setTransparent(1);
    } else {
      setTransparent(0);
    }
    if (e.target.checked === false) {
      setAccess(false);
      setOwnable(0);
    }
  };
  const onChangeTransparent = (e: RadioChangeEvent) => {
    setTransparent(e.target.value);
    if (e.target.value) {
      setUpgrade(true);
    }
    if (e.target.value === 2) {
      setAccess(true);
      setOwnable(1);
    }
  };

  //----------- info ----------
  const onChangeContract = (event: ChangeEvent<HTMLInputElement>) => {
    setContract(event.target.value);
  };
  const onChangeLicense = (event: ChangeEvent<HTMLInputElement>) => {
    setLicense(event.target.value);
  };

  //-----------wizard------------------

  const onClickWizard = async () => {
    if (value === 0) {
      erc20Wizard();
    }
    if (value === 1) {
      erc721Wizard();
    }
    if (value === 2) {
      erc1155Wizard();
    }
  };

  const erc20Wizard = async () => {
    if (!name || !symbol || !uri) {
      Modal.confirm({ content: "필수항목을 선택해주세요!" });
      return;
    } else {
      try {
        await axios
          .post("/v1/contract/20/wizard", {
            name: name,
            symbol: symbol,
            premint: uri,
            votes: feature?.Votes,
            premit: feature?.Permit,
            mintable: feature?.Mintable,
            burnable: feature?.Burnable,
            pausable: feature?.Pausable,
            flashmint: feature?.FlashMinting,
            snapshots: feature?.Snapshots,
            access: ownable === 1 ? "ownable" : "roles" && null,
            upgradeable: transparent === 1 ? "transparent" : "uups" && null,
            info: {
              securityContract: contract || null,
              license: license || null,
            },
          })
          .then((response) => {
            console.log("resp", response);
            if (response.status === 200) {
              console.log(response.data);
              setData(response.data);
            }
            if (response.status !== 200) {
              Modal.error({ content: response.data });
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const erc721Wizard = async () => {
    if (!name || !symbol || !uri) {
      Modal.confirm({ content: "필수항목을 선택해주세요!" });
      return;
    } else {
      try {
        await axios
          .post("/v1/contract/721/wizard", {
            name: name,
            symbol: symbol,
            baseUri: uri,
            votes: feature?.Votes,
            mintable: feature?.Mintable,
            burnable: feature?.Burnable,
            pausable: feature?.Pausable,
            uriStorage: feature?.URIStorage,
            incremental: feature?.AutoIncrementIds,
            enumerable: feature?.Enumerable,
            access: ownable === 1 ? "ownable" : "roles" && null,
            upgradeable: transparent === 1 ? "transparent" : "uups" && null,
            info: {
              securityContract: contract || null,
              license: license || null,
            },
          })
          .then((response) => {
            console.log("resp", response);
            if (response.status === 200) {
              console.log(response.data);
              setData(response.data);
            }
            if (response.status !== 200) {
              Modal.error({ content: response.data });
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const erc1155Wizard = async () => {
    if (!name || !uri) {
      Modal.confirm({ content: "필수항목을 선택해주세요!" });
      return;
    } else {
      try {
        await axios
          .post("/v1/contract/1155/wizard", {
            name: name,
            uri: uri,
            votes: feature?.Votes,
            mintable: feature?.Mintable,
            burnable: feature?.Burnable,
            supply: feature?.Supply,
            access: ownable === 1 ? "ownable" : "roles" && null,
            upgradeable: transparent === 1 ? "transparent" : "uups" && null,
            info: {
              securityContract: contract || null,
              license: license || null,
            },
          })
          .then((response) => {
            console.log("resp", response);
            if (response.status === 200) {
              console.log(response.data);
              setData(response.data);
            }
            if (response.status !== 200) {
              Modal.error({ content: response.data });
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  //-------compile ----------------

  const onClickCompile = () => {
    if (value === 0) {
      erc20Compile();
    }
    if (value === 1) {
      erc721Compile();
    }
    if (value === 2) {
      erc1155Compile();
    }
  };

  // 앞글자만 대문자로 바꿔주는 함수 - contractName은 앞글자 무조건 대문자기 때문에 비교하기 위헤
  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const erc20Compile = async () => {
    if (!name || !symbol || !uri) {
      Modal.confirm({ content: "필수항목을 선택해주세요!" });
      return;
    } else {
      setLoading(true);
      try {
        await axios
          .post("/v1/contract/20/compile", {
            name: name,
            symbol: symbol,
            premint: uri,
            votes: feature?.Votes,
            permit: feature?.Permit,
            mintable: feature?.Mintable,
            burnable: feature?.Burnable,
            pausable: feature?.Pausable,
            flashmint: feature?.FlashMinting,
            snapshots: feature?.Snapshots,
            access: ownable === 1 ? "ownable" : "roles" && null,
            upgradeable: transparent === 1 ? "transparent" : "uups" && null,
            info: {
              securityContract: contract || null,
              license: license || null,
            },
          })
          .then((response) => {
            console.log("compile", response.data);
            if (response.status === 200) {
              setResult(response.data);

              response.data.map((el: any) => {
                if (el.contractName === capitalize(name)) {
                  setByteCode(el.bytecode);
                  setAbi(el.abi);
                }
              });
              setLoading(false);
              Modal.confirm({
                content: (
                  <>
                    컴파일 된 json형식의 파일을 다운로드 받으시겠습니까? <br />
                    *다운로드 없이도 배포(Deploy) 가능합니다. <br />
                  </>
                ),
                onOk() {
                  arrDataToFile(response.data);
                },
              });
            }
            if (response.status !== 200) {
              Modal.error({ content: response.data });
              setLoading(false);
            }
          });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  const erc721Compile = async () => {
    if (!name || !symbol || !uri) {
      Modal.confirm({ content: "필수항목을 선택해주세요!" });
      return;
    } else {
      setLoading(true);
      try {
        await axios
          .post("/v1/contract/721/compile", {
            name: name,
            symbol: symbol,
            baseUri: uri,
            votes: feature?.Votes,
            mintable: feature?.Mintable,
            burnable: feature?.Burnable,
            pausable: feature?.Pausable,
            uriStorage: feature?.URIStorage,
            incremental: feature?.AutoIncrementIds,
            enumerable: feature?.Enumerable,
            access: ownable === 1 ? "ownable" : "roles" && null,
            upgradeable: transparent === 1 ? "transparent" : "uups" && null,
            info: {
              securityContract: contract || null,
              license: license || null,
            },
          })
          .then((response) => {
            if (response.status === 200) {
              setResult(response.data);
              setByteCode(response.data.bytecode);
              setAbi(response.data.abi);
              setLoading(false);
              Modal.confirm({
                content: (
                  <>
                    컴파일 된 json형식의 파일을 다운로드 받으시겠습니까? <br />
                    *다운로드 없이도 배포(Deploy) 가능합니다. <br />
                  </>
                ),
                onOk() {
                  arrDataToFile(response.data);
                },
              });
            }
            if (response.status !== 200) {
              Modal.error({ content: response.data });
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const erc1155Compile = async () => {
    if (!name || !uri) {
      Modal.confirm({ content: "필수항목을 선택해주세요!" });
      return;
    } else {
      setLoading(true);
      try {
        await axios
          .post("/v1/contract/1155/wizard", {
            name: name,
            uri: uri,
            votes: feature?.Votes,
            mintable: feature?.Mintable,
            burnable: feature?.Burnable,
            supply: feature?.Supply,
            access: ownable === 1 ? "ownable" : "roles" && null,
            upgradeable: transparent === 1 ? "transparent" : "uups" && null,
            info: {
              securityContract: contract || null,
              license: license || null,
            },
          })
          .then((response) => {
            if (response.status === 200) {
              setResult(response.data);
              setByteCode(response.data.bytecode);
              setAbi(response.data.abi);
              setLoading(false);
              Modal.confirm({
                content: (
                  <>
                    컴파일 된 json형식의 파일을 다운로드 받으시겠습니까? <br />
                    *다운로드 없이도 배포(Deploy) 가능합니다. <br />
                  </>
                ),
                onOk() {
                  arrDataToFile(response.data);
                },
              });
            }
            if (response.status !== 200) {
              Modal.error({ content: response.data });
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  // 컴파일된 파일 - 객체별로 저장하는 함수(파일명은 : contractName)
  const arrDataToFile = (compile: any[]) => {
    let returnArr: [] = [];
    for (let i = 0; i < compile.length; i++) {
      let fileName = compile[i].contractName;
      let fileDetail = compile[i];

      const data = new Blob([JSON.stringify(fileDetail)], {
        type: "application/json",
      });
      const jsonURL = window.URL.createObjectURL(data);
      const link = document.createElement("a");
      document.body.appendChild(link);
      link.href = jsonURL;
      link.setAttribute("download", fileName);
      link.click();
      document.body.removeChild(link);
    }
    return returnArr;
  };

  //----------- Deploy ------------

  //deploy 모달 여는 함수 (네트워크 , 지갑 정보 받아옴);
  const onClickList = async () => {
    setOpen(true);
    try {
      await axios.get("/v1/contract/user/select-lists").then((response) => {
        setNetwork(response.data.result.network);
        setWallet(response.data.result.userWallet);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //------------선택한 네트워크 id , walletid state 저장 후 배포
  const onChangeNetwork = (value: string) => {
    setNetFee(value);
  };
  const onChangeWallet = (value: string) => {
    setWalletFee(value);
  };

  // -------- 대납지갑 -----------
  const onClickOnlyKlay = () => {
    setOnly((prev) => !prev);
  };
  const onChangeOnlyKlay = (event: ChangeEvent<HTMLInputElement>) => {
    setKlayAddress(event.target.value);
  };

  // ----------- 수수료 확인 함수 --------------
  const onClickFeeCheck = async () => {
    if (value === 0) {
      onClick20Check();
    }
    if (value === 1) {
      onClick21Check();
    }
    if (value === 2) {
      onClick1155Check();
    }
  };

  const onClick20Check = async () => {
    if (klayaddress.length === 0) {
      try {
        await axios
          .post("/v1/contract/20/fee-check", {
            networkId: netFee,
            walletId: walletFee,
            abi: abi,
            byteCode: bytecode,
          })
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              console.log(response.data);
              setCheck(true);
              setDepFee(response.data);
            }
            if (response.status !== 200) {
              Modal.error({ content: response.data });
            }
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios
          .post("/v1/contract/20/onlyKlay/fee-check", {
            networkId: netFee,
            walletId: walletFee,
            abi: abi,
            byteCode: bytecode,
            payWalletPk: klayaddress,
          })
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              console.log(response.data);
              setCheck(true);
              setDepFee(response.data);
            }
            if (response.status !== 200) {
              Modal.error({ content: response.data });
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log("check", check);
  console.log("open", open);

  const onClick21Check = async () => {
    if (klayaddress.length === 0) {
      try {
        await axios
          .post("/v1/contract/721/fee-check", {
            networkId: netFee,
            walletId: walletFee,
            abi: abi,
            byteCode: bytecode,
          })
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              console.log(response.data);
              setCheck(true);
              setDepFee(response.data);
            }
            if (response.status !== 200) {
              Modal.error({ content: response.data });
            }
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios
          .post("/v1/contract/721/onlyKlay/fee-check", {
            networkId: netFee,
            walletId: walletFee,
            abi: abi,
            byteCode: bytecode,
            payWalletPk: klayaddress,
          })
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              console.log(response.data);
              setCheck(true);
              setDepFee(response.data);
            }
            if (response.status !== 200) {
              Modal.error({ content: response.data });
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const onClick1155Check = async () => {
    if (klayaddress.length === 0) {
      try {
        await axios
          .post("/v1/contract/1155/fee-check", {
            networkId: netFee,
            walletId: walletFee,
            abi: abi,
            byteCode: bytecode,
          })
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              console.log(response.data);
              setCheck(true);
              setDepFee(response.data);
            }
            if (response.status !== 200) {
              Modal.error({ content: response.data });
            }
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios
          .post("/v1/contract/1155/onlyKlay/fee-check", {
            networkId: netFee,
            walletId: walletFee,
            abi: abi,
            byteCode: bytecode,
            payWalletPk: klayaddress,
          })
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              console.log(response.data);
              setCheck(true);
              setDepFee(response.data);
            }
            if (response.status !== 200) {
              Modal.error({ content: response.data });
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  // ------------ 수수료 확인 후 배포하는 함수 ----------
  const handleOk = () => {
    setCheck(false);
    if (value === 0) {
      onClick20Deploy();
    }
    if (value === 1) {
      onClick721Deploy();
    }
    if (value === 2) {
      onClick1155Deploy();
    }
  };

  const onClickDownLoad = (result: {}) => {
    const data = new Blob([JSON.stringify(result)], {
      type: "application/json",
    });
    const jsonURL = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = jsonURL;
    link.setAttribute("download", "contract_result");
    link.click();
    document.body.removeChild(link);
  };

  const onClick20Deploy = async () => {
    try {
      await axios
        .post("/v1/contract/20/deploy", {
          networkId: netFee,
          walletId: walletFee,
          abi: abi,
          byteCode: bytecode,
        })
        .then((response) => {
          console.log("response", response.data);
          if (response.status === 200) {
            Modal.success({
              width: "55%",
              title: "컨트랙트 배포 성공",
              content: (
                <>
                  <div
                    style={{
                      fontSize: 22,
                      marginBottom: 20,
                      marginTop: 20,
                      border: "1px solid gainsboro",
                      padding: 20,
                      lineHeight: 2.2,
                      marginRight: 32,
                      fontWeight: 500,
                    }}
                  >
                    <div>발행인: {response.data.sender}</div>
                    <div>contractAddress: {response.data.contractAddress}</div>
                    <div>블록 해쉬: {response.data.blockHash}</div>
                  </div>
                  <div
                    style={{
                      marginTop: 20,
                      cursor: "pointer",
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#0c70f2",
                    }}
                    onClick={() => {
                      onClickDownLoad(response.data);
                    }}
                  >
                    파일로 다운로드(json)
                  </div>
                </>
              ),
            });
            setOpen(false);
            // setSuccess(true);
          }
          if (response.status !== 200) {
            Modal.error({ content: response.data });
          }
        });
    } catch (error) {
      console.log(error);
      Modal.error({
        content: "배포에 실패하였습니다. 지갑 정보 혹은 자산을 확인해주세요.",
      });
    }
  };
  const onClick721Deploy = async () => {
    try {
      await axios
        .post("/v1/contract/721/deploy", {
          networkId: netFee,
          walletId: walletFee,
          abi: abi,
          byteCode: bytecode,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            Modal.success({ content: "컨트랙트 배포 성공!" });
            setOpen(false);
          }
          if (response.status !== 200) {
            Modal.error({ content: response.data });
          }
        });
    } catch (error) {
      console.log(error);
      Modal.error({
        content: "배포에 실패하였습니다. 지갑 정보 혹은 자산을 확인해주세요.",
      });
    }
  };
  const onClick1155Deploy = async () => {
    try {
      await axios
        .post("/v1/contract/1155/deploy", {
          networkId: netFee,
          walletId: walletFee,
          abi: abi,
          byteCode: bytecode,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            Modal.success({
              content: (
                <>
                  <div>컨트랙트 배포 성공 !</div>
                  <div>발행인: {response.data.sender}</div>
                  <div>contractAddress: {response.data.address}</div>
                  <div>블록 해쉬: {response.data.blockHash}</div>
                </>
              ),
            });
            // setOpen(false);
          }
          if (response.status !== 200) {
            Modal.error({ content: response.data });
          }
        });
    } catch (error) {
      console.log(error);
      Modal.error({
        content: "배포에 실패하였습니다. 지갑 정보 혹은 자산을 확인해주세요.",
      });
    }
  };

  const handleCancel = () => {
    setOpen(false);
    setCheck(false);
  };

  //배포 결과 return 모달
  const successCancel = () => {
    setSuccess(false);
  };
  const successOk = () => {
    setSuccess(false);
  };

  return (
    <ContractsComponentIndex
      value={value}
      access={access}
      handleChange={handleChange}
      onChangeAccess={onChangeAccess}
      onChangeOwnable={onChangeOwnable}
      ownable={ownable}
      onChangeUpgrade={onChangeUpgrade}
      onChangeTransparent={onChangeTransparent}
      upgrade={upgrade}
      transparent={transparent}
      onChangeFeature={onChangeFeature}
      status={status}
      onChangeName={onChangeName}
      onChangeSymbol={onChangeSymbol}
      onChangeUri={onChangeUri}
      erc20={erc20}
      erc721={erc721}
      erc1155={erc1155}
      onChangeContract={onChangeContract}
      onChangeLicense={onChangeLicense}
      onClickWizard={onClickWizard}
      data={data}
      name={name}
      symbol={symbol}
      uri={uri}
      onClickCompile={onClickCompile}
      result={result}
      loading={loading}
      handleOk={handleOk}
      handleCancel={handleCancel}
      onClickList={onClickList}
      open={open}
      network={network}
      wallet={wallet}
      onChangeNetwork={onChangeNetwork}
      onChangeWallet={onChangeWallet}
      onClickFeeCheck={onClickFeeCheck}
      check={check}
      onClickOnlyKlay={onClickOnlyKlay}
      only={only}
      onChangeOnlyKlay={onChangeOnlyKlay}
      depFee={depFee}
      success={success}
      successCancel={successCancel}
      successOk={successOk}
    />
  );
}
