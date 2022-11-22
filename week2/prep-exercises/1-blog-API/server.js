const express = require('express')
const fs = require("fs");
const app = express();
const url = require('url');
 

// YOUR CODE GOES IN HERE
app.get('/', function (req, res) {
  res.send('Hello World')
});


app.post('/blogs', (req, res) => {
//     // How to get the title and content from the request??
//     //var query = require('url').parse(req.url,true).query;
   
    // const url_parts = url.parse(req.url, true);
    // const query = url_parts.query;
    
    // const {title} = query.title;
    //const content = query.content;
    const {title} = req.body.title;
    res.json({msg : `title ${title}`});

    // // 
    //fs.writeFileSync(title, content);
    res.end('ok')
});
 
app.listen(3000)