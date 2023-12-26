import React, { useContext, useState } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import ToastShelf from '../ToastShelf/ToastShelf';
import { ToastContext } from '../ToastProvider/ToastProvider';
const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { newToast } = useContext(ToastContext);

  const [textArea, setTextArea] = useState('');
  const [variantOptions, setVariantOptions] = useState(VARIANT_OPTIONS[1]);

  const createNewToast = (event) => {
    event.preventDefault();
    newToast(textArea, variantOptions);

    setTextArea('');
    setVariantOptions(VARIANT_OPTIONS[1]);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={createNewToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              value={textArea}
              onChange={(event) => {
                setTextArea(event.target.value);
              }}
              id="message"
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((radio, index) => {
              return (
                <label htmlFor="variant-notice" key={index}>
                  <input
                    type="radio"
                    name="variant"
                    id="variant-notice"
                    value={radio}
                    checked={radio === variantOptions}
                    onChange={(event) => {
                      setVariantOptions(event.target.value);
                    }}
                  />
                  {radio}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
