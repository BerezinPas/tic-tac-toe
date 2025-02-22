import { PLAYER } from '../../constants';
import { InformationLayout } from './InformationLayout';

export function Information({
	isDraw,
	isGameEnded,
	currentPlayer,
}: {
	isDraw: boolean;
	isGameEnded: boolean;
	currentPlayer: PLAYER;
}) {
	return (
		<InformationLayout
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
		></InformationLayout>
	);
}
