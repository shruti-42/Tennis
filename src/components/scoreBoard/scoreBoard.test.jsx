import React from 'react';
import ReactDOM from 'react-dom';
import ScoreBoard from './ScoreBoard';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ScoreBoard', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ScoreBoard />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});