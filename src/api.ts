import type { Customer, Training } from "./types";

export const fetchCustomers = () => {
  return fetch(import.meta.env.VITE_API_URL + "/customers")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error when fetching customers");
      }

      return response.json();
    })
    .then(data => data._embedded.customers as Customer[]);
};

export const fetchTrainings = () => {
  return fetch(import.meta.env.VITE_API_URL + "/gettrainings")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error when fetching trainings");
      }

      return response.json();
    })
    .then(data => data as Training[]);
};