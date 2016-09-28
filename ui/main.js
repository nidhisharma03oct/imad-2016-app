console.log('Loaded!');
// move the image

var element= document.getElementById('main-text');
element.innerHTML= 'New Value';

var img= document.getElementById('girl');
img.onclick= function(){
 
  img.style.marginLeft='350px';

};