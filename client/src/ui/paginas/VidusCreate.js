import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createVidUs } from "../../api/actions/index";
import Step from "../widgets/Step";
import Form from '../widgets/Form';


class VidusCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createVidUs(formValues);
    }

    render() {
        return (
            <div>
                <Step typeClass={"descripcion"}/>
                <br></br><br></br>
                <Form onSubmit={this.onSubmit} buttonName={"Cargar Video"}/>
                <br></br><br></br>                
            </div>
        );
    }
}

let mapDispatchProps = dispatch => ({
    createVidUs: bindActionCreators(createVidUs, dispatch)
});

export default connect(null, mapDispatchProps)(VidusCreate);