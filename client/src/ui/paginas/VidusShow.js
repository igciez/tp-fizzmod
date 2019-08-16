import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import { fetchVidUs } from "../../api/actions/index";

class VidusShow extends React.Component {

    componentDidMount() {

        this.props.fetchVidUs(this.props.match.params.id);
    }


    render() {

        const { title, description, video } = this.props.vidus;

        return (
            <div>
                <div>
                    <div className="ui embed">
                        <iframe title="video player" src={video} />
                    </div>
                    <div className="ui segment">
                        <h4 className="ui header">{title}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        );
    }

};
/**
 * 
 * @param {*store from reducer} state 
 * @param {*Props in the courrent class (constructor)} ownProps ????
 */
let mapToStateProps = (state, ownProps) => {
    //2/3 se carga en la propiedad "stream", el estado devuelto por el reductor, 
    //con un determinado id. 
    return { vidus: state.viduss[ownProps.match.params.id] }
}

let mapDispatchToProps = dispatch => ({
    fetchVidUs: bindActionCreators(fetchVidUs, dispatch)
})

export default connect(mapToStateProps, mapDispatchToProps)(VidusShow);