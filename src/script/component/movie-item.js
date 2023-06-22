class MovieItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  getReleaseDate(movie) {
    const tanggal = new Date(movie.release_date).toLocaleDateString('ID-id');
    return tanggal;
  }

  getUserScore(movie) {
    return `${Math.ceil(movie.vote_average * 10)}%`;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        .movie-poster {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        .movie-info {
          padding: 24px;
        }
        .movie-info > h2 {
          font-weight: lighter;
        }
        .movie-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
      <img class="movie-poster" src="https://image.tmdb.org/t/p/original${this._movie.backdrop_path}" alt="Movie Poster">
      <div class="movie-info">
        <h2>${this._movie.title}</h2>
        <h4>Tanggal Rilis : ${this.getReleaseDate(this._movie)}</h4>
        <h6>Rating : ${this.getUserScore(this._movie)}</h6>
        <p>${this._movie.overview}</p>
      </div>
    `;
  }
}

customElements.define('movie-item', MovieItem);
