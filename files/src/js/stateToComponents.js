export default (obj, baseDir) => {
  const render = (obj) => {
    // update state and render
    Object.keys(obj).forEach((k) => {
      Z[k].state = obj[k];
      Z[k].render();
    });
  };
  const requests = [];
  Object.keys(obj).forEach((k) => {
    if (!Z[k]) {
      requests.push({
        url: `/js/${baseDir ? baseDir + "/" : ""}${k}.js`,
      });
    }
  });
  if (requests.length) {
    Z.xhrs(requests, function (response) {
      const script = document.createElement("script");
      script.innerHTML = response.join("");
      document.head.appendChild(script);
      render(obj);
    });
  } else {
    render(obj);
  }
};
