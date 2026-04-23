import type { Customer, CustomerInput, Training, TrainingInput } from "./types";

// Trainingit haetaan /gettrainings-endpointista, jossa mukana tulee id.
// Siksi trainingien update ja delete tehdään id:n perusteella.
// Customerit taas haetaan /customers-endpointista, jossa mukana tulee _links.self.href,
// joten customerien update ja delete tehdään url:n avulla.

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

export const deleteCustomer = (url: string) => {
  return fetch(url, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Error when deleting customer");
    }
  });
};

export const saveTraining = (training: TrainingInput) => {
  return fetch(import.meta.env.VITE_API_URL + "/trainings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(training),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Error when saving training");
    }
    return response.json();
  });
};

export const deleteTraining = (id: number) => {
  return fetch(`${import.meta.env.VITE_API_URL}/trainings/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Error when deleting training");
    }
  });
};