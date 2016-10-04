console.log('Loaded!');


// move the image
/*
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

*/

var button= document.getElementById('counter');
//var counter=0;
button.onclick = function(){
//create a request object
  var request = new XMLHttpRequest();
//capture the response and store it in the variable
request.onreadystatechange = function(){
	if(request.readyState=== XMLHttpRequest.DONE){
		// take some action
		 if (request.status===200)
		 {
			var counter = request.responseText;
			var span= document.getElementById('count');
            span.innerHTML= counter.toString();
		 }
	}
	//Not done yet
	
};
//rendering the varaiable in correct span
     
 //make a request to counter endpoint
  request.open('GET','http://nidhisharma03oct.imad.hasura-app.io/counter',true);
  request.send(null);
};



var submit= document.getElementById('submit-btn');
 submit.onclick= function(){
  
   //create a request object
   
   var request = new XMLHttpRequest();
   
  //capture the response and store it in the variable
  
    request.onreadystatechange = function(){
	if(request.readyState=== XMLHttpRequest.DONE){
		// take some action
		 if (request.status===200)
		 {
	   var names=request.responseText;
	   names= JSON.parse(names);
        var list='';
        for(var i =0;i<names.length;i++)
        {
            list += '<li>' + names[i]+ '</li>';
         }
     var ul = document.getElementById('namelist');
     ul.innerHTML= list;
		 }
	}
	//Not done yet
	
};
     var nameInput=document.getElementById('name');
     var name= nameInput.value;
 // make a request to the server and send the name
  request.open('GET','http://nidhisharma03oct.imad.hasura-app.io/submit-name?name='+ name,true);
  request.send(null);
 };













