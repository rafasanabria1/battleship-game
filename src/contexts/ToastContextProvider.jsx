import React, { useState } from 'react'
import ToastContext from './ToastContext'
import { v1 as uuid } from 'uuid'

const ToastContextProvider = (props) => {
  const [notifications, setNotifications] = useState([])

  const addNotification = notification => {
    setNotifications(oldNotifications => [...oldNotifications, { ...notification, id: `notif-${uuid()}` }])
  }

  const removeNotification = id => {
    setNotifications(oldNotifications => oldNotifications.filter(notif => notif.id !== id))
  }

  return (
    <ToastContext.Provider value={{ notifications, addNotification, removeNotification }}>{props.children}</ToastContext.Provider>
  )
}

export default ToastContextProvider
