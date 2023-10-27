import { useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../../firebase";
import { useNavigate } from "react-router-dom";
import SingleProduct from "../../pages/SingleProduct";
import Dialog from "@mui/material/Dialog";
import { DialogActions } from "@mui/material";
import { Button } from "../../styles/Button";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    total_reviews: 0,
    regularPrice: 0,
    discountedPrice: 0,
    description: "",
    stock: false,
    ID: "",
    brand: "",
    color: false,
    maxQuantity: 0,
    imageUrls: [],
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // Upload a single image and get a url
  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name; //To make filename unique
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleImageSubmit = () => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
      //selected files + Uploaded files
      setUploading(true);
      setImageUploadError(false);
      const promises = []; //As we may have multiple images so we have to wait for all to upload
      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      // We use Promise.all when we havbe multiple asyncchronous operation to complete.
      //It will wait for all the Promises objects are created and added to the promises array either resolved or reject
      Promise.all(promises)
        .then((urls) => {
          //If all promises are resolved successfully, it enters .then block
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload failed (2 mb max per image)");
          setUploading(false);
        });
    } else {
      setImageUploadError("You can only upload 6 images per listing");
      setUploading(false);
    }
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index), // create a new array of imageUrls where i != index, i.e the element we are deleting is excluded
    });
  };

  const handleChange = (e) => {
    setShowPreview(false);

    //Setting these three, as these are booleans
    if (e.target.id === "stock") {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
    }

    //For other input fields, go like this
    if (
      e.target.type === "number" ||
      e.target.type === "text" ||
      e.target.type === "textarea" ||
      e.target.type === "color"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.imageUrls.length < 1)
        return setError("You must upload at least one image");
      //As sometimes these may be strings like "500", to covert these to number we can add "+" infornt of these
      if (+formData.regularPrice < +formData.discountedPrice)
        return setError("Discount price must be lower than regular price");
      setLoading(true);
      setError(false);
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}create-product`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
          }),
        }
      );
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      navigate(`/singleproduct/${formData.ID}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: "1rem", margin: "0 auto", maxWidth: "80rem" }}>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "600",
          margin: "1.5rem 0",
          textAlign: "center",
        }}
      >
        Create a Product
      </h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "4rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "4rem" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <input
              type="text"
              placeholder="Name"
              style={{
                border: "1px solid gray",
                padding: "0.75rem",
                borderRadius: "8px",
              }}
              id="name"
              maxLength="62"
              minLength="5"
              required
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="text"
              placeholder="Brand"
              style={{
                border: "1px solid gray",
                padding: "0.75rem",
                borderRadius: "8px",
              }}
              id="brand"
              required
              onChange={handleChange}
              value={formData.brand}
            />

            <input
              type="text"
              placeholder="Unique ID"
              style={{
                border: "1px solid gray",
                padding: "0.75rem",
                borderRadius: "8px",
              }}
              id="ID"
              required
              onChange={handleChange}
              value={formData.ID}
            />
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  type="checkbox"
                  id="stock"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid gray",
                    borderRadius: "8px",
                  }}
                  onChange={handleChange}
                  checked={formData.stock}
                />
                <span>Stock</span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  type="color"
                  id="color"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid gray",
                    borderRadius: "8px",
                  }}
                  onChange={handleChange}
                  value={formData.color}
                />
                <span>Color</span>
              </div>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  type="number"
                  id="maxQuantity"
                  min="1"
                  max="20"
                  required
                  style={{
                    border: "1px solid gray",
                    padding: "0.75rem",
                    borderRadius: "8px",
                  }}
                  onChange={handleChange}
                  value={formData.maxQuantity}
                />
                <p style={{ fontSize: "12px" }}>max Quantity</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  type="number"
                  id="rating"
                  min="2"
                  max="5"
                  required
                  style={{
                    border: "1px solid gray",
                    padding: "0.75rem",
                    borderRadius: "8px",
                  }}
                  onChange={handleChange}
                  value={formData.rating}
                />
                <p style={{ fontSize: "12px" }}>Rating</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  type="number"
                  id="total_reviews"
                  min="2"
                  max="120"
                  required
                  style={{
                    border: "1px solid gray",
                    padding: "0.75rem",
                    borderRadius: "8px",
                  }}
                  onChange={handleChange}
                  value={formData.total_reviews}
                />
                <p style={{ fontSize: "12px" }}>Total Reviews</p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  type="number"
                  id="regularPrice"
                  min="50"
                  max="2000"
                  required
                  style={{
                    border: "1px solid gray",
                    padding: "0.75rem",
                    borderRadius: "8px",
                  }}
                  onChange={handleChange}
                  value={formData.regularPrice}
                />
                <div className="flex flex-col items-center">
                  <p style={{ fontSize: "12px" }}>Regular price</p>
                  <span className="text-xs">($ / month)</span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  type="number"
                  id="discountedPrice"
                  min="0"
                  max="2000"
                  required
                  style={{
                    border: "1px solid gray",
                    padding: "0.75rem",
                    borderRadius: "8px",
                  }}
                  onChange={handleChange}
                  value={formData.discountedPrice}
                />
                <div className="flex flex-col items-center">
                  <p style={{ fontSize: "12px" }}>Discounted price</p>
                  <span className="text-xs">($ / month)</span>
                </div>
              </div>
              <textarea
                type="text"
                placeholder="Description"
                style={{
                  border: "1px solid gray",
                  padding: "0.75rem",
                  borderRadius: "8px",
                  width: "100%",
                }}
                id="description"
                required
                onChange={handleChange}
                value={formData.description}
              />
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              maxHeight: "40vh",
              overflow: "auto",
            }}
          >
            <p style={{ fontWeight: 600 }}>
              Images:
              <span style={{ fontWeight: 400, fontSize: "12px" }}>
                The first image will be the cover (max 6)
              </span>
            </p>
            <div
              style={{ display: "flex", gap: "1rem" }}
              className="flex gap-4"
            >
              <input
                style={{
                  border: "1px solid gray",
                  padding: "0.75rem",
                  borderRadius: "8px",
                  width: "100%",
                }}
                type="file"
                id="images"
                accept="image/*"
                multiple
                onChange={(e) => {
                  setFiles(e.target.files);
                }}
              />
              <button
                type="button"
                disabled={uploading || files.length < 1}
                onClick={handleImageSubmit}
                className={`p-3 text-green-700 border border-green-700 rounded uppercase disabled:opacity-80 ${
                  files.length < 1 || uploading
                    ? "cursor-not-allowed hover:border-red-700 hover:text-red-700"
                    : "hover:shadow-lg"
                } `}
              >
                {uploading ? "Uploading..." : "Upload"}
              </button>
            </div>
            <p
              style={{ color: "red", fontSize: "12px" }}
              className="text-red-700 text-sm"
            >
              {imageUploadError && imageUploadError}
            </p>

            {/* Showing the selected Image */}
            {formData.imageUrls.length > 0 &&
              formData.imageUrls.map((url, index) => (
                <div
                  key={url}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    border: "1px solid gray",
                    alignItems: "center",
                    padding: "0.25rem 1rem",
                  }}
                >
                  <img
                    src={url}
                    alt="listing image"
                    style={{
                      width: "8rem",
                      height: "8rem",
                      objectFit: "contain",
                      borderRadius: "8px",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setShowPreview(true);
          }}
          disabled={uploading}
          className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          Preview Product
        </button>
        <Dialog
          maxWidth="lg"
          sx={{ padding: "1rem" }}
          open={showPreview}
          onClose={() => setShowPreview(false)}
        >
          <SingleProduct formData={formData} />
          <DialogActions
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "1rem",
            }}
          >
            <Button onClick={() => setShowPreview(false)}>
              Close and Edit
            </Button>
            <Button onClick={handleSubmit}>Publish Now</Button>
          </DialogActions>
        </Dialog>
      </form>
    </main>
  );
};

export default CreateProduct;
