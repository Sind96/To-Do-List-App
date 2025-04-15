import "@testing-library/jest-dom";
import { server } from "./mocks/server";

// Start API mocking before all tests
beforeAll(() => server.listen());
// Reset any request handlers that are declared during the tests
afterEach(() => server.resetHandlers());
// Clean up after all tests
afterAll(() => server.close());