type Props = {
	dropdownTarget: string;
	options: Array<{ id: number; value: string; renderText: string }>;
	onDropdownChange: (value: string, changeTarget: string) => void;
};

const DropDown = (props: Props) => {
	const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		props.onDropdownChange(event.currentTarget.value, event.currentTarget.dataset.dropdownTarget!);
	};

	return (
		<select data-dropdown-target={props.dropdownTarget} onChange={handleDropdownChange}>
			{props.options.map((option: { id: number; value: string; renderText: string }) => {
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
