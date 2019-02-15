import * as actions from '../actions';

const initialState = {
    busName: [1],
    entities: {
      reviews: [{
          id: 2,
          date_created: "20190115"
          busName:
          delivery:
          order_date:
          estimate_date:
          arrive:
          arrive_date:
          created_by: 4
        },
        {
          id: 3,
          title: 'Option 11',
          created_by: 5
        }],
      reviewCreators: {
        4: {
          id: 4,
          username: 'thierry',
        },
        5: {
          id: 5,
          username: 'dennis'
        }
      }
    }
};



export const shipwhenReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_LIST) {
        return Object.assign({}, state, {
            lists: [...state.lists, {
                title: action.title,
                cards: []
            }]
        });
    }
    else if (action.type === actions.ADD_CARD) {
        let lists = state.lists.map((list, index) => {
            if (index !== action.listIndex) {
                return list;
            }
            return Object.assign({}, list, {
                cards: [...list.cards, {
                    text: action.text
                }]
            });
        });

        return Object.assign({}, state, {
            lists
        });
    }
    return state;
};