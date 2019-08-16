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
        if (!this.props.vidus) {
            return <div>Cargando...</div>;
        }
        //-----------------Importante!!!------------------------
        //initialValues={this.props.user} --> initialValues, es prop de Redux Form, 
        //que le da nuevos valores a los campos (Field, de userForm) definidos bajo 
        //la palabra reservada "name". Es equivalente, entonces, a escribir:
        //initialValues={{title:this.props.user.title}} --> otra manera es con lodash, 
        //para evitar que se cargen en initialValues, todos los campos de user.
        //recordar--> los primeros '{}' indican que se escribe JavaScript y 
        //los segundos '{}' indican que son objetos de JavaScript.
        //let videoSrc = this.props.vidus.video;
        let videoSrc= "Video no encontrado, reintente...";
        let { title, description } = this.props.vidus;

        /*if (this.props.authVideo.selectedVideo) {

            videoSrc = `https:www.youtube.com/embed/${this.props.authVideo.selectedVideo.id.videoId}`;

        }
        else {
            videoSrc = this.props.vidus.video;
        }*/ //----> activar cuando pueda realizar peticiones

        if(this.props.authVideo.selectedVideo){
            let {videoId}= this.props.authVideo.selectedVideo.id;
            console.log(videoId);
            if(videoId){
                videoSrc = `https:www.youtube.com/embed/${videoId}`;
            }            
        }
        else if(this.props.vidus.video){
            videoSrc=this.props.vidus.video;
        }
        

        return (

            <div>
                <Step typeClass={"descripcion"} />
                <h3>Editar Usuario</h3>
                <Form
                    //initialValues={_.pick(this.props.vidus, 'title', 'description')}
                    initialValues={{ video: videoSrc, title: title, description: description }}
                    onSubmit={this.onSubmit}
                    buttonName={"Subir"} />
                <Link to={`/vidus/video/${this.props.match.params.id}`} className='ui button primary'>
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