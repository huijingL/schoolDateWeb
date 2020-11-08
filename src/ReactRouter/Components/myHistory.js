function myHistory() {
  let listeners = [];

  function setAllRoute() {
    let route = "";
    if (window.location.pathname) {
      let routeStrs = window.location.pathname.split("/");
      if (Array.isArray(routeStrs) && routeStrs[1]) {
        route = routeStrs[1];
      }
    }
    listeners.forEach((item) => typeof item === "function" && item(route));
  }

  this.listen = function (listener) {
    if (listeners.length === 0) {
      window.addEventListener("popstate", setAllRoute);
    }
    listeners.push(listener);
    return function () {
      listeners = listeners.filter((item) => item !== listener);
      if (listeners.length === 0) {
        window.removeEventListener("popstate", setAllRoute);
      }
    };
  };

  this.push = function (v) {
    // 此处可以加个分解，现在的情况无法分析state
    // pushState有两个必须的参数 state, title, 最后一个可选的 url
    window.history.pushState({}, "", v);
    setAllRoute();
  };
}

export default new myHistory();
