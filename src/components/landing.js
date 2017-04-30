import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import * as BS from 'react-bootstrap'


class Landing extends Component {
    render() {
        const { handleSubmit } = this.props;
        return(
            <div className="hero-box">            
                <h1>Let's Begin</h1>
                <BS.Form onSubmit={handleSubmit}>
                    <BS.FormGroup bsSize="large">
                        <Field placeholder="What Happened?" name="headline" component="input" type="textarea" rows={10} cols={30}/>
                 </BS.FormGroup>
                    <BS.FormGroup bsSize="large">
                        <Field placeholder="Upload or Paste Image/Video" name="asset" component="input" type="text"/>
                    </BS.FormGroup>
                        <BS.Button bsStyle="success" bsSize="large" type="submit">Get Live Site</BS.Button>
                </BS.Form>                                         
            </div>
        )
    }
 }


Landing = reduxForm({
  form: 'form',
  destroyOnUnmount: false
})(Landing);

 export default Landing