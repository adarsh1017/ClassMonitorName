import React from 'react';
import { useVotingContext } from './VotingContext';

const VoteCount = () => {
  const { state } = useVotingContext();
  const { candidates, votes } = state;

  return (
    <div className="vote-count">
      <h2>Vote Count</h2>
      <ul>
        {candidates.map((candidate, index) => (
          <li key={index}>
            {candidate}: {votes.filter(vote => vote.candidate === candidate).length}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VoteCount;
