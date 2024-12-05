import styles from "./Cell.module.css";
import sharedStyles from "../../styles/sharedStyles.module.css";
import React from "react";
import closeIcon from "../../assets/ic/ic_close.svg";

const aboutMeTextHeb = "שמי עמית אילן, אני מפתחת תוכנה ומעצבת גרפית. בוגרת תואר ראשון במדעי המחשב בהצטיינות מ<strong>האוניברסיטה העברית</strong> ותואר ראשון בתקשורת חזותית מ<strong>האקדמיה לעיצוב בצלאל</strong>.<br/>" +
    "אני אוהבת לתכנן וליצור מערכות ומוצרים סקיילבילים, קוהרנטיים ונגישים למשתמש, הן מההיבט העיצובי והן מההיבט הפיתוחי, אבל בעיקר מההיבט של מהות המוצר ומטרתו, דיוקו והעברת המסר." +
    "<br/><br/>" +
    "אני בעלת ניסיון בפיתוח front-end, ספציפית בפלטפורמות אנדרואיד ו-web. בגיטהאב שלי ניתן למצוא פרוייקטי תכנות אישיים לדוגמה: האתר הזה ופרוייקט #3 ״רגעי חולין״." +
    "<br/><br/>" +
    "בפורטפוליו זה מופיעים פרוייקטים שעבדתי עליהם במסגרת התואר בתקשורת חזותית. העבודות שייכות למדיומים מגוונים (וידאו, עיצוב גרפי, מיתוג, צילום, תכנון מוצר דיגיטלי וחלקם משלבים גם תכנות) ולתחומים מגוונים שמבטאים אספקטים שונים ביכולות שלי, בצורת החשיבה שלי, בערכים שלי ובדברים שמפעילים אותי.";

const aboutMeTextEng = "My name is Amit Ilan, and I’m a software developer and graphic designer. I hold a bachelor’s degree in Computer Science with honors from the <strong>Hebrew University</strong> and a bachelor’s degree in Visual Communication from the <strong>Bezalel Academy of Design</strong>." +
    "I’m passionate about designing and building scalable, coherent, and user-friendly systems and products—focusing not just on the technical and design aspects but on the essence of the product, its purpose, precision, and messaging." +
    "<br/><br/>" +
    "I have experience in front-end development, particularly on Android and web platforms. You can find examples of personal programming projects on my GitHub, such as this website and Project #3, \"Everyday Moments.\"\n" +
    "<br/><br/>" +
    "This portfolio showcases projects I worked on during my Visual Communication degree. The works span various mediums, including video, graphic design, branding, photography, digital product design, and some that integrate programming. They reflect different facets of my skills, thought process, values, and the things that inspire me."


const AboutCell = ({cell, onToggleAboutCell, isOpen, isHeb}) => {
    return (
        <div className={`${styles.cell} ${styles.aboutCell}`}
             style={{
                 gridRow: cell.rowSpan ? `span ${cell.rowSpan}` : undefined,
                 gridColumn: cell.colSpan ? `span ${cell.colSpan}` : undefined
             }}
        >
            <div className={styles.aboutCellContent}>
                <div>
                    {isOpen &&
                        (isHeb ? (<div className={styles.aboutTextHeb} dir="rtl"
                                       dangerouslySetInnerHTML={{__html: aboutMeTextHeb}}/>)
                            : (<div className={styles.aboutTextEng}
                                    dangerouslySetInnerHTML={{__html: aboutMeTextEng}}/>)
                        )
                    }
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