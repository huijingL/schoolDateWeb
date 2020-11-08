import React, { useContext } from "react";
import myHistory from "./myHistory";
import { routerContext } from "../contextModal";

function Link(props) {
  const { to, children } = props;
  const { hash } = useContext(routerContext);

  function ClickATag(e) {
    e.preventDefault();
    !hash ? myHistory.push(to) : (window.location.hash = to);
  }

  return (
    <a href="javascript;" onClick={ClickATag}>
      {children}
    </a>
  );
}

export default Link;
