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
    it('renders first player score correctly', () => {
        const firstPlayer = 0;
        const rendered = renderer.create(
            <ScoreBoard firstPlayer={firstPlayer} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });

    it('renders second player score correctly', () => {
        const secondPlayer = 0;
        const rendered = renderer.create(
            <ScoreBoard secondPlayer={secondPlayer} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});