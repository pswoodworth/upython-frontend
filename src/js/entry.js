console.log('loaded javascript');

fetch('http://swapi.co/api/films', {
    mode: 'cors'
}).then( res => res.json() ).then((res)=>{
  console.log('star wars films from swapi', res);
});