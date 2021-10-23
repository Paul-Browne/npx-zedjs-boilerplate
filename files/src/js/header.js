Z({
  id: "header",
  render: function () {
    document.getElementById(this.id).innerHTML = `
<pre>HEY
YOU
DEV</pre>
<a href="/">home</a>
<a href="/contact">contact</a>
<a href="/about">about</a>
<a href="/test">test</a>
`;
  },
});
