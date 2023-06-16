var http= axios.create({
  baseURL: "http://localhost:5000/users/authenticate",
  headers: {
    "Content-type": "application/json"
  }
});

const create = (data) => {
  return http.post(data);
};



const authService = {
  create,
};

export default authService;