﻿document.write("<style>");
document.write("    #player_pause {");
document.write("        position: absolute;");
document.write("        z-index: 9999;");
document.write("        top: 50%;");
document.write("        left: 30%;");
document.write("        border-radius: 5px;");
document.write("        -webkit-transform: translate(-50%,-50%);");
document.write("        -moz-transform: translate(-50%,-50%);");
document.write("        transform: translate(-50%,-50%);");
document.write("        ");
document.write("    }");
document.write("    #player_pause .tip {");
document.write("        color: #f4f4f4;");
document.write("        position: absolute;");
document.write("        font-size: 14px;");
document.write("        background-color: hsla(0, 0%, 0%, 0.42);");
document.write("        padding: 4px 8px;");
document.write("        margin: 4px;");
document.write("        border-radius: 3px;");
document.write("        right: 0;");
document.write("    }");
document.write("    #player_pause .adimg {");
document.write("        color: #f4f4f4;");
document.write("        position: absolute;");
document.write("        font-size: 14px;");
document.write("        background-color: hsla(0, 0%, 0%, 0.42);");
document.write("        padding: 2px 4px;");
document.write("        margin: 4px;");
document.write("        \/* border-radius: 3px; *\/");
document.write("        bottom: 0px;");
document.write("    }");
document.write("    <\/style>");
document.write("    <div id=\"mobile\"><\/div>");
document.write("    <script>");
document.write("    function turnoff(obj) {");
document.write("        document.getElementById(\"player_pause\").style.display = \"none\";");
document.write("    }");
document.write("    if( \/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini\/i.test(navigator.userAgent) ) {");
document.write("        document.getElementById(\"mobile\").innerHTML = '<div id=\"player_pause\"><div class=\"adimg\"><a style=\"color:#ffffff;\"><\/a><\/div><div class=\"tip\"><a style=\"color:#ffffff;cursor:pointer;\" onclick=\"javascript:turnoff()\" title=\"点击关闭广告\">✖<\/a><\/div><a href=\"http:\/\/kg33.cc\" ><img src=\"https:\/\/cdn.jsdelivr.net\/gh\/z201314\/huandeng\/xck.gif\" width=\"100px\" height=\"100px\"><\/a><\/div>'; ");
document.write("    }");
document.write("    <\/script>");
