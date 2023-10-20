import React from 'react';
import './App.css';
import './style.css';
import LineStylesDemo from './components/LineStylesDemo';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function generateRandomData() {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const data = labels.map(() => Math.floor(Math.random() * 100));
  const sum = data.reduce((acc, value) => acc + value, 0);
  const percentage = (sum / (data.length * 100)) * 100;

  let chartColor;
  if (percentage >= 50) {
    chartColor = 'rgba(62, 203, 40, 0.65)';
  } else {
    chartColor = 'rgba(228, 0, 0, 0.65)';
  }

  return {
    labels,
    datasets: [
      {
        label: '',
        data,
        fill: true,
        borderColor: chartColor,
        tension: 0.4,
        backgroundColor: chartColor,
      },
    ],
    chartColor,
    chartPercentage: percentage.toFixed(2),
  };
}

function App() {
  const chartNames = [
    'This is testing...',
    'this is second testing...',
    'this is third testing...',
    'this is fourth testing...',
    'this is fifth testing...',
    'this is sixth testing...',
    'this is seventh testing...',
    'testing',
  ];

  return (
    <div className="App">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <div className="dashboard">
          {chartNames.map((name, index) => {
            const chartData = generateRandomData();
            return (
              <div key={index} className="chart-box">
                <div className="chart-head">
                  <div
                    className="chart-percent"
                    style={{
                      width: '100%',
                      backgroundColor: chartData.chartColor,
                      color: 'white',
                      textAlign: 'left',
                      padding: '0px',
                      height: '65px', 
                    }}
                  >
                    <div style={{ padding: '2px'}}>
                      <div className="percent-bar" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: '10px' }}>
                        <h1
                          className="text-lg font-semibold mb-2"
                          style={{ fontSize: '18px', color: 'black' }}
                        >
                          {name}{' '}
                        </h1>
                      <h2>
                        {chartData.chartColor === 'rgba(228, 0, 0, 0.65)' ? (
                            <FontAwesomeIcon icon={faExclamationCircle} style={{ color: 'black'}} />
                          ) : (
                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'black'}} />
                          )}
                      </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="chart-body"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '0px',
                    height: '40px',
                  }}
                >
                  <h1 className="text-lg font-semibold mb-2" style={{ fontSize: '40px' }}>
                    {chartData.chartPercentage}%
                  </h1>
                  <LineStylesDemo
                    chartData={chartData}
                    chartColor={chartData.chartColor}
                    chartPercentage={chartData.chartPercentage}
                  />
                </div>
                <hr style={{ border: '1px solid black', width: '100%', marginTop: '50px' }} />
                <div
                  className="chart-footer"
                  style={{
                    display: 'flex',
                    height: '20px',
                    color: 'black',
                    textAlign: 'left',
                    padding: '0px',
                    marginTop: '10px',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesomeIcon icon={faClock} />
                  <h1 className="text-lg font-semibold mb-2" style={{ fontSize: '15px', padding: '0px', marginLeft: '5px' }}>
                    2 hours
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    
  );
}

export default App;
