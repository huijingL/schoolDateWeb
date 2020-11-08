import React from "react";
import HashRouter from "./Components/HashRouter";
import HistoryRouter from "./Components/HistoryRouter";

function MyRouter(props) {
  console.log(props);

  // 从props中取出数据进行处理
  const { children, hash } = props;

  console.log("children", children);

  // 首先要将下部分的child显示出来
  return (
    <div>
      {hash ? (
        <HashRouter hash>{children}</HashRouter>
      ) : (
        <HistoryRouter>{children}</HistoryRouter>
      )}
    </div>
  );
}

export default MyRouter;
