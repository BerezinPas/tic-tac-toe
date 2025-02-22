import { WIN_PATTERNS } from '../constants';

export function calculateWinner(field) {
	for (let index = 0; index < WIN_PATTERNS.length; index++) {
		if (
			field[WIN_PATTERNS[index][0]] &&
			field[WIN_PATTERNS[index][0]] === field[WIN_PATTERNS[index][1]] &&
			field[WIN_PATTERNS[index][0]] === field[WIN_PATTERNS[index][2]]
		) {
			return true;
		}
	}
	return false;
}
