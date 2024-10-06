import React from 'react';
import Cell from '../Cell/Cell.js';
import AboutCell from '../Cell/AboutCell';
import styles from "./Grid.module.css";
import {aboutCellKey, getCellKey} from "../../Utils";


const Grid = ({grid, onCellClick, onToggleAboutCell, isAboutCellOpen}) => (
    <div className={styles.grid}>
        {grid.map((row) =>
            row.map((cell) =>
                    cell && (
                        getCellKey(cell) === aboutCellKey ? (
                            <AboutCell
                                cell={cell}
                                onToggleAboutCell={onToggleAboutCell}
                                isOpen={isAboutCellOpen}
                            />
                        ) : (
                            <Cell
                                key={getCellKey(cell)}
                                cell={cell}
                                onClick={onCellClick}
                                isAboutCellOpen={isAboutCellOpen}
                            />
                        )
                    )
            )
        )}
    </div>
);

export default Grid;