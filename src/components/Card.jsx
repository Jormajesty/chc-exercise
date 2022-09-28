import React, { Component, useEffect } from 'react';
export default function Card({ city }) {
    return (
        !!city && (
            <div className='city-view'>
                <span className='city-detail selected-city--name'>
                    {city.name}
                </span>
                <span className='city-detail selected-city--country'>
                    Country: {city.country}
                </span>
                <span className='city-detail selected-city--likes'>
                    Likes: {city.details.likes}
                </span>
                <span className='city-detail selected-city--lat'>
                    Latitude: {city.location.lat}
                </span>
                <span className='city-detail selected-city--lng'>
                    Longitude: {city.location.lng}
                </span>
            </div>
        )
    )
}