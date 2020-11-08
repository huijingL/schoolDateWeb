import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { routerContext } from "../contextModal";
import myHistory from "./myHistory";
const { Provider, Consumer } = routerContext;

function HistoryRouter(props) {
  // 从props中取出数据进行处理
  const { children, hash = false } = props;

  // 设置初始化的路由
  const [realPath, setRealPath] = useState("/");

  // 监控数据的改变， return 是为了注销掉这个组件的时候在观察者模式数组中也取消
  useEffect(() => {
    return myHistory.listen((v) => {
      setRealPath(v);
    });
  });

  // 监控数据的改变， return 是为了注销掉这个组件的时候在观察者模式数组中也取消
  useEffect(() => {});

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

export default HistoryRouter;
