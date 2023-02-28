interface BrowserStorage {
	set<T>(key: string, value: T): void;
	get<T>(key: string, defaultValue?: T): T | undefined;
	remove(key: string): void;
	clear(): void;
}

class BrowserStorageModule implements BrowserStorage {
	private browserStorage: Storage;

	constructor(browserStorage: Storage) {
		this.browserStorage = browserStorage;
	}

	public set<T>(key: string, value: T): void {
		this.browserStorage.setItem(key, JSON.stringify(value));
	}

	public get<T>(key: string, defaultValue?: T): T | undefined {
		const serializedValue = this.browserStorage.getItem(key);
		try {
			return serializedValue ? JSON.parse(serializedValue) : defaultValue;
		} catch (error: any) {
			console.error(`Failed to parse the value for key ${key}: ${error.message}`);
			return defaultValue;
		}
	}

	public remove(key: string): void {
		this.browserStorage.removeItem(key);
	}

	public clear(): void {
		this.browserStorage.clear();
	}
}

export default BrowserStorageModule;
