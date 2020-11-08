import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { routerContext } from "../contextModal";
const { Provider, Consumer } = routerContext;

function HashRouter(props) {
  // 从props中取出数据进行处理
  const { children, hash = false } = props;

  const [realPath, setRealPath] = useState("/");

  useEffect(() => {
    window.addEventListener("hashchange", monitorHashChange);
    return () => {
      window.removeEventListener("hashchange", monitorHashChange);
    };
  }, []);

  const monitorHashChange = (v) => {
    let hash = window.location.hash;
    if (hash && hash.split("#")) {
      if (hash.split("#") && hash.split("#")[1]) {
        setRealPath(hash.split("#")[1]);
      }
    }
  };

  // 首先要将下部分的child显示出来
  return (
    <Provider
      value={{
        realPath,
        hash,
      }}
    >
      {children}
    </Provider>
  );
}

export default HashRouter;
