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
    {starWarsData && starWarsData.length > 0 && (
      <div>
        <h2 className="text-xl font-bold">{starWarsData.length} results found</h2>
        <StarWarsList starWarsData={starWarsData} resourceType={inputType} />
      </div>
    )}
  </div>
  );
};


const StarWarsList = ({ starWarsData, resourceType }) => {
    return (
      <ul>
        {starWarsData.map((item, index) => (
          <li key={index} className="mt-4 border-b pb-2">
            <h3 className="text-lg font-bold">{item.name || item.title}</h3>
            {renderFields(item, resourceType)}
          </li>
        ))}
      </ul>
    );
  };

const renderFields = (item, type) => {
    switch (type) {
      case 'planets':
        return (
            <>
            <p><strong>Name: {item.name}</strong> </p>
            <p><strong>Rotation Period:</strong> {item.rotationPeriod}</p>
            <p><strong>Orbital Period:</strong> {item.orbitalPeriod}</p>
            <p><strong>Diameter:</strong> {item.diameter}</p>
            <p><strong>Climate:</strong> {item.climate}</p>
            <p><strong>Gravity:</strong> {item.gravity}</p>
            <p><strong>Terrain:</strong> {item.terrain}</p>
            <p><strong>Surface Water:</strong> {item.surfaceWater}</p>
            <p><strong>Population:</strong> {item.population}</p>
          </>
        );
      case 'starships':
        return (
          <>
            <p>Name: {item.name}</p>
            <p>Model: {item.model}</p>
            <p>Manufacturer: {item.manufacturer}</p>
            <p>Cost in Credits: {item.costInCredits}</p>
            <p>Length: {item.length}</p>
            <p>Max Atmosphering Speed: {item.maxAtmospheringSpeed}</p>
            <p>Crew: {item.crew}</p>
            <p>Passengers: {item.passengers}</p>
            <p>Cargo Capacity: {item.cargoCapacity}</p>
            <p>Consumables: {item.consumables}</p>
            <p>Hyperdrive Rating: {item.hyperdriveRating}</p>
            <p>MGLT: {item.MGLT}</p>
            <p>Starship Class: {item.starshipClass}</p>
          </>
        );
      case 'vehicles':
        return (
          <>
             <p>Name: {item.name}</p>
            <p>Model: {item.model}</p>
            <p>Manufacturer: {item.manufacturer}</p>
            <p>Cost in Credits: {item.costInCredits}</p>
            <p>Length: {item.length}</p>
            <p>Max Atmosphering Speed: {item.maxAtmospheringSpeed}</p>
            <p>Crew: {item.crew}</p>
            <p>Passengers: {item.passengers}</p>
            <p>Cargo Capacity: {item.cargoCapacity}</p>
            <p>Consumables: {item.consumables}</p>
            <p>Vehicle Class: {item.vehicleClass}</p>
          </>
        );
      case 'people':
        return (
          <>
            <p>Name: {item.name}</p>
            <p>Height: {item.height}</p>
            <p>Mass: {item.mass}</p>
            <p>Hair Color: {item.hairColor}</p>
            <p>Skin Color: {item.skinColor}</p>
            <p>Eye Color: {item.eyeColor}</p>
            <p>Birth Year: {item.birthYear}</p>
            <p>Gender: {item.gender}</p>
          </>
        );
      case 'films':
        return (
          <>
            <p>Name: {item.name}</p>
            <p>Episode ID: {item.episodeId}</p>
            <p>Opening Crawl: {item.openingCrawl}</p>
            <p>Director: {item.director}</p>
            <p>Producer: {item.producer}</p>
            <p>Release Date: {item.releaseDate}</p>
          </>
        );
      case 'species':
        return (
          <>
             <p>Name: {item.name}</p>
            <p>Classification: {item.classification}</p>
            <p>Designation: {item.designation}</p>
            <p>Average Height: {item.averageHeight}</p>
            <p>Skin Colors: {item.skinColors}</p>
            <p>Hair Colors: {item.hairColors}</p>
            <p>Eye Colors: {item.eyeColors}</p>
            <p>Average Lifespan: {item.averageLifespan}</p>
            <p>Language: {item.language}</p>
          </>
        );
      default:
        return null;
    }
  };
  

const mapStateToProps = (state) => ({
  starWarsData: state.starWars.data,
  loading: state.starWars.loading,
  error: state.starWars.error,
});

export default connect(mapStateToProps, { fetchStarWarsData })(StarWarsComponent);
