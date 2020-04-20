import React from "react";
import App from "./App";
import { render, waitFor } from "@testing-library/react";
import {fetchShow as mockFetchShow} from './api/fetchShow';
import {showData} from './TestData';
jest.mock( './api/fetchShow')

test("App renders", async () => {
    mockFetchShow.mockResolvedValueOnce({
data: showData
    });
    const {getByTestId} = render (<App/>)
    expect(mockFetchShow).toHaveBeenCalledTimes(1)
})