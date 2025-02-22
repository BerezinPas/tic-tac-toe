import { Information, Field } from './components';
import styles from './App.module.scss';
import { PLAYER } from './constants';

export function AppLayout({
	field,
	currentPlayer,
	isGameEnded,
	isDraw,
	handleCellClick,
	handleRestart,
}: {
	field: PLAYER[];
	currentPlayer: PLAYER;
	isGameEnded: boolean;
	isDraw: boolean;
}) {
	return (
		<div className={styles.app}>
			<Information
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			></Information>
			<Field field={field} handleCellClick={handleCellClick}></Field>
			<button className={styles.restartBtn} onClick={handleRestart}>
				Начать заново
			</button>
		</div>
	);
}
