import stateToComponents from "./stateToComponents.js";

Z({
  id: "xyz",
  render: function () {
    document.getElementById(this.id).innerHTML = `
      <p>some paragraph</p>
      <div id="abc"></div>
      <div id="def"></div>
    `;
    stateToComponents(this.state, "xyz");
  },
});
