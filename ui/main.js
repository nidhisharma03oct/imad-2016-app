console.log('Loaded!');
// move the image

var element= document.getElementById('main-text');
element.innerHTML= 'New Value';
var img= document.getElementById('madi');
  var marginLeft=0;
  function moveRight(){
     var marginLeft= marginLeft+ 10;
     img.style.marginLeft= marginLeft +'px';
 }

img.onclick= function(){
   var interval= setInterval(moveRight,100);
// img.style.marginLeft='100px';

};