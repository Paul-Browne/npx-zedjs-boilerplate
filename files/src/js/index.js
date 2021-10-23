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
      return localStorage.getItem("data");
    },
    callback: function (data) {
      localStorage.setItem("data", data);
      const parsed = JSON.parse(data);
      stateToComponents(parsed[key]);
    },
  });
};

render(window.location.pathname);
//window.onpopstate

// router stuff
window.addEventListener("click", function (event) {
  event.preventDefault();
  const href = event.target && event.target.pathname;
  if (href) {
    render(href);
    window.history.pushState({}, null, href);
  }
});
