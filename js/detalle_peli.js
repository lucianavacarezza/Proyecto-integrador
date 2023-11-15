let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3'
let queryDetalle = location.search;
let queryStringDetalle = new URLSearchParams(queryDetalle)
let movie_id = queryStringDetalle.get("movie_id")
let contenedor = document.querySelector(".mitad1")
let contenedor2 = document.querySelector(".otra_mitad")

fetch (`https://api.themoviedb.org/3/movie/?api_key=${apiKey}&query=${movie_id}`) // no anda

.then(function(response){
    return response.json()
})

.then (function(data) {
    console.log(data)
})

.catch(function(error){
    console.log(error)
})