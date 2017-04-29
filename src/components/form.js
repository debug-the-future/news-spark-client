import React, { Component } from 'react'
import Landing from './landing'
import Submission from './submission'

class Form extends Component {
    constructor(props) {
        super(props)

        this.nextPage = this.nextPage.bind(this)
        this.state = {
            page: 1
        }
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 })
        this.props.updateLanding();    
    }

    render() {
        const { onSubmit } = this.props
        const { page } = this.state
        return(
            <div>
                {page === 1 && <Landing onSubmit={this.nextPage} />}
                {page === 2 && <Submission onSubmit={this.props.onSubmit} />}
            </div>
            
        )
    }
}

export default Form