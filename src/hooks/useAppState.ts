import { useEffect, useRef, useState } from 'react'
import { AppState } from 'react-native'

const useAppState = () => {
  const appState = useRef(AppState.currentState)
  const [appStateVisible, setAppStateVisible] = useState(appState.current)

  const checkAppState = (nextAppState) => {
    appState.current = nextAppState
    setAppStateVisible(appState.current)
  }

  useEffect(() => {
    const subscription = AppState.addEventListener('change', checkAppState)

    return () => {
      subscription.remove()
    }
  }, [])

  return appStateVisible
}

export default useAppState
