let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3';


let queryString= location.search;
let queryStringObj= new URLSearchParams(queryString);
let valor= queryStringObj.get("buscador"); //valor query que voy a usar

let link_busquedas= `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${valor}`;

fetch(link_busquedas)

.then(function (response){
    return response.json()
})
.then(function(data){
    console.log(data)
    


})

.catch(function(error){
    console.log(error)


})
