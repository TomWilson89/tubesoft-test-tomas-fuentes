import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";
import App from "./App";
import axios from "axios";

jest.mock("axios");
jest.setTimeout(10000);

const server = setupServer(rest.post("/create"), (req, res, ctx) => {
  return res(ctx);
});

describe("renders", () => {
  beforeEach(() => render(<App />));

  test("Renders Header component", async () => {
    expect(await screen.findByTestId("stopwatch")).not.toBeNull();
  });

  test("Renders Timer component", async () => {
    expect(await screen.findByTestId("timer")).not.toBeNull();
  });

  test("Renders Actions  component", async () => {
    expect(await screen.findByTestId("action")).not.toBeNull();
  });
});

describe("functionality", () => {
  beforeAll(() => server.listen());

  afterEach(() => {
    server.resetHandlers();
    cleanup();
  });

  afterAll(() => server.close());

  beforeEach(() => {
    render(<App />);
    jest.useFakeTimers();
  });

  test("timer should render at 0", async () => {
    expect(await screen.findByTestId("minute")).toHaveTextContent("00");
    expect(await screen.findByTestId("second")).toHaveTextContent("00");
    expect(await screen.findByTestId("millisecond")).toHaveTextContent("00");
  });

  test('timer should start after clicking "start"', async () => {
    expect(await screen.findByTestId("millisecond")).toHaveTextContent("00");

    fireEvent.click(await screen.findByTestId("start"));

    expect(await screen.findByTestId("millisecond")).not.toHaveTextContent(
      "00"
    );

    expect(screen.queryByText(/start/i)).toBeNull();
    expect(await screen.findByTestId("pause")).not.toBeNull();
  });

  test('timer should stop after clicking the "stop" button', async () => {
    fireEvent.click(await screen.findByTestId("start"));

    expect(await screen.findByTestId("millisecond")).not.toHaveTextContent(
      "00"
    );

    setTimeout(async () => {
      expect(await screen.findByTestId("second")).toHaveTextContent("02");
      fireEvent.click(await screen.findByTestId("stop"));

      expect(await screen.findByTestId("millisecond")).toHaveTextContent("00");
    }, 2000);
  });
});
