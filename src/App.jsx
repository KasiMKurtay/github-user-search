import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import UserCard from './Components/UserCard';
import './index.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lightMode, setLightMode] = useState(false);

  const searchUser = (username) => {
    setLoading(true);
    setError(null);
    setUser(null);

    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Kullanıcı bulunamadı');
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  const handleClear = () => {
    setUser(null);
    setError(null);
  };

  const toggleTheme = () => {
    setLightMode(!lightMode);
    document.body.classList.toggle('light-mode');
  };

  return (
    <div className="App">
      <div className="card">
        <button className="theme-toggle" onClick={toggleTheme}>
          {lightMode ? (
            <span role="img" aria-label="moon">🌙</span>
          ) : (
            <span role="img" aria-label="sun">🌞</span>
          )}
        </button>
        <h2>GitHub Kullanıcı Ara</h2>
        <SearchBar searchUser={searchUser} handleClear={handleClear} />
        {loading && <div className="loading"></div>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {user && <UserCard user={user} />}
      </div>
    </div>
  );
};

export default App;
