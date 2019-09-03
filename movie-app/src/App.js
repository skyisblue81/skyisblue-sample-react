import React, { Component } from 'react';
import './App.css';

import Movie from './Movie';

const movies = [
  {
    id: 1,
    title: 'A',
    poster: 'A'
  },
  {
    id: 2,
    title: 'B',
    poster: 'B'
  }
];

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidMount()

  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
