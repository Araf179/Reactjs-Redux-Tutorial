import {shallow, mount, render} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it("Expect to render card component", () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'JohnJohn',
            email: 'john@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>).length).toMatchSnapshot()
})