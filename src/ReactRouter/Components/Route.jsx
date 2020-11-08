import React from "react";
import { useContext } from "react";
import { routerContext } from "../contextModal";

function Route(props) {
  // 从props中取出数据进行处理
  const { path } = props;

  const { realPath } = useContext(routerContext);

  // 首先要将下部分的child显示出来
  return path === realPath ? <props.component /> : null;
}

export default Route;
