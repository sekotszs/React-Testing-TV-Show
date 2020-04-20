import React from "react";
import App from "./App";
import { render, waitFor, fireEvent } from "@testing-library/react";
import {fetchShow as mockFetchShow} from './api/fetchShow';
import {showData} from './TestData';
jest.mock( './api/fetchShow')

test("App renders", async () => {
    mockFetchShow.mockResolvedValueOnce({
data: showData
    });
    const {getByText} = render (<App/>)
    expect(mockFetchShow).toHaveBeenCalledTimes(1)

    await waitFor (() => getByText(/Select a season/i))
    fireEvent.mouseDown(getByText(/Select a season/i))
    await waitFor (() => getByText(/Season 4/i))
});
