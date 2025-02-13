import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img className="avatar" src={user.avatar_url} alt="Avatar" />
      <p><strong>Kullanıcı Adı:</strong> {user.login}</p>
      <p><strong>Takipçi Sayısı:</strong> {user.followers}</p>
      <p><strong>Takip Edilen Sayısı:</strong> {user.following}</p>
      <p><strong>Repo Sayısı:</strong> {user.public_repos}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">GitHub Profiline Git</a>
    </div>
  );
};

export default UserCard;
