import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchVidUss, fetchVidUs } from '../../api/actions/index';
import { NavLink } from "react-router-dom";
import history from '../../api/history';

class VidusList extends React.Component {

    componentDidMount() {
        this.props.fetchVidUss();
    }

    /**
     * Funcion que filtar aquellos objetos que no tengan igual id de usuario y
     * en caso de tenerlos agrega el boton de "editar" y el boton de "borrar"
     * @param {*objeto obtenido de mapear los objetos dentro 
     * del estado de "vidusReducer"} vidUs 
     */
    renderAdmin(vidUs) {
        if (vidUs.userId === this.props.currentUserId) {
            return (
                <div className='right floated content'>
                    <NavLink to={`/vidus/edit/${vidUs.id}`} className='ui button primary'>
                        Editar
                    </NavLink>
                    <NavLink to={`/vidus/delete/${vidUs.id}`} className='ui button negative'>
                        Borrar
                    </NavLink>
                </div>
            );
        }
    }
    /**
     * Funcion que muestra los objetos obtenidos
     * @param {objet obtenido de la funcion "renderList()"} vidus 
     */
    list(vidus) {
        return (
            <div className='item' key={vidus.id}>
                {this.renderAdmin(vidus)}
                <i className='large middle aligned icon user circle outline' />
                <div className='content'>
                    <NavLink to={`/vidus/show/${vidus.id}`} className='header'>
                        {vidus.title}
                    </NavLink>
                    <div className='description'>
                        {vidus.description}
                    </div>
                </div>
            </div>
        );
    }
    /**
     * Funcion que filtra en base a "history.location.pathname" los "vidus" y
     * devuelve estos objeto a la funcion "list()"
     */
    renderList() {
        let locationMyVidus = (history.location.pathname === "/vidus/fechuser");
        let locationAllVidus = (history.location.pathname === "/");

        return this.props.viduss.map(vidus => {
            if (vidus.id && locationMyVidus && (vidus.userId === this.props.currentUserId)) {
                return this.list(vidus);
            }
            else if (vidus.id && locationAllVidus) {
                return this.list(vidus);
            }
            return "";
        });
    }

    /**
     * Funcion que muestra un boton de navegacion al componente "VidusCreate"
     */
    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: "right" }}>
                    <NavLink to='/vidus/new' className='ui button large primary'>
                        Crear VidUS
                    </NavLink>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h2 className="ui center aligned icon header">
                    <i className="circular users icon"></i>
                    VidUs
                </h2>               
                <div className='ui celled list'>
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    };
};

let mapStateToProps = (estado) => {
    return {
        viduss: Object.values(estado.viduss),
        currentUserId: estado.authvideo.userId,
        isSignedIn: estado.authvideo.isSignedIn,
    };
};

let mapDispatchToProps = dispatch => ({
    fetchVidUss: bindActionCreators(fetchVidUss, dispatch),
    fetchVidUs: bindActionCreators(fetchVidUs, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(VidusList);