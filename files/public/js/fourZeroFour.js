!function(){"use strict";Z({id:"fourZeroFour",render:function(){document.getElementById("main").innerHTML='\n            <style>\n                #main{\n                    display: table;\n                    width: 100%;\n                    height: calc(100vh - 66.66px);\n                    text-align: center;\n                }\n                \n                .fof{\n                    display: table-cell;\n                    vertical-align: middle;\n                }\n                \n                .fof h1{\n                    display: inline-block;\n                    padding-right: 12px;\n                    color: #888;\n                    animation: type .5s alternate infinite;\n                }\n                \n                @keyframes type{\n                    from{box-shadow: inset -3px 0px 0px #888;}\n                    to{box-shadow: inset -3px 0px 0px transparent;}\n                }\n            </style>\n            <div class="fof">\n            <h1>'.concat(this.state.error,"</h1>\n            </div>            \n        ")}})}();