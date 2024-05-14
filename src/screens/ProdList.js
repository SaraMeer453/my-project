import React, { useState } from 'react';
import './ProdList.css'; 

export default function ProductReviewList() {
  const [comments, setComments] = useState(Array(12).fill('')); // State to store comments for each product review
  const [ratings, setRatings] = useState(Array(12).fill(0)); // State to store ratings for each product review
  const [reviewers, setReviewers] = useState(Array(12).fill([])); // State to store reviewers for each product review

  // Function to handle changes in the textarea
  const handleCommentChange = (index, event) => {
    const newComments = [...comments];
    newComments[index] = event.target.value;
    setComments(newComments);
  };

  // Function to handle changes in the rating
  const handleRatingChange = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };

  // Function to add review
  const addReview = (index) => {
    const newReviewers = [...reviewers];
    newReviewers[index] = [...newReviewers[index], `User${newReviewers[index].length + 1}: ${comments[index]}`];
    setReviewers(newReviewers);
    setComments(Array(12).fill('')); // Clear comment after adding review
  };

  // Function to render stars for rating
  const renderStars = (index) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= ratings[index] ? 'star filled' : 'star'}
          onClick={() => handleRatingChange(index, i)}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <main className="container mt-4">
      <section id="productReviewDisplaySection">
        <h2>Product Reviews</h2>
        <div className="row">
          {/* Product Cards */}
          {/* Repeat this card structure for each product */}
          {Array(12).fill('').map((_, index) => (
            <div key={index} className="col-md-4">
              <div className="card product-card">
                {/* <img src="product-image.jpg" className="card-img-top" alt="Product Image" /> */}
                <div className="card-body">
                  <h5 className="card-title">Product Name</h5>
                  <div className="rating">
                    {renderStars(index)}
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Leave a review"
                      value={comments[index]}
                      onChange={(event) => handleCommentChange(index, event)}
                    ></textarea>
                  </div>
                  <button className="btn btn-primary" onClick={() => addReview(index)}>Add Review</button>
                  {/* Display reviews */}
                  <div className="review-container">
                    {reviewers[index] && reviewers[index].map((review, idx) => (
                      <p key={idx}>{review}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
