var now=new Date;function createtime(){now.setTime(now.getTime()+1e3);
o=new Date("2023/04/05 06:07:08"),
n=(now-o)/1e3/60/60/24,r=Math.floor(n),
i=(now-o)/1e3/60/60-24*r,
s=Math.floor(i);1==String(s).length&&(s="0"+s);var d=(now-o)/1e3/60-1440*r-60*s,
l=Math.floor(d);1==String(l).length&&(l="0"+l);var g=(now-o)/1e3-86400*r-3600*s-60*l,
b=Math.round(g);1==String(b).length&&(b="0"+b);
let c="";c=s<18&&s>=9?`<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-科研摸鱼中.svg' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:13px;font-weight:bold">本站已运行 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒</div>`:`<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-下班休息啦.svg' title='开心下班开心下班'><br> <div style="font-size:13px;font-weight:bold">本站已运行 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 </div>`,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=c)}setInterval((()=>{createtime()}),1e3);