import styles from "./Popup.module.css";
import sharedStyles from "../../styles/sharedStyles.module.css";
import React, {useState, useEffect} from "react";
import closeIcon from '../../assets/ic/ic_close.svg';
import leftArrowIcon from '../../assets/ic/ic_left_arrow.svg';
import rightArrowIcon from '../../assets/ic/ic_right_arrow.svg';
import projectsDataMap from "../../data/projectsData";
import {getCellKey} from '../../utils/Utils.js';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import {isImageCached, preloadProjectImages} from '../../utils/imageLoader';

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
    const [isLoading, setIsLoading] = useState(true);
    const [loadedIndices, setLoadedIndices] = useState(new Set());

    const cellKey = getCellKey(cell);
    const projectData = projectsDataMap[cellKey];
    const images = projectData?.images || [];
    const currentImage = images[activeImageIndex];

    const isCinematicProject = projectData?.cinematicPopup === true;

    // Initialize loading state based on image cache
    useEffect(() => {
        if (currentImage) {
            const isCached = isImageCached(currentImage);
            setIsLoading(!isCached);
            if (isCached) {
                setLoadedIndices(prev => new Set([...prev, activeImageIndex]));
            }
        }
    }, [currentImage, activeImageIndex]);

    // Preload adjacent images when active image changes
    useEffect(() => {
        if (!cell || typeof cell.row !== 'number' || typeof cell.col !== 'number') {
            console.warn("Invalid cell passed to preloadAdjacent", cell);
            return;
        }

        if (!currentImage || loadedIndices.has(activeImageIndex)) return;

        const preloadCurrent = async () => {
            await preloadProjectImages(cell, 1);
            setIsLoading(false);
            setLoadedIndices(prev => new Set([...prev, activeImageIndex]));
        };

        const preloadAdjacent = async () => {
            if (images.length <= 1) return;

            const nextIndex = (activeImageIndex + 1) % images.length;
            const prevIndex = (activeImageIndex - 1 + images.length) % images.length;

            await Promise.all([
                preloadProjectImages(cell, 1), // still passing the same cell
                preloadProjectImages(cell, 1)
            ]);

            setLoadedIndices(prev => new Set([...prev, nextIndex, prevIndex]));
        };

        preloadCurrent().catch(console.error);
        preloadAdjacent().catch(console.error);
    }, [activeImageIndex, cell, currentImage, images.length, loadedIndices]);


    const goToNextImage = () => {
        if (!isLoading) {
            setActiveImageIndex((prev) => (prev + 1) % images.length);
        }
    };

    const goToPrevImage = () => {
        if (!isLoading) {
            setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    const handleImageLoad = () => {
        setIsLoading(false);
        setLoadedIndices(prev => new Set([...prev, activeImageIndex]));
    };

    return (
        <div className={styles.imageGallery}>
            <div className={isCinematicProject ? styles.popupCinematicImageContainer : styles.imageContainer}>
                {isLoading && (
                    <div className={styles.loadingContainer}>
                        <LoadingSpinner/>
                    </div>
                )}

                {currentImage && (
                    <img
                        src={currentImage}
                        alt="Gallery"
                        className={`
                            ${isCinematicProject ? styles.popupCinematicImage : styles.popupImage}
                            ${isLoading ? styles.imageLoading : styles.imageLoaded}
                        `}
                        onLoad={handleImageLoad}
                    />
                )}
            </div>

            <GalleryArrow
                direction="left"
                onClick={goToPrevImage}
                icon={leftArrowIcon}
                disabled={isLoading}
            />
            <GalleryArrow
                direction="right"
                onClick={goToNextImage}
                icon={rightArrowIcon}
                disabled={isLoading}
            />

            {images.length > 1 && (
                <div className={styles.galleryDots}>
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={index === activeImageIndex ? styles.active : ''}
                            onClick={() => !isLoading && setActiveImageIndex(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const GalleryArrow = ({direction, onClick, icon, disabled}) => (
    <div
        className={`
            ${styles.galleryArrow} 
            ${styles[direction]} 
        `}
        onClick={disabled ? null : onClick}
    >
        <img
            src={icon}
            alt={`${direction} Arrow`}
            className={styles.arrowIcon}
        />
    </div>
);

const ProjectDetails = ({cell, isHeb}) => {
    const {hebDescription, engDescription, hebTitle, engTitle, hebTags, engTags} = projectsDataMap[getCellKey(cell)];
    const title = isHeb ? hebTitle : engTitle;
    const tags = isHeb ? hebTags : engTags;
    const tagsStyle = isHeb ? styles.hebrewTag : styles.englishTag;
    return (
        <div className={styles.popupInfo}>
            <div className={styles.tagsDiv}>
                {tags && tags.map((tag, index) => (
                    <div key={`${tag}-${index}`} className={`${styles.tag} ${tagsStyle}`}>
                        {tag}
                    </div>
                ))}
            </div>
            <div className={styles.descriptionAndTitleDiv}>
                {isHeb ? (
                    <div
                        className={styles.hebrewDescription}
                        dir="rtl"
                        dangerouslySetInnerHTML={{__html: hebDescription}}
                    />
                ) : (
                    <div
                        className={styles.englishDescription}
                        dangerouslySetInnerHTML={{__html: engDescription}}
                    />
                )}
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