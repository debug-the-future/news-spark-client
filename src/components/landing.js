import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import * as BS from 'react-bootstrap'


class Landing extends Component {
    render() {
        const { handleClick } = this.props;        
        return(
            <div>
                <h1>Let's Begin</h1>
            <BS.Form onSubmit={handleClick}>            
                <BS.FormGroup bsSize="large">                                
                    <Field placeholder="What Happened?" name="what" component="input" type="textarea" rows={10} cols={30}/>
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
  form: 'landing'
})(Landing);

 export default Landing