import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import * as BS from 'react-bootstrap'

class Submission extends Component {
    render() {
        const { handleSubmit } = this.props;
        return(
        <BS.Form onSubmit={handleSubmit}>        
            <BS.FormGroup>            
                <label htmlFor="headling">Headline</label>
                <Field name="headline" component="input" type="text" placeholder="In 120 words or less"/>            
            </BS.FormGroup>
            <BS.FormGroup>            
                <label htmlFor="what">What Happened</label>
                <Field name="what" component="input" type="textarea" rows={10} cols={30}/>
            </BS.FormGroup>
            <BS.FormGroup>            
                <label htmlFor="asset">URL for Video for </label>
                <Field name="asset" component="input" type="url"/>
            </BS.FormGroup>
            <BS.FormGroup>            
                <label htmlFor="asset">More Details</label>
                <Field name="asset" component="input" type="text"/>
            </BS.FormGroup>
            <BS.FormGroup>            
                <label htmlFor="asset">Hashtag</label>
                <Field name="asset" component="input" type="url" placeholder="https://twitter.com/hashtag/fill-me"/>
            </BS.FormGroup>
            <BS.Button bsStyle="success" bsSize="large" type="submit">Submit </BS.Button>           
      </BS.Form>
    );
  }
}

Submission = reduxForm({
  form: 'submit'
})(Submission);

export default Submission;