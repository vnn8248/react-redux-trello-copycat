import { CONSTANTS } from "../actions";

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


let listID = 2;
let cardID = 3;

const listsReducer = function(state = initialState, action) {
  switch (action.type) {

    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID
      }
      listID += 1
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardID
      };
      cardID += 1;
      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else {
          return list;
        }
      });
      return newState;

    default: 
      return state;
  }
};

export default listsReducer;