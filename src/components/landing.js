import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import * as BS from 'react-bootstrap'

import TextInput from './TextInput';

class Landing extends Component {
    render() {
        const { handleSubmit } = this.props;
        return(
            <div className="hero-box-landing">
                <h1>Light a Match</h1>
                <BS.Form onSubmit={handleSubmit}>
                    <BS.FormGroup bsSize="large">
                        <Field placeholder="What Happened?" name="headline" component={TextInput} type="textarea" rows={10} cols={30}/>
                    </BS.FormGroup>
                    <BS.FormGroup bsSize="large">
                        <Field placeholder="Paste Image/Video URL" name="asset" component={TextInput} type="text"/>
                    </BS.FormGroup>
                    <BS.Button className="fire" bsSize="large" type="submit">Get Live Site</BS.Button>
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