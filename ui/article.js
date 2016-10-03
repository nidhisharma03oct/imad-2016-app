// for comment submitting
var submit= document.getElementById('submit-comment');
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
//rendering the varaiable in correct span
     var nameInput=document.getElementById('comments');
    var name= nameInput.value;
 // make a request to the server and send the name
  request.open('GET','http://nidhisharma03oct.imad.hasura-app.io/submit-name?name='+ name,true);
  request.send(null);
 };
