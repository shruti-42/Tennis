import React from 'react';
import ReactDOM from 'react-dom';
import Player from './player';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Player', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Player />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});