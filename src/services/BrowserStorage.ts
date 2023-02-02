import { browserStorage } from '@src/constants/browserStorage';

interface BrowserStorage {
	set(key: string, value: any): void;
	get(key: string, defaultValue?: any): void;
	remove(key: string): void;
	clear(): void;
}

class UseBrowserStorage implements BrowserStorage {
	browserStorage: Storage;

	constructor() {
		this.browserStorage = browserStorage;
	}

	set(key: string, value: any) {
		this.browserStorage.setItem(key, JSON.stringify(value));
	}

	get(key: string, defaultValue?: any) {
		const serializedValue = this.browserStorage.getItem(key);
		return serializedValue ? JSON.parse(serializedValue) : defaultValue;
	}

	remove(key: string) {
		this.browserStorage.removeItem(key);
	}
	clear() {
		this.browserStorage.clear();
	}
}

export default UseBrowserStorage;
