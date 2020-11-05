import React from 'react'
import { connect } from 'react-redux'

import { setAnime, setSubmitted } from '../actions'
import { mapStateToProps } from '../reducers'

const AnimeForm = (props) => {

    const handleChanges = e => {
       props.dispatch(setAnime(e.target.value))
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.dispatch(setSubmitted(props.anime))
    }

    return(
        <form onSubmit={handleSubmit}>
            <label> Anime:
                <input
                type='text'
                name='anime'
                value= {props.anime}
                placeholder='...anime name please'
                onChange={handleChanges}
                >
                </input>
            </label>
            <button>Search</button>
        </form>
    )
}

export default connect(mapStateToProps)(AnimeForm)