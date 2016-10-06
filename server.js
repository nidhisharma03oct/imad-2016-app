var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
 'article-one':{
    title: "Article one| nidhi sharma ",
    heading: "Article One",
    date: "Sep 5, 2016",
    content:
  `<p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
          by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem
          Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
          Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a
          dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
         reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
         </p> `
         
},
 'article-two': {
    title: "Article Two| nidhi sharma ",
    heading: "Article Two",
    date: "sep 10, 2016",
    content: `  
         <p>
         This is the content of second article.    
         </p>
        `
 },
 'article-three': {
    title: "Article Three| nidhi sharma ",
    heading: "Article Three",
    date: "sep 10, 2016",
    content: `  
         <p>
         This is the content of second article.    
         </p>`
 }
};

function createTemplate (data) { 
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
var htmlTemplate = `
<html>
 <head>
  <title>
     ${title}
     </title>
         <meta name="viewport" content="width-device-width, initial-scale=1">
      <link href="/ui/style.css" rel="stylesheet" />
       
 </head>
 <body>
     <div id="wrapper2" class="container">
         <div id="home">
         <a href="/">Home</a>
     </div>
     <hr/>
     <h3 id="heading">
         ${heading}
     </h3>
     <div id="date">
         ${date}
     </div>
     <div id="content" class="bold">
         ${content}
     </div>
     <hr>
      <div>
      <p>Enter your comments here</p>
      <textarea id="txtcomments" rows="5" cols="20"> </textarea>
      <hr>
      <input type="submit" id="submit-comment" value="Submit"></input>
       <hr>
       <p id="commentslist">
         
       </p>
     </div>
</div>
      <script type="text/javascript" src="/ui/article.js">
        </script>
 </body>

</html>
`;
return htmlTemplate;
}  



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:shop', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'shop.html'));
});
app.get('/ui/style_shop.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style_shop.css'));
});

//
/*
var names=[];
 // app.get('/submit-name/:name',function(req,res) { // its used for  params
   app.get('/submit-name',function(req,res){  // url://submit-name?name-xxxx  -- query parameter--in second line
  // get the name from the request
    // var name= req.params.name;
   var name= req.query.name;
   names.push(name);
    //using JSON
   res.send(JSON.stringify(names));
 });
 */
     var comments=[];
app.get('/submit-comment',function(req,res){  // / submit-comment?comment=xxxx
   //get the comments from the request
    var comment= req.query.comment;
    comments.push(comment);
    //using JSON we convert our array into string so the response can be sent as string or can say bytes
    res.send(JSON.stringify(comments));
});

app.get('/:articleName',function(req,res){
    //articleName== article-one
    //articles[articleName]=={} content object for article one

    articleName= req.params.articleName;
    res.send(createTemplate(articles[articleName]));
    

var counter=0;
app.get('/counter',function(req,res){
    counter= counter+1;
    res.send(counter.toString());
});

app.get('/favicon.ico',function(req,res){
    res.sendfile(path.join(__dirname,'ui','favicon.ico'));
});

var names = [];
app.get('/submit-name', function(req, res) { // /submit-name?name=xxxx
  // Get the name from the request
  var name = req.query.name;
  //add into array
  names.push(name);
  // JSON: Java script Object Notation
  res.send(JSON.stringify(names));
});


      // res.send(createTemplate(articleOne));
     //  res.send('Article one requested and will be served here.');
    // res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

/*app.get('/article-two',function(req,res){
    //res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
     res.send('Article two requested and will be served here.');
});

app.get('/article-three',function(req,res){
   // res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
    res.send('Article three requested and will be served here.');
});  */



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/article.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
