Z({
  id: "main",
  render: function () {
    const { headline, ingress, cols } = this.state;
    document.getElementById(this.id).innerHTML = `
<style>
  body > main{
    padding: 0 15px;
    max-width: 720px;
    margin: 0 auto;
  }
  .boxes{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
  }
  .box{
    background-color: #1d92d6;
    color: #fff;
    padding: 20px;
    flex: 0 0 calc(50% - 10px);
    margin-bottom: 20px;
    border-radius:6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .box > *{
    margin-top: 0;
    margin-bottom: 20px;
  }
  .box > *:last-child{
    margin-bottom: 0;
  }
  .box a{
    color: #fff;
    text-align: right;
  }
  @media only screen and (max-width: 600px) {
    .box{
      flex: 0 0 100%;
    }
  }
  h1, h2, h3{
    text-align: center;
  }
</style>
<h1>${headline}</h1>
${ingress ? `<h2>${ingress}</h2>` : ""}
<section class="boxes">
${cols
  .map((col) => {
    return `
    <div class="box">
      <h3>${col.title}</h3>
      <p>${col.desc}</p>
      <a href="${col.link.href}">${col.link.text}</a>
    </div>
`;
  })
  .join("")}
</section>
`;
  },
});
