/*
import React, { useState } from 'react';
import VoteForm from './VoteForm';

const App = () => {
  const [totalVotes, setTotalVotes] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [votes, setVotes] = useState([]);

  // Define the candidates
  const candidates = ['Adarsh', 'Akash', 'Ayush'];

  // Initialize votes for each candidate
  const initialCandidateVotes = candidates.reduce((acc, candidate) => {
    acc[candidate] = { count: 0, voters: [] };
    return acc;
  }, {});

  const [candidateVotes, setCandidateVotes] = useState(initialCandidateVotes);

  // Function to handle adding a new vote
  const handleAddVote = () => {
    setShowForm(true);
  };

  // Function to handle canceling the vote form
  const handleCancel = () => {
    setShowForm(false);
  };

  // Function to handle submitting a vote
  const handleVoteSubmit = (vote) => {
    // Update the votes array with the new vote
    const updatedVotes = [...votes, vote];
    setVotes(updatedVotes);

    // Increment total votes count
    setTotalVotes(totalVotes + 1);

    // Increment votes count for the selected candidate
    const updatedCandidateVotes = { ...candidateVotes };
    updatedCandidateVotes[vote.candidate].count++;
    updatedCandidateVotes[vote.candidate].voters.push({ voter: vote.voter, candidate: vote.candidate });
    setCandidateVotes(updatedCandidateVotes);

    // Close the vote form
    setShowForm(false);
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: 'center' }}>Class Monitor Vote</h1>
      <p style={{ textAlign: 'center' }}>Total Votes: {totalVotes}</p>
      <div style={{ textAlign: 'center' }}>
        <button onClick={handleAddVote}>Add New Vote</button>
         
        {showForm && (
          <VoteForm candidates={candidates} addVote={handleVoteSubmit} cancel={handleCancel} />
        )}
      </div>
      
      <div className="candidate-votes">
        {candidates.map((candidate) => (
          <div key={candidate}>
            <h2>{candidate}</h2>
            <p>Votes: {candidateVotes[candidate].count}</p>
           
            <ul>
              {candidateVotes[candidate].voters?.map((vote, index) => (
                <li key={index}>{`${vote?.voter} voted for ${vote?.candidate}`}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
*/
import React from 'react';
import VotingForm from './VotingForm';
import VoteCount from './VoteCount';
import VoterInfo from './VoterInfo';
import { VotingProvider } from './VotingContext';

const App = () => {
  return (
    <VotingProvider>
      <div className="app">
      <h1 style={{ textAlign: 'center' }}>Class Monitor Vote</h1>
        <VotingForm />
        <VoteCount />
        <VoterInfo />
      </div>
    </VotingProvider>
  );
};

export default App;

