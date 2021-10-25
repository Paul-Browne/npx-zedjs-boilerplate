Z({
  id: "fourZeroFour",
  render: function () {
    document.getElementById("main").innerHTML = `
            <style>
                #main{
                    display: table;
                    width: 100%;
                    height: calc(100vh - 66.66px);
                    text-align: center;
                }
                
                .fof{
                    display: table-cell;
                    vertical-align: middle;
                }
                
                .fof h1{
                    display: inline-block;
                    padding-right: 12px;
                    color: #888;
                    animation: type .5s alternate infinite;
                }
                
                @keyframes type{
                    from{box-shadow: inset -3px 0px 0px #888;}
                    to{box-shadow: inset -3px 0px 0px transparent;}
                }
            </style>
            <div class="fof">
            <h1>${this.state.error}</h1>
            </div>            
        `;
  },
});
