import React from 'react';
import Cell from '../Cell/Cell.js';
import styles from "./Grid.module.css";


const Grid = ({grid, onCellClick, onCellHover}) => (
    <div className={styles.grid}>
        {grid.map((row) =>
            row.map((cell) =>
                    cell && (
                        <Cell
                            key={`${cell.row}-${cell.col}`}
                            cell={cell}
                            onClick={onCellClick}
                            onHover={onCellHover}
                        />
                    )
            )
        )}
    </div>
);

export default Grid;