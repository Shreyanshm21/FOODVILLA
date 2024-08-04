const Shimmer = () => {
  return (
    <div className="restaurant-list flex flex-wrap">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div key={index}
            className="shimmer-card animate-pulse w-64 p-4 m-4 bg-gray-100 rounded-lg">
            <div className="w-full h-32 bg-gray-200 rounded-md mb-4"></div>
            <div className="w-3/4 h-6 bg-gray-200 rounded-md mb-2"></div>
            <div className="w-1/2 h-6 bg-gray-200 rounded-md"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
