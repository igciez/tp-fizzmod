import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";
import Modal from '../widgets/Modal';
import history from '../../api/history';
import { fetchVidUs, deleteVidUs } from "../../api/actions/index";

class VidusDelete extends React.Component {

    componentDidMount() {
        this.props.fetchVidUs(this.props.match.params.id);
    }

    //<React.Fragment> --> es usa para enviar un solo fragmento cuando se hace
    //un reacomodamiento del codigo para hacerlo reutilizable, evitando enviar un nuevo "div".
    renderActions() {
        let { id } = this.props.match.params;

        return (
            <React.Fragment>
                <button
                    onClick={() => this.props.deleteVidUs(id)}
                    className='ui button negative'
                >
                    Aceptar
                </button>
                <NavLink to='/' className='ui button'>Cancelar</NavLink>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return "Borrar user:";
        }
        return `Borrar user: ${this.props.user.title} `;
    }
    //REmplazar por una ventana de borrando!!! --- > elimnar a modal
    render() {
        return (
            <Modal
                title="Desea borrar el VidUS?"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    };
}

let mapStateToProps = (estado, ownProps) => ({
    user: estado[ownProps.match.params.id]
});

let mapDispatchToProps = dispatch => ({
    fetchVidUs: bindActionCreators(fetchVidUs, dispatch),
    deleteVidUs: bindActionCreators(deleteVidUs, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(VidusDelete);