import React from "react";
import { shallow } from "enzyme";
import LoadingPage from "../../components/LoadingPage"

test('render Loading page correctly', () => {
    const wrapper = shallow(<LoadingPage/>);
    expect(wrapper).toMatchSnapshot();
})