import React, { useState } from "react";
import ProductDataService from "../services/ProductService";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const initialProductState = {
    id: null,
    ProductName: null,
    ArabicProductName: "",
    Category: "",
    Summary:"",
    Description:"",
    ProductPrice: null
  };
  const [Product, setProduct] = useState(initialProductState);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...Product, [name]: value });
  };

  const saveProduct = () => {
    var data = {
      ProductName: Product.ProductName,
      ArabicProductName: Product.ArabicProductName,
      ProductCatagoryId:Product.Category,
      Summary: Product.Summary,
      Description: Product.Description,
      ProductPrice: Product.ProductPrice
    };
console.log(data);
setSubmitted(true);

    ProductDataService.create(data)
      .then(response => {
        setProduct({
          id: response.data.id,
          ProductName: response.data.ProductName,
          ArabicProductName: response.data.ArabicProductName,
          Category: response.data.ProductCatagoryId,
          Summary: response.data.Summary,
          Description: response.data.Description,
          ProductPrice: response.data.ProductPrice
        });

        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {

        setSubmitted(false);
        navigate("/login");
      });

  };

  const newProduct = () => {
    setProduct(initialProductState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newProduct}>
            Add
          </button>
        </div>
      ) : (
        <form>
        <div>
          <div className="form-group">
            <label htmlFor="ProductName">ProductName</label>
            <input
              type="text"
              className="form-control"
              id="ProductName"
              required
              value={Product.ProductName}
              onChange={handleInputChange}
              name="ProductName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="ArabicProductName">ArabicProductName</label>
            <input
              type="text"
              className="form-control"
              id="ArabicProductName"
              required
              value={Product.ArabicProductName}
              onChange={handleInputChange}
              name="ArabicProductName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Category">Category</label>
            <input
              type="text"
              className="form-control"
              id="Category"
              required
              value={Product.Category}
              onChange={handleInputChange}
              name="Category"
            />
          </div><div className="form-group">
            <label htmlFor="Summary">Summary</label>
            <input
              type="text"
              className="form-control"
              id="Summary"
              required
              value={Product.Summary}
              onChange={handleInputChange}
              name="Summary"
            />
          </div><div className="form-group">
            <label htmlFor="Description">Description</label>
            <input
              type="text"
              className="form-control"
              id="Description"
              required
              value={Product.Description}
              onChange={handleInputChange}
              name="Description"
            />
          </div><div className="form-group">
            <label htmlFor="ProductPrice">ProductPrice</label>
            <input
              type="text"
              className="form-control"
              id="ProductPrice"
              required
              value={Product.ProductPrice}
              onChange={handleInputChange}
              name="ProductPrice"
            />
          </div>
          <button onClick={saveProduct} type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
          </form>
      )}
    </div>
  );
};

export default AddProduct;