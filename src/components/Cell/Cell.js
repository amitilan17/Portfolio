import React from 'react';
import projectsDataMap from '../../data/projectsData.js';
import styles from "./Cell.module.css";
import {getCellKey} from '../../Utils.js';

const Cell = ({cell, onClick, isAboutCellOpen}) => {
    const cellKey = getCellKey(cell);
    const projectDetails = projectsDataMap[cellKey] // todo add new properties?
        ? {
            index: projectsDataMap[cellKey].index,
            name: projectsDataMap[cellKey].name,
            thumbnailPath: projectsDataMap[cellKey].thumbnailPath
        }
        : null;

    if (projectDetails === null) {
        return (
            <div className={styles.cell}>
            </div>
        );
    }

    return (
        <div
            className={`${styles.cell} ${styles.projectCell} ${isAboutCellOpen ? styles.aboutCellOpen : ''}`}
            onClick={() => {
                if (!isAboutCellOpen) {
                    onClick(cell)
                }
            }}
        >
            {!isAboutCellOpen && (
                <img
                    src={projectDetails.thumbnailPath}
                    alt={projectDetails.name}
                    className={styles.projectThumbnail}
                />)}

            <div className={styles.cellContent}>
                <>
                    <div className={styles.projectIndex}>
                        {projectDetails.index}
                    </div>
                    <div className={styles.projectName}>
                            <span>
                            {projectDetails.name}
                                </span>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Cell;