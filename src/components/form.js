import React, { Component } from 'react'
import Landing from './landing'
import Submission from './submission'

class Form extends Component {
    render() {
        const { onSubmit, page } = this.props

        return(
            <div style={{ width: '100%' }}>
                {page === 1 && <Landing onSubmit={this.props.updateLanding} />}
                {page === 2 && <Submission onSubmit={this.props.onSubmit} />}
            </div>

        )
    }
}

export default Form