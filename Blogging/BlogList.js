import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get("https://localhost:7030/api/Blog"); // Replace with your API URL
                setBlogs(response.data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {blogs.map(blog => (
                    <div key={blog.BlogId} style={{ margin: "10px", border: "1px solid #ccc", padding: "10px", width: "300px" }}>
                        <img
                            src={blog.ImageUrl}
                            alt={blog.Caption || "Blog Image"}
                            style={{ width: "100%", height: "200px", objectFit: "cover" }}
                        />
                        <h2>{blog.Location}</h2>
                        <p>{blog.Caption}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
