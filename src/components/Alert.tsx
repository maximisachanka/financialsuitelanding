import { useEffect } from 'react';
import './Alert.css';

export type AlertType = 'success' | 'error' | 'info';

export interface AlertProps {
  type: AlertType;
  message: string;
  onClose: () => void;
  duration?: number;
}

export function Alert({ type, message, onClose, duration = 3000 }: AlertProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className="alert-icon" fill="none" viewBox="0 0 24 24">
            <path d="M5 12L10 17L20 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        );
      case 'error':
        return (
          <svg className="alert-icon" fill="none" viewBox="0 0 24 24">
            <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        );
      case 'info':
        return (
          <svg className="alert-icon" fill="none" viewBox="0 0 24 24">
            <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        );
    }
  };

  return (
    <div className={`alert alert-${type}`}>
      <div className="alert-content">
        <div className="alert-icon-wrapper">
          {getIcon()}
        </div>
        <p className="alert-message">{message}</p>
      </div>
      <button className="alert-close" onClick={onClose} aria-label="Close alert">
        <svg fill="none" viewBox="0 0 24 24">
          <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
      <div className="alert-progress">
        <div className="alert-progress-bar" style={{ animationDuration: `${duration}ms` }}></div>
      </div>
    </div>
  );
}
