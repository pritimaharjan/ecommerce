import React from 'react';
import './Collection.css';
import collection1 from '../assests/6.png'; // Ensure these paths are correct
import collection2 from '../assests/7.png';
import collection3 from '../assests/8.png';

export const Collection = () => {
  const collections = [
    { image: collection1, title: "Collection 1", description: "Description of collection 1" },
    { image: collection2, title: "Collection 2", description: "Description of collection 2" },
    { image: collection3, title: "Collection 3", description: "Description of collection 3" },
    // Add more collections as needed
  ];

  return (
    <div className='collection-section'>
      <h2 className='section-title'>Our Collection</h2>
      <div className='collection-grid'>
        {collections.map((collection, index) => (
          <div key={index} className='collection-item'>
            <img src={collection.image} alt={collection.title} className='collection-image' />
            <h3 className='collection-title'>{collection.title}</h3>
            <p className='collection-description'>{collection.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
