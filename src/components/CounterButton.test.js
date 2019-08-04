import {shallow, mount, render} from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it("Expect to render counterbutton", () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor}/>).length).toMatchSnapshot()
})

it("correctly increments the counter", () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor}/>)

    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count : 1});
    wrapper.find('[id="counter"]').simulate('keypress');
    expect(wrapper.props().color).toEqual('red')
})