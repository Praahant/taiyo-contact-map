'use client'
import 'leaflet/dist/leaflet.css';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query';
import axios from 'axios';

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker,CircleMarker, Popup, useMapEvents } from 'react-leaflet';

import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { circle } from 'leaflet';

const queryClient = new QueryClient();

export default function Map() {
    const { isPending, error, data } = useQuery({
        queryKey: ['countriesData'],
        queryFn: () =>
            fetch('https://disease.sh/v3/covid-19/countries').then((res) =>
                res.json(),
            ),
    });

    
    const [country, setCountry] = useState('');
    const [markerPosition, setMarkerPosition] = useState(null);
    const [activeCases, setActiveCases] = useState(null);
    const [recoveredCases, setRecoveredCases] = useState(null);
    const [death, setDeath] = useState(null);

    const MapClickHandler = () => {
        useMapEvents({
            click: async (event) => {
                const provider = new OpenStreetMapProvider();
                const results = await provider.search({ query: `${event.latlng.lat},${event.latlng.lng}` });

                if (results && results.length > 0) {
                    const address = results[0].label;  // Fetching the full address string
                    const addressParts = address.split(',');
                    const countryName = addressParts[addressParts.length - 1].trim();  // Extracting the last part as country name
                    setCountry(countryName);
                    setMarkerPosition(event.latlng); 
                    
                    // Set the marker position to the clicked location
                    try {
                        const response = await axios.get(`https://disease.sh/v3/covid-19/countries/${countryName}`);
                        setRecoveredCases(response.data.recovered);
                        setDeath(response.data.deaths);
                        setActiveCases(response.data.active);
                    } catch (error) {
                        console.error('Error fetching COVID-19 data:', error);
                        setActiveCases('Data not available');
                        setRecoveredCases('Data not available');
                        setDeath('Data not available');
                    }
                } 
                
                 else {
                    setCountry('Country not found');
                    setMarkerPosition(null);  // Reset the marker position if no country is found
                }
            },
        });
        return null;
    };
   

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <MapContainer center={[20, 0]} zoom={2} style={{ height: '90vh', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />

                    <MapClickHandler />

                    {markerPosition && (
                        
                        <CircleMarker center={markerPosition} radius={20}>
                        <Popup>
                            <p>
                                {country}
                            </p>
                            <p>
                                Active cases:{activeCases}
                            </p><p>
                                recovered cases:{recoveredCases}
                            </p><p>
                                Death:{death}
                            </p>
                           
                            </Popup>
                      </CircleMarker>
                    )}
                </MapContainer>
            </div>
        </QueryClientProvider>
    );
}
