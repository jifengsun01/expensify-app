import React from 'react';
import {shallow} from 'enzyme';
//import toJson from 'enzyme-to-json';
import { Header } from '../../components/Header'


test('render header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>)
    expect(wrapper).toMatchSnapshot();

    //expect(wrapper.find('h1').text()).toBe('Expensify')
    
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    //console.log(renderer.getRenderOutput());
});


test('call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});