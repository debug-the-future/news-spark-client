import React, { Component } from 'react'
import * as BS from 'react-bootstrap'

const Loading = () => {
    <div className="static-modal loading">
     <Modal.Dialog>
        <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
     </Modal.Dialog>

        <h3>We're building your website now. Hold tight</h3>
        <div className="spinner"></div>
    </div>
}

export default Loading
