import styles from "./Popup.module.css";
import React, {useState} from "react";
import p1Thumbnail from '../../assets/thumbnails/p1_thumbnail.jpg';
import p2Thumbnail from '../../assets/thumbnails/p2_thumbnail.jpg';
import p3Thumbnail from '../../assets/thumbnails/p3_thumbnail.jpg';
import closeIcon from '../../assets/ic_close.svg';
import leftArrowIcon from '../../assets/ic_left_arrow.svg';
import rightArrowIcon from '../../assets/ic_right_arrow.svg';
import p4Thumbnail from '../../assets/thumbnails/p4_thumbnail.jpg';
import p5Thumbnail from '../../assets/thumbnails/p5_thumbnail.jpg';
import p6Thumbnail from '../../assets/thumbnails/p6_thumbnail.jpg';
import p7Thumbnail from '../../assets/thumbnails/p7_thumbnail.jpg';
import p8Thumbnail from '../../assets/thumbnails/p8_thumbnail.jpg';


const Popup = ({cell, onClose}) => {
    const [activeImage, setActiveImage] = useState(0);
    const images = [p1Thumbnail, p2Thumbnail, p3Thumbnail]; // Array of images

    const currentImage = images[activeImage];

    const goToNextImage = () => {
        setActiveImage((prev) => (prev + 1) % images.length);
    };

    const goToPrevImage = () => {
        setActiveImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (<div className={styles.popupOverlay} onClick={onClose}>
        <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.popupLeft}>
                {/* Image Gallery */}
                <div className={styles.imageGallery}>
                    <img
                        src={currentImage} // currentImage is the state for the displayed image
                        alt="Gallery"
                        className={styles.popupImage}
                    />
                    <div className={`${styles.galleryArrow} ${styles.left}`} onClick={goToPrevImage}>
                        <img src={leftArrowIcon} alt="Left Arrow" className="arrowIcon"/>
                    </div>
                    <div className={`${styles.galleryArrow} ${styles.right}`} onClick={goToNextImage}>
                        <img src={rightArrowIcon} alt="Right Arrow" className="arrowIcon"/>

                    </div>
                    <div className={styles.galleryDots}>
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={index === activeImage ? styles.active : ''}
                                onClick={() => setActiveImage(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.popupRight}>
                <div>
                <button className={styles.popupCloseButton} onClick={onClose}>
                    <img src={closeIcon} alt="Close" className={styles.popupCloseButton}/>
                </button>
                </div>
                <div className={styles.popupInfo}>
                    <div className={styles.tagsDiv}>
                        <div className={styles.tag}>

                        </div>
                    </div>
                    Some text!
                </div>
            </div>
        </div>
    </div>);

}

export default Popup;