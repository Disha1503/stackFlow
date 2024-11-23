import React, { useState, useEffect, useCallback } from "react";

function MainContent({ filter, searchQuery }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const filterMapping = {
        activity: "activity",
        hot: "hot",
        week: "activity",
      };

      const sortParam = filterMapping[filter] || "activity";

      const currentDate = Math.floor(Date.now() / 1000);
      const oneWeekAgo = currentDate - 7 * 24 * 60 * 60;

      const baseUrl = `https://api.stackexchange.com/2.3/questions?order=desc&sort=${sortParam}&site=stackoverflow`;
      const url =
        filter === "week"
          ? `${baseUrl}&fromdate=${oneWeekAgo}&page=${page}&pagesize=10${
              searchQuery ? `&intitle=${encodeURIComponent(searchQuery)}` : ""
            }`
          : `${baseUrl}&page=${page}&pagesize=10${
              searchQuery ? `&intitle=${encodeURIComponent(searchQuery)}` : ""
            }`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setQuestions(data.items || []);
      setHasMore(data.has_more); // Check if more pages are available
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }, [filter, searchQuery, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main className="main-content">
      <div className="content-wrapper">
        <section className="questions-section">
          <h2>
            {searchQuery
              ? `Search Results for "${searchQuery}"`
              : `Top Questions (${filter.charAt(0).toUpperCase() + filter.slice(1)})`}
          </h2>

          {loading ? (
            <div className="loading-indicator">
              <p>Loading questions...</p>
            </div>
          ) : error ? (
            <div className="error-message">
              <p style={{ color: "red" }}>Error: {error}</p>
              <button onClick={fetchData} className="retry-button">
                Retry
              </button>
            </div>
          ) : questions.length === 0 ? (
            <div className="empty-state">
              <p>No questions found. Try changing the filter or search term.</p>
            </div>
          ) : (
            <>
              <ul className="questions-list">
                {questions.map((question) => (
                  <li key={question.question_id} className="question-card">
                    <h3>
                      <a
                        href={question.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {question.title}
                      </a>
                    </h3>
                    <p>
                      <strong>Tags:</strong>{" "}
                      {question.tags && question.tags.length > 0
                        ? question.tags.join(", ")
                        : "None"}
                    </p>
                    <p>
                      <strong>Score:</strong> {question.score} |{" "}
                      <strong>Answers:</strong> {question.answer_count} |{" "}
                      <strong>Views:</strong> {question.view_count}
                    </p>
                    <p>
                      <strong>Asked by:</strong>{" "}
                      <a
                        href={question.owner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {question.owner.display_name}
                      </a>
                    </p>
                  </li>
                ))}
              </ul>
              <div className="pagination">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  aria-label="Go to previous page"
                >
                  Previous
                </button>
                <button
                  disabled={!hasMore}
                  onClick={() => setPage((prev) => prev + 1)}
                  aria-label="Go to next page"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}

export default MainContent;
