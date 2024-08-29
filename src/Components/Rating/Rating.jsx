import "./Rating.css";
import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';

function Rating() {
    const [userName, setUserName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate input
        if (!userName || !comment || rating === 0) {
            setError('Please fill in all fields and provide a rating.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            // Submit rating data to the backend
            await axios.post('http://127.0.0.1:8000/api/submit_rating', {
                userName,
                comment,
                rating,
            });

            // Reset form fields after successful submission
            setUserName('');
            setComment('');
            setRating(0);
            alert('Rating submitted successfully!');
        } catch (error) {
            console.error('Error submitting rating:', error);
            setError('Failed to submit rating. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleRatingChange = (newRating) => {
        // Set new rating or reset if clicked on the same star
        setRating(newRating === rating ? 0 : newRating);
    };

    return (
        <div className="rat">
            <div className="rating-form">
                <h2>Property Rating</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Comment:</label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Rating :</label>
                        <StarRatings
                            rating={rating}
                            starDimension="30px"
                            starSpacing="5px"
                            starRatedColor="gold"
                            changeRating={handleRatingChange}
                            numberOfStars={5}
                            name='rating'
                        />
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit Rating'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Rating;
