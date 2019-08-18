import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchVidUs, editVidUs } from "../../api/actions/index";
import Step from "../widgets/Step";
import Form from '../widgets/Form';
import { Link } from "react-router-dom";

class VidusEdit extends React.Component {

    componentDidMount() {
        this.props.fetchVidUs(this.props.match.params.id);
    };

    onSubmit = (formValues) => {
        this.props.editVidUs(this.props.match.params.id, formValues);
    };

    render() {
        let videoSrc = "Video no encontrado, reintente...";        
        let step = "descripcion";

        /**
         * funcion que chequea que haya vidus
         */
        if (!this.props.vidus) {
            return <div>Cargando...</div>;
        }
        /**
         * funcion que obtiene el link de youtube y
         * luego pasa estos valores al formulario 
         * en el atributo "initialValues"
         */
        if (this.props.authVideo.selectedVideo) {
            let { videoId } = this.props.authVideo.selectedVideo.id;
            
            if (videoId) {
                videoSrc = `https:www.youtube.com/embed/${videoId}`;
                step = "confirmacion";
            }
        }
        else if (this.props.vidus.video) {
            videoSrc = this.props.vidus.video;
            step = "confirmacion";
        }

        let { title, description } = this.props.vidus;

        return (
            <div className='ui clearing segment'>
                <Step typeClass={step} />
                <br></br><br></br>
                <Form
                    initialValues={{ video: videoSrc, title: title, description: description }}
                    onSubmit={this.onSubmit}
                    buttonName={"Subir"} />
                <Link to={`/vidus/video/${this.props.match.params.id}`} className='ui right floated primary button'>
                    Cargar Video
                </Link>
            </div>
        );
    };
};
/**
 * 
 * @param {*campos del Store} state 
 * @param {*propiedades del objeto del explorador} ownProps 
 */
let mapStateToProps = (estado, ownProps) => ({
    vidus: estado.viduss[ownProps.match.params.id],
    authVideo: estado.authvideo

});

let mapDispatchToProps = dispatch => ({
    fetchVidUs: bindActionCreators(fetchVidUs, dispatch),
    editVidUs: bindActionCreators(editVidUs, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(VidusEdit);