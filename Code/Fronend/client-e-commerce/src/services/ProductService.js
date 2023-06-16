import http from "../http-common";

var  Config = {
  headers: {
     Authorization: "Bearer " + localStorage.getItem("token")
  }
};
const getAll = () => {
  return http.get("/Catalogue",Config);
};
const create = (data) => {
  return http.post("/Catalogue", data,Config);
};

const update = (id, data) => {
  return http.put(`/Catalogue/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/Catalogue/${id}`);
};



const ProductService = {
  getAll,
  create,
  update,
  remove,
};

export default ProductService;