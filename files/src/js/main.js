Z({
  id: "main",
  render: function () {
    document.getElementById(
      this.id
    ).innerHTML = `<h1>${this.state.headline}</h1>`;
  },
});
