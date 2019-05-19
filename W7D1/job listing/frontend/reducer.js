const initialState = {
  city: "Please Select", 
  jobs: []
};

const reducer = (state = initialState, action) => {
  // return state; // remove this and fill out the body of the reducer function

  switch (action.type) {
    case "SWITCH_LOCATION":
      return {
        city: action.city,
        jobs: action.jobs
      };
  
    default:
      return state;
  }
};

// window.reducer = reducer;
export default reducer;
