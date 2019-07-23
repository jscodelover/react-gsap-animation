export const MOUSE_MOVE = 'MOUSE_MOVE';

export default function setMouseMove(data) {
	return {
		type: MOUSE_MOVE,
		payload: data
	};
}
