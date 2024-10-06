import styles from "./Cell.module.css";
import React from "react";

const AboutCell = ({cell, onClick}) => {
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
                             onClick={() => onClick()}>
                            <span>About Me</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCell;