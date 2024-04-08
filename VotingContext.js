import React, { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
  totalVotes: 0,
  candidates: ['Adarsh', 'Akash', 'Ayush'],
  votes: [],
};

// Define action types
const ADD_VOTE = 'ADD_VOTE';

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_VOTE:
      return {
        ...state,
        totalVotes: state.totalVotes + 1,
        votes: [...state.votes, action.payload],
      };
    default:
      return state;
  }
};

// Create context
const VotingContext = createContext();

// Custom hook to use the context
export const useVotingContext = () => useContext(VotingContext);

// Context provider component
export const VotingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addVote = (vote) => {
    dispatch({ type: ADD_VOTE, payload: vote });
  };

  return (
    <VotingContext.Provider value={{ state, addVote }}>
      {children}
    </VotingContext.Provider>
  );
};
