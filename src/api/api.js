import { SERVER_URL, POST, DELETE, PUT, PATCH } from "./constants.js";

export const api = async (method, payload, endpoint = SERVER_URL) => {
  let config = {};

  if (method) {
    config = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log(payload);
    if (method === POST || method === PUT || method === PATCH) {
      config.body = JSON.stringify(payload);

      console.log(config);
      console.log(config.body);
    }

    if (method === DELETE || method === PUT || method === PATCH) {
      endpoint = `${endpoint}/${payload.id}`;
    }
  }

  try {
    const response = await fetch(endpoint, config);

    if (response.ok) {
      let message;
      switch (method) {
        case POST: {
          message = "Data has been added";
          break;
        }
        case DELETE: {
          message = "Data has been removed";
          break;
        }
        case PUT: {
          message = "Data has been updated";
          break;
        }
        case PATCH: {
          message = "Data has been updated";
          break;
        }
        default: {
          message = "Data has been received";
        }
      }
      console.log(message);

      const result = await response.json();
      return result;
    }

    throw new Error(response.statusText);
  } catch (err) {
    console.error(err.message || err);
  }
};
