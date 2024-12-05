import p1Thumbnail from '../assets/thumbnails/p1_thumbnail.jpg';
import p2Thumbnail from '../assets/thumbnails/p2_thumbnail.jpg';
import p3Thumbnail from '../assets/thumbnails/p3_thumbnail.jpg';
import p4Thumbnail from '../assets/thumbnails/p4_thumbnail.jpg';
import p5Thumbnail from '../assets/thumbnails/p5_thumbnail.jpg';
import p6Thumbnail from '../assets/thumbnails/p6_thumbnail.jpg';
import p7Thumbnail from '../assets/thumbnails/p7_thumbnail.jpg';
import p8Thumbnail from '../assets/thumbnails/p8_thumbnail.jpg';


const generateProjectImages = (projectId, count) => {
    const images = [];
    const context = require.context('../assets/images/', true, /\.jpg$/);

    for (let i = 1; i <= count; i++) {
        const imagePath = `p${projectId}/${i}.jpg`;
        images.push(context(`./${imagePath}`));
    }
    return images;
};


const projectsDataMap = {
    '1-2': {
        index: 1,
        thumbnailPath: p1Thumbnail,
        hebDescription: 'קולאז׳ וידאו בשני רבדים חיצוניים: טקסט ודימוי, ובשני רבדים פנימיים: אישי וקולקטיבי. דרך ההקבלה וההפרדה בין הקטן, הפרטי, הספציפי לבין הגדול, הגלובלי, המונומנטלי, הסרט הקצר מנסה לענות על השאלה:<strong>האם אפשר לתפוס את קץ האנושות?</strong>' +
            '<br/><br/>' +
            'לצפייה <a href="https://www.youtube.com/watch?v=Rb_umTDsRCw&t=102s" target="_blank">בעבודה המלאה</a>.',
        engDescription: 'Video collage in two external layers: text and image, and in two internal layers: the personal and the collective. Through the parallelism and separation between the small, private, specific aspects and the large, global, monumental aspects, the short film tries to answer the question: <strong>Is it possible to grasp the end of humanity?</strong>' +
            '<br/><br/>' +
            'Watch the <a href="https://www.youtube.com/watch?v=Rb_umTDsRCw&t=102s" target="_blank">full video</a>.',
        hebTitle: "צלקת",
        engTitle: "Scar",
        hebTags: ["וידאו", "רב-תחומי", "אישי", "קולאז׳"],
        engTags: ["Video", "Interdisciplinary", "Personal", "Collage"],
        images: generateProjectImages(1, 6),
        cinematicPopup: true
    },
    '1-3': {
        index: 2,
        thumbnailPath: p2Thumbnail,
        hebDescription: 'יש לי שתי אחיות, נעם וניצן. הן תאומות, הן קטנות ממני בשנתיים, והן גדלו במסגרות נפרדות מגיל קטן, כך שבעצם אנחנו סוג של שלישיה. או אולי, משולש: כל אחת חולקת תכונות עם השניה והשלישית. למרות שאני אחותן הגדולה, לפעמים אני מרגישה דווקא באמצע בין ניצן לנעם. <strong>אז מה אם אתן תאומות</strong> הוא פרוייקט אינפוגרפי שמהווה דיוקן שלי דרכן, ודיוקן שלהן- דרכי. במסגרת הפרוייקט ריאיינתי אותן לעומק ובניתי ״דאטה-בייס״, ״ניתחתי״ את המידע ועיצבתי מערכת אינפוגרפית של 7 גלויות.',
        engDescription: 'I have two sisters, Noam and Nitzan. They are twins, two years younger than me, and grew up in separate settings from an early age, making us essentially a trio. Or perhaps, a triangle: each of us shares characteristics with the other two. Despite being their older sister, I sometimes feel I\'m positioned right between Nitzan and Noam. <strong>You\'re Twins, So What</strong> is an infographic project that creates a portrait of me through them, and them through me. For this project, I conducted in-depth interviews, built a "database," "analyzed" the data, and designed an infographic system of 7 postcards.',
        hebTitle: 'אז מה אם אתן תאומות',
        engTitle: 'Your\'e Twins, So What',
        hebTags: ["אינפוגרפיקה", "צילום", "אישי", "פרינט"],
        engTags: ["Infography", "Photography", "Print", "Personal"],
        images: generateProjectImages(2, 5)
    },
    '1-4': {
        index: 3,
        thumbnailPath: p3Thumbnail,
        hebDescription: '<strong>רגעי חולין</strong> הוא מוצר אינטראקטיבי המזמין את המשתמש לגשר מעט על הפער בין חוויה לזכרון, דרך כתיבה ברגעים אקראיים. במסגרת הפרוייקט עיצבתי את המטרות, ההגדרות והמיתוג של המוצר, את האפליקציה שדרכה מתבצע איסוף הרגעים, ואת היומן המודפס שנשלח אל המשתמש בתום הכתיבה ומשמש כקפסולת זמן האוצרת בתוכה הוויה של תקופה.' +
            '<br/><br/>' +
            'במסגרת הפרוייקט פיתחתי אפליקציית אנדרואיד שאיפשרה לחוות את המוצר. מבחינת backend, העיבוד של המידע מהיוזר לפורמט מעוצב של עמוד ביומן נעשה בצורה אוטומטית בפייתון. כמו כן, פיתחתי שתי תכניות ששירתו שתי פרזנטציות שונות של הפרוייקט: האחת שולחת להדפסה במדפסת סמוכה את הרגע שזה עתה נכתב באפליקציה, כדי לייצר ״אפקט וואו״. השניה שולחת את אותו הקובץ למייל כעבור מספר ימים, ומטרתה לייצר את האפקט של קפסולת זמן.<br/><br/> ניתן לצפות <a target="_blank" href="https://github.com/amitilan17/random-moments">בrepo של הפרוייקט</a> בגיטהאב.',
        engDescription: 'Everyday Moments is a product that invites the user to bridge the gap between experience and memory by writing at random moments. In this project, I designed the goals, definitions, and branding of the product, as well as the application through which moments are collected, and the printed journal sent to the user at the end of the writing period, serving as a time capsule that encapsulates the essence of a chapter.\n' +
            '<br/>' +
            'To actualize the product, I developed an Android app letting users experience the concept. Behind the scenes, I used Python to automatically convert user input into a pre-designed page layout of the journal. In addition, I developed two programs to showcase the project. The first program aims to create a "wow factor" by instantly printing the user\'s just-written moment on a nearby printer. The second acts as a digital time capsule, emailing the same content to the user a few days later.'
            + '<br/><br/>' +
            'For technical details, check out the project\'s <a href="https://github.com/amitilan17/random-moments" target="_blank">source code</a>.',
        hebTitle: 'רגעי חולין',
        engTitle: 'Everyday Moments',
        hebTags: ["רב-תחומי", "קוד", "UI/UX", "אישי", "פרינט", "מיתוג"],
        engTags: ["Interdisciplinary", "Code", "UI/UX", "Personal", "Print", "Branding"],
        images: generateProjectImages(3, 8)
    },
    '2-3': {
        index: 4, name: 'Footprints', thumbnailPath: p4Thumbnail,
        hebDescription: 'פתיח לסדרת טבע תיעודית בשם <strong>Footprints</strong> העוסקת בהשתלטות האדם, והטכנולוגיה שהוא יוצר, על הטבע. <br/>הוידאו מורכב משתי שכבות. הראשונה היא שכבה טבעית המצולמת בים המלח, שמייצג את המוות של עולם החי והצומח. השכבה השניה היא שכבה גרפית שמתייחסת לצורות טבעיות, אך נוצרה בצורה אוטומטית באמצעות קוד פייתון, כך שהמבנה תוכנן מראש אך התוצאה הספציפית היא תוצר אוטומטי של ערכים רנדומליים. <br/><br/>לצפייה <a target="_blank" href="https://www.youtube.com/watch?v=08q-WL1bmcA&t=4s">בעבודה המלאה</a>.',
        engDescription: 'An introduction to a documentary series exploring human dominance, and the technology they create, over nature. The video consists of two layers. The first is a natural layer filmed at the Dead Sea, representing the death of flora and fauna. The second layer is a graphic one that references natural forms but was created automatically using Python code, so that while the structure was planned in advance, the specific result is an automatic product of random values. <br/><br/>Watch the <a href="https://www.youtube.com/watch?v=08q-WL1bmcA&t=4s" target="_blank">full video</a>.',
        hebTitle: 'Footprints',
        engTitle: 'Footprints',
        hebTags: ["רב-תחומי", "קוד", "וידאו"],
        engTags: ["Interdisciplinary", "Code", "Video"],
        images: generateProjectImages(4, 5),
        cinematicPopup: true
    },
    '2-4': {
        index: 5,
        thumbnailPath: p5Thumbnail,
        hebDescription: 'אפליקציית ליצירת אפקטים מבוססת תכנות. מטרתה לפתוח לבני נוער שער לתחום התכנות דרך עולם התוכן שלהם ומטרות רלוונטיות עבורם. <br/><br/>האפליקציה מבוססת על קומפוננטות מודולוריות ליצירת צירופים יחודיים ומקוריים, ומאפשרת שילוב של אופציות pre-defined ואופציות custom ליצירת ״רמות קושי״ שונות. <br/><br/>מתוך הבנת החשיבות של אוריינות דיגיטלית בכלל ויכולות תכנות בסיסיות בפרט בעולם המתפתח, האפליקציה שמה דגש על תהליך הלמידה ומעודדת מוטיבציה ללמידה מתוך יצירתיות, ביטוי אישי ואלמנטים של Project Based Learning' +
            '.',
        engDescription: 'A programming-based visual effects application that introduces teenagers to coding through their sphere of interests and relevant objectives. <br/><br/>Built on modular components, the application facilitates the creation of unique combinations through both pre-defined and custom options, accommodating various complexity levels. <br/><br/>Acknowledging the critical role of digital literacy and fundamental programming capabilities in our evolving digital landscape, the application emphasizes a comprehensive learning journey. It cultivates learning motivation through creative expression, individual articulation, and project-based learning methodology.',
        hebTitle: 'Trigger it',
        engTitle: 'Trigger it',
        hebTags: ["UI/UX", "לימודי", "תרבותי", "קוד"],
        engTags: ["UI/UX", "Educational", "Cultural", "Code"],
        images: generateProjectImages(5, 6)
    },
    '2-5': {
        index: 6,
        thumbnailPath: p6Thumbnail,
        hebDescription: 'מעטפת גרפית למוסד חדש: ארכיון עירוני הנפתח בבניין <strong>המשביר לצרכן</strong> בירושלים. במסגרת הפרוייקט עיצבתי לוגו ופוסטרים לאירוע הפתיחה. השפה הגרפית שואבת השראה מצורת המבנה ומזוויות החלונות שלו, וקורצת גם למטרתו המקורית בשדה הצרכנות.',
        engDescription: 'A visual identity for a new institution: A municipal archive opening in the historic <strong>Hamashbir Lezarchan</strong> building in Jerusalem. As part of the project, I designed a logo and posters for the opening event. The graphic language draws inspiration from the building\'s structure and window angles, while giving a subtle nod to its original purpose in the retail sector.',
        hebTitle: 'ארכיון המשביר',
        engTitle: 'The Mashbir Archive',
        hebTags: ["פרינט", "תרבותי", "מיתוג"],
        engTags: ["Print", "Cultural", "Branding"],
        images: generateProjectImages(6, 5)
    },
    '3-3': {
        index: 7,
        thumbnailPath: p7Thumbnail,
        hebDescription: '<i>״אני מתגעגעת לתקופה שהיינו סטודנטים בירושלים״</i>, כתבתי בעודי סטודנטית בירושלים, בסוף השנה השלישית מתוך חמש.<br/> בפרוייקט זה עסקתי בנוסטלגיה ובחללים בהם אני חיה, בהשראת הספר<strong> חלל וכו׳</strong> מאת ג׳ורג׳ פרק ובצירוף קטעים ממנו. צילמתי במצלמת פילם את הבית שבו גרתי ושאותו, יחד עם מה שהוא ייצג עבורי, אהבתי מאוד, והרגשתי שאני כבר מתגעגעת אליו עוד כשגרתי שם. הבחירה בפילם באופן טבעי הדגישה את הנופך הנוסטלגי של ההתבוננות שלי בבית. הקולאז׳ של קטעים מהספר יחד עם הצילומים מבטא את מחשבותיי והרגשותיי לגבי האובזרבציות של פרק.',
        engDescription: '<i>"I miss the time we were students in Jerusalem,"</i> I wrote while still being a student in Jerusalem, at the end of my third year out of five. This project explores nostalgia and the spaces I inhabit, inspired by Georges Perec\'s <strong>Species of Spaces</strong> and incorporating passages from it. <br/><br/>Using an analog film camera, I captured the house where I lived—a place I deeply cherished, along with everything it represented—feeling nostalgic for it even while still residing there. The choice of analog photography naturally emphasized the nostalgic quality of my observation of the house. The collage of text passages combined with the photographs expresses my thoughts and feelings about Perec\'s observations.',
        hebTitle: 'נוסטלגיה וכו׳',
        engTitle: 'Nostalgia and Other Pieces',
        hebTags: ["קולאז׳", "צילום", "אישי"],
        engTags: ["Collage", "Photography", "Personal"],
        images: generateProjectImages(7, 10)
    },
    '3-4': {
        index: 8,
        thumbnailPath: p8Thumbnail,
        hebDescription: 'בפרוייקט זה ערכתי את הערך <strong>אופנה בקיבוץ</strong> על פי ויקיפדיה יחד עם אוסף תצלומים משפחתי משנות ה70, שנות ילדותו של אבי בקיבוץ ראש הנקרה, למעין קטלוג שמציג את האופנה וחיי הקיבוץ של התקופה. או כמו שמתאר זאת היטב יורם קניוק, שגם מצוטט בסוף החוברת: <i>"אופנה איננה רק תצוגת בגדי ים... היא האני הקולקטיבי העליון של הגוף, של החברה, זה איך שאנשים היו רוצים להיות גזורים בתוך הנוף״</i>.',
        engDescription: 'In this project, I edited the Wikipedia article <strong>Fashion in the Kibbutz</strong> alongside a collection of family photographs from the 1970s, documenting my father\'s childhood in Kibbutz Rosh HaNikra, into a fashion catalog that captures kibbutz fashion and life of that era. As Yoram Kaniuk aptly describes, and as quoted at the end of the booklet: <i>"Fashion is not merely a swimwear show... it is the collective higher self of the body, of society, it is how people wish to be carved into the landscape."</i>',
        hebTitle: 'אופנת הקיבוץ',
        engTitle: 'Kibbutz Fashion',
        hebTags: ["תרבותי", "פרינט", "אישי"],
        engTags: ["Cultural", "Print", "Personal"],
        images: generateProjectImages(8, 10)
    },
};

export default projectsDataMap;
