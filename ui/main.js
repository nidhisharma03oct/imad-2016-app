console.log('Loaded!');
// move the image

var element= document.getElementById('main-text');
element.innerHTML= 'New Value';
var img= document.getElementById('madi');
  var marginLeft=0;
  function moveRight(){
     marginLeft= marginLeft+ 1;
     img.style.marginLeft= marginLeft +'px';
 }

img.onclick= function(){
   var interval= setInterval(moveRight,50);
// img.style.marginLeft='100px';

};

var button= document.getElementById('counter');
var counter=0;
button.onclick = function()
{
//make a request to counter endpoint

//capture the response and store it in the variable

//rendering the varaiable in correct span
 counter=counter+1;
 var span= document.getElementById('count');
 span.innerHTMl= counter.toString();
 
};
