import {createStore} from 'redux'
import {reducer as formReducer} from 'redux-form';

import {trelloReducer} from './reducers';

export default createStore(
	combineReducers({
		form: formReducer,
		trello: trelloReducer
	})
);
