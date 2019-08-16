import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchVidUss, fetchVidUs } from '../../api/actions/index';
import { NavLink } from "react-router-dom";
import history from '../../api/history'

class VidusList extends React.Component {

    componentDidMount() {
        this.props.fetchVidUss();
    }

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

    list(vidus) {
        return (
            <div className='item' key={vidus.id}>
                {this.renderAdmin(vidus)}
                <i className='large middle aligned icon camera' />
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

    renderList() {

        let locationMyVidus = (history.location.pathname === "/vidus/fechuser");
        let locationAllVidus = (history.location.pathname === "/");

        return this.props.viduss.map(vidus => {
            if (vidus.id && locationMyVidus && (vidus.userId === this.props.currentUserId)) {
                console.dir(vidus.userId);
                console.dir(locationMyVidus);
                return this.list(vidus);
            }
            else if (vidus.id && locationAllVidus) {
                return this.list(vidus);
            }
            return "";
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: "right" }}>
                    <NavLink to='/vidus/new' className='ui button primary'>
                        Crear VidUS
                    </NavLink>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h2>Titulo en viduslist/ render </h2>
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
        isSignedIn: estado.authvideo.isSignedIn
    };
};

let mapDispatchToProps = dispatch => ({
    fetchVidUss: bindActionCreators(fetchVidUss, dispatch),
    fetchVidUs: bindActionCreators(fetchVidUs, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(VidusList);