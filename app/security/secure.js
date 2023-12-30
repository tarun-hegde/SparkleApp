import * as SecureStore from 'expo-secure-store';

function set(key, object) {
	try {
		SecureStore.setItemAsync(key, JSON.stringify(object));
	} catch (error) {
		console.log('secure.set:', error);
	}
}

function get(key) {
	try {
		const data = SecureStore.getItemAsync(key);
		if (data !== undefined) {
			return JSON.parse(data);
		}
	} catch (error) {
		console.log('secure.get:', error);
	}
}

function remove(key) {
	try {
		SecureStore.deleteItemAsync(key);
	} catch (error) {
		console.log('secure.remove:', error);
	}
}



export default { set, get, remove }