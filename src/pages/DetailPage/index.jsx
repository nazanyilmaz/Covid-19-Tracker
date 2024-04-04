import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getData } from "../../redux/actions";
import { IoChevronBack } from "react-icons/io5";
import InfoCard from "../../components/InfoCard";
import Loader from "../../components/Loader";
import ErrorDisplay from "../../components/ErrorDisplay";
import HeaderLoader from "../../components/Loader/HeaderLoader";

const DetailPage = () => {
  //store
  const { data, error, isLoading } = useSelector((store) => store);

  const { country } = useParams(); //url'den parametreyi al
  const dispatch = useDispatch(); //dispatch kurulumu
  const fetchData = () => {
    //verileri alacak fonk.
    dispatch(getData(country));
  };

  useEffect(() => {
    fetchData();
  }, [country]);

  //covid bilgileri nesne halinde gelir bunu diziye cevirelim object.entires ile
  const covidData = Object.entries(data?.covid || {});
  //console.log(data.covid) // orjinal hali
  //console.log(covidData);diziye cevrilmis hali

  return (
    <div className="min-h-[calc(100vh-83px)] shadow-4xl bg-zinc-800 p-6 grid place-items-center text-gray-700">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl ">
        <div className="flex justify-between items-center mb-6 gap-6">
          <Link className="flex " to={"/"}>
            <IoChevronBack className="bg-gray-200 rounded-lg  text-gray-600 text-3xl w-full p-1 shadow-2xl hover:scale-90 hover:shadow-xl hover:text-red-400" />
          </Link>
          <div className="flex items-center space-x-2">
            {isLoading ? (
              <HeaderLoader />
            ) : (
              !error && (
                <>
                  <img className="w-16 h-12 " src={data?.country?.flags?.svg} />
                  <h1 data-testid="title" className="text-3xl font-bold ">
                    {data?.country?.name?.common}
                  </h1>
                </>
              )
            )}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <Loader />
          ) : error ? (
            <ErrorDisplay message={error} retry={fetchData} />
          ) : (
            covidData.map((item, key) => <InfoCard key={key} item={item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
