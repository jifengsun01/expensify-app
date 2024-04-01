import { login, logout } from "../../actions/auth";

test('set login action', () => {
    const action = login('123asd');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123asd'
    }); 
});

test('set logout action', () => {
    const action = logout('123asd');
    expect(action).toEqual({
        type: 'LOGOUT'
    }); 
});