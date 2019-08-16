import React from 'react';
import { connect } from "react-redux";
import SearchBar from '../widgets/SearchBar';
import VideoList from '../widgets/VideoList';
import VideoDetail from '../widgets/VideoDetail';
import Step from "../widgets/Step";
import { bindActionCreators } from "redux";
import { fetchVideos, selectingVideo } from "../../api/actions/index";

class Video extends React.Component {   

    /**
     * Carga la pantalla inicial de videos con un valor por default.
     */
    componentDidMount() {
        this.props.fetchVideos('youtubers');
    }

    render() {
        let {videos, selectedVideo, fetchVideos, vidusId }= this.props;
        console.dir(vidusId);
        return (
            <div className='ui container'>
                <Step typeClass={"video"}/>
                <SearchBar onFormSubmit={fetchVideos} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={selectedVideo} vidusId={vidusId} />
                        </div>
                        <div className='five wide column'>
                            <VideoList onVideoSelect={selectingVideo} videos={videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

let mapStateToProps = (store, ownProps) => ({
    videos : store.authvideo.videos,
    selectedVideo: store.authvideo.selectedVideo,
    //vidusId: ownProps.match.params.id
    vidusId: store.viduss.currentUser
});

/**
 * Funcion que une el dispatch para poder usar la funcion idependientemente del reducer ???
 */
let mapDispatchToProps=dispatch=>({
    fetchVideos: bindActionCreators (fetchVideos,dispatch),
    selectingVideo: bindActionCreators(selectingVideo,dispatch)
}) 


export default connect(mapStateToProps,mapDispatchToProps)(Video);