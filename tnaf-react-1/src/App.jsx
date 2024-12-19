// Import React
import React from 'react';

// Komponent ShowUser
const ShowUser = ({ name, phoneNumber, country }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Phone Number:</strong> {phoneNumber}</p>
      <p><strong>Country:</strong> {country}</p>
    </div>
  );
};

// Komponent App
const App = () => {
  const users = [
    { name: 'Ania Linkiewicz', phoneNumber: '+4877788899', country: 'Belarus' },
    { name: 'Szymon Najdzion', phoneNumber: '+48111222333', country: 'Poland' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista</h1>
      {users.map((user, index) => (
        <ShowUser 
          key={index} 
          name={user.name} 
          phoneNumber={user.phoneNumber} 
          country={user.country} 
        />
      ))}
    </div>
  );
};

export default App;
