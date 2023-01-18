import { SetStateAction } from 'react';

type Option = {
	id: number;
	value: string;
	renderText: string;
};

type Props<T> = {
	dropdownTarget: string;
	options: Array<Option>;
	filterObj: T;
	setFilterObj: React.Dispatch<SetStateAction<T>>;
};

const DropDown = <T extends object>(props: Props<T>) => {
	const handleDropdownFilterChange = (value: string, changeTarget: string) => {
		props.setFilterObj({ ...props.filterObj, [changeTarget]: value });
	};

	const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		handleDropdownFilterChange(event.currentTarget.value, event.currentTarget.dataset.dropdownTarget!);
	};

	return (
		<select data-dropdown-target={props.dropdownTarget} onChange={handleDropdownChange}>
			{props.options.map((option) => {
				return (
					<option key={option.id} value={option.value}>
						{option.renderText}
					</option>
				);
			})}
		</select>
	);
};

export default DropDown;
