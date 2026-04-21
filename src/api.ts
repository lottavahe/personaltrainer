import type { Customer, CustomerInput, Training } from "./types";

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

export const saveCustomer = (customer: CustomerInput) => {
  return fetch(import.meta.env.VITE_API_URL + "/customers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Error when saving customer");
    }
    return response.json();
  });
};

export const updateCustomer = (url: string, updatedCustomer: CustomerInput) => {
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCustomer),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Error when updating customer");
    }

    return response.json();
  });
};