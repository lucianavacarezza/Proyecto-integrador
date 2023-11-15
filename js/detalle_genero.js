let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3'
//El listado de las películas o series pertenecientes al género que seleccionó. El end point para usar es "Discover".
// El nombre del género. En caso de que no se encuentre el género o no exista, debe indicarse un mensaje de error.
// Lista de películas o series con su foto y su nombre. Al clickear en cualquiera de las series/ películas debe redirigir al detalle (punto 4).
'https://api.themoviedb.org/3/genre/movie/list?language=en' 
let qDetalle= location.search;
let qsDetalle= new URLSearchParams(qDetalle);
let idGen=qsDetalle.get(".idGenero")
console.log(idGen)
let nombreGenero=qsDetalle.get("name")
console.log(nombreGenero)
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)

.then(function (response){
    return response.json()
})
.then(function(data) {
    console.log(data)
})
.catch(function(error){
    console.log(error)
})




// https://api.themoviedb.org/3/discover/tv