import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import VidusCreate from '../paginas/VidusCreate';
import VidusEdit from '../paginas/VidusEdit';
import VidusDelete from '../paginas/VidusDelete';
import VidusList from '../paginas/VidusList';
import VidusShow from '../paginas/VidusShow';
import VideoCreate from '../paginas/VideoCreate';


export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={VidusList} />
                <Route path='/vidus/fechuser' exact component={VidusList} />
                <Route path='/vidus/new' exact component={VidusCreate} />
                <Route path='/vidus/edit/:id' exact component={VidusEdit} />
                <Route path='/vidus/delete/:id' exact component={VidusDelete} />
                <Route path='/vidus/video/:id' component={VideoCreate} />
                <Route path='/vidus/show/:id' exact component={VidusShow} />
            </Switch>
        )
    }
}


//children={(props)=><Home {...props}


