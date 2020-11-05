import { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import Header from './store/components/Header'
import AnimeList from './store/components/animeList'
import { mapStateToProps } from './store/reducers'
import {
  FETCH_ANIMES_START,
  FETCH_ANIMES_SUCCESS,
  FETCH_ANIMES_FAILURE
} from "./store/actions";

import './App.css';

function App(props) {

  useEffect(() => {
        props.dispatch({ type: FETCH_ANIMES_START });

        axios
          .get(`https://api.jikan.moe/v3/search/anime?q=${props.anime}`)
          .then((res) => {
            props.dispatch({ type: FETCH_ANIMES_SUCCESS, payload: res.results });
          })
          .catch((err) => {
            props.dispatch({ type: FETCH_ANIMES_FAILURE, payload: err.message });
          });
  }, [props.submitted])

  return (
    <div className="App">
      <Header />
      {props.isLoading ? <p className='loading'>Loading...</p> : null}
      {props.errors ? <p className='errors'>{props.errors}</p> : null}
      <AnimeList />
    </div>
  );
}

export default connect(mapStateToProps)(App)
