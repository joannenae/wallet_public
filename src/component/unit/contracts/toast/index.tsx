import { Mobile, PC } from "../../../../commons/hooks/mediaquery";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useEffect, useState } from "react";

export default function ToastUiComponent(props: any) {
  const [style, setStyle] = useState({});
  useEffect(() => {
    import("react-syntax-highlighter/dist/esm/styles/prism/dracula").then(
      (mod) => setStyle(mod.default)
    );
  });
  return (
    <>
      <Mobile>
        <>
          {props?.data && (
            <SyntaxHighlighter language="javascript" style={style}>
              {props?.data}
            </SyntaxHighlighter>
          )}
        </>
      </Mobile>
      <PC>
        <>
          {props?.data && (
            <SyntaxHighlighter language="javascript" style={style}>
              {props?.data}
            </SyntaxHighlighter>
          )}
        </>
        <></>
      </PC>
    </>
  );
}
