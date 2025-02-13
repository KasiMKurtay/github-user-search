import React, { useState } from 'react';

const SearchBar = ({ searchUser, handleClear }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      searchUser(username);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleClearClick = () => {
    setUsername('');
    handleClear(); 
  };

  return (
    <div className="search-bar">
      {}
      <button className="clear-button" onClick={handleClearClick}>X</button>
      <input 
        type="text" 
        placeholder="Kullanıcı adı girin" 
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSubmit}>Ara</button>
    </div>
  );
};

export default SearchBar;
