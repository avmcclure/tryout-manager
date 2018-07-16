import React, { Component } from 'react';
import 'Styles/hero.scss';
import BackgroundImage from './BackgroundImage';

export default class Content extends Component {
    render() {
        return <div className="hero">
            <BackgroundImage url=""/>
            <span className='tagline'>Some Tasty Text</span>
        </div>;
    }
}
