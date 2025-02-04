import { useState } from 'react';
import styles from './UserCard.module.css';
import Modal from '../Modal/Modal';

export default function UserCard({ user }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className={styles.userCard} onClick={() => setIsModalOpen(true)}>
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
            
            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                user={user}
            />
        </>
    );
}