import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createVidUs } from "../../api/actions/index";
//import { Link } from "react-router-dom";
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
                <h3>Crear Usuario</h3>
                <Form onSubmit={this.onSubmit} buttonName={"Cargar Video"}/>               
            </div>
        );
    }
}

let mapDispatchProps = dispatch => ({
    createVidUs: bindActionCreators(createVidUs, dispatch)
});

export default connect(null, mapDispatchProps)(VidusCreate);

/**
 *  <Link to={`/vidus/video/${this.props.match.params.id}`} className='ui button primary'>
                    Cargar Video
                </Link>
 */