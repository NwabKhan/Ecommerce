import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { MdSecurity } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";

import { useMyHook } from "../context/ProductContext";
import PageNavigation from "../components/singlehelpers/PageNavigation";
import ProductImage from "../components/singlehelpers/ProductImage";
import FormatPrice from "../components/featureproduct/FormatPrice";
import Star from "../components/singlehelpers/Star";
import AddToCart from "../components/addtocart/AddToCart";
import { useState } from "react";

const SingleProduct = ({ formData }) => {
  // const { getSingleProduct, isSingleLoading, singleProduct } = useMyHook(); //calling the function getSingleProduct defined in product context
  const { id } = useParams(); // getting the product id found in url using build in module params
  const [singleProduct, setSingleProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getSingleProduct = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}get-single-product/${id}`
      );
      const data = await res.json();
      console.log("Data in effect: ", data);
      if (data.success === false) {
        setError(true);
        setLoading(false);
        return;
      }
      setSingleProduct(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log("first", error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      setSingleProduct(formData);
    } else {
      getSingleProduct(id);
    }
    window.scrollTo(0, 0);
  }, []);

  //Since initailly singleProduct is empty, so Final data comes out as undefined. So to tackle that issueuse if else
  const {
    ID,
    name,
    brand,
    regularPrice,
    description,
    stock,
    rating,
    total_reviews,
    imageUrls,
    discountedPrice,
    maxQuantity,
  } = singleProduct;

  return (
    <div>
      {Object.keys(singleProduct).length > 0 ? (
        <Wrapper>
          <PageNavigation title={name} />
          <div className="container">
            <div className="grid grid-two-column">
              <div className="product-images">
                <ProductImage images={imageUrls} />
              </div>

              <div className="product-data">
                <h2>{name}</h2>
                <Star stars={rating} reviews={total_reviews} />
                <p className="product-data-price">
                  MRP:
                  <del>
                    {/* here price * 0.5 means price is 50% off*/}
                    <FormatPrice price={regularPrice + regularPrice * 0.5} />
                  </del>
                </p>
                <p className="product-data-price product-data-real-price">
                  Deal of the Day <FormatPrice price={discountedPrice} />
                </p>
                <p>{description}</p>

                <div className="product-data-warranty">
                  <div className="product-warranty-data">
                    <TbTruckDelivery className="warranty-icon" />
                    <p>Fast & Free Delivery </p>
                  </div>

                  <div className="product-warranty-data">
                    <GiCash className="warranty-icon" />
                    <p>Payment on Delivery</p>
                  </div>

                  <div className="product-warranty-data">
                    <MdSecurity className="warranty-icon" />
                    <p>Full warranty </p>
                  </div>

                  <div className="product-warranty-data">
                    <TbReplace className="warranty-icon" />
                    <p>Replace Order</p>
                  </div>
                </div>

                <div className="product-data-info">
                  <p>
                    Available:
                    <span>
                      {" "}
                      {stock > 0
                        ? `In Stock (${maxQuantity}) `
                        : "Out of Stock"}
                    </span>
                  </p>
                  <p>
                    ID : <span> {ID} </span>
                  </p>
                  <p>
                    Brand :<span> {brand} </span>
                  </p>
                </div>

                <hr />
                {stock > 0 && <AddToCart singleProduct={singleProduct} />}
              </div>
            </div>
          </div>
        </Wrapper>
      ) : (
        <div className="page_loading">
          <h2>---Loading</h2>
        </div>
      )}
    </div>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 5rem 7rem;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
