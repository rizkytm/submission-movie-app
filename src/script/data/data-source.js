class DataSource {
  static searchMovie(keyword) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=33169797a2106ec735f80570b4d9bcea`;
    return fetch(url)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.results) {
            return Promise.resolve(responseJson.results);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;
