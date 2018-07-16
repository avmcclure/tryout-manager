import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'Styles/background.scss';

export default class Background extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired
    };

    render() {
        return (
            <div
                className="background"
                style={{ backgroundImage: `url(${this.props.url})` }}
            />
        );
    }
}
