import styles from './EmailBar.module.css';

export const EmailBar = () => (
  <div id={styles.email_bar} >
      <a href="mailto:lunageovanny23@gmail.com">
        { 'lunageovanny23@gmail.com' }
      </a>
  </div>
);

