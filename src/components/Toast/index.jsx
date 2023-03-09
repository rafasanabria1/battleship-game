import './index.css'
import { InfoSVG } from '../../assets/InfoSVG'
import { SuccessSVG } from '../../assets/SuccessSVG'
import { WarningSVG } from '../../assets/WarningSVG'
import ToastContext from '../../contexts/ToastContext'
import { useContext, useEffect } from 'react'

export const Toast = ({ position, autoDelete, autoDeleteTime }) => {
  const toastTypes = {
    success: <SuccessSVG />,
    info: <InfoSVG />,
    warning: <WarningSVG />,
    danger: <WarningSVG />
  }

  const { notifications, removeNotification } = useContext(ToastContext)

  useEffect(() => {
    if (autoDelete && autoDeleteTime > 0) {
      const interval = setInterval(() => {
        if (notifications.length > 0) removeNotification(notifications[0].id)
      }, autoDeleteTime)

      return () => {
        clearInterval(interval)
      }
    }
  }, [notifications])

  return (
    <div className={`toast-container ${position}`}>
      {
            notifications.map(notification => (
              <div className={`notification ${notification.type}`} key={`notif-${notification.id}`}>
                <button onClick={() => removeNotification(notification.id)}>x</button>
                <div className='toast-icon-container'>
                  {
                            toastTypes[notification.type]
                        }
                </div>
                <div className='toast-text-container'>
                  <span className='title'>{notification.title}</span>
                  <span className='message'>{notification.message}</span>
                </div>
              </div>
            ))
        }
    </div>
  )
}
