/* Import from NPM. */
import axios from "axios"

/* Import configuration constants. */
import {
  API_1_URL_HTTP,
  API_2_URL_HTTP
} from "../config/endpoints"

/* Axios set up ready for API 1. */
export const AxiosAPI1 = axios.create({
  baseURL: API_1_URL_HTTP,
  timeout: 1000  // If the request takes longer than "timeout", the request will be aborted.
})

/* Axios set up ready for API 2. */
export const AxiosAPI2 = axios.create({
  baseURL: API_2_URL_HTTP,
  timeout: 1000  // If the request takes longer than "timeout", the request will be aborted.
})
