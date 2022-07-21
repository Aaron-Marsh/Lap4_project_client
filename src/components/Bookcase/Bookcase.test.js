import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";

import { Bookcase } from ".";

describe("Bookcase", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Bookcase books={[]} />
        </BrowserRouter>
      </Provider>
    );
  });
  test("it should render the first ", async () => {
    const favouritedDivBook = await screen.findByTestId("favourited-book-0");
    expect(favouritedDivBook).toBeInTheDocument();
  });

  test("it should render multiple books ", async () => {
    const favouritedDivBooks = await screen.findAllByTestId(/favourited-book/i);
    expect(favouritedDivBooks).toBeInTheDocument();
  });

  test("it should render the first ", async () => {
    const favouritedDivBooks = await screen.findAllByTestId(/favourited-book/i);
    expect(favouritedDivBooks).toBeInTheDocument();
  });
});
