import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '../components/Home/home';

const mockStore = configureStore([]);
describe('render correctly weekWeather component', () => {
  let store;
  let tree;
  beforeEach(() => {
    store = mockStore({
      city: {},
      weather: {},
      toggle: true,
    });
    store.dispatch = jest.fn();
    tree = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
  });
  it('it should render with given state from redux store', () => {
    expect(tree).toMatchSnapshot();
  });
});
