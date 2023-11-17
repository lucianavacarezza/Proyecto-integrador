let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3'
//El listado de las películas o series pertenecientes al género que seleccionó. El end point para usar es "Discover".
// El nombre del género. En caso de que no se encuentre el género o no exista, debe indicarse un mensaje de error.
// Lista de películas o series con su foto y su nombre. Al clickear en cualquiera de las series/ películas debe redirigir al detalle (punto 4).
//'https://api.themoviedb.org/3/genre/movie/list?language=en' 

let qs= location.search;
let qsObj= new URLSearchParams(qs);
let idGen=qsObj.get("idGenero");
console.log(idGen) // es para verificar que me traiga el id del genero bien
let nombreGenero=qsObj.get("name"); 
console.log(nombreGenero) //muestra el nombre del genero presionado

let tit_genero= document.querySelector("#tituloGenero");
let seccionSeries= document.querySelector("#contenedorSeries");
let seccionPelis=document.querySelector("#contenedorPelis")
let noExiste= document.querySelector("#noExisteGenero")
let link_generos_series= `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`; //me falta filtrarlas,pasandole el id 
let link_generos_pelis= `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
let contador= 1 
let mensaje= "Hubo un error, el genero que selecciono no existe"

fetch(link_generos_series)// filtrar usando id, lo mismo en el otro fetch 

.then(function (response){
    return response.json()
})
.then(function(data) {
    console.log(data)
    if (data.results == null ) {  
        alert(mensaje)
        noExiste.innerHTML+= 
        `<h1> No existe/no se encontro un genero con el nombre solicitado </h1>`
        
        




    }else{

        tit_genero.innerText= `Resultados para el genero ${nombreGenero}`
        tit_genero.style.color='#c6c6c6'

        for(let i=0; i<data.results.lengh ; i++){
            if (data.results[i].genre == idGen ){

            seccionSeries.innerHTML+=

            `    <article class="mismoGenero">
                        <a href="./detalle_series.html"><img class="imagen_generos" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt=""></a>
                        <h2 class="tituloPeliGenero"><a class="link" href="./detalle_series.html"></a>${data.results[i].name}</a></h2> 
                        <a class="link" href="./detalle_series.html">${data.results[i].first_air_date}</a>
                </article>`
            }

        

        }
        contador += 1


    }
    

})
.catch(function(error){
    console.log(error)
})




fetch(link_generos_pelis)

.then(function (response){
    return response.json()
})
.then(function(data) {
    console.log(data)
    if (nombreGenero == null ) {
        
        
        alert(mensaje)

        tit_genero.innerHTML+= 
        `No existe/no se encontro un genero con el nombre solicitado`
        document.querySelector("#tituloSecundario").style.display= "none"
        document.querySelector("#contenedorSeries").style.display= "none"
        document.querySelector("#contenedorPelis").style.display="none"
        document.querySelector("#tituloSecundario2").style.display="none"
        
        




    }else{

        for(let i=0; i<5 ; i++){
            seccionPelis.innerHTML+=

        `    <article class="mismoGenero">
                    <a href="./detalle_series.html"><img class="imagen_generos" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt=""></a>
                    <h2 class="tituloPeliGenero"> <a class= "link" href="./detalle_peli.html">${data.results[i].title}</a></h2> 
                    <a class="link" href="./detalle_series.html">${data.results[i].release_date}</a>
            </article>`
        }
        contador += 1


    }
    
})
.catch(function(error){
    console.log(error)
})




