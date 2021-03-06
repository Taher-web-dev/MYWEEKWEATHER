import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from '../../components/Home/header';

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
        <Header getCurrentLocation={jest.fn()} setCoord={jest.fn()} />
      </Provider>,
    );
  });
  it('it should render header component with given state from redux store', () => {
    expect(tree).toMatchSnapshot();
  });
});
