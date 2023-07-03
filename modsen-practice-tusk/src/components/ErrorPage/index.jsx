import PageNotFound from 'assets/error-404.jpeg';
import styles from './ErrorPage.module.css';
const ErrorPage = () => {
  return (
    <div>
      <img className={styles.errorImg} src={PageNotFound} />
      <p>
        <a href="/">Go to Home </a>
      </p>
    </div>
  );
};
export default ErrorPage;
