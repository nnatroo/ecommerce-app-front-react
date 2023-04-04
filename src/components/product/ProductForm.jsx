import React from "react";
import classes from "../../modules/ProductForm.module.css";

const ProductForm = () => {
  return (
    <div className={classes["add-product"]}>
      <form>
        <div>
          <label for="SKU" class="form-label">
            SKU
          </label>
          <input type="text" class="form-control" id="SKU" />
        </div>
        <div>
          <label for="SKU" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" id="SKU" />
        </div>
        <div>
          <label for="SKU" class="form-label">
            Price ($)
          </label>
          <input type="text" class="form-control" id="SKU" />
        </div>

        <div>
          <label for="SKU" class="form-label">
            Type Switcher
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected value="DVD">DVD</option>
            <option value="Book">Book</option>
            <option value="Furniture">Furniture </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
