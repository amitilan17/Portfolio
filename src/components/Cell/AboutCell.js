import styles from "./Cell.module.css";
import React from "react";
import closeIcon from "../../assets/ic/ic_close.svg";

const aboutMeTextHeb =
    "שמי עמית אילן, אני מפתחת תוכנה ומעצבת גרפית. בוגרת תואר ראשון במדעי המחשב בהצטיינות מ<strong>האוניברסיטה העברית</strong> ותואר ראשון בתקשורת חזותית מ<strong>האקדמיה לעיצוב בצלאל</strong>.<br/>" +
    "אני אוהבת לתכנן וליצור מערכות ומוצרים סקיילבילים, קוהרנטיים ונגישים למשתמש, הן מההיבט העיצובי והן מההיבט הפיתוחי, אבל בעיקר מההיבט של מהות המוצר ומטרתו, דיוקו והעברת המסר." +
    "<br/><br/>" +
    "אני בעלת ניסיון בפיתוח front-end, ספציפית בפלטפורמות אנדרואיד ו-web. בגיטהאב שלי ניתן למצוא פרוייקטי תכנות אישיים לדוגמה: <a href='https://github.com/amitilan17/Portfolio' target='_blank'>האתר הזה</a> ופרוייקט #3 <a href='https://github.com/amitilan17/random-moments' target='_blank'>רגעי חולין</a>." +
    "<br/><br/>" +
    "בפורטפוליו זה מופיעים פרוייקטים שעבדתי עליהם במסגרת התואר בתקשורת חזותית. העבודות שייכות למדיומים מגוונים (וידאו, עיצוב גרפי, מיתוג, צילום, תכנון מוצר דיגיטלי וחלקם משלבים גם תכנות) ולתחומים מגוונים שמבטאים אספקטים שונים ביכולות שלי, בצורת החשיבה שלי, בערכים שלי ובדברים שמפעילים אותי." +
    "<br/><br/>" +
    "<strong>LinkedIn</strong>: <a href='https://www.linkedin.com/in/amit-ilan-609446250/' target='_blank'>Amit Ilan</a> | <strong>Email</strong>: amit.ilan17@gmail.com"

const aboutMeTextEng =
    "My name is Amit Ilan, and I’m a software developer and graphic designer. I hold a bachelor’s degree in Computer Science with honors from the <strong>Hebrew University</strong> and a bachelor’s degree in Visual Communication from the <strong>Bezalel Academy of Design</strong>. " +
    "I’m passionate about designing and building scalable, coherent, and user-friendly systems and products—focusing not just on the technical and design aspects but on the essence of the product, its purpose, precision, and messaging." +
    "<br/><br/>" +
    "I have experience in front-end development, particularly on Android and web platforms. You can find examples of personal programming projects on my GitHub, such as <a href='https://github.com/amitilan17/Portfolio' target='_blank'>this website</a> and Project #3- <a href='https://github.com/amitilan17/random-moments' target='_blank'>Everyday Moments</a>." +
    "<br/><br/>" +
    "This portfolio showcases projects I worked on during my Visual Communication degree. The works span various mediums, including video, graphic design, branding, photography, digital product design, and some that integrate programming. They reflect different facets of my skills, thought process, values, and the things that inspire me." +
    "<br/><br/>" +
    "<strong>LinkedIn</strong>: <a href='https://www.linkedin.com/in/amit-ilan-609446250/' target='_blank'>Amit Ilan</a> | <strong>Email</strong>: amit.ilan17@gmail.com"


const AboutCell = ({cell, onToggleAboutCell, isOpen, isHeb}) => {
    return (
        <div className={`${styles.cell} ${styles.aboutCell}`}
             style={{
                 gridRow: cell.rowSpan ? `span ${cell.rowSpan}` : undefined,
                 gridColumn: cell.colSpan ? `span ${cell.colSpan}` : undefined
             }}
        >
            <div className={styles.aboutCellContent}>
                <div className={styles.nameAndButtonContainer}>
                    <div className={styles.projectIndex}>
                        Amit
                    </div>
                    <div className={styles.nameAndButtonSecondRow}>
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

                {isOpen &&
                    (isHeb ? (
                        <div className={styles['aboutText--heb']} dir="rtl"
                             dangerouslySetInnerHTML={{__html: aboutMeTextHeb}}/>
                    ) : (
                        <div className={styles['aboutText--eng']}
                             dangerouslySetInnerHTML={{__html: aboutMeTextEng}}/>
                    ))
                }

                {isOpen &&
                    <button className={styles.aboutCloseButtonContainer} onClick={() => onToggleAboutCell(false)}>
                        <img src={closeIcon} alt="Close" className={styles.aboutCloseButton}/>
                    </button>
                }
            </div>
        </div>
    );
};

export default AboutCell;