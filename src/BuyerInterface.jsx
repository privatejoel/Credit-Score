import React, { useState } from 'react';

const BuyerInterface = () => {
  const [earnings, setEarnings] = useState(0);
  const [conversionRatio, setConversionRatio] = useState(0);
  const [vehicleCompliance, setVehicleCompliance] = useState(0);
  const [cibilScore, setCibilScore] = useState(0);
  const [driverRatings, setDriverRatings] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [tokensGenerated1, setTokensGenerated1] = useState(0);
  const [tokensGenerated2, setTokensGenerated2] = useState(0);
  const [tokensGenerated3, setTokensGenerated3] = useState(0);
  const [tokensGenerated4, setTokensGenerated4] = useState(0);
  const [tokensGenerated5, setTokensGenerated5] = useState(0);
  const [tokensGenerated6, setTokensGenerated6] = useState(0);
  
  
   
  const handleCalculateScore = () => {
    const earningsIntervals = [
      { lowerLimit: 0, upperLimit: 5000, tokens: 0 },
      { lowerLimit: 5000, upperLimit: 10000, tokens: 1 },
      { lowerLimit: 10000, upperLimit: 15000, tokens: 2 },
      { lowerLimit: 15000, upperLimit: 20000, tokens: 3 },
      { lowerLimit: 20000, upperLimit: 25000, tokens: 4 },
      { lowerLimit: 25000, upperLimit: 30000, tokens: 5 },
      { lowerLimit: 30000, upperLimit: 35000, tokens: 6 },
      { lowerLimit: 35000, upperLimit: 40000, tokens: 7 },
      { lowerLimit: 40000, upperLimit: 45000, tokens: 8 },
      { lowerLimit: 45000, upperLimit: 50000, tokens: 9 },
      { lowerLimit: 50000, upperLimit: 60000, tokens: 10 },
    ];

    const totalTokensEarnings = earningsIntervals.reduce((acc, interval) => {
      if (earnings >= interval.lowerLimit && earnings <= interval.upperLimit) {
        setTokensGenerated1(interval.tokens);
        return interval.tokens;
      }
      return acc;
    }, 0);
   
     
    const conversionRatioIntervals = [
        {lowerLimit: 0, upperLimit: 10, tokens: 1},
        { lowerLimit: 10, upperLimit: 20, tokens: 2 },
        { lowerLimit: 20, upperLimit: 25, tokens: 3 },
        { lowerLimit: 25, upperLimit: 30, tokens: 4 },
        {  lowerLimit: 30, upperLimit: 35, tokens:5  },
        {  lowerLimit: 40, upperLimit: 45, tokens:6  },
        {  lowerLimit: 50, upperLimit: 55, tokens:7 },
        {  lowerLimit: 55, upperLimit: 60, tokens:8  },
        {  lowerLimit: 60, upperLimit: 70, tokens:9 },
        {  lowerLimit: 70, upperLimit: 100, tokens:10 },
    ];

    const totalTokensConversionRatio = conversionRatioIntervals.reduce((acc, interval) => {
      if (conversionRatio >= interval.lowerLimit && conversionRatio <= interval.upperLimit) {
        setTokensGenerated2(interval.tokens);
        return interval.tokens;
      }
      return acc;
    }, 0);
    const driverRatingsIntervals = [
        {lowerLimit: 0, upperLimit: 1.00, tokens: 1},
        { lowerLimit: 1.00, upperLimit: 2.00, tokens: 2 },
        { lowerLimit: 2.00, upperLimit: 3.00, tokens: 3 },
        { lowerLimit: 3.00, upperLimit: 3.50, tokens: 4 },
        {  lowerLimit: 3.50, upperLimit: 3.75, tokens:5  },
        {  lowerLimit: 3.75, upperLimit: 4.00, tokens:6  },
        {  lowerLimit: 4.00, upperLimit: 4.25, tokens:7 },
        {  lowerLimit: 4.25, upperLimit: 4.50, tokens:8  },
        {  lowerLimit: 4.50, upperLimit: 4.75, tokens:9 },
        {  lowerLimit: 4.75, upperLimit: 5.00, tokens:10 },
      ];
  
      const totalTokensdriverRatings = driverRatingsIntervals.reduce((acc, interval) => {
        if (driverRatings >= interval.lowerLimit && driverRatings <= interval.upperLimit) {
          setTokensGenerated3(interval.tokens);
          return interval.tokens;
        }
        return acc;
      }, 0);
      const cibilScoreIntervals = [
        {lowerLimit: 0, upperLimit: 299, tokens: 2},
        { lowerLimit: 300, upperLimit: 499, tokens: 4 },
        { lowerLimit: 500, upperLimit: 599, tokens: 6 },
        { lowerLimit: 600, upperLimit: 699, tokens: 8 },
        {  lowerLimit: 700, upperLimit: 1000, tokens: 10 },
        
    ];

    const totalTokenscibilScore = cibilScoreIntervals.reduce((acc, interval) => {
      if (cibilScore >= interval.lowerLimit && cibilScore <= interval.upperLimit) {
        setTokensGenerated4(interval.tokens);
        return interval.tokens;
      }
      return acc;
    }, 0);
    
    const  totalTokendriverfineIntervals = [
        {lowerLimit: 0, upperLimit: 0, tokens: 10},
        { lowerLimit: 1, upperLimit: 500, tokens: 8 },
        { lowerLimit: 500, upperLimit: 1000, tokens: 6 },
        { lowerLimit: 1000, upperLimit: 2000, tokens: 4 },
        {  lowerLimit: 2000, upperLimit: 4000, tokens: 3 },
        {  lowerLimit: 4000, upperLimit: 5000, tokens: 1},
        {  lowerLimit:5000,  upperLimit:100000000, token:0},                                      
        
    ];

    const totalTokendriverfine = totalTokendriverfineIntervals.reduce((acc, interval) => {
      if (vehicleCompliance>= interval.lowerLimit && vehicleCompliance <= interval.upperLimit) {
        setTokensGenerated5(interval.tokens);
        return interval.tokens;
      }
      return acc;
    }, 0);
    
      

    const weightedTokens = totalTokensEarnings * 0.5;
    const weightedConversionRatio = totalTokensConversionRatio * 0.2;
    const weightedVehicleCompliance = 10 * 0.1;
    const weightedCibilScore = totalTokenscibilScore * 0.1;
    const weightedDriverRatings = totalTokensdriverRatings * 0.1;

    const totalWeightedScore =
      weightedTokens +
      weightedConversionRatio +
      weightedVehicleCompliance +
      weightedCibilScore +
      weightedDriverRatings;

    const totalScorePercentage = (totalWeightedScore / 10) * 100;

    setTotalScore(totalScorePercentage);
  };
  const renderScoreMessage = () => {
    if (totalScore >= 57.00) {
      return (
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#28a745', marginTop: '1.5rem' }}>
          You are eligible for credit!
        </p>
      );
    } else {
      return (
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'red', marginTop: '1.5rem' }}>
          You are in the waiting list.
        </p>
      );
    }
  };
  return (
    <div
      style={{
        backgroundColor: '#001f3f',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#001f3f',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
          padding: '2rem',
          borderRadius: '1rem',
          color: 'white',
          textAlign: 'center',
          width: '100%',
          maxWidth: '25rem',
          marginTop: '2rem',
          marginBottom: '5rem',
        }}
      >
        <h1 style={{ marginBottom: '1.5rem' }}>Credit Score Calculator</h1>
        <div>
          <div style={{ marginBottom: '1rem' }}>
            <h3>Enter Earnings</h3>
            <input
              type="number"
              value={earnings}
              onChange={(e) => setEarnings(parseFloat(e.target.value))}
              style={{
                borderRadius: '0.5rem',
                padding: '0.5rem',
                border: 'none',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                width: '100%',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h3>Trip Conversion Ratio</h3>
            <input
              type="number"
              value={conversionRatio}
              onChange={(e) => setConversionRatio(parseFloat(e.target.value))}
              style={{
                borderRadius: '0.5rem',
                padding: '0.5rem',
                border: 'none',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                width: '100%',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h3>Vehicle Compliance</h3>
            <select
              value={vehicleCompliance}
              onChange={(e) => setVehicleCompliance(e.target.value)}
              style={{
                borderRadius: '0.5rem',
                padding: '0.5rem',
                border: 'none',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                width: '100%',
              }}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h3>CIBIL Score</h3>
            <input
              type="number"
              value={cibilScore}
              onChange={(e) => setCibilScore(parseFloat(e.target.value))}
              style={{
                borderRadius: '0.5rem',
                padding: '0.5rem',
                border: 'none',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                width: '100%',
              }}
            />
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h3>Driver Ratings</h3>
            <input
              type="number"
              value={driverRatings}
              onChange={(e) => setDriverRatings(parseFloat(e.target.value))}
              style={{
                borderRadius: '0.5rem',
                padding: '0.5rem',
                border: 'none',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                width: '100%',
              }}
            />
          </div>
        </div>
        <button
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
          }}
          onClick={handleCalculateScore}
        >
              
          Calculate Total Credit Score
        </button>
        {renderScoreMessage()}
        {tokensGenerated1 !== 0 && (
          <p style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>
            Earnings Tokens Generated: {tokensGenerated1}
          </p>
        )}
        {tokensGenerated2 !== 0 && (
          <p style={{ fontWeight: 'bold' }}>
            Conversion Ratio Tokens Generated: {tokensGenerated2}
          </p>
        )}
        {tokensGenerated3 !== 0 && (
          <p style={{ fontWeight: 'bold' }}>
            Driver Ratings Tokens Generated: {tokensGenerated3}
          </p>
        )}
        {tokensGenerated4 !== 0 && (
          <p style={{ fontWeight: 'bold' }}>
            CIBIL Score Tokens Generated: {tokensGenerated4}
          </p>
        )}
        {totalScore !== 0 && (
          <p
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#28a745',
              marginTop: '1.5rem',
            }}
          >
            Total Credit Score: <span style={{ color: 'white' }}>{totalScore.toFixed(2)}%</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default BuyerInterface;