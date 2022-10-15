import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function NavBar( {length, cart,  incrementQuantity, decrementQuantity}) {


  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-white fixed-top mt-5 px-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            EASY<span className="text-danger">shopping</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active red" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Promotions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="icon-shop">
            <span id="counter">{cart}</span>
            <span
              className="iconshop"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <FaShoppingCart />
            </span>
          </div>

        </div>
      </nav>
      <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">


                {length === 0 ? (
              <p>There are no items in the cart</p>
            ) : (cart.map((product) => (
                <div class="modal-body modalcart border-danger">

                  <div className="modal-img">
                    <img src={product.img} width="200" className="img-fluid"></img>
                  </div>

                  <div className="info-box">
                    <div className="product-title">
                      <span className="title fw-bold">Title: </span>
                      <span className="title">{product.title}</span>
                    </div>

                    <div className="product-quantity d-flex justify-content-between mt-3 align-items-center ">
                      <span className="title me-3 fw-bold">Quantity: </span>

                      <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-danger me-3"
                          onClick={()=> incrementQuantity(product)}
                        >+</button>
                        <span>{ product.quantity }</span>
                        <button className="btn btn-danger ms-3" onClick={()=>decrementQuantity(product)}>-</button>
                      </div>
                    </div>
                  </div>

                </div>
              ))
            )}
                  
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
    </div>
    
  );
}

export default NavBar;
