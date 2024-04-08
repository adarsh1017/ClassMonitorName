import React from 'react';
import { useVotingContext } from './VotingContext';

const VoterInfo = () => {
  const { state } = useVotingContext();
  const { votes } = state;

  return (
    <div className="voter-info">
      <h2>Voter Information</h2>
      <ul>
        {votes.map((vote, index) => (
          <li key={index}>{vote.voter} voted for {vote.candidate}</li>
        ))}
      </ul>
    </div>
  );
};

export default VoterInfo;
