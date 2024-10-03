import React from 'react';
import Cell from '../Cell/Cell.js';
import styles from "./Grid.module.css";


const Grid = ({grid, onCellClick}) => (
    <div className={styles.grid}>
        {grid.map((row) =>
            row.map((cell) =>
                    cell && (
                        <Cell
                            key={`${cell.row}-${cell.col}`}
                            cell={cell}
                            onClick={onCellClick}
                        />
                    )
            )
        )}
    </div>
);

export default Grid;