import { createContext, useContext, useState, ReactNode } from 'react';
import { Alert, AlertType } from '../components/Alert';

interface AlertConfig {
  id: number;
  type: AlertType;
  message: string;
}

interface AlertContextType {
  showAlert: (type: AlertType, message: string) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export function AlertProvider({ children }: { children: ReactNode }) {
  const [alerts, setAlerts] = useState<AlertConfig[]>([]);
  const [nextId, setNextId] = useState(0);

  const showAlert = (type: AlertType, message: string) => {
    const id = nextId;
    setNextId(id + 1);
    setAlerts((prev) => [...prev, { id, type, message }]);
  };

  const removeAlert = (id: number) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <div className="alert-container">
        {alerts.map((alert, index) => (
          <div
            key={alert.id}
            style={{
              position: 'fixed',
              bottom: `${32 + index * 100}px`,
              left: '32px',
              zIndex: 9999 + index,
            }}
          >
            <Alert
              type={alert.type}
              message={alert.message}
              onClose={() => removeAlert(alert.id)}
            />
          </div>
        ))}
      </div>
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
}
