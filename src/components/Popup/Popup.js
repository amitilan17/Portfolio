import styles from "./Popup.module.css";
import React from "react";

const Popup = ({cell, onClose}) => (
    <div className={styles.popupOverlay} onClick={onClose}>
        <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <h2>
                Cell {cell.row + 1}-{cell.col + 1}
                {cell.rowSpan && ` & ${cell.row + 2}-${cell.col + 1}`}
            </h2>
            <p>This is the content for the selected cell(s).</p>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
);

export default Popup;