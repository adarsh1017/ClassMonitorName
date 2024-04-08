/*
import React, { useState } from 'react';

const VoteForm = ({ candidates, addVote, cancel }) => {
  const [voterName, setVoterName] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState('');

  const handleNameChange = (e) => {
    setVoterName(e.target.value);
  };

  const handleCandidateChange = (e) => {
    setSelectedCandidate(e.target.value);
  };

  const handleVote = () => {
    if (voterName.trim() === '' || selectedCandidate === '') {
      alert('Please enter your name and select a candidate.');
      return;
    }

    addVote({ voter: voterName, candidate: selectedCandidate });
    setVoterName('');
    setSelectedCandidate('');
  };

  return (
    <div className="vote-form">
      <h2>Cast Your Vote</h2>
      <label htmlFor="voterName">Your Name:</label>
      <input type="text" id="voterName" value={voterName} onChange={handleNameChange} />

      <label htmlFor="candidate">Choose Candidate:</label>
      <select id="candidate" value={selectedCandidate} onChange={handleCandidateChange}>
        <option value="">Select Candidate</option>
        {candidates.map((candidate, index) => (
          <option key={index} value={candidate}>
            {candidate}
          </option>
        ))}
      </select>

      <div>
        <button onClick={handleVote}>Vote</button>
        <button onClick={cancel}>Cancel</button>
      </div>
    </div>
  );
};

export default VoteForm;
*/
import React, { useState } from 'react';
import firebase from '../firebase/firebase'; // Update the import path accordingly


const VotingForm = () => {
  const [voterName, setVoterName] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState('');
  
  const handleVote = () => {
    if (!voterName.trim() || !selectedCandidate) {
      alert('Please enter your name and select a candidate.');
      return;
    }

    const voteRef = firebase.database().ref('votes');
    voteRef.push({
      voterName: voterName,
      candidate: selectedCandidate
    });

    setVoterName('');
    setSelectedCandidate('');
    alert('Vote submitted successfully!');
  };

  return (
    <div className="voting-form" style={{ textAlign: 'center' }}>
      <h2>Cast Your Vote</h2>
      <label htmlFor="voterName">Your Name:</label>
      <input type="text" id="voterName" value={voterName} onChange={(e) => setVoterName(e.target.value)} />
      <br />
      <label htmlFor="candidate">Choose Candidate:</label>
      <select id="candidate" value={selectedCandidate} onChange={(e) => setSelectedCandidate(e.target.value)}>
        <option value="">Select Candidate</option>
        <option value="Adarsh">Adarsh</option>
        <option value="Akash">Akash</option>
        <option value="Ayush">Ayush</option>
      </select>
      <br />
      <button onClick={handleVote}>Vote</button>
    </div>
  );
};

export default VotingForm;


