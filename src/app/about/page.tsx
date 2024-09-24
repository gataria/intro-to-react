import styles from './styles.module.css';

export default function AboutPage() {
    return (
        <>
            <h1 className="text-3xl font-bold">About</h1>
            <p>Hello there.<br />How do you do?</p>
            <div className={styles.avatar}>
                I DON'T HAVE AN IMAGE BUT THIS WILL DO
            </div>
        </>
    );
}