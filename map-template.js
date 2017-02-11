var fs = require('fs');

var files = {
  "js": "./build/build.js",
  "css": "./build/build.css"
};

var map = {};

var promises = Object.keys(files).map(function(key){
  return new Promise(function(resolve, reject){
    fs.readFile(files[key], "utf-8", function(err, data) {
      if (data){
        map[key] = data.toString();
      }else{
        map[key] = '';
      }
      resolve();
    });
  });
});

Promise.all(promises).then(function(){
  var fs = require('fs');
  fs.writeFile("./build/template-map.json", JSON.stringify(map), function(err) {
    if(err) {
        return console.log(err);
    }else{
      console.log("Wrote template map");
    }
  }); 
});



