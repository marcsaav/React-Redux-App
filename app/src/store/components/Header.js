import React from 'react'
import { connect } from 'react-redux'

import AnimeForm from './animeForm'

import { mapStateToProps } from '../reducers'

const Header = (props) => {
    return(
        <div>
            <h1>Welcome to Your Favorite Anime Search & Follow!</h1>
            <AnimeForm />
        </div>
    )
}

export default connect(mapStateToProps)(Header)