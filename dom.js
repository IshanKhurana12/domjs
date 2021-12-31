var head=document.querySelector("h1")

head.style.color='red'

function randcol(){
  var letters="0123456789ABCDEF";
  var color ="#";
  for(var i=0;i<6;i++){
    color+=letters[Math.floor(Math.random()*16)];
  }
  return color
}


function changecol(){
  colorinput = randcol()
head.style.color=colorinput;
}

setInterval("changecol()",500);
