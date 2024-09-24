import styles from './styles.module.css';

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};
  
function Profile() {
    return (
        <>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <img
                className={styles.avatar}
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
      </>
    );
  }
  

export default function AboutPage() {
    // Let's pretend this is some state, or some other variable that actually changes.
    const showProfile : boolean = true;

    return (
        <>
            <h1 className="text-3xl font-bold">About</h1>
            {showProfile && <Profile />}
            <p>Hello there.<br />How do you do?</p>
        </>
    );
}