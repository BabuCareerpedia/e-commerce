import React, { useState, useEffect } from "react";
import axios from "axios";

const Gnew = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("general");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchNews = async () => {
    try {
      const response = await axios.get("http://localhost:3540/news", {
        params: {
          search,
          category,
          page,
          max: 10, // Assuming 10 results per page
        },
      });
      console.log(response)
      setNews(response.data.articles);
      setTotalPages(Math.ceil(response.data.totalArticles / 10));
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [search, category, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1); // Reset to first page on new search
    fetchNews();
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1); // Reset to first page on category change
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <h1>News App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <select value={category} onChange={handleCategoryChange}>
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
        <option value="entertainment">Entertainment</option>
      </select>
      <div>
        {news.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>
          {" "}
          Page {page} of {totalPages}{" "}
        </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gnew;
