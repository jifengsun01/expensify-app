import React from "react";
import { shallow } from "enzyme";
import ExpanseDashboardPage from "../../components/DashboardPage"

test('render Dashboard page correctly', () => {
    const wrapper = shallow(<ExpanseDashboardPage/>);
    expect(wrapper).toMatchSnapshot();
})