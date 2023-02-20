import { ChangeEvent, useEffect, useState } from 'react';

import { storage } from '@src/constants/storage';
import UseBrowserStorage from '@src/services/BrowserStorageModule';

import { ToggleSwitchWrap, SwitchWrap } from './styled';

type Props = {
	storageKey: string;
	switchLabel: string;
};

const ToggleSwitch = ({ storageKey, switchLabel }: Props) => {
	const browserStorage = new UseBrowserStorage(storage);
	const [switchState, setSwitchState] = useState(browserStorage.get<boolean>(storageKey, true));

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSwitchState(!switchState);
	};

	useEffect(() => {
		browserStorage.set(storageKey, switchState);
	}, [switchState]);

	return (
		<SwitchWrap>
			<ToggleSwitchWrap checked={switchState!}>
				<input id="checkbox" type="checkbox" checked={switchState} onChange={handleOnChange} />
			</ToggleSwitchWrap>
			<span>
				{switchLabel} {switchState ? 'On' : 'Off'}
			</span>
		</SwitchWrap>
	);
};

export default ToggleSwitch;
