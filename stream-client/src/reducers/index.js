import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import authReducers from './authReducer';

export default combineReducers({
    auth : authReducers,
    form : formReducer
});