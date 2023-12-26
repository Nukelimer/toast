import React, { Children, useContext } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toasts } = useContext(ToastContext)
  return (
    <ol className={styles.wrapper}>
      {
        toasts.map((toast) => {
          return <li className={styles.toastWrapper} key={toast.id}>
          
            <Toast toast={toast} toastID={toast.id} >{Children}</Toast>
        </li>
        })
      }
    
     
    </ol>
  );
}

export default ToastShelf;
