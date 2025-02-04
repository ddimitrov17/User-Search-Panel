import { useState, useEffect } from 'react';
import styles from './MainPanel.module.css';
import UserCard from '../UserCard/UserCard';

export default function MainPanel() {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
                setFilteredUsers(data);
            } catch (error) {
                console.error('Error fetching users:');
            }
        };
    
        fetchUsers();
    }, []);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim() === '') {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter(user =>
                user.name.toLowerCase().includes(value.toLowerCase()) ||
                user.username.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredUsers(filtered);
        }
    };

    return (
        <>
            <div className={styles.searchBarSection}>
                <input
                    type="text"
                    placeholder="Search for a user..."
                    className={styles.searchInput}
                    onChange={handleSearchChange}
                />
            </div>
            <div className={styles.userListSection}>
                {filteredUsers.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </>
    );
}