import styles from "./Popup.module.css";
import React, {useState} from "react";
import p1Thumbnail from '../../assets/thumbnails/p1_thumbnail.jpg';
import p2Thumbnail from '../../assets/thumbnails/p2_thumbnail.jpg';
import p3Thumbnail from '../../assets/thumbnails/p3_thumbnail.jpg';
import closeIcon from '../../assets/ic_close.svg';
import leftArrowIcon from '../../assets/ic_left_arrow.svg';
import rightArrowIcon from '../../assets/ic_right_arrow.svg';


const Popup = ({cell, onClose}) => {
    const [activeImage, setActiveImage] = useState(0);
    const images = [p1Thumbnail, p2Thumbnail, p3Thumbnail]; // todo use data

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
                        {/*todo use data*/}
                        <div className={styles.tag}>Word</div>
                        <div className={styles.tag}>Wordy word</div>
                        <div className={styles.tag}>Word 222222</div>
                        <div className={styles.tag}>Word 3</div>
                    </div>
                    <div className={styles.descriptionDiv}>
                        <div className={styles.hebrewDescription} dir="rtl">
                            קולאז׳ וידאו בשני רבדים חיצוניים: טקסט ודימוי, ובשני רבדים פנימיים: אישי וקולקטיבי. דרך ההקבלה וההפרדה בין הקטן, הפרטי, הספציפי לבין הגדול, הגלובלי, המונומנטלי, הסרט הקצר מנסה לענות על השאלה: <strong>האם אפשר לתפוס את קץ האנושות?</strong>
                        </div>
                        <div className={styles.titleDescription} dir="rtl">
                            <span className={styles.titleText}>צלקת  •  Scar</span>
                        </div>
                        <div className={styles.englishDescription}>
                            Video collage in two external layers: text and image, and in two internal layers: the personal and the collective. Through the parallelism and separation between the small, private, specific aspects and the large, global, monumental, the short film tries to answer the question: <strong>Is it possible to grasp the end of humanity?</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);

}

export default Popup;