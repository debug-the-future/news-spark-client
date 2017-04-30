import React, { Component } from 'react'

class View extends Component {
    
    render() {
        const { id } = this.props
        return(
            <div>
            <h2>Congratulations! Check out your site <a href={`/${id}`}>here</a></h2>
            <h3>Edit Your Site</h3>
            </div>
        )
    }
}

export default View