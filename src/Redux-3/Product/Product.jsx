import React from "react";
const Product = () => {
  return (
    <>
      <div className="container mt-5"> 
        <div className="row">
          <div className="col-md-6">
            <table className="table table-hover">
              <thead className="bg-dark text-white">
                <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
