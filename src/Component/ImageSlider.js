import React, { useState, useEffect } from 'react';
import img1 from '../images/image1.jpeg'
import img2 from '../images/image2.png'
import img3 from '../images/image3.jpeg'
import img4 from '../images/image4.jpeg'
import img5 from '../images/image5.png'
import img6 from '../images/image6.png'



const ImageSlider = () => {
    const images = [
		img1,
        img2,
        img3,
        img4,
		img5,
		img6
        // Add more image URLs as needed
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment currentImageIndex to display the next image
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change images every 5 seconds (adjust as needed)

        // Clean up the interval to avoid memory leaks
        return () => clearInterval(interval);
    }, [images.length]); // Run effect whenever the number of images changes

    return (
        <div className="image-slider">
            <img style={{width:'90%' , height:'90%'}}
                src={images[currentImageIndex]}
                alt='Loading'
            />
        </div>
    );
};

export default ImageSlider;
