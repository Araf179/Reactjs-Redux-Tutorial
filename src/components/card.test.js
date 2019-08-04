import {shallow, mount, render} from 'enzyme';
import React from 'react';
import Card from './card';

it("Expect to render card component", () => {
    expect(shallow(<Card />).length).toMatchSnapshot()
})