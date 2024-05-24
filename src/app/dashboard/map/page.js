// components/Map.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet's default icon issue in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-shadow.png',
});

const Map = ({ countries }) => {
    return (
        <MapContainer center={[20, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {countries.map((country, idx) => (
                <Marker key={idx} position={[country.lat, country.lng]}>
                    <Popup>
                        <strong>{country.name}</strong>
                        <br />
                        Active: {country.active}
                        <br />
                        Recovered: {country.recovered}
                        <br />
                        Deaths: {country.deaths}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
