import "./Rating.css";
import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

function Rating() {
    const [userName, setUserName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ userName, comment, rating });
        setUserName('');
        setComment('');
        setRating(0); // إعادة تعيين التقييم بعد الإرسال
    };

    const handleRatingChange = (newRating) => {
        // تعيين التقييم الجديد أو إعادة تعيين التقييم إذا تم النقر على نفس النجمة
        setRating(newRating === rating ? 0 : newRating);
    };

    return (
        <div className="rat">
            <div className="rating-form">
                <h2>Property Rating</h2>
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
                            rating={rating} // 
                            starDimension="30px"
                            starSpacing="5px"
                            starRatedColor="gold"
                            changeRating={handleRatingChange}
                            numberOfStars={5}
                            name='rating'
                        />
                    </div>
                    <button type="submit">Submit Rating</button>
                </form>
            </div>
        </div>
    );
}

export default Rating;