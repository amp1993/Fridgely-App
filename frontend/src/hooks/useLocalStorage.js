import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Retrieve stored value from localStorage or use the initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return initialValue;
    }
  });

  // Update localStorage whenever the stored value changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Error setting localStorage', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
