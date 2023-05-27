import Link from 'next/link';
import styles from './page.module.css';
const Home = () => {
    return (
        <div className={styles.main}>
            <h1>Home Page</h1>
            <Link href="/about">Go to About Page</Link>
        </div>
    );
};

export default Home;
