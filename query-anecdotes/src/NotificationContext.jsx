import { createContext, useReducer, useContext } from 'react'

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      console.log(state)
        return state
    case "RESET_MESSAGE":
        return ""
    default:
        return state
  }
}

const NotificationContext = createContext()

/*
export const useNotificationValue = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[0]
}

export const useNotificationDispatch = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[1]
}
*/


export const NotificationContextProvider = (props) => {
  const [message, messageDispatch] = useReducer(notificationReducer, "")

  return (
    <NotificationContext.Provider value={[message, messageDispatch] }>
      {props.children}
    </NotificationContext.Provider>
  )
}


export default NotificationContext