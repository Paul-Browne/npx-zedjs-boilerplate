Z({
  id: "abc",
  render: function () {
    document.getElementById(
      this.id
    ).innerHTML = `<h1>${this.state.something}</h1>`;
  },
});
