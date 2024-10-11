  import React, { useState, useEffect } from 'react';
  import { FaHeart, FaCartPlus} from 'react-icons/fa';
  import { FaStar } from 'react-icons/fa'; // Import star icon
  import './SingleRout.css';
  import apricotFront from '../assets/apricot.jpg';
  import apricotBack from '../assets/apricot2.jpg';
  import apricotSide from '../assets/apricot3.avif';
  import apricotTop from '../assets/apricot4.jpg';




  const SingleRout = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [likeCount, setLikeCount] = useState(0);
    const [basketCount, setBasketCount] = useState(0);
    const [animate, setAnimate] = useState(false);
    const [rating, setRating] = useState(0);
    const [showMessage, setShowMessage] = useState(false); // New state for showing/hiding message
    const [feedback, setFeedback] = useState(''); // New state for user feedback

    const images = [apricotFront, apricotBack, apricotSide, apricotTop];

    const handleImageChange = (index) => {
      setAnimate(false);
      setCurrentImage(index);
      setLikeCount(0);
      setBasketCount(0);
      setRating(0); // Reset the star rating to 0
      setShowMessage(false);
      setFeedback('');

      setTimeout(() => {
        setAnimate(true);
      }, 100);
    };

    const handleLike = () => {
      setLikeCount((prevCount) => (prevCount === 0 ? 1 : 0)); // Toggle like count
    };

    const handleStarClick = (index) => {
      if (rating === index + 1) {
        setRating(0); // Reset rating
        setShowMessage(false); // Hide message if the same star is clicked
      } else {
        setRating(index + 1); // Set new rating
        setShowMessage(true); // Show message when rating is given
      }
    };

    const handleFeedbackChange = (event) => {
      setFeedback(event.target.value); // Update feedback state
    };

    const handleFeedbackSubmit = () => {
      if (feedback.trim()) {
        console.log("Feedback submitted:", feedback); // Replace with actual submission logic
        setFeedback(''); // Clear the input after submission
      } else {
        alert("Please enter your feedback!"); // Alert if input is empty
      }
    };

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
      <div className={`product-page ${animate ? 'fade-in' : ''}`}>
        <div className={`product-container ${animate ? 'fade-in' : ''}`}>

        

          <div className={`product-gallery ${animate ? 'slide-in-left' : ''}`}>
            <div className="image-wrapper">
              <img 
                src={images[currentImage]} 
                alt="Dried Apricot" 
                className={`main-image ${animate ? 'slide-in-right' : ''}`} 
              />
              <div className="icon-container top-icons">
                <FaHeart
                  className={`icon like-icon overlay-icon ${likeCount > 0 ? 'liked' : ''}`}
                  title="Add to Wishlist"
                  onClick={handleLike}
                />
                {likeCount > 0 && <span className="icon-count">{likeCount}</span>}
              </div>
              <div className="icon-container top-icons">
                <FaCartPlus 
                  className="icon basket-icon overlay-icon"
                  title="Add to Basket"
                  onClick={() => setBasketCount(basketCount + 1)}
                />
                {basketCount > 0 && <span className="icon-count">{basketCount}</span>}
              </div>
            </div>
            <div className="thumbnail-container">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`View ${index + 1}`}
                  className={`thumbnail ${index === currentImage ? 'active' : ''}`}
                  onClick={() => handleImageChange(index)}
                />
              ))}
            </div>
          </div>

          <div className={`product-details ${animate ? 'slide-in-right' : ''}`}>
            <div className="product-header">
              <h1 className="header-text">NUTS VALLEY Dried Apricot</h1>
              <img src={images[currentImage]} alt="Dried Apricot" className="product-image" />
            </div>
            <p className="product-description">
              NUTS VALLEY brings you the finest dried apricots, handpicked from the best orchards. These apricots offer a naturally sweet, 
              tangy flavor that’s perfect for snacking, baking, or adding to savory dishes. Rich in vitamins, fiber, and antioxidants, 
              these apricots contribute to a balanced diet, promoting digestive health and boosting immunity. Our apricots are sun-dried 
              to retain their nutrients, offering a vibrant orange color that indicates their quality. Perfect for children, adults, and 
              anyone looking for a wholesome treat, they’re an excellent choice for adding natural sweetness to desserts or salads. 
              Sourced from sustainable farms, NUTS VALLEY ensures every bite is pure, fresh, and free from preservatives. These apricots 
              can be stored for a long time without losing their taste or texture, making them a pantry staple. Enjoy them on their own, 
              mix them with nuts, or use them to enhance your favorite recipes. Each pack is carefully sealed to preserve the freshness, 
              ensuring you get the best quality product every time. Perfect for gifting, sharing, or as a healthy snack to keep you 
              energized throughout the day.
            </p>

            <div className='Main'>
                <div className="product-pricing">
                  <span className="old-price">$12.99</span>
                  <span className="new-price">$9.99</span>
                </div>

                {/* Star Rating Section */}
                <div className="star-rating">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`star ${index < rating ? 'filled' : ''}`}
                      onClick={() => handleStarClick(index)}
                      size={30}
                    />
                  ))}
                  {showMessage && <p className="thank-you-message">Thanks for your rate!</p>} {/* Conditionally render the message */}
                </div>

                {/* Feedback Input Section */}
                <div className="feedback-section">
                  <input 
                    type="text" 
                    value={feedback} 
                    onChange={handleFeedbackChange} 
                    placeholder="Your opinion..." 
                    className="feedback-input" 
                  />
                  <button onClick={handleFeedbackSubmit} className="feedback-button">Send</button>
                </div>
            </div>

            
          </div>
        </div>
      </div>
    );
  };

  export default SingleRout;
