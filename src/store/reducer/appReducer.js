import { IS_APP_ACTIVE } from '../../helper/constant';

const initialState = {
	isAppActive: true,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case IS_APP_ACTIVE:
			state.isLoggedIn = action.isAppActive;
			return state;
		default:
			return state;
	}
};

export default appReducer;
