import React, { Component } from 'react';
import './App.css';

import Movie from './Movie';

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidMount()

  state = {
    movies: []
  }

  componentDidMount() {
    /*
    setTimeout(() => {
      this.setState({
        movies: [
          {
            id: 1,
            title: 'A',
            poster: 'A'
          },
          {
            id: 2,
            title: 'B',
            poster: 'B'
          },
          {
            id: 3,
            title: 'C',
            poster: 'C'
          }
        ]
      })
    }, 3000);
    */

    this._getMovies();
  }

  _randerMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id}/>
    })
    console.log(movies);
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({movies});
  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
          {this.state.movies && this.state.movies.length > 0 ? this._randerMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;
