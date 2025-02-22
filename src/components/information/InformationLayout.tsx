import { PLAYER } from '../../constants';
import styles from './information.module.scss';

export function InformationLayout({
	isDraw,
	isGameEnded,
	currentPlayer,
}: {
	isDraw: boolean;
	isGameEnded: boolean;
	currentPlayer: PLAYER;
}) {
	const symbol = (
		<span
			className={currentPlayer === PLAYER.CROSS ? styles.cross : styles.zero}
		>
			{currentPlayer}
		</span>
	);
	return (
		<>
			{/* {isDraw && <div className={styles.title}>Ничья</div>}
			{!isDraw && isGameEnded && (
				<div className={styles.title}>Победитель: {symbol}</div>
			)}
			{!isDraw && !isGameEnded && (
				<div className={styles.title}>Ход: {symbol}</div>
			)} */}

			<div className={styles.title}>
				{isDraw && 'Ничья'}
				{!isDraw && isGameEnded && <>Победитель: {symbol} </>}
				{!isDraw && !isGameEnded && <>Ход: {symbol} </>}
			</div>
		</>
	);
}
