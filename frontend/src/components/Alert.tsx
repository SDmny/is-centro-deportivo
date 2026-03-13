import * as React from 'react';

interface AlertProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  variant = 'primary',
  title,
  children,
  className = ''
}) => {
  const alertClass = `alert alert-${variant} ${className}`.trim();

  return (
    <div className={alertClass} role="alert">
      {title && <h4 className="alert-heading">{title}</h4>}
      {children}
    </div>
  );
};

export default Alert;
