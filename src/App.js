import React, {useState} from 'react';
import styles from './App.module.css';
import Grid from './components/Grid/Grid.js';
import Popup from "./components/Popup/Popup";


const App = () => {
    const [activeCell, setActiveCell] = useState(null);
    const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

    const grid = isAboutMeOpen===false ? // todo clean?
        [
            [{row: 0, col: 0, rowSpan: 2}, {row: 0, col: 1}, {row: 0, col: 2}, {row: 0, col: 3}, {row: 0, col: 4}],
            [null, {row: 1, col: 1}, {row: 1, col: 2}, {row: 1, col: 3}, {row: 1, col: 4}],
            [{row: 2, col: 0}, {row: 2, col: 1}, {row: 2, col: 2}, {row: 2, col: 3}, {row: 2, col: 4}]
        ] :
        [
            [{row: 0, col: 0, rowSpan: 2, colSpan: 4}, null, null, null, {row: 0, col: 4}],
            [null, null, null, null, {row: 1, col: 4}],
            [{row: 2, col: 0}, {row: 2, col: 1}, {row: 2, col: 2}, {row: 2, col: 3}, {row: 2, col: 4}]
        ]
    ;

    const handleCellClick = (cell) => {
        setActiveCell(cell);
    };

    const handleClosePopup = () => {
        setActiveCell(null);
    };

    const handleOpenAbout = () => {
        setIsAboutMeOpen(true);
    }

    return (
        <div className={styles.container}>
            <Grid
                grid={grid}
                onCellClick={handleCellClick}
                onAboutCellClick={handleOpenAbout}
            />
            {activeCell && <Popup cell={activeCell} onClose={handleClosePopup}/>}
        </div>
    );
};

export default App;