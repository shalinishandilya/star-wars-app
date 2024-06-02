import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchStarWarsData } from '../actions/starWarsActions';

const StarWarsComponent = ({ fetchStarWarsData, starWarsData, loading, error }) => {
  const [inputType, setInputType] = useState('');
  const [inputName, setInputName] = useState('');

  const handleFetchData = () => {
    fetchStarWarsData({ type: inputType, name: inputName });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Star Wars Data</h1>
      <div className="mb-4 flex items-center">
        <label className="mr-2">Type:</label>
        <input
          type="text"
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          className="border border-gray-300 p-1"
        />
        <label className="ml-4 mr-2">Name:</label>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className="border border-gray-300 p-1"
        />
        <button onClick={handleFetchData} className="bg-blue-500 text-white px-4 py-1 rounded">
          Fetch Data
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {starWarsData && (
        <div>
          <h2 className="text-xl font-bold">{starWarsData.count} results found</h2>
          <ul>
            {starWarsData.map((item, index) => (
              <li key={index} className="mt-4 border-b pb-2">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p>Rotation Period: {item.rotation_period}</p>
                <p>Orbital Period: {item.orbital_period}</p>
                <p>Diameter: {item.diameter}</p>
                {/* Add more fields as needed */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

  );
};

const mapStateToProps = (state) => ({
  starWarsData: state.starWars.data,
  loading: state.starWars.loading,
  error: state.starWars.error,
});

export default connect(mapStateToProps, { fetchStarWarsData })(StarWarsComponent);
