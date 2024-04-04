import { render, screen } from "@testing-library/react";
import DetailPage from ".";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; //ES6 modules
import { thunk } from "redux-thunk";
import { storeData } from "../../constants";

// test ortaminda store kurulumu yap ve thunk middleware kullandigimizi soyle
const mockStore = configureStore([thunk]);

test("loader component is visible on the screen during loading  ", () => {
  const store = mockStore({
    //storun kopyasini olusturuyoruz
    isLoading: true,
    error: "Cannot read properties of undefined (reading 'region')",
    data: null,
  });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <DetailPage />;
      </BrowserRouter>
    </Provider>
  );
  //did loader and headerloader comeing to screen
  screen.getAllByTestId("card-loader");
  screen.getByTestId("header-loader");
});

test("error componentis visible on the screen during error  ", () => {
  //store hata durumundaki verisini simule edilyoruz
  const store = mockStore({
    isLoading: false,
    error: "Cannot read properties of undefined (reading 'region')",
    data: null,
  });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    </Provider>
  );
  //did print a error message
  screen.getByText(/Cannot read properties/i);
});

test(" data is arrive cards printed on the scrren  ", () => {
  const store = mockStore(storeData);
  render(
    <Provider store={store}>
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    </Provider>
  );
  //1)secilen ulke bilgileri
  //is flag comeing to screen
  const image = screen.getByRole("img");

  //is correct flag src
  expect(image).toHaveProperty("src", "https://flagcdn.com/br.svg");

  //is country title comeing to screen
  const title = screen.getByTestId("title");
  // is country title correct
  expect(title.textContent).toBe("Brazil"); //expect(title).toHaveTextContent('Brazil');

  //2)apiden gelen verilerle dolu olan kartlar

  //covid nesnesini diziye cevirdik
  const covidData = Object.entries(storeData.data.covid);

  //dizideki her degerin key ve value degerleri ekrana geliyormu
  covidData.forEach((item) => {
    //is title correct
    screen.getAllByText(item[0].split("_").join(" "), { exact: false });

    //degerler dogrumu
    screen.getAllByText(item[1]);
  });
});
