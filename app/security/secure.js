import * as SecureStore from 'expo-secure-store';

function set(key, object) {
  try {
    SecureStore.setItemAsync(key, JSON.stringify(object));
  } catch (error) {
    console.error('secure.set:', error); // Log error for debugging
  }
}

async function get(key) {
  try {
    const data = await SecureStore.getItemAsync(key); // Added 'await' for asynchronous operation
    if (data !== undefined) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('secure.get:', error); // Log error for debugging
    return null; // Or handle the error appropriately
  }
}

async function remove(key) {
  try {
    await SecureStore.deleteItemAsync(key); // Added 'await' for asynchronous operation
  } catch (error) {
    console.error('secure.remove:', error); // Log error for debugging
  }
}

export default { set, get, remove };
