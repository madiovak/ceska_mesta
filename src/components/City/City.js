import React from 'react';

export const City = ({ photo, name, population, area, district }) => (
    <div className="cities">
        <div className="city">
            <img className="image" alt={name} src={photo} />
            <div className="information">
                <h2>{name}</h2>
                <p>Počet obyvatel: {population}</p>
                <p>
                    Rozloha: {area} km<sup>2</sup>
                </p>
                <p>
                    Kraj: {district}
                </p>
            </div>
        </div>
    </div>
);