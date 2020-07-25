import React, { useState } from 'react';


export default function SecretPhrase() {
  const [phrase, setPhrase] = useState('');

  if (phrase === 'open sesame') {
    alert('You may pass!');
  }

  return (
    <div className="App">
      <h2>What's the secret phrase?</h2>

      <input
        type="text"
        value={phrase}
        onChange={e => setPhrase(e.target.value)}
        placeholder="Super duper secret"
      />

      <p>
        Hint: It's <strong>open sesame</strong>
      </p>

      
    </div>
  );
}