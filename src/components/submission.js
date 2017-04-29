import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class Submission extends Component {
    render() {
        const { handleSubmit } = this.props;
        return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="headling">Headline</label>
                <Field name="headline" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="what">What Happened</label>
                <Field name="what" component="input" type="textarea" rows="10" cols="30"/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email"/>
            </div>
            <button type="submit">Submit</button>
      </form>
    );
  }
}

Submission = reduxForm({
  form: 'submit'
})(Submission);

export default Submission;