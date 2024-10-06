import styles from "./Cell.module.css";
import moreStyles from "../Popup/Popup.module.css"; //todo name
import React from "react";
import closeIcon from "../../assets/ic_close.svg";

const AboutCell = ({cell, onToggleAboutCell, isOpen}) => {
    return (
        <div className={`${styles.cell} ${styles.aboutCell}`}
             style={{
                 gridRow: cell.rowSpan ? `span ${cell.rowSpan}` : undefined,
                 gridColumn: cell.colSpan ? `span ${cell.colSpan}` : undefined
             }}
        >
            <div className={styles.cellContent}>
                <div>
                    <div className={styles.projectIndex}>
                        Amit
                    </div>
                    <div className={styles.aboutMeFlexContainer}>
                        <div className={styles.projectIndex}>
                            Ilan
                        </div>
                        <div className={`${styles.projectName} ${styles.aboutMeButton}`}
                             onClick={() => onToggleAboutCell(true)}
                             style={{visibility: isOpen ? 'hidden' : 'visible'}}
                        >
                            <span>About Me</span>
                        </div>
                    </div>
                </div>
                <div>
                    {isOpen && <button className={moreStyles.popupCloseButton} onClick={() => onToggleAboutCell(false)}>
                        <img src={closeIcon} alt="Close" className={moreStyles.popupCloseButton}/>
                    </button>}
                </div>
            </div>
        </div>
    );
};

export default AboutCell;