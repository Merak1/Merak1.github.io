var slider_content = document.getElementById('box');

var imagen = ["imagen1","imagen2","imagen3"];

var i = imagen.length;

function next(){
  if (i<imagen.length){
    i = i+1;
  }else{
    i = 1;
  }
  slider_content.innerHTML = "<img src="+imagen[i-1]+".png>";
}

function last(){
  if (i<imagen.length +1 && i>1 ){
    i = i-1;
  }else{
    i = imagen.length;
  }
  slider_content.innerHTML = "<img src="+imagen[i-1]+".png>";
}
