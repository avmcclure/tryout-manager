import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'Styles/player.scss';

class Player extends Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
        name: PropTypes.string,
        isDragging: PropTypes.bool.isRequired,
        connectDragSource: PropTypes.func.isRequired
    };

    render() {
        const { isDragging, connectDragSource, number, name } = this.props;
        const nameComponent = name && renderName(name);
        return connectDragSource(
            <div className="player" style={{ opacity: isDragging ? 0.5 : 1 }}>
                <div className="player__number">{number}</div>
                {nameComponent}
            </div>
        );
    }
}

function renderName(name) {
    return <div className="player__name">{name}</div>;
}

export default Player;
