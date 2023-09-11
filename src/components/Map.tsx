import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";
import MarkerIcon from "leaflet/dist/images/marker-icon.png";
import MarkerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import MarkerShadow from "leaflet/dist/images/marker-shadow.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useIpSearch } from "@/hooks/ipSearchContext";

const icon = new Icon({
  iconUrl: MarkerIcon.src,
  iconRetinaUrl: MarkerIconRetina.src,
  shadowUrl: MarkerShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

// proxy component. Needs to be within the mapContainer provider below to run as useMap is a hook only avilable within that context.
function MapControl({ lat, lon }: { lat: number; lon: number }) {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lon]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon]);
  return null;
}

export default function Map() {
  const { ipResults } = useIpSearch();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <MapContainer
      center={[ipResults.location.lat, ipResults.location.lng]}
      zoom={15}
      scrollWheelZoom={true}
      doubleClickZoom={false}
      dragging={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[ipResults.location.lat, ipResults.location.lng]} icon={icon}></Marker>
      <MapControl lat={ipResults.location.lat} lon={ipResults.location.lng} />
    </MapContainer>
  ) : null;
}
