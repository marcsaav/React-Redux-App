import React from 'react'
import { connect } from 'react-redux'

import { mapStateToProps } from '../reducers'

const AnimeList = (props) => {
    return(
        <div>
            {props.submitted ? props.animeList.map((anime) => {
                    return(
                        <div>
                            <h4>{anime.title}</h4>
                        </div>
                    )
                }) : null
            }
        </div>
    )
}

export default connect(mapStateToProps)(AnimeList)