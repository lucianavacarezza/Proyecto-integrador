let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3'
fetch (` https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)

.then(function (response){
    return response.json()
})
.then (function(data) {
    console.log(data)
})

.catch(function(error){
    console.log(error)
})
    
fetch (`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`)

.then(function (response){
    return response.json()
 })
.then (function(data) {
     console.log(data)
})
    
.catch(function(error){
      console.log(error)
})