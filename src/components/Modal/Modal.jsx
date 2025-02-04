import styles from './Modal.module.css';

export default function Modal({ isOpen, onClose, user }) {
    if (!isOpen) {
        return null;
    }
    
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>×</button>
                <h2>{user.name}</h2>
                <div className={styles.modalSection}>
                    <h3>Personal Information</h3>
                    <p><span>Username:</span> {user.username}</p>
                    <p><span>Email:</span> {user.email}</p>
                    <p><span>Phone:</span> {user.phone}</p>
                </div>
                <div className={styles.modalSection}>
                    <h3>Address</h3>
                    <p><span>Street:</span> {user.address.street}</p>
                    <p><span>Suite:</span> {user.address.suite}</p>
                    <p><span>City:</span> {user.address.city}</p>
                </div>
                <div className={styles.modalSection}>
                    <h3>Company</h3>
                    <p><span>Name:</span> {user.company.name}</p>
                </div>
            </div>
        </div>
    );
}