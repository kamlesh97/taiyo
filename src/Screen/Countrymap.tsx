import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useQuery } from "react-query";
import "../App.css";

const Countrymap = () => {
  const getFacts = async () => {
    const res = await fetch("https://disease.sh/v3/covid-19/countries");
    return res.json();
  };

  const { data, isLoading } = useQuery("randomFacts", getFacts);

  const renderMarkers = () => {
    let latLong: Array<Array<any>> = [];
    Array.isArray(data) &&
      data.map((val: any) => {
        let dt1 = [];
        dt1.push(val?.countryInfo?.lat, val?.countryInfo?.long);
        latLong.push(dt1);
      });
    return latLong;
  };

  return isLoading ? (
    <div>loading</div>
  ) : (
    <MapContainer
      center={[38, 30]}
      zoom={3}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "79vw" }}
      className="mt-5"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data &&
        renderMarkers().map((pos: any, index: number) => (
          <Marker position={pos} key={index}>
            <Popup>pop</Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default Countrymap;
