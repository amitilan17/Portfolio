import styles from "./Popup.module.css";
import sharedStyles from "../../styles/sharedStyles.module.css";
import React, {useState} from "react";
import closeIcon from '../../assets/ic/ic_close.svg';
import leftArrowIcon from '../../assets/ic/ic_left_arrow.svg';
import rightArrowIcon from '../../assets/ic/ic_right_arrow.svg';
import projectsDataMap from "../../data/projectsData";
import {getCellKey} from '../../utils/Utils.js';


const Popup = ({cell, onClose, isHeb}) => {
    return (<div className={styles.popupOverlay} onClick={onClose}>
        <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.popupLeft}>
                <ImageGallery cell={cell}/>
            </div>
            <div className={styles.popupRight}>
                <button className={sharedStyles.closeButton} onClick={onClose}>
                    <img src={closeIcon} alt="Close" className={sharedStyles.closeButton}/>
                </button>
                <ProjectDetails cell={cell} isHeb={isHeb}/>
            </div>
        </div>
    </div>);

}
const ImageGallery = ({cell}) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const cellKey = getCellKey(cell);
    const images = projectsDataMap[cellKey]?.images;
    const currentImage = images[activeImageIndex];

    // Check if the project has cinematicPopup enabled
    const isCinematicProject = projectsDataMap[cellKey]?.cinematicPopup === true;

    const goToNextImage = () => {
        setActiveImageIndex((prev) => (prev + 1) % images.length);
    };

    const goToPrevImage = () => {
        setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className={styles.imageGallery}>
            {isCinematicProject ? (
                // Cinematic project: image inside a container with blue background and margin
                <div className={styles.popupCinematicImageContainer}>
                    <img
                        src={currentImage}
                        alt="Gallery"
                        className={styles.popupCinematicImage}
                    />
                </div>
            ) : (
                // Non-custom project: image directly in the gallery
                <img
                    src={currentImage}
                    alt="Gallery"
                    className={styles.popupImage}
                />
            )}

            <GalleryArrow
                direction="left"
                onClick={goToPrevImage}
                icon={leftArrowIcon}
            />
            <GalleryArrow
                direction="right"
                onClick={goToNextImage}
                icon={rightArrowIcon}
            />

            <div className={styles.galleryDots}>
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={index === activeImageIndex ? styles.active : ''}
                        onClick={() => setActiveImageIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

const GalleryArrow = ({ direction, onClick, icon }) => (
    <div className={`${styles.galleryArrow} ${styles[direction]}`} onClick={onClick}>
        <img src={icon} alt={`${direction} Arrow`} className="arrowIcon"/>
    </div>
);

const ProjectDetails = ({cell, isHeb}) => {
    const { hebDescription, engDescription, hebTitle, engTitle, hebTags, engTags } = projectsDataMap[getCellKey(cell)];
    const title = isHeb ? hebTitle : engTitle;
    const tags = isHeb ? hebTags : engTags;
    const tagsStyle = isHeb ? styles.hebrewTag : styles.englishTag;
    return (
        <div className={styles.popupInfo}>
            <div className={styles.tagsDiv}>
                {tags.map((tag, index) => (
                    <div key={`${tag}-${index}`} className={`${styles.tag} ${tagsStyle}`}>
                        {tag}
                    </div>
                ))}
            </div>
            <div className={styles.descriptionAndTitleDiv}>
                {isHeb ? (<div className={styles.hebrewDescription} dir="rtl"
                               dangerouslySetInnerHTML={{__html: hebDescription}}/>)
                    : (<div className={styles.englishDescription}
                            dangerouslySetInnerHTML={{__html: engDescription}}/>)
                }
                <div className={styles.titleContainer}>
                    <div className={styles.title} dir="rtl">
                        <span className={styles.titleSpan}>{title}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;