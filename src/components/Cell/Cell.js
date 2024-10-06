import React from 'react';
import projectsDataMap from '../../data/projectsData.js';
import styles from "./Cell.module.css";
import { getCellKey } from '../../Utils.js';

const Cell = ({cell, onClick}) => {
    const cellKey = getCellKey(cell);
    const projectDetails = projectsDataMap[cellKey] // todo add new properties?
        ? {
            index: projectsDataMap[cellKey].index,
            name: projectsDataMap[cellKey].name,
            thumbnailPath: projectsDataMap[cellKey].thumbnailPath
        }
        : null;
    const isAboutCell = cell.rowSpan

    return (
        <div
            className={`${styles.cell}
                        ${isAboutCell ? styles.aboutCell : ''}
                        ${projectDetails ? styles.projectCell : ''}`
            }
            onClick={() => {
                if (projectDetails !== null) {
                    onClick(cell)
                }
            }}
            style={{gridRow: cell.rowSpan ? `span ${cell.rowSpan}` : undefined}}
        >
            {projectDetails && (
                <img
                    src={projectDetails.thumbnailPath}
                    alt={projectDetails.name}
                    className={styles.projectThumbnail} // Class for styling
                />
            )}

            <div className={styles.cellContent}>
                {projectDetails ? (
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
                ) : ('')
                }
                {isAboutCell ? (
                    <div className={styles.projectIndex}>
                        Amit Ilan
                    </div>
                ) : ('')}
            </div>
        </div>
    );
};

export default Cell;