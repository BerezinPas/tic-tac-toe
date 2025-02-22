import styles from './field.module.scss';
import { PLAYER } from '../../constants';

export function FieldLayout({ field, handleCellClick }: { field: PLAYER[] }) {
	return (
		<div className={styles.field}>
			{field.map((cell, index) => {
				let cellClasses = '';
				if (cell === PLAYER.CROSS) {
					cellClasses = styles.cross;
				}
				if (cell === PLAYER.ZERO) {
					cellClasses = styles.zero;
				}
				return (
					<button
						key={index}
						className={styles.cell}
						onClick={() => handleCellClick(index)}
					>
						<div className={cellClasses}></div>
					</button>
				);
			})}
		</div>
	);
}
