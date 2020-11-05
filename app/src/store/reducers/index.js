import {
    FETCH_ANIMES_START,
    FETCH_ANIMES_SUCCESS,
    FETCH_ANIMES_FAILURE,
    SET_ANIME,
    SET_LOADING,
    SET_SUBMITTED
  } from "../actions";

const initialState = {
    animeList: [],
    anime: '',
    submitted: false,
    isLoading: false,
    errors: ''
}

export const mapStateToProps = (state) => {
    return ({
        animeList: state.animeList,
        anime: state.anime,
        isLoading: state.isLoading,
        errors: state.errors
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ANIME:
            return {
                ...state,
                anime: action.payload
            }
        case SET_SUBMITTED:
            return {
                ...state,
                submitted: true
            }
        case FETCH_ANIMES_START:
            return {
              ...state,
              isLoading: true,
              error: ""
            };
          case FETCH_ANIMES_SUCCESS:
            return {
              ...state,
              isLoading: false,
              animeList: action.payload,
              error: ""
            };
          case FETCH_ANIMES_FAILURE:
            return {
              ...state,
              isLoading: false,
              error: action.payload
            };
        default:
            return state
    }
}

export default reducer