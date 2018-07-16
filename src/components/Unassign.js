import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'Styles/player.scss';

class Player extends Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
        name: PropTypes.string,
        isOver: PropTypes.bool.isRequired,
        connectDragSource: PropTypes.func.isRequired
    };

    render() {
        const { isOver, connectDragSource } = this.props;
        return connectDragSource(
            <div className={`cell unassigned ${isOver ? 'hovered' : ''}`} />
        );
    }
}


export default Player;
