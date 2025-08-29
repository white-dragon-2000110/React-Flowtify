import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface RequestDemoButtonProps {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const RequestDemoButton: React.FC<RequestDemoButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = ""
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const buttonClasses = {
    primary: 'btn-primary',
    outline: 'btn-outline'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-xl'
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <motion.button
      className={`${buttonClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={handleLoginClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {t('common.login')}
    </motion.button>
  );
};

export default RequestDemoButton; 