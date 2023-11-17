let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3'
let contenedor = document.querySelector(".mitad1")
let contenedor2 = document.querySelector(".otra_mitad")


let queryDetalle = location.search;
let queryStringDetalle = new URLSearchParams(queryDetalle)
let movie_id = queryStringDetalle.get("id")
// HAY QUE VER SI SE PUEDE SACAR

let api = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`

fetch (api)
//fetch (`https://api.themoviedb.org/3/movie/?api_key=${apiKey}&query=${movie_id}`) 

.then(function(response){
    return response.json()
})

.then (function(data) {
    console.log(data)

// ver rating
    contenedor.innerHTML += `
    <div>
        <article class="cali">
            <h4 class="calificacion">Calificacion: </h4>
            <p class="rating"> ${data.vote_average} </p>
        </article>
    <article>
        <h4 class="fav">Añadir a <a href="./favoritos.html"> Favoritos</a></h4>
    </article>
    </div>

    <article class="pelicula">    
        <img class="imatilda" src="https://image.tmdb.org/t/p/w185/${data.poster_path}" alt="Imagen Matilda">
    </article>

    <br>
    <br>
`
})
    

fetch (api)

.then(function(response2){
    return response2.json()
})

.then (function(resultados) {
    console.log (resultados)

    let generosLista = ``
    for (i=0; i< resultados.genres.length; i++){
        generosLista +=
        `
        <li><p> <a href = './detalle_genero.html' > ${resultados.genres[i].name} </a> </p></li> 
        ` //sigue sin andar genero
    }

    console.log (generosLista)
    contenedor2.innerHTML += `
        <article class="titulo">
                <h1 class="matilda"> ${resultados.original_title} <h1>
        </article>
        <div class="detalles">
            <ul class="generico">
                <li> <h4>Duración: ${resultados.runtime}  min</h4></li>
                <li><h4>Estreno: ${resultados.release_date}  </h4></li>
                <ul class= "generos"> <h4> <a href="./detalle_genero.html">Genero:  </a></h4>
                ${generosLista}
                </ul>
            </ul>   
        </div>
        <article class="sinopsis">
            <h3 class="resumen"> Sinopsis:  </h3>
        </article>
        <article class="texto">
            <p> ${resultados.overview} </p>
        </article>
                
        </div>
    `
    })

.catch(function(error){
    console.log(error)
})

let contenedor3 = document.querySelector (".recomendaciones")
let queryDetalle2 = location.search;
let queryStringDetalle2 = new URLSearchParams(queryDetalle)
let movie_id_rec = queryStringDetalle.get("id")
let api2 = `https://api.themoviedb.org/3/movie/${movie_id_rec}/recommendations?api_key=${apiKey}`


let contador = 1


let boton = document.querySelector(".boton")

boton = addEventListener ("click" , function(){
fetch (api2)
.then (function(response3){ //no anda el then
    return response3.json()
})

.then (function(data2){
    console.log (data2)
    for (let i=0; i<data2.results.length; i++){
        let url2 = `./detalle_peli.html?id=${data2.results[i].id};`
        contenedor3.innerHTML += `
        <article class ="recomendacion" >
        <a href = ${url2}"> <img class="peliRecomendada" src = "https://image.tmdb.org/t/p/w185/${data2.results[i].poster_path}" > </a>
        </article>
        `
    }
    contador += 1
    
})

.catch (function(error3){
    console.log(error3)
})
})

