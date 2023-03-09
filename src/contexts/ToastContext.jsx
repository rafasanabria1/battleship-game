import React from 'react'

const ToastContext = React.createContext({
  notifications: [],
  addNotification: null,
  removeNotification: null
})

export default ToastContext
