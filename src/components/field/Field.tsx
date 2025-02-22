import { PLAYER } from '../../constants';
import { FieldLayout } from './FieldLayout';

export function Field({ field, handleCellClick }: { field: PLAYER[] }) {
	return (
		<FieldLayout field={field} handleCellClick={handleCellClick}></FieldLayout>
	);
}
