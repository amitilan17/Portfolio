import p1Thumbnail from '../assets/thumbnails/p1_thumbnail.jpg';
import p2Thumbnail from '../assets/thumbnails/p2_thumbnail.jpg';
import p3Thumbnail from '../assets/thumbnails/p3_thumbnail.jpg';
import p4Thumbnail from '../assets/thumbnails/p4_thumbnail.jpg';
import p5Thumbnail from '../assets/thumbnails/p5_thumbnail.jpg';
import p6Thumbnail from '../assets/thumbnails/p6_thumbnail.jpg';
import p7Thumbnail from '../assets/thumbnails/p7_thumbnail.jpg';
import p8Thumbnail from '../assets/thumbnails/p8_thumbnail.jpg';


const projectsDataMap = {
    '1-2': {
        index: 1,
        name: 'צלקת', // todo rename property
        thumbnailPath: p1Thumbnail,
        hebrewDescription: 'קולאז׳ וידאו בשני רבדים חיצוניים: טקסט ודימוי, ובשני רבדים פנימיים: אישי וקולקטיבי. דרך ההקבלה וההפרדה בין הקטן, הפרטי, הספציפי לבין הגדול, הגלובלי, המונומנטלי, הסרט הקצר מנסה לענות על השאלה:<strong>האם אפשר לתפוס את קץ האנושות?</strong>',
        englishDescription: 'Video collage in two external layers: text and image, and in two internal layers: the personal and the collective. Through the parallelism and separation between the small, private, specific aspects and the large, global, monumental aspects, the short film tries to answer the question: <strong>Is it possible to grasp the end of humanity?</strong>',
        title: "צלקת •",
        tags: ["Video", "Collage", "Personal", "Collective"]
    },
    '1-3': {
        index: 2,
        name: 'אז מה אם אתן תאומות',
        thumbnailPath: p2Thumbnail,
        hebrewDescription: 'יש לי שתי אחיות, נעם וניצן. הן תאומות, הן קטנות ממני בשנתיים, והן גדלו במסגרות נפרדות מגיל קטן, כך שבעצם אנחנו סוג של שלישיה. או אולי, משולש: כל אחת חולקת תכונות עם השניה והשלישית. למרות שאני אחותן הגדולה, לפעמים אני מרגישה דווקא באמצע בין ניצן לנעם. <strong>אז מה אם אתן תאומות</strong> הוא פרוייקט אינפוגרפי שמהווה דיוקן שלי דרכן, ודיוקן שלהן- דרכי. במסגרת הפרוייקט ריאיינתי אותן לעומק ובניתי ״דאטה-בייס״, ״ניתחתי״ את המידע ועיצבתי מערכת אינפוגרפית של 7 גלויות.',
        englishDescription: '',
        title: 'אז מה אם אתן תאומות',
        tags: ["Video", "Collage", "Personal", "Collective"]
    },
    '1-4': {
        index: 3, name: 'רגעי חולין', thumbnailPath: p3Thumbnail,
        hebrewDescription: '<strong>רגעי חולין</strong> הוא מוצר אינטראקטיבי המזמין את המשתמש לגשר מעט על הפער בין חוויה לזכרון, דרך כתיבה ברגעים אקראיים. במסגרת הפרוייקט עיצבתי את המטרות, ההגדרות והמיתוג של המוצר, את האפליקציה שדרכה מתבצע איסוף הרגעים, ואת היומן המודפס שנשלח אל המשתמש בתום הכתיבה ומשמש כקפסולת זמן האוצרת בתוכה הוויה של תקופה.' +
            '<br/><br/>' +
            'במסגרת הפרוייקט פיתחתי אפליקציית אנדרואיד שאיפשרה לחוות את המוצר. מבחינת backend, העיבוד של המידע מהיוזר לפורמט מעוצב של עמוד ביומן נעשה בצורה אוטומטית בפייתון. כמו כן, פיתחתי שתי תכניות ששירתו שתי פרזנטציות שונות של הפרוייקט: האחת שולחת להדפסה במדפסת סמוכה את הרגע שזה עתה נכתב באפליקציה, כדי לייצר ״אפקט וואו״. השניה שולחת את אותו הקובץ למייל כעבור מספר ימים, כדי לייצר את האפקט של קפסולת זמן.<br/><br/> ניתן לצפות בrepo של הפרוייקט בגיטהאב.',
        englishDescription: '',
        title: ' רגעי חולין •',
        tags: ["Video", "Collage", "Personal", "Collective"]
    },
    '2-3': {
        index: 4, name: 'Footprints', thumbnailPath: p4Thumbnail,
        hebrewDescription: 'פתיח לסדרת טבע תיעודית בשם <strong>Footprints</strong> העוסקת בהשתלטות האדם, והטכנולוגיה שהוא יוצר, על הטבע. <br/>הוידאו מורכב משתי שכבות. הראשונה היא שכבה טבעית המצולמת בים המלח, שמייצג את המוות של עולם החי והצומח. השכבה השניה היא שכבה גרפית שמתייחסת לצורות טבעיות, אך נוצרה בצורה אוטומטית באמצעות קוד פייתון, כך שהמבנה תוכנן מראש אך התוצאה הספציפית היא תוצר אוטומטי של ערכים רנדומליים.',
        englishDescription: '',
        title: '• Footprints',
        tags: ["Video", "Collage", "Personal", "Collective"]
    },
    '2-4': {
        index: 5, name: 'Trigger it', thumbnailPath: p5Thumbnail,
        hebrewDescription: 'אפליקציית ליצירת אפקטים מבוססת תכנות. מטרתה לפתוח לבני נוער שער לתחום התכנות דרך עולם התוכן שלהם ומטרות רלוונטיות עבורם. <br/>האפליקציה מבוססת על קומפוננטות מודולוריות ליצירת צירופים יחודיים ומקוריים, ומאפשרת שילוב של אופציות pre-defined ואופציות custom ליצירת ״רמות קושי״ שונות. <br/>מתוך הבנת החשיבות של אוריינות דיגיטלית בכלל ויכולות תכנות בסיסיות בפרט בעולם המתפתח, האפליקציה שמה דגש על תהליך הלמידה ומעודדת מוטיבציה ללמידה מתוך יצירתיות, ביטוי אישי ואלמנטים של Project Based Learning' +
            '.',
        englishDescription: '',
        title: '• Trigger it',
        tags: ["Video", "Collage", "Personal", "Collective"]
    },
    '2-5': {
        index: 6, name: 'המשביר לצרכן', thumbnailPath: p6Thumbnail,
        hebrewDescription: 'מעטפת גרפית למוסד חדש: ארכיון עירוני הנפתח בבניין המשביר לצרכן בירושלים. במסגרת הפרוייקט עיצבתי לוגו ופוסטרים לאירוע הפתיחה. השפה הגרפית לוקחת השראה מצורת המבנה ומזוויות החלונות שלו, וקורצת גם למטרתו המקורית בשדה הצרכנות.',
        englishDescription: '',
        title: 'המשביר לצרכן •',
        tags: ["Video", "Collage", "Personal", "Collective"]
    },
    '3-3': {
        index: 7, name: 'נוסטלגיה וכו׳', thumbnailPath: p7Thumbnail,
        hebrewDescription: '<i>״אני מתגעגעת לתקופה שהיינו סטודנטים בירושלים״</i>, כתבתי בעודי סטודנטית בירושלים, בסוף השנה השלישית מתוך חמש.<br/>בפרוייקט זה עסקתי בנוסטלגיה ובחללים בהם אני חיה, בהשראת הספר <strong>חלל וכו׳</strong> מאת ג׳ורג׳ פרק ובצירוף קטעים ממנו. צילמתי במצלמת פילם את הבית שבו גרתי ושאותו, יחד עם מה שהוא ייצג עבורי, אהבתי מאוד, והרגשתי שאני כבר מתגעגעת אליו עוד כשגרתי שם. הבחירה בפילם באופן טבעי הדגישה את הנופך הנוסטלגי של ההתבוננות שלי בבית. הקולאז׳ של קטעים מהספר יחד עם הצילומים מבטא את מחשבותיי והרגשותיי לגבי האובזרבציות של פרק.',
        englishDescription: '',
        title: 'נוסטלגיה וכו׳ •',
        tags: ["Video", "Collage", "Personal", "Collective"]
    },
    '3-4': {
        index: 8, name: 'אופנת הקיבוץ', thumbnailPath: p8Thumbnail,
        hebrewDescription: 'בפרוייקט זה ערכתי את הערך <strong>אופנה בקיבוץ</strong> על פי ויקיפדיה יחד עם אוסף תצלומים משפחתי משנות ה70, שנות ילדותו של אבי בקיבוץ ראש הנקרה, למעין קטלוג שמציג את האופנה וחיי הקיבוץ של התקופה. או כמו שמתאר זאת היטב יורם קניוק, שגם מצוטט בסוף החוברת: <i>"אופנה איננה רק תצוגת בגדי ים... היא האני הקולקטיבי העליון של הגוף, של החברה, זה איך שאנשים היו רוצים להיות גזורים בתוך הנוף״</i>.',
        englishDescription: '',
        title: 'אופנת הקיבוץ •',
        tags: ["Video", "Collage", "Personal", "Collective"]
    },
};

export default projectsDataMap;
