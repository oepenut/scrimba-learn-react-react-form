import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export const App = (): JSX.Element => {
  const [username, setUsername] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [ready, setReady] = useState(false);
  const [sex, setSex] = useState('omit');
  const [favoriteColor, setFavoriteColor] = useState('none');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    switch (name) {
      case 'userName':
        setUsername(value);
        break;
      case 'userDescription':
        setUserDescription(value);
        break;
      case 'ready':
        setReady(!ready);
        break;
      case 'sex':
        setSex(value);
        break;
      case 'favoriteColor':
        setFavoriteColor(value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome!</h3>
      </header>
      <main className="Main">
        <form>
          <label htmlFor="userName">Username: </label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="username"
            value={username}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <label htmlFor="userDescription">User Description: </label>
          <textarea
            name="userDescription"
            id="userDescription"
            placeholder="update user description..."
            value={userDescription}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <label htmlFor="ready">
            <input
              type="checkbox"
              name="ready"
              id="ready"
              checked={ready}
              onChange={(e) => handleChange(e)}
            />
            Ready?
          </label>
          <br />
          <label htmlFor="sexMale">
            <input
              type="radio"
              name="sex"
              id="sexMale"
              value="male"
              checked={sex === 'male'}
              onChange={(e) => handleChange(e)}
            />
            Male
          </label>
          <label htmlFor="sexFemale">
            <input
              type="radio"
              name="sex"
              id="sexFemale"
              value="female"
              checked={sex === 'female'}
              onChange={(e) => handleChange(e)}
            />
            Female
          </label>
          <label htmlFor="sexOmit">
            <input
              type="radio"
              name="sex"
              id="sexOmit"
              value="omit"
              checked={sex === 'omit'}
              onChange={(e) => handleChange(e)}
            />
            Omit
          </label>
          <br />
          <label htmlFor="favoriteColor">Favorite Color: </label>
          <select
            name="favoriteColor"
            id="favoriteColor"
            value={favoriteColor}
            onChange={(e) => handleChange(e)}>
            <option value="none">None</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          <br />
          <button>Submit</button>
        </form>
      </main>
    </div>
  );
};

export default App;
