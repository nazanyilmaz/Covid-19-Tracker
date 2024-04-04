import { render, screen } from "@testing-library/react";
import ErrorDisplay from ".";
import userEvent from "@testing-library/user-event";

describe("errorDisplay component", () => {
  test("shows the right message", () => {
    const errorMessage = "404 content was not found";
    render(<ErrorDisplay message={errorMessage} retry={() => {}} />);

    screen.getByText(errorMessage); //is there a writing any errorMessages
  });

  test("The function runs when retry is clicked.", async () => {
    const user = userEvent.setup(); //userEvent kurulumu
    const retryMock = jest.fn(); //mock fonks.olustur
    render(<ErrorDisplay mesaage={"xoxo"} retry={retryMock} />); //bileseni aldigi proplarla beraber renderla

    const button = screen.getByRole("button"); // call the button
    await user.click(button); //click the button
    expect(retryMock).toHaveBeenCalled(); // did fonction called
  });
});

//descripe testleri gruplandirmak icin kullanabiliriz veya beforeEach fonksiyonunu kullanarak her testen once calisan bir fonsiyondir beforeAll ise descripe icindeki testlerden hemen sonra calisan fonksiyondur. Mesela her testin basinca bi sayac calistirmak istersen beforeEach testen sonta baslasin istersen sayac beforeAll ile calistiririz.
