import { MOUSE_MOVE } from './action';

const INITIAL_STATE = {
	x: null,
	y: null
};

function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case MOUSE_MOVE:
			return {
				...state,
				x: action.payload.data.x,
				y: action.payload.data.y
			};
		default:
			return state;
	}
}

export default reducer;
