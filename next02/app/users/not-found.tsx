import styles from '../page.module.css';
const NotFound = () => {
    return (
        <div className={styles.main}>
            <h1>The requested user does not exist.</h1>
        </div>
    );
};
export default NotFound;
