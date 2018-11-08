/* eslint react/prefer-stateless-function: off */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MobilePage from 'lib/MobilePage'

const mapState = (state) => ({})

const mapDispatch = (dispatch, { history }) => {
    return {
        onLogin: () => history.push('/login'),
        onSignup: () => history.push('/signup'),
        onConnect: () => console.log('@todo'),
    }
}

const Home = () => (
    <MobilePage theme={'c1'}>
        <MobilePage.Header>
            FooPal
        </MobilePage.Header>
        <MobilePage.Body withPadding>
            home
        </MobilePage.Body>
    </MobilePage>
)

Home.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onSignup: PropTypes.func.isRequired,
    onConnect: PropTypes.func.isRequired,
}

export default connect(mapState, mapDispatch)(Home)
