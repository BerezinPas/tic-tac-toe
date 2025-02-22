import { useState } from 'react';
import { AppLayout } from './AppLayout';
import { PLAYER } from './constants';
import { calculateWinner } from './utils';

function App() {
	const [field, setField] = useState(new Array(9).fill(PLAYER.NOBODY));

	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	const handleRestart = () => {
		setCurrentPlayer(PLAYER.CROSS);
		setField(new Array(9).fill(PLAYER.NOBODY));
		setIsDraw(false);
		setIsGameEnded(false);
	};

	const handleCellClick = (index) => {
		// console.log(index);

		if (field[index] === '' && !isGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;
			// console.log(newField);

			if (calculateWinner(newField)) {
				setIsGameEnded(true);
				// console.log('GAMEOVER', currentPlayer);
			} else if (!newField.includes(PLAYER.NOBODY)) {
				setIsDraw(true);
				setIsGameEnded(true);
			} else {
				setCurrentPlayer(
					currentPlayer === PLAYER.CROSS ? PLAYER.ZERO : PLAYER.CROSS,
				);
			}
			setField(newField);
		}
	};
	return (
		<AppLayout
			field={field}
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			handleRestart={handleRestart}
			handleCellClick={handleCellClick}
		></AppLayout>
	);
}

export default App;
