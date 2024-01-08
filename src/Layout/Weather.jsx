function Weather({ weatherData }) {
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="border-r px-4 py-2">Date</th>
            <th className="border-r px-4 py-2">Temperature</th>
            <th className="hidden border-r px-4 py-2 md:table-cell">
              Description
            </th>
            <th className="hidden border-r px-4 py-2 md:table-cell">Main</th>
            <th className="hidden border-r px-4 py-2 md:table-cell">
              Pressure
            </th>
            <th className="hidden px-4 py-2 md:table-cell">Humidity</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((data, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="border-r px-4 py-2">{data.date}</td>
              <td className="border-r px-4 py-2">{data.temp}</td>
              <td className="hidden border-r px-4 py-2 md:table-cell">
                {data.description}
              </td>
              <td className="hidden border-r px-4 py-2 md:table-cell">
                {data.main}
              </td>
              <td className="hidden border-r px-4 py-2 md:table-cell">
                {data.pressure}
              </td>
              <td className="hidden px-4 py-2 md:table-cell">
                {data.humidity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Weather;
