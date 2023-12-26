import React, { useState, useContext } from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import { ToastContext } from '../ToastProvider/ToastProvider';
import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ toast, toastID ,}) {
const {deleteSingleToast} = useContext(ToastContext)
  return (
    <div className={`${styles.toast} ${styles[toast.variant]}`}>
      <div className={styles.iconContainer}>
        {toast.variant === 'notice' && <Info size={24} />}
        {toast.variant === 'warning' && <AlertTriangle size={24} />}
        {toast.variant === 'success' && <CheckCircle size={24} />}
        {toast.variant === 'error' && <AlertOctagon size={24} />}
      </div>
      <p className={styles.content}>{toast.message }</p>
      <button className={styles.closeButton}>
        <X
          onClick={() => {
           deleteSingleToast(toastID)
          }}
          size={24}
        />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
