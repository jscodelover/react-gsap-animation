import { MOUSE_MOVE } from './action';

const INITIAL_STATE = {
	x: 0,
	y: 0
};

function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case MOUSE_MOVE:
			return {
				...state,
				x: action.payload.x,
				y: action.payload.y
			};
		default:
			return state;
	}
}

export default reducer;
