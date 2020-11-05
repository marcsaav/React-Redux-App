export const SET_ANIME = 'SET_ANIME'
export const SET_SUBMITTED = 'SET_SUBMITTED'
export const FETCH_ANIMES_START = 'FETCH_ANIMES_START'
export const FETCH_ANIMES_SUCCESS = 'FETCH_ANIMES_SUCCESS'
export const FETCH_ANIMES_FAILURE = 'FETCH_ANIMES_FAILURE'

export const setAnime = (anime) => {
    return(
        { type: SET_ANIME, payload: anime}
    )
}

export const setSubmitted = () => {
    return(
        {type: SET_SUBMITTED}
    )
}