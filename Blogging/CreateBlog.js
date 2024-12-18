import React, { useState } from "react";
import axios from "axios";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    location: "",
    caption: "",
    image: null,
  });

  const [modalVisible, setModalVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please upload an image.");
      return;
    }

    const data = new FormData();
    data.append("Location", formData.location);
    data.append("Caption", formData.caption);
    data.append("Image", formData.image);

    try {
      const response = await axios.post("/api/blogs", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data); // Log response data or use it as needed.
      alert("Blog created successfully!");
      setModalVisible(false);
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Failed to create blog.");
    }
  };

  return (
    <div>
      <button onClick={() => setModalVisible(true)} style={{ width: "auto" }}>
        Create Blog
      </button>

      {modalVisible && (
        <div className="modal">
          <form
            className="modal-content animate"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="imgcontainer">
              <span
                onClick={() => setModalVisible(false)}
                className="close"
                title="Close Modal"
              >
                &times;
              </span>
            </div>

            <div className="container">
              <label htmlFor="location">
                <b>Location</b>
              </label>
              <input
                type="text"
                placeholder="Enter Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />

              <label htmlFor="caption">
                <b>Caption</b>
              </label>
              <input
                type="text"
                placeholder="Enter Caption"
                name="caption"
                value={formData.caption}
                onChange={handleChange}
              />

              <label htmlFor="image">
                <b>Image</b>
              </label>
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                accept=".png,.jpg,.jpeg"
                required
              />

              <button type="submit">Submit Blog</button>
            </div>

            <div
              className="container"
              style={{ backgroundColor: "#f1f1f1" }}
            >
              <button
                type="button"
                onClick={() => setModalVisible(false)}
                className="cancelbtn"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateBlog;
