import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import * as BS from 'react-bootstrap'

class Submission extends Component {
    render() {
        const { handleSubmit } = this.props;
        return(
        <div className="hero-box-submission">
            <BS.Form onSubmit={handleSubmit}>        
                <BS.FormGroup>            
                    <label htmlFor="headling">Headline</label>
                    <Field name="headline" component="input" type="text" placeholder="In 120 words or less"/>            
                </BS.FormGroup>
                <BS.FormGroup>            
                    <label htmlFor="what">What is this all about?</label>
                    <Field name="what" component="input" type="textarea" rows={10} cols={30}/>
                </BS.FormGroup>
                <BS.FormGroup>            
                    <label htmlFor="asset">URL for Video for Image</label>
                    <Field name="asset" component="input" type="text"/>
                </BS.FormGroup>
                <BS.FormGroup>            
                    <label htmlFor="details">What else should people know?</label>
                    <Field name="details" component="input" type="text"/>
                </BS.FormGroup>
                <BS.FormGroup>            
                    <label htmlFor="help">How can people help?</label>
                    <Field name="help" component="input" type="text"/>
                </BS.FormGroup>
                <BS.FormGroup>            
                    <label htmlFor="hashtag">Do you have a hashtag?</label>
                    <Field name="hashtag" component="input" type="url" placeholder="https://twitter.com/hashtag/fill-me"/>
                </BS.FormGroup>
                <BS.FormGroup>            
                    <label htmlFor="contact">How can people contact you?</label>
                    <Field name="contact" component="input" type="url" placeholder="https://twitter.com/hashtag/fill-me"/>
                </BS.FormGroup>
                <BS.Button bsStyle="success" bsSize="large" type="submit">Submit </BS.Button>           
        </BS.Form>
    </div>
    );
  }
}

Submission = reduxForm({
  form: 'form',
  destroyOnUnmount: false
})(Submission);

export default Submission;