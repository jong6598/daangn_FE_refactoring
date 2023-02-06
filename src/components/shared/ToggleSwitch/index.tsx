import { ChangeEvent, useEffect, useState } from 'react';

import UseBrowserStorage from '@src/services/BrowserStorage';

import { ToggleSwitchWrap, SwitchWrap } from './styled';

type Props = {
	storageKey: string;
	switchLabel: string;
};

const ToggleSwitch = ({ storageKey, switchLabel }: Props) => {
	const browserStorage = new UseBrowserStorage();
	const [switchState, setSwitchState] = useState(browserStorage.get(storageKey, 'true'));

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSwitchState(!switchState);
	};

	useEffect(() => {
		browserStorage.set(storageKey, switchState);
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
