import React from 'react';
import { Link } from "react-router-dom";

const VideoDeatail = (props) => {

    if (!props.video) {
        return "";
    }


    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
                <Link to={`/vidus/edit/${props.vidusId}`}>Seleccionar Video</Link>
            </div>
        </div>
    );
};


export default VideoDeatail;