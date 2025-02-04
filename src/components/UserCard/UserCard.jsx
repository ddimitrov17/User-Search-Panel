import styles from './UserCard.module.css';

export default function UserCard({ user }) {
    return (
        <div className={styles.userCard}>
            <div className={styles.personalInfoSection}>
                <h3 className={styles.userName}>{user.name}</h3>
                <p className={styles.userUsername}><span>Username:</span> {user.username}</p>
                <p className={styles.userEmail}><span>Email:</span> {user.email}</p>
            </div>
            <div className={styles.addressSection}>
                <h4>Address:</h4>
                <p><span>Street:</span> {user.address.street}</p>
                <p><span>Suite:</span> {user.address.suite}</p>
                <p><span>City:</span> {user.address.city}</p>
            </div>
        </div>
    );
}