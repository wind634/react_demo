/**
 * Created by wangjiang on 17/5/18.
 */
import { combineReducers } from 'redux';

//reducer
const initialState = {
    text: 'Hello'
}

const testReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text: state.text=='Hello' ? 'world':'Hello'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'Hello world'
            }
        default:
            return initialState;
    }
}

//export default testReducer;

const rootReducer = combineReducers({
    //routing: routerReducer,
    /* your reducers */
    testReducer, //导航相关
    //search, //搜索相关
    //books, //书籍相关
});

export default rootReducer;