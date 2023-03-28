import {
  Transition,
  TransitionGroup,
  TransitionStatus,
} from "react-transition-group";
import { useRouter } from "next/router";
import HeaderContainer from "./header/header.container";
import { ReactNode } from "react";
import CSS from "csstype";

const TIMEOUT = 300;
const getTransitionStyles: Partial<Record<TransitionStatus, CSS.Properties>> = {
  entering: {
    transform: `translateX(-100%)`,
  },
  entered: {
    transform: `translateX(0)`,
    transition: `transform ${TIMEOUT}ms ease-in-out`,
  },
  exiting: {
    transform: `translateX(0)`,
  },
  exited: {
    transform: `translateX(-100%)`,
    transition: `transform ${TIMEOUT}ms ease-in-out`,
  },
};

interface Props {
  children: ReactNode;
}

const HIDDEN_HEADERS = [
  "/",
  "/join/",
  "/complete/",
  "/find/",
  "/createwallet/",
  "/getwallet/",
];

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  // TransitionProps<HTMLElement | undefined>
  return (
    <>
      <TransitionGroup style={{ position: "relative" }}>
        <Transition
          key={
            router.pathname === "/getwallet" ||
            router.pathname === "/createwallet"
          }
          timeout={{
            appear: TIMEOUT,
            enter: TIMEOUT,
            exit: TIMEOUT,
          }}
        >
          {(status) => (
            <div style={{ ...getTransitionStyles[status] }}>
              {!isHiddenHeader && <HeaderContainer />}
              {children}
            </div>
          )}
        </Transition>
      </TransitionGroup>
    </>
  );
};

export default Layout;
