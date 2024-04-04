const InfoCard = ({ item }) => {
  console.log(item);
  return (
    <div className="bg-gray-200 rounded-lg h-28 w-52 text-gray-600 p-6 shadow-2xl hover:scale-90 hover:shadow-xl">
      <p className="text-sm font-semibold text-gray-600 mb-2 capitalize">
        {" "}
        {item[0].split("_").join(" ")}
      </p>
      <h2 className="text-lg font-bold text-gray-800">{item[1]}</h2>
    </div>
  );
};

export default InfoCard;
