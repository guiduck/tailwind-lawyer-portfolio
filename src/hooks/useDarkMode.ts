import { useState, useEffect } from 'react'

const useLocalStorage = (key: string, initialValue?: string) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: (prop: string) => void) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme')

  const isEnabled = enabled

  useEffect(() => {
    const className = 'dark'
    const bodyClass = window.document.body.classList

    console.log(isEnabled)
    isEnabled ? bodyClass.add(className) : bodyClass.remove(className)

  }, [enabled, isEnabled]);

  return [enabled, setEnabled]
}

export default useDarkMode;