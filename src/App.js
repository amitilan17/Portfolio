import React, {useState} from 'react';
import styles from './App.module.css';
import Grid from './components/Grid/Grid.js';
import Popup from "./components/Popup/Popup";


const App = () => {
    const [activeCell, setActiveCell] = useState(null);
    const [isAboutCellOpen, setIsAboutCellOpen] = useState(false);
    const [isHeb, setIsHeb] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const grid = !isAboutCellOpen ?
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

    const handleAboutCell = (isOpen) => {
        setIsAboutCellOpen(isOpen);
    }

    const handleToggleLanguage = () => {
        setIsHeb(!isHeb);
        setIsDropdownOpen(false);
    };

    const handleOpenDropdown = () => {
        setIsDropdownOpen(true);
    };

    const handleCloseDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className={styles.container}>
            <LanguageMenu
                onMouseLeave={handleCloseDropdown}
                onOpenDropdown={handleOpenDropdown}
                isHeb={isHeb}
                isDropdownOpen={isDropdownOpen}
                onToggleLanguage={handleToggleLanguage}
            />
            <Grid
                grid={grid}
                onCellClick={handleCellClick}
                onToggleAboutCell={handleAboutCell}
                isAboutCellOpen={isAboutCellOpen}
                isHeb={isHeb}
            />
            {activeCell &&
                <Popup cell={activeCell} onClose={handleClosePopup} isHeb={isHeb}/>
            }
        </div>
    );
};

export default App;


function LanguageMenu({ onMouseLeave, onOpenDropdown, isHeb, isDropdownOpen, onToggleLanguage }) {
    return (
        <div
            className={styles.languageButtonWrapper}
            onMouseLeave={onMouseLeave}
        >
            <button onClick={onOpenDropdown} className={styles.languageButton}>
                {isHeb ? 'עב' : 'EN'}
            </button>

            {isDropdownOpen && (
                <button
                    onMouseEnter={onOpenDropdown}
                    onClick={onToggleLanguage}
                    className={styles.dropdownButton}
                >
                    {isHeb ? 'EN' : 'עב'}
                </button>
            )}
        </div>
    );
}