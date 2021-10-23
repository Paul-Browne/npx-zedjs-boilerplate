Z({
  id: "body",
  render: function () {
    document.getElementById(this.id).innerHTML = `
    <header id="header"></header>
    <main id="main"></main>
    <footer id="footer"></footer>
      `;
  },
});
