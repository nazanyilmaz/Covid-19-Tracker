import axios from "axios";
import { headers } from "./../constants/index";
import { createAsyncThunk } from "@reduxjs/toolkit";

//API'lerden bayrak ve covud verisini alacak ve sclice'a aktaracak asenkron thunk aksiyonlari

export const getData = createAsyncThunk("countryData", async (isoCode) => {
  const params = { q: isoCode };
  //API-Covid verileri
  const req1 = axios.get(`https://covid-19-statistics.p.rapidapi.com/reports`, {
    params,
    headers,
  });
  //Api bayrak verisi
  const req2 = axios.get(`https://restcountries.com/v3.1/name/${isoCode}`);

  const responses = await Promise.all([req1, req2]); //her iki istegi paralel bir sekilde gondermek icin promise.all kullandik
  //console.log(res.data.data[0]);
  //console.log(countryRes.data[0]);
  //console.log(responses);

  //covid bilgilerindeki region nesnesini covid nesnesine dagitma
  const covid = {
    ...responses[0].data.data[0],
    ...responses[0].data.data[0].region,
  };
  //kullanilmayacak degerleri kaldiralim
  delete covid.region;
  delete covid.cities;
  //console.log(covid);
  //payloadi retrun edelim
  return {
    covid,
    country: responses[1].data[0],
  };
});
