import styles from "./Cell.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import React from "react";
import closeIcon from "../../assets/ic_close.svg";

const aboutMeText = "שמי עמית אילן, אני מפתחת תוכנה ומעצבת גרפית. בוגרת תואר ראשון במדעי המחשב בהצטיינות מהאוניברסיטה העברית ותואר ראשון בתקשורת חזותית מהאקדמיה לעיצוב בצלאל.<br/>" +
    "אני אוהבת לתכנן וליצור מערכות ומוצרים סקיילבילים, קוהרנטיים ונגישים למשתמש, הן מההיבט העיצובי והן מההיבט הפיתוחי, אבל בעיקר מההיבט של מהות המוצר ומטרתו, דיוקו והעברת המסר." +
    "<br/><br/>" +
    "אני בעלת ניסיון בפיתוח fullstack, ספציפית בפלטפורמות אנדרואיד ו-web. בגיטהאב שלי ניתן למצוא פרוייקטי תכנות אישיים לדוגמה: האתר הזה ופרוייקט #3 ״רגעי חולין״." +
    "<br/><br/>" +
    "בפורטפוליו זה מופיעים פרוייקטים שעבדתי עליהם במסגרת התואר בתקשורת חזותית. העבודות שייכות למדיומים מגוונים (וידאו, עיצוב גרפי, מיתוג, צילום, תכנון מוצר דיגיטלי וחלקם משלבים גם תכנות) ולתחומים מגוונים שמבטאים אספקטים שונים ביכולות שלי, בצורת החשיבה שלי, בערכים שלי ובדברים שמפעילים אותי.";

const AboutCell = ({cell, onToggleAboutCell, isOpen}) => {
    return (
        <div className={`${styles.cell} ${styles.aboutCell}`}
             style={{
                 gridRow: cell.rowSpan ? `span ${cell.rowSpan}` : undefined,
                 gridColumn: cell.colSpan ? `span ${cell.colSpan}` : undefined
             }}
        >
            <div className={styles.aboutCellContent}>
                <div>
                    {isOpen && <div className={styles.aboutTextContainer} dir="rtl"
                                    dangerouslySetInnerHTML={{__html: aboutMeText}}>
                    </div>}
                    <div className={styles.projectIndex}>
                        Amit
                    </div>
                    <div className={styles.aboutMeFlexContainer}>
                        <div className={styles.projectIndex}>
                            Ilan
                        </div>
                        <div className={`${styles.projectName} ${styles.aboutMeButton}`}
                             onClick={() => onToggleAboutCell(true)}
                             style={{visibility: isOpen ? 'hidden' : 'visible'}}
                        >
                            <span>About Me</span>
                        </div>
                    </div>
                </div>
                <div>
                    {isOpen && <button className={sharedStyles.closeButton} onClick={() => onToggleAboutCell(false)}>
                        <img src={closeIcon} alt="Close" className={sharedStyles.closeButton}/>
                    </button>}
                </div>
            </div>
        </div>
    );
};

export default AboutCell;