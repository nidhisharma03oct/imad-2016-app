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
	   var comments=request.responseText;
	   comments= JSON.parse(comments);
        var list='';
        for(var i =0;i<comments.length;i++)
        {
            list += '<li>' + comments[i]+ '</li>';
         }
     var ul = document.getElementById('commentslist');
     ul.innerHTML= list;
		 }
	}
	//Not done yet
	
};
//rendering the varaiable in correct span
     var coommentInput=document.getElementById('txtcomments');
    var comment2= coommentInput.value;
 // make a request to the server and send the name
  request.open('GET','http://nidhisharma03oct.imad.hasura-app.io/submit-comment?comment='+ comment2,true);
  request.send(null);
 };
