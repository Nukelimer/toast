import React, { Children, useContext } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';
import { createPortal } from 'react-dom';

function ToastShelf() {
  const { toasts } = useContext(ToastContext)
  return createPortal(
    <ol className={styles.wrapper}>
      {
        toasts.map((toast) => {
          return <li className={styles.toastWrapper} key={toast.id}>
          
            <Toast toast={toast} toastID={toast.id} >{Children}</Toast>
        </li>
          
        })
      }
    
     
    </ol>, document.querySelector('#toast-list')
  );
}

export default ToastShelf;
