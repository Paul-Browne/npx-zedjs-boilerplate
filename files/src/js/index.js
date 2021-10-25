import Z from "zedjs";
window.Z = Z;

import stateToComponents from "./stateToComponents.js";

const resolveHrefToJson = (href) => href.replace(/^\/|\/$/g, "");

const render = (href) => {
  const key = resolveHrefToJson(href);
  Z.xhr({
    //url: `/json/${key}.json`,
    url: "/json/data.json",
    local: function () {
      return false && localStorage.getItem("data");
    },
    callback: function (data) {
      localStorage.setItem("data", data);
      const parsed = JSON.parse(data);
      const page = parsed[key] || parsed["404"];
      stateToComponents(page);
    },
  });
};

render(window.location.pathname);

// router
window.addEventListener("popstate", (event) => {
  render(window.location.pathname);
});
window.addEventListener("click", (event) => {
  event.preventDefault();
  const href = event.target && event.target.pathname;
  if (href && href !== window.location.pathname) {
    render(href);
    window.history.pushState({}, null, href);
  }
});
