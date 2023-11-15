let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3'
let contenedor = document.querySelector(".mitad1")
let contenedor2 = document.querySelector(".otra_mitad")

//let queryDetalle = location.search;
//let queryStringDetalle = new URLSearchParams(queryDetalle)
//let movie_id = queryStringDetalle.get("id")
// HAY QUE VER SI SE PUEDE SACAR

console.log (movie_id , "hola")
fetch (`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`)
//fetch (`https://api.themoviedb.org/3/movie/?api_key=${apiKey}&query=${movie_id}`) 

.then(function(response){
    return response.json()
})

.then (function(data) {
    console.log(data)
    container.innerHTML += `
        <a href="${url}">
        <article class="pelicula" >
                
                <img class="imagen_pelis" src= https://image.tmdb.org/t/p/w185/${data.results[i].poster_path}>
                <h2 class="titulos_pelis link">${data.results[i].title}</h2>
                <p class = "link">${data.results[i].release_date}</p>
                
        </article>
        </a>
        `

})

.catch(function(error){
    console.log(error)
})