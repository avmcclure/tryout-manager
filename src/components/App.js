import React, { Component } from 'react';

import Hero from './Hero';
import Content from './Content';

import 'Styles/app.scss';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Hero />
                <Content />
            </div>
        );
    }
}
