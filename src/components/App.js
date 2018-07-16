import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Player from 'Containers/PlayerContainer';
import Unassigned from 'Containers/PlayerContainer';

import 'Styles/app.scss';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Unassigned />
                <Player number={37} />
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(App);
