// LeaderboardEvolution.jsx
'use client';
import { useState, useEffect } from 'react';
import './theme-dos.css';
import './theme-win95.css';
import './theme-winxp.css';
import './theme-modern.css';
import './theme-future.css';

const LeaderboardEvolution = () => {
  const [bugsFixed, setBugsFixed] = useState(0);
  const totalBugs = 20;
  
  // Sample leaderboard data
  const [players] = useState([
    { name: 'Alice', score: 18, bugs: 18 },
    { name: 'Bob', score: 15, bugs: 15 },
    { name: 'Charlie', score: 12, bugs: 12 },
    { name: 'Diana', score: 9, bugs: 9 },
    { name: 'Eve', score: 6, bugs: 6 },
    { name: 'Frank', score: 3, bugs: 3 },
  ]);

  const getThemeClass = (bugs : number) => {
    if (bugs < 4) return 'theme-dos';
    if (bugs < 8) return 'theme-win95';
    if (bugs < 12) return 'theme-winxp';
    if (bugs < 16) return 'theme-modern';
    return 'theme-future';
  };

  const getThemeName = (bugs : number) => {
    if (bugs < 4) return 'DOS TERMINAL';
    if (bugs < 8) return 'WINDOWS 95';
    if (bugs < 12) return 'WINDOWS XP';
    if (bugs < 16) return 'MODERN ERA';
    return 'FUTURE TECH';
  };

  const themeClass = getThemeClass(bugsFixed);
  const themeName = getThemeName(bugsFixed);

  return (
    <div className={`leaderboard-container ${themeClass}`}>
      <div className="leaderboard-wrapper">
        <div className="leaderboard-header">
          <h1 className="leaderboard-title">APOCALYPSE SURVIVORS</h1>
          <div className="theme-indicator">ERA: {themeName}</div>
        </div>

        <div className="progress-section">
          <div className="progress-label">
            System Recovery: {bugsFixed}/{totalBugs} bugs eliminated
          </div>
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${(bugsFixed / totalBugs) * 100}%` }}
            />
          </div>
        </div>

        <div className="controls-section">
          <button 
            className="control-btn"
            onClick={() => setBugsFixed(Math.max(0, bugsFixed - 1))}
            disabled={bugsFixed === 0}
          >
            - BUG
          </button>
          <button 
            className="control-btn"
            onClick={() => setBugsFixed(Math.min(totalBugs, bugsFixed + 1))}
            disabled={bugsFixed === totalBugs}
          >
            + BUG
          </button>
          <button 
            className="control-btn reset-btn"
            onClick={() => setBugsFixed(0)}
          >
            RESET
          </button>
        </div>

        <div className="leaderboard-table">
          <div className="table-header">
            <div className="col-rank">RANK</div>
            <div className="col-name">SURVIVOR</div>
            <div className="col-score">BUGS FIXED</div>
          </div>
          <div className="table-body">
            {players.map((player, idx) => (
              <div key={idx} className="table-row">
                <div className="col-rank">#{idx + 1}</div>
                <div className="col-name">{player.name}</div>
                <div className="col-score">{player.bugs}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-text">
          {bugsFixed === totalBugs 
            ? '🎉 SYSTEM FULLY RESTORED 🎉' 
            : `${totalBugs - bugsFixed} bugs remaining...`}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardEvolution;