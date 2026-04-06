const Dashboard = ({ data }) => {
  if (!data) return <p>Search for a city to see weather.</p>;
  return (
    <div className="dashboard">
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Description: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};
export default Dashboard;