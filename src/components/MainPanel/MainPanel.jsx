import { useState, useEffect } from 'react';
import styles from './MainPanel.module.css';
import UserCard from '../UserCard/UserCard';

export default function MainPanel() {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setUsers(data);
                setFilteredUsers(data);
                setError(null);
            } catch (error) {
                setError('Error fetching users.');
                setUsers([]);
                setFilteredUsers([]);
            }
        };
        fetchUsers();
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.setAttribute('theme', darkMode ? 'light' : 'dark');
    };

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
                <button 
                    className={styles.themeToggle}
                    onClick={toggleDarkMode}
                >
                    {darkMode ? '☀️' : '🌙'}
                </button>
            </div>
            <div className={styles.userListSection}>
                {error ? (
                    <div className={styles.errorMessage}>{error}</div>
                ) : (
                    filteredUsers.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))
                )}
            </div>
        </>
    );
}