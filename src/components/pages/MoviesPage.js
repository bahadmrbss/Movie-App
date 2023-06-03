import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MovieList from "../MovieList";
import { fetchMovies, deleteMovie } from "../../actions/movieActions";

export class MoviesPage extends Component {
  static propTypes = {
    movieReducer: PropTypes.object.isRequired,
  };
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div>
        <h2>Movies Page</h2>
        <MovieList
          deleteMovie={this.props.deleteMovie}
          movieReducer={this.props.movieReducer}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ movieReducer }) => ({
  movieReducer,
});

const mapDispatchToProps = { fetchMovies, deleteMovie };

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
