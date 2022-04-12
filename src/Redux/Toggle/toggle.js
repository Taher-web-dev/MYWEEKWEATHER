const Toggle = 'WEATHER/TOGGLE/TOGGLE';

export const switchToggle = () => ({
  type: Toggle,
});

const toggleReducer = (state = false, action) => {
  switch (action.type) {
    case Toggle:
      return !state;
    default:
      return state;
  }
};

export default toggleReducer;
