var fs = require('fs');

var files = {
  "js": "./build/src/build.js",
  "css": "./build/src/build.css"
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
  fs.writeFile("./build/src/template-map.json", JSON.stringify(map), function(err) {
    if(err) {
        return console.log(err);
    }else{
      console.log("✅ Wrote template map");
    }
  }); 
});



