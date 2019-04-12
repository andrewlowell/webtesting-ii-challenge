import React from 'react';

const Dashboard = props => {
  return (
    <div className="dashboard">
      <button onClick={() => props.atBat('ball')}>Ball!</button>
      <button onClick={() => props.atBat('strike')}>Strike!</button>
      <button onClick={() => props.atBat('foul')}>Foul!</button>
      <button onClick={() => props.atBat('hit')}>Hit!</button>
    </div>
  );
}
 
export default Dashboard;