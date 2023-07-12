import NetworkPresenter from "./network.presenter";
import { useState } from "react";
import { useMovetoPage } from "../../../commons/hooks/movepage";
import axios from "axios";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function NetworkContainer() {
  // 네트워크 선택 모달 state
  const [network, setNetwork] = useState(false);
  // 네트워크 추가 모달 open
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [netData, setNetData] = useState<any>();
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  // 네트워크 수동 추가 data
  const [data, setData] = useState<object | undefined>({});

  const router = useRouter();
  const { onClickMoveToPage } = useMovetoPage();

  const dummyList = [
    {
      id: 1,
      name: "Binance Mainnet",
      url: "https://bsc-dataseed1.binance.org",
      src: "/image/binance.png",
    },
    {
      id: 2,
      name: "Binance Testnet",
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      src: "/image/binance.png",
    },
    {
      id: 3,
      name: "Goerli Testnet",
      url: "https://rpc.goerli.mudit.blog",
      src: "/image/etc.png",
    },
    {
      id: 4,
      name: "Sepolia Testnet",
      url: "https://rpc.sepolia.org ",
      src: "/image/sepolia.png",
    },
    {
      id: 5,
      name: "Polygon Mainnet",
      url: "https://polygon-rpc.com",
      src: "/image/polygon.png",
    },
    {
      id: 6,
      name: "Polygon Testnet",
      url: "https://rpc.goerli.mudit.blog",
      src: "/image/polygon.png",
    },
  ];

  // 네트워크 선택 모달 open
  const showNetwork = () => {
    setNetwork(true);
  };

  const handleOk = async () => {
    try {
      await axios
        .post("/v1/network/add", {
          url: netData.rpcUrl,
        })
        .then((response) => {
          console.log(response);
          console.log(response.data.result);
          if (response.data.status === 200) {
            Modal.success({ content: response.data.result });
            setIsModalOpen(false);
          }
          if (response.data.status !== 200) {
            Modal.error({ content: response.data.result });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // 리스트 눌러서 데애터 받아오는 함수
  const onClickNetwork = async (url: string) => {
    try {
      await axios.post("/v1/network/check", { url: url }).then((response) => {
        if (response.data.status === 200) {
          console.log(response);
          setIsModalOpen(true);
          setNetData(response.data.result);
        }
        if (response.data.status !== 200) {
          setIsModalOpen(false);
          Modal.error({ content: response.data.result });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 네트워크 수동 추가 데이터 받아오는 함수
  const onChangeRPC = async (event: any) => {
    setValue(event.target.value);
    const urlRegex = /(http|https):\/\//;
    console.log(urlRegex.test(event.target.value));
    if (event.target.value !== "") {
      if (!urlRegex.test(event.target.value)) {
        setError("URI에는 적절한 HTTP/HTTPS 접두사가 필요합니다.");
        return;
      } else {
        setError("");
      }
    }
    try {
      await axios
        .post("/v1/network/check", { url: event.target.value })
        .then((response) => {
          if (response.data.status === 200) {
            console.log(response.data.result);
            setData(response.data.result);
          }
          if (response.data.status !== 200) {
            Modal.error({ content: response.data.result });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  // 네트워크 수동 추가하는 버튼 함수
  const networkOk = () => {
    setValue("");
    setError("");
  };
  const networkCancel = () => {
    setNetwork(false);
    setValue("");
    setError("");
    setData({});
  };

  return (
    <NetworkPresenter
      dummyList={dummyList}
      showNetwork={showNetwork}
      networkCancel={networkCancel}
      networkOk={networkOk}
      network={network}
      onClickMoveToPage={onClickMoveToPage}
      onClickNetwork={onClickNetwork}
      isModalOpen={isModalOpen}
      handleOk={handleOk}
      handleCancel={handleCancel}
      netData={netData}
      onChangeRPC={onChangeRPC}
      error={error}
      value={value}
      // @ts-ignore
      data={data}
    />
  );
}
