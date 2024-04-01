const key = "98db003dcb0f255b77a28fd916fbf09d"

const requests ={
    requestpopuler:`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    requesttop:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requesttranding:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestupcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    

}

export default requests 