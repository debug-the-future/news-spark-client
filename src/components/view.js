import React, { Component } from 'react'
import * as BS from 'react-bootstrap'

class View extends Component {
    
    render() {
        const { id, onClick } = this.props
        return(
            <div>
                <h2>Congratulations! Check out your site <a href={`/${id}`} target="_blank">here</a></h2><br></br>
                <BS.Button className="btn fire" onClick={onClick}>Edit Your Site</BS.Button>                
            </div>
        )
    }
}

export default View