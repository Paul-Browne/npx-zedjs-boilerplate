Z({
  id: "header",
  render: function () {
    document.getElementById(this.id).innerHTML = `
<style>
  body > header{
    background-color: #1d92d6;
    padding: 10px;
    display: flex;
    align-items: center;
  }
  .logo{
    width: 40px;
    vertical-align: middle;
    margin-right: auto;
  }
  body > header > a{
    color: #fff;
    text-decoration: none;
    margin-left: 15px;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.25s;
  }
  body > header > a:hover{
    border-bottom: 2px solid #fff;
  }
</style>
<img class="logo" src="/images/Z.svg" />
<a href="/">home</a>
<a href="https://zed.js.org">Zed.js</a>`;
  },
});
