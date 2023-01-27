import { ChangeEvent, useEffect, useState } from 'react';

import { ToggleSwitchWrap, SwitchWrap } from './styled';

type Props = {
	storageKey: string;
	switchLabel: string;
};

const ToggleSwitch = ({ storageKey, switchLabel }: Props) => {
	const [switchState, setSwitchState] = useState(JSON.parse(localStorage.getItem('Agreement') || 'true'));

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSwitchState(!switchState);
	};

	useEffect(() => {
		localStorage.setItem(storageKey, JSON.stringify(switchState));
	}, [switchState]);

	return (
		<SwitchWrap>
			<ToggleSwitchWrap checked={switchState}>
				<input id="checkbox" type="checkbox" checked={switchState} onChange={handleOnChange} />
			</ToggleSwitchWrap>
			<span>
				{switchLabel} {switchState ? 'On' : 'Off'}
			</span>
		</SwitchWrap>
	);
};

export default ToggleSwitch;
