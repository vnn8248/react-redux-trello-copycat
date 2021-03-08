const initialState = [
  {
    title: "List title",
    id: 0,
    cards: [
      {
        id: 0,
        text: "This is the first card in the list."
      },
      {
        id: 1,
        text: "This is the second card in the list."
      }
    ]
  },
  {
    title: "Second title",
    id: 1,
    cards: [
      {
        id: 0,
        text: "Second card list what's good."
      },
      {
        id: 1,
        text: "We outchea fam."
      },
      {
        id: 2,
        text: "My dawg."
      }
    ]
  }
];


const listsReducer = function(state = initialState, action) {
  switch (action.type) {
    default: 
      return state;
  }
};

export default listsReducer;