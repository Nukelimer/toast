import React, { createContext, useEffect, useState } from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
export const ToastContext = createContext();

function ToastProvider() {
  const [toasts, setToast] = useState([
    {
      message: 'Oops!!!',
      variant: 'warning',
      id: crypto.randomUUID(),
    },
    {
      message: 'Logged!!',
      variant: 'success',
      id: crypto.randomUUID(),
    },
  ]);

  const deleteSingleToast = (id) => {
    const nextToast = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToast(nextToast);
  };

  useEffect(() => {
    const deleteByESC = (event) => { 
   
     if (event.key === 'Escape' || event.key === 'Tab') {
      setToast([])
     }
      
      
    };
    


    addEventListener('keydown', deleteByESC);

    return () => {
      removeEventListener('keydown', deleteByESC);
    };
  }, []);

  const newToast = (textArea, variantOptions) => {
    const nextToast = [
      ...toasts,
      {
        message: textArea,
        variant: variantOptions,
        id: crypto.randomUUID(),
      },
    ];
    if (textArea.length < 1) {
      // throw new Error('...')
      return;
    }
    setToast(nextToast);
  };

  return (
    <ToastContext.Provider value={{ toasts, deleteSingleToast, newToast }}>
      <ToastPlayground />
      <Footer />
    </ToastContext.Provider>
  );
}

export default ToastProvider;
