const signin = user => {
  return fetch("/auth/singin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: "Bearer" + credentials.t
    },
    credentials: "include",
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

const signout = user => {
  return fetch("/auth/signout", {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

const create = user => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

const list = () => {
  return fetch("/api/users", {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

const read = (params, credentials) => {
  return fetch("/api/user/" + params.userId, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer" + credentials.t
    }
  })
    .then(response => {
      response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

const update = (params, credentials, user) => {
  return fetch("/api/users" + params.userId, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer" + credentials.t
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

const remove = (params, credentials) => {
  return fetch("/api/users" + params.userId, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer" + credentials.t
    }
  })
    .then(response => {
      response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export { create, list, update, remove, read };
