import React, {useState} from 'react';
import styles from './App.module.css';
import Grid from './components/Grid/Grid.js';
import Popup from "./components/Popup/Popup";


const App = () => {
    const [activeCell, setActiveCell] = useState(null);
    const [, setHoveredCell] = useState(null);
    const grid = [
        [{row: 0, col: 0, rowSpan: 2}, {row: 0, col: 1}, {row: 0, col: 2}, {row: 0, col: 3}, {row: 0, col: 4}],
        [null, {row: 1, col: 1}, {row: 1, col: 2}, {row: 1, col: 3}, {row: 1, col: 4}],
        [{row: 2, col: 0}, {row: 2, col: 1}, {row: 2, col: 2}, {row: 2, col: 3}, {row: 2, col: 4}]
    ];

    const handleCellClick = (cell) => {
        setActiveCell(cell);
    };

    const handleCellHover = (cell) => {
        setHoveredCell(cell);
    };

    const handleClosePopup = () => {
        setActiveCell(null);
    };

    return (
        <div className={styles.container}>
            <Grid
                grid={grid}
                onCellClick={handleCellClick}
                onCellHover={handleCellHover}
            />
            {activeCell && <Popup cell={activeCell} onClose={handleClosePopup}/>}
        </div>
    );
};

export default App;