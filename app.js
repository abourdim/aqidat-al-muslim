/* عقيدة المسلم — THE MUSLIM'S CREED — app.js v1.0 */
/* Based on "Aqidat al-Muslim" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'عقيدة المسلم',
    splashSub: 'أركان الإيمان بأسلوب سهل وعملي',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة البقرة ٢: ١٧٧',
    tabHome: 'الرئيسية', tabCreed: 'العقيدة', tabPillars: 'الأركان',
    tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    creedTitle: 'أصول العقيدة',
    creedDesc: '٢٠ أصلاً من أصول الإيمان — من كتاب عقيدة المسلم للشيخ محمد الغزالي',
    pillarsTitle: 'أركان العبادة',
    pillarsDesc: 'كيف تتحول العقيدة إلى عمل يومي — الصلاة والصيام والزكاة والحج',
    quizTitle: '🏆 من سيكون العالم؟',
    quizDesc: 'اختبر معلوماتك في العقيدة الإسلامية — اجمع النقاط واحصل على الأوسمة!',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية الإيمان',
    submitQuiz: 'تحقق من الإجابة',
    dailyLabel: '✨ درس اليوم',
    quizAgain: 'سؤال جديد',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في العقيدة...',
    verse: 'الآية',
    youngMode: '🧒 المستكشف الصغير',
    teenMode: '📖 الباحث الشاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    correct: 'أحسنت! إجابة صحيحة!',
    wrong: 'حاول مرة أخرى!',
    quranRef: '📖 المرجع القرآني',
    fiftyFifty: '50/50',
    hintBtn: '💡 تلميح',
    nextQ: 'السؤال التالي',
    badges: {
      beginner: '🌱 مبتدئ',
      reader: '📖 قارئ',
      scholar: '🎓 عالم',
      persistent: '🔥 مثابر',
      expert: '⭐ خبير'
    },
    splashFeatures: [
      '٢٠ أصلاً من أصول العقيدة الإسلامية',
      'أركان العبادة: صلاة، صيام، زكاة، حج',
      'اختبار تفاعلي مع نظام نقاط وأوسمة',
      'وضعان: المستكشف الصغير والباحث الشاب'
    ],
  },
  en: {
    appTitle: "The Muslim's Creed",
    splashSub: 'Foundations of Islamic faith made simple',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Baqarah 2:177',
    tabHome: 'Home', tabCreed: 'Creed', tabPillars: 'Pillars',
    tabQuiz: 'Quiz', tabAbout: 'Book',
    creedTitle: 'Foundations of Faith',
    creedDesc: '20 foundations of Islamic belief — from "The Muslim\'s Creed" by Sheikh Mohammed al-Ghazali',
    pillarsTitle: 'Pillars of Worship',
    pillarsDesc: 'How creed transforms into daily practice — prayer, fasting, charity, and pilgrimage',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of Islamic creed — earn points and unlock badges!',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas of Faith',
    submitQuiz: 'Check Answer',
    dailyLabel: "✨ Today's Lesson",
    quizAgain: 'Next Question',
    share: 'Share',
    searchPlaceholder: 'Search creed...',
    verse: 'Verse',
    youngMode: '🧒 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    correct: 'Well done! Correct answer!',
    wrong: 'Try again!',
    quranRef: '📖 Quran Reference',
    fiftyFifty: '50/50',
    hintBtn: '💡 Hint',
    nextQ: 'Next Question',
    badges: {
      beginner: '🌱 Beginner',
      reader: '📖 Reader',
      scholar: '🎓 Scholar',
      persistent: '🔥 Persistent',
      expert: '⭐ Expert'
    },
    splashFeatures: [
      '20 foundations of Islamic creed',
      'Pillars of worship: prayer, fasting, zakat, hajj',
      'Interactive quiz with XP and badges',
      'Two modes: Young Explorer & Teen Scholar'
    ],
  },
  fr: {
    appTitle: 'La Croyance du Musulman',
    splashSub: 'Les fondements de la foi islamique simplifies',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Baqarah 2:177',
    tabHome: 'Accueil', tabCreed: 'Croyance', tabPillars: 'Piliers',
    tabQuiz: 'Quiz', tabAbout: 'Livre',
    creedTitle: 'Fondements de la Foi',
    creedDesc: '20 fondements de la croyance islamique — du livre « La Croyance du Musulman » par Sheikh Mohammed al-Ghazali',
    pillarsTitle: 'Piliers du Culte',
    pillarsDesc: 'Comment la croyance se transforme en pratique quotidienne — priere, jeune, aumone et pelerinage',
    quizTitle: '🏆 Qui Veut Etre Savant ?',
    quizDesc: 'Testez vos connaissances en croyance islamique — gagnez des points et debloquez des badges !',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas de la Foi',
    submitQuiz: 'Verifier',
    dailyLabel: '✨ Lecon du Jour',
    quizAgain: 'Question Suivante',
    share: 'Partager',
    searchPlaceholder: 'Rechercher...',
    verse: 'Verset',
    youngMode: '🧒 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: 'Points d\'Experience',
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    correct: 'Bravo ! Bonne reponse !',
    wrong: 'Essayez encore !',
    quranRef: '📖 Reference Coranique',
    fiftyFifty: '50/50',
    hintBtn: '💡 Indice',
    nextQ: 'Question Suivante',
    badges: {
      beginner: '🌱 Debutant',
      reader: '📖 Lecteur',
      scholar: '🎓 Savant',
      persistent: '🔥 Perseverant',
      expert: '⭐ Expert'
    },
    splashFeatures: [
      '20 fondements de la croyance islamique',
      'Piliers du culte : priere, jeune, zakat, hajj',
      'Quiz interactif avec XP et badges',
      'Deux modes : Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ CREED DATA (20 foundations) ═══════════════
const CREED = [
  {
    id:1, emoji:'☝️', category:'tawhid',
    ar:{title:'التوحيد',desc:'لا إله إلا الله. التوحيد هو أساس العقيدة الإسلامية كلها. الإيمان بأن الله واحد لا شريك له، خالق كل شيء ومدبّر كل أمر.',verse:'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ',verseRef:'الإخلاص ١١٢: ١-٤',young:'الله واحد! لا يوجد إله غيره. هو الذي خلق كل شيء — الشمس والقمر والنجوم وأنت!',action:'قل "لا إله إلا الله" بقلب حاضر وتأمل معناها'},
    en:{title:'Monotheism (Tawhid)',desc:'There is no god but God. Tawhid is the foundation of all Islamic creed. Belief that God is One with no partner, the Creator and Sustainer of everything.',verse:'Say: He is God, the One. God, the Eternal. He begets not, nor was He begotten. And there is none comparable to Him.',verseRef:'Al-Ikhlas 112:1-4',young:'God is One! There is no other god. He created everything — the sun, moon, stars, and you!',action:'Say "There is no god but God" with a present heart and reflect on its meaning'},
    fr:{title:'Monotheisme (Tawhid)',desc:'Il n\'y a de dieu que Dieu. Le Tawhid est le fondement de toute la croyance islamique. La croyance que Dieu est Un sans associe, Createur et Gerant de toute chose.',verse:'Dis : Il est Dieu, l\'Unique. Dieu, l\'Eternel. Il n\'engendre pas et n\'a pas ete engendre. Et nul n\'est comparable a Lui.',verseRef:'Al-Ikhlas 112:1-4',young:'Dieu est Un ! Il n\'y a pas d\'autre dieu. Il a cree tout — le soleil, la lune, les etoiles et toi !',action:'Dites « Il n\'y a de dieu que Dieu » avec un coeur present et meditez son sens'}
  },
  {
    id:2, emoji:'🌟', category:'attributes',
    ar:{title:'صفات الله',desc:'لله الأسماء الحسنى والصفات العلا. هو الرحمن الرحيم، العليم الحكيم، السميع البصير. صفاته كاملة لا نقص فيها، وهي فوق تصور البشر.',verse:'لَيْسَ كَمِثْلِهِ شَيْءٌ وَهُوَ السَّمِيعُ الْبَصِيرُ',verseRef:'الشورى ٤٢: ١١',young:'الله يسمع كل شيء ويرى كل شيء! اسماؤه جميلة جداً: الرحمن، الكريم، الودود...',action:'تعلم ثلاثة أسماء من أسماء الله الحسنى اليوم وتأمل معانيها'},
    en:{title:"God's Attributes",desc:'God has the most beautiful names and supreme attributes. He is the Most Merciful, the All-Knowing, the All-Wise, the All-Hearing, the All-Seeing. His attributes are perfect beyond human comprehension.',verse:'There is nothing like unto Him, and He is the All-Hearing, the All-Seeing.',verseRef:'Ash-Shura 42:11',young:'God hears everything and sees everything! His names are so beautiful: The Merciful, The Generous, The Loving...',action:'Learn three of God\'s beautiful names today and reflect on their meanings'},
    fr:{title:'Les Attributs de Dieu',desc:'Dieu possede les plus beaux noms et les attributs supremes. Il est le Tout Misericordieux, l\'Omniscient, le Sage, l\'Audient, le Clairvoyant. Ses attributs sont parfaits au-dela de la comprehension humaine.',verse:'Il n\'y a rien qui Lui ressemble, et Il est l\'Audient, le Clairvoyant.',verseRef:'Ash-Shura 42:11',young:'Dieu entend tout et voit tout ! Ses noms sont tres beaux : Le Misericordieux, Le Genereux, Le Bienveillant...',action:'Apprenez trois des beaux noms de Dieu aujourd\'hui et meditez leurs significations'}
  },
  {
    id:3, emoji:'👼', category:'angels',
    ar:{title:'الإيمان بالملائكة',desc:'الملائكة مخلوقات من نور، لا تعصي الله أبداً. جبريل ينزل بالوحي، وميكائيل موكل بالرزق، وإسرافيل موكل بالنفخ في الصور. لكل إنسان ملائكة حفظة.',verse:'لَا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ وَيَفْعَلُونَ مَا يُؤْمَرُونَ',verseRef:'التحريم ٦٦: ٦',young:'الملائكة مخلوقات جميلة من نور! جبريل كان يحمل رسائل الله للأنبياء. وهناك ملائكة تحرسك كل يوم!',action:'اشكر الله على الملائكة الحافظة التي ترافقك كل يوم'},
    en:{title:'Belief in Angels',desc:'Angels are beings created from light who never disobey God. Gabriel brings revelation, Michael manages provision, and Israfil will blow the trumpet. Every person has guardian angels.',verse:'They do not disobey God in what He commands them but do what they are commanded.',verseRef:'At-Tahrim 66:6',young:'Angels are beautiful beings made of light! Gabriel carried God\'s messages to the prophets. And there are angels who guard you every day!',action:'Thank God for the guardian angels who accompany you every day'},
    fr:{title:'Croyance aux Anges',desc:'Les anges sont des etres crees de lumiere qui n\'obeissent jamais a Dieu. Gabriel apporte la revelation, Michael gere les provisions, et Israfil soufflera dans la trompe. Chaque personne a des anges gardiens.',verse:'Ils ne desobeissent jamais a Dieu en ce qu\'Il leur commande, et font ce qui leur est ordonne.',verseRef:'At-Tahrim 66:6',young:'Les anges sont de belles creatures de lumiere ! Gabriel portait les messages de Dieu aux prophetes. Et des anges te protegent chaque jour !',action:'Remerciez Dieu pour les anges gardiens qui vous accompagnent chaque jour'}
  },
  {
    id:4, emoji:'📖', category:'books',
    ar:{title:'الإيمان بالكتب السماوية',desc:'أنزل الله كتباً لهداية البشر: صحف إبراهيم، التوراة، الزبور، الإنجيل، والقرآن الكريم خاتم الكتب ومهيمن عليها. القرآن محفوظ من التحريف.',verse:'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',verseRef:'الحجر ١٥: ٩',young:'الله أرسل كتباً كثيرة! أشهرها: التوراة والإنجيل والقرآن. والقرآن هو آخر كتاب وربنا حافظه من أي تغيير!',action:'اقرأ صفحة من القرآن اليوم وتدبر معانيها'},
    en:{title:'Belief in Divine Books',desc:'God revealed books to guide humanity: the Scrolls of Abraham, the Torah, the Psalms, the Gospel, and the Holy Quran — the final scripture that supersedes all others. The Quran is preserved from corruption.',verse:'Indeed, it is We who sent down the reminder, and indeed, We will be its guardian.',verseRef:'Al-Hijr 15:9',young:'God sent many books! The most famous: the Torah, the Gospel, and the Quran. The Quran is the last book, and God protects it from any change!',action:'Read a page of the Quran today and reflect on its meanings'},
    fr:{title:'Croyance aux Livres Divins',desc:'Dieu a revele des livres pour guider l\'humanite : les Feuillets d\'Abraham, la Torah, les Psaumes, l\'Evangile, et le Saint Coran — la derniere ecriture qui prime sur toutes les autres. Le Coran est preserve de toute corruption.',verse:'C\'est Nous qui avons fait descendre le rappel, et c\'est Nous qui en sommes les gardiens.',verseRef:'Al-Hijr 15:9',young:'Dieu a envoye beaucoup de livres ! Les plus connus : la Torah, l\'Evangile et le Coran. Le Coran est le dernier livre, et Dieu le protege de tout changement !',action:'Lisez une page du Coran aujourd\'hui et meditez ses significations'}
  },
  {
    id:5, emoji:'🕊️', category:'prophets',
    ar:{title:'الإيمان بالرسل',desc:'الأنبياء حملوا رسالة التوحيد من آدم إلى محمد صلى الله عليه وسلم. كلهم دعوا إلى عبادة الله وحده. محمد خاتم الأنبياء والمرسلين.',verse:'مَا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِنْ رِجَالِكُمْ وَلَٰكِنْ رَسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ',verseRef:'الأحزاب ٣٣: ٤٠',young:'الله أرسل أنبياء كثيرين! آدم، نوح، إبراهيم، موسى، عيسى، ومحمد آخرهم. كلهم قالوا: اعبدوا الله وحده!',action:'اقرأ قصة نبي واحد اليوم — ما الدرس الذي تعلمته منه؟'},
    en:{title:'Belief in Messengers',desc:'The prophets carried the message of monotheism from Adam to Muhammad (peace be upon him). All called to worship God alone. Muhammad is the seal of all prophets and messengers.',verse:'Muhammad is not the father of any of your men, but the Messenger of God and the seal of the prophets.',verseRef:'Al-Ahzab 33:40',young:'God sent many prophets! Adam, Noah, Abraham, Moses, Jesus, and Muhammad was the last. They all said: worship God alone!',action:'Read the story of one prophet today — what lesson did you learn?'},
    fr:{title:'Croyance aux Messagers',desc:'Les prophetes ont porte le message du monotheisme d\'Adam a Muhammad (paix sur lui). Tous ont appele a adorer Dieu seul. Muhammad est le sceau de tous les prophetes et messagers.',verse:'Muhammad n\'est le pere d\'aucun de vos hommes, mais le Messager de Dieu et le sceau des prophetes.',verseRef:'Al-Ahzab 33:40',young:'Dieu a envoye beaucoup de prophetes ! Adam, Noe, Abraham, Moise, Jesus, et Muhammad etait le dernier. Ils ont tous dit : adorez Dieu seul !',action:'Lisez l\'histoire d\'un prophete aujourd\'hui — quelle lecon en avez-vous tiree ?'}
  },
  {
    id:6, emoji:'⏳', category:'afterlife',
    ar:{title:'الإيمان باليوم الآخر',desc:'الموت ليس نهاية بل بداية حياة أبدية. يوم القيامة يُحاسب كل إنسان على أعماله. الجنة جزاء المؤمنين، والنار جزاء الظالمين.',verse:'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ثُمَّ إِلَيْنَا تُرْجَعُونَ',verseRef:'العنكبوت ٢٩: ٥٧',young:'الحياة لا تنتهي بالموت! هناك يوم كبير سيحاسبنا فيه الله. من عمل خيراً يدخل الجنة!',action:'تأمل: لو كان هذا آخر يوم لك، ما الذي ستغيره؟'},
    en:{title:'Belief in the Last Day',desc:'Death is not an end but the beginning of eternal life. On the Day of Judgment, every person will be held accountable. Paradise is the reward of believers, and Hell the consequence of injustice.',verse:'Every soul will taste death. Then to Us you will be returned.',verseRef:'Al-Ankabut 29:57',young:'Life doesn\'t end with death! There is a big day when God will judge everyone. Those who do good will enter Paradise!',action:'Reflect: if today were your last day, what would you change?'},
    fr:{title:'Croyance au Jour Dernier',desc:'La mort n\'est pas une fin mais le debut d\'une vie eternelle. Au Jour du Jugement, chaque personne sera jugee. Le Paradis est la recompense des croyants, et l\'Enfer la consequence de l\'injustice.',verse:'Toute ame goutera la mort. Puis c\'est a Nous que vous serez ramenes.',verseRef:'Al-Ankabut 29:57',young:'La vie ne s\'arrete pas avec la mort ! Il y a un grand jour ou Dieu jugera tout le monde. Ceux qui font le bien entreront au Paradis !',action:'Reflechissez : si c\'etait votre dernier jour, que changeriez-vous ?'}
  },
  {
    id:7, emoji:'🎯', category:'destiny',
    ar:{title:'الإيمان بالقضاء والقدر',desc:'كل شيء بتقدير الله. الإيمان بالقدر لا يعني التواكل، بل بذل الجهد والتوكل على الله في النتائج. القدر يمنح المؤمن سكينة عميقة.',verse:'قُلْ لَنْ يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا',verseRef:'التوبة ٩: ٥١',young:'كل شيء يحدث بإرادة الله! لكن هذا لا يعني أننا لا نعمل — نبذل جهدنا ونتوكل على الله!',action:'واجه تحدياً اليوم بثقة: ابذل جهدك ثم فوّض أمرك لله'},
    en:{title:'Belief in Divine Destiny',desc:'Everything is by God\'s decree. Belief in destiny doesn\'t mean passivity, but rather making effort and trusting God with the outcomes. Destiny gives the believer deep tranquility.',verse:'Say: Nothing will ever befall us except what God has written for us.',verseRef:'At-Tawbah 9:51',young:'Everything happens by God\'s will! But that doesn\'t mean we don\'t work — we do our best and trust in God!',action:'Face a challenge today with confidence: do your best, then trust God with the outcome'},
    fr:{title:'Croyance au Destin Divin',desc:'Tout est par le decret de Dieu. La croyance au destin ne signifie pas la passivite, mais plutot faire des efforts et avoir confiance en Dieu pour les resultats. Le destin donne au croyant une tranquillite profonde.',verse:'Dis : Rien ne nous atteindra sauf ce que Dieu a ecrit pour nous.',verseRef:'At-Tawbah 9:51',young:'Tout arrive par la volonte de Dieu ! Mais cela ne veut pas dire qu\'on ne travaille pas — on fait de notre mieux et on a confiance en Dieu !',action:'Affrontez un defi aujourd\'hui avec confiance : faites de votre mieux, puis confiez-vous a Dieu'}
  },
  {
    id:8, emoji:'🌍', category:'tawhid',
    ar:{title:'دلائل وجود الله',desc:'الكون كله يشهد بوجود الله. النظام الدقيق في الخلق، من الذرة إلى المجرة، دليل على خالق حكيم. العقل السليم يقود إلى الإيمان.',verse:'إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِأُولِي الْأَلْبَابِ',verseRef:'آل عمران ٣: ١٩٠',young:'انظر حولك! الشمس والقمر والشجر والبحر — كل شيء يدل على أن الله موجود وعظيم!',action:'تأمل في مخلوق واحد اليوم: كيف يدل على عظمة الخالق؟'},
    en:{title:'Evidence of God\'s Existence',desc:'The entire universe testifies to God\'s existence. The precise order in creation, from atoms to galaxies, is evidence of a Wise Creator. Sound reason leads to faith.',verse:'Indeed, in the creation of the heavens and earth and the alternation of night and day are signs for those of understanding.',verseRef:'Al Imran 3:190',young:'Look around you! The sun, moon, trees, and oceans — everything shows that God exists and is great!',action:'Contemplate one creation today: how does it point to the greatness of the Creator?'},
    fr:{title:'Preuves de l\'Existence de Dieu',desc:'L\'univers entier temoigne de l\'existence de Dieu. L\'ordre precis dans la creation, des atomes aux galaxies, est la preuve d\'un Createur Sage. La raison saine mene a la foi.',verse:'En verite, dans la creation des cieux et de la terre et dans l\'alternance de la nuit et du jour, il y a des signes pour les doues d\'intelligence.',verseRef:'Al Imran 3:190',young:'Regardez autour de vous ! Le soleil, la lune, les arbres et les oceans — tout montre que Dieu existe et qu\'Il est grand !',action:'Contemplez une creation aujourd\'hui : comment montre-t-elle la grandeur du Createur ?'}
  },
  {
    id:9, emoji:'💫', category:'tawhid',
    ar:{title:'التوحيد في الربوبية',desc:'الله وحده هو الخالق الرازق المدبر. لا شريك له في ملكه ولا في تدبيره. هو الذي يحيي ويميت ويرزق من يشاء.',verse:'قُلْ مَنْ يَرْزُقُكُمْ مِنَ السَّمَاءِ وَالْأَرْضِ أَمَّنْ يَمْلِكُ السَّمْعَ وَالْأَبْصَارَ',verseRef:'يونس ١٠: ٣١',young:'الله هو الذي يعطينا الطعام والماء والهواء! لا أحد غيره يستطيع ذلك!',action:'عند كل نعمة اليوم، قل: الحمد لله الذي رزقني هذا'},
    en:{title:'Lordship of God',desc:'God alone is the Creator, Provider, and Sustainer. He has no partner in His dominion or governance. He gives life and death and provides for whom He wills.',verse:'Say: Who provides for you from heaven and earth? Or who controls hearing and sight?',verseRef:'Yunus 10:31',young:'God is the One who gives us food, water, and air! No one else can do that!',action:'With every blessing today, say: Praise be to God who provided me this'},
    fr:{title:'Seigneurie de Dieu',desc:'Dieu seul est le Createur, le Pourvoyeur et le Gerant. Il n\'a pas d\'associe dans Son royaume ni dans Sa gouvernance. Il donne la vie et la mort et pourvoit a qui Il veut.',verse:'Dis : Qui vous pourvoit du ciel et de la terre ? Ou qui detient l\'ouie et la vue ?',verseRef:'Yunus 10:31',young:'Dieu est Celui qui nous donne la nourriture, l\'eau et l\'air ! Personne d\'autre ne peut faire cela !',action:'Avec chaque bienfait aujourd\'hui, dites : Louange a Dieu qui m\'a pourvu de ceci'}
  },
  {
    id:10, emoji:'🤲', category:'tawhid',
    ar:{title:'التوحيد في العبادة',desc:'العبادة لله وحده. لا نسجد ولا ندعو ولا نستغيث إلا بالله. الشرك أعظم ذنب. العبادة تشمل الصلاة والدعاء والخوف والرجاء.',verse:'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',verseRef:'الفاتحة ١: ٥',young:'نصلي لله وحده! ندعو الله وحده! لا نطلب المساعدة إلا من الله!',action:'ادعُ الله اليوم بثلاث حاجات مع يقين بالإجابة'},
    en:{title:'Worship of God Alone',desc:'Worship is for God alone. We bow, pray, and seek help only from God. Associating partners with God is the gravest sin. Worship includes prayer, supplication, fear, and hope.',verse:'You alone we worship, and You alone we ask for help.',verseRef:'Al-Fatihah 1:5',young:'We pray to God alone! We call upon God alone! We ask for help only from God!',action:'Call upon God today with three needs, with certainty He will answer'},
    fr:{title:'Adoration de Dieu Seul',desc:'L\'adoration est pour Dieu seul. Nous nous prosternons, prions et cherchons de l\'aide uniquement aupres de Dieu. L\'association est le peche le plus grave. L\'adoration comprend la priere, l\'invocation, la crainte et l\'espoir.',verse:'C\'est Toi que nous adorons, et c\'est Toi dont nous implorons l\'aide.',verseRef:'Al-Fatihah 1:5',young:'Nous prions Dieu seul ! Nous invoquons Dieu seul ! Nous ne demandons de l\'aide qu\'a Dieu !',action:'Invoquez Dieu aujourd\'hui avec trois besoins, avec la certitude qu\'Il repondra'}
  },
  {
    id:11, emoji:'📜', category:'quran',
    ar:{title:'القرآن منهج حياة',desc:'القرآن ليس كتاب تاريخ فقط بل منهج حياة متكامل. فيه أحكام العبادات والمعاملات والأخلاق. من تمسك به اهتدى ومن تركه ضل.',verse:'إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ',verseRef:'الإسراء ١٧: ٩',young:'القرآن مثل خريطة الحياة! يعلمنا كيف نكون صالحين وسعداء. اقرأه كل يوم ولو قليلاً!',action:'اقرأ ولو آية واحدة اليوم بتدبر وتأمل'},
    en:{title:'The Quran: A Way of Life',desc:'The Quran is not merely a history book but a complete way of life. It contains rulings on worship, dealings, and ethics. Whoever holds to it is guided; whoever abandons it goes astray.',verse:'Indeed, this Quran guides to that which is most suitable.',verseRef:'Al-Isra 17:9',young:'The Quran is like a life map! It teaches us how to be good and happy. Read it every day, even a little!',action:'Read even one verse today with reflection and contemplation'},
    fr:{title:'Le Coran : Un Mode de Vie',desc:'Le Coran n\'est pas simplement un livre d\'histoire mais un mode de vie complet. Il contient des regles sur le culte, les relations et l\'ethique. Celui qui s\'y tient est guide ; celui qui l\'abandonne s\'egare.',verse:'En verite, ce Coran guide vers ce qui est le plus droit.',verseRef:'Al-Isra 17:9',young:'Le Coran est comme une carte de la vie ! Il nous apprend comment etre bons et heureux. Lisez-le chaque jour, meme un peu !',action:'Lisez meme un seul verset aujourd\'hui avec reflexion et meditation'}
  },
  {
    id:12, emoji:'❤️', category:'prophets',
    ar:{title:'محبة النبي واتباعه',desc:'محبة النبي محمد صلى الله عليه وسلم ركن من أركان الإيمان. المحبة الحقيقية تكون بالاتباع لا بالادعاء. من أحبه اتبع سنته.',verse:'قُلْ إِنْ كُنْتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي يُحْبِبْكُمُ اللَّهُ',verseRef:'آل عمران ٣: ٣١',young:'النبي محمد أعظم إنسان! كان طيباً ورحيماً بالجميع. نحبه باتباع أخلاقه!',action:'طبق سنة واحدة من سنن النبي اليوم — مثل الابتسامة في وجه الآخرين'},
    en:{title:'Love and Follow the Prophet',desc:'Loving Prophet Muhammad (peace be upon him) is a pillar of faith. True love means following him, not mere claims. Whoever loves him follows his tradition.',verse:'Say: If you love God, then follow me, and God will love you.',verseRef:'Al Imran 3:31',young:'Prophet Muhammad is the greatest person! He was kind and merciful to everyone. We love him by following his good character!',action:'Apply one tradition of the Prophet today — like smiling at others'},
    fr:{title:'Aimer et Suivre le Prophete',desc:'Aimer le Prophete Muhammad (paix sur lui) est un pilier de la foi. Le vrai amour signifie le suivre, pas de simples pretentions. Celui qui l\'aime suit sa tradition.',verse:'Dis : Si vous aimez Dieu, alors suivez-moi, et Dieu vous aimera.',verseRef:'Al Imran 3:31',young:'Le Prophete Muhammad est la plus grande personne ! Il etait gentil et misericordieux envers tous. Nous l\'aimons en suivant son bon caractere !',action:'Appliquez une tradition du Prophete aujourd\'hui — comme sourire aux autres'}
  },
  {
    id:13, emoji:'🔮', category:'afterlife',
    ar:{title:'الجنة والنار',desc:'الجنة دار النعيم الأبدي لمن آمن وعمل صالحاً. فيها ما لا عين رأت ولا أذن سمعت. والنار دار العذاب لمن كفر وظلم. الخوف من النار والرجاء في الجنة يقودان المؤمن.',verse:'فَلَا تَعْلَمُ نَفْسٌ مَا أُخْفِيَ لَهُمْ مِنْ قُرَّةِ أَعْيُنٍ',verseRef:'السجدة ٣٢: ١٧',young:'الجنة مكان رائع جداً! فيها أشياء لا يمكنك تخيلها! كل من يكون صالحاً سيدخلها بإذن الله!',action:'اعمل عملاً صالحاً اليوم تريد به الجنة'},
    en:{title:'Paradise and Hellfire',desc:'Paradise is the eternal abode of bliss for those who believe and do good. It contains what no eye has seen nor ear has heard. Hellfire is the abode of torment for those who disbelieve and oppress. Fear of Hell and hope for Paradise guide the believer.',verse:'No soul knows what has been hidden for them of comfort for eyes.',verseRef:'As-Sajdah 32:17',young:'Paradise is an amazing place! It has things you cannot even imagine! Everyone who is good will enter it by God\'s permission!',action:'Do a good deed today with the intention of earning Paradise'},
    fr:{title:'Le Paradis et l\'Enfer',desc:'Le Paradis est la demeure eternelle de bonheur pour ceux qui croient et font le bien. Il contient ce qu\'aucun oeil n\'a vu ni aucune oreille n\'a entendu. L\'Enfer est la demeure de tourment pour ceux qui mecroient et oppriment.',verse:'Aucune ame ne sait ce qui a ete cache pour elle comme fraicheur des yeux.',verseRef:'As-Sajdah 32:17',young:'Le Paradis est un endroit merveilleux ! Il a des choses que vous ne pouvez meme pas imaginer ! Tous ceux qui sont bons y entreront avec la permission de Dieu !',action:'Faites une bonne action aujourd\'hui avec l\'intention de meriter le Paradis'}
  },
  {
    id:14, emoji:'🧹', category:'soul',
    ar:{title:'تزكية النفس',desc:'تزكية النفس واجب على كل مسلم. النفس تميل للشهوات والكسل، والمؤمن يجاهدها بالعبادة والذكر والمحاسبة. من زكّى نفسه أفلح.',verse:'قَدْ أَفْلَحَ مَنْ زَكَّاهَا ۝ وَقَدْ خَابَ مَنْ دَسَّاهَا',verseRef:'الشمس ٩١: ٩-١٠',young:'نفسك تحتاج تنظيف مثل غرفتك! كيف؟ بالصلاة والذكر وعمل الخير ومحاسبة نفسك كل يوم.',action:'حاسب نفسك الليلة: ما أفضل وأسوأ شيء فعلته اليوم؟'},
    en:{title:'Purification of the Soul',desc:'Purifying the soul is an obligation for every Muslim. The soul inclines toward desires and laziness, and the believer struggles against it through worship, remembrance, and self-accountability. Whoever purifies their soul succeeds.',verse:'He has succeeded who purifies it. And he has failed who corrupts it.',verseRef:'Ash-Shams 91:9-10',young:'Your soul needs cleaning like your room! How? Through prayer, remembrance of God, doing good, and holding yourself accountable every day.',action:'Hold yourself accountable tonight: what was the best and worst thing you did today?'},
    fr:{title:'Purification de l\'Ame',desc:'Purifier l\'ame est une obligation pour chaque musulman. L\'ame penche vers les desirs et la paresse, et le croyant lutte contre elle par l\'adoration, le rappel et l\'auto-evaluation. Celui qui purifie son ame reussit.',verse:'A reussi celui qui la purifie. Et echoue celui qui la corrompt.',verseRef:'Ash-Shams 91:9-10',young:'Votre ame a besoin de nettoyage comme votre chambre ! Comment ? Par la priere, le rappel de Dieu, faire le bien et vous evaluer chaque jour.',action:'Evaluez-vous ce soir : quelle a ete la meilleure et la pire chose que vous avez faite aujourd\'hui ?'}
  },
  {
    id:15, emoji:'🤝', category:'ethics',
    ar:{title:'الأخلاق من العقيدة',desc:'العقيدة الصحيحة تثمر أخلاقاً حسنة. الصدق والأمانة والعدل والرحمة كلها من ثمار الإيمان. المؤمن لا يكذب ولا يغش ولا يظلم.',verse:'إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ',verseRef:'حديث نبوي',young:'الإيمان يجعلك إنساناً رائعاً! المؤمن صادق، أمين، عادل، ورحيم. هذه أخلاق الأبطال!',action:'اختر خُلُقاً واحداً وتعهد بتطبيقه اليوم — مثل الصدق أو الأمانة'},
    en:{title:'Ethics Stem from Creed',desc:'Sound creed produces good character. Honesty, trustworthiness, justice, and mercy are all fruits of faith. A believer does not lie, cheat, or oppress.',verse:'I was only sent to perfect noble character.',verseRef:'Prophetic Hadith',young:'Faith makes you an amazing person! A believer is honest, trustworthy, fair, and merciful. These are the traits of heroes!',action:'Choose one character trait and commit to practicing it today — like honesty or trustworthiness'},
    fr:{title:'L\'Ethique Decoule de la Croyance',desc:'Une croyance saine produit un bon caractere. L\'honnetete, la fiabilite, la justice et la misericorde sont tous des fruits de la foi. Un croyant ne ment pas, ne triche pas et n\'opprime pas.',verse:'Je n\'ai ete envoye que pour parfaire les nobles caracteres.',verseRef:'Hadith Prophetique',young:'La foi fait de vous une personne formidable ! Un croyant est honnete, fiable, juste et misericordieux. Ce sont les traits des heros !',action:'Choisissez un trait de caractere et engagez-vous a le pratiquer aujourd\'hui — comme l\'honnetete ou la fiabilite'}
  },
  {
    id:16, emoji:'⚖️', category:'destiny',
    ar:{title:'العدل الإلهي',desc:'الله عادل لا يظلم أحداً. كل إنسان يُجازى بعمله. الله يمهل ولا يهمل. الظلم مرفوض في شريعة الله، وهو ظلمات يوم القيامة.',verse:'إِنَّ اللَّهَ لَا يَظْلِمُ مِثْقَالَ ذَرَّةٍ',verseRef:'النساء ٤: ٤٠',young:'الله عادل جداً! لا يظلم أحداً أبداً. كل عمل خير تعمله محسوب لك، حتى لو كان صغيراً!',action:'كن عادلاً اليوم مع كل من حولك — في البيت والمدرسة والعمل'},
    en:{title:'Divine Justice',desc:'God is just and wrongs no one. Every person is rewarded according to their deeds. God gives respite but never neglects. Injustice is condemned in God\'s law and will be darkness on the Day of Judgment.',verse:'Indeed, God does not do injustice, even as much as an atom\'s weight.',verseRef:'An-Nisa 4:40',young:'God is very fair! He never wrongs anyone. Every good deed you do counts, even if it\'s small!',action:'Be fair today with everyone around you — at home, school, and work'},
    fr:{title:'Justice Divine',desc:'Dieu est juste et ne fait tort a personne. Chaque personne est recompensee selon ses actes. Dieu accorde un delai mais ne neglige jamais. L\'injustice est condamnee dans la loi de Dieu.',verse:'En verite, Dieu ne fait pas d\'injustice, meme du poids d\'un atome.',verseRef:'An-Nisa 4:40',young:'Dieu est tres juste ! Il ne fait jamais de tort a personne. Chaque bonne action que vous faites compte, meme si elle est petite !',action:'Soyez juste aujourd\'hui avec tout le monde autour de vous — a la maison, a l\'ecole et au travail'}
  },
  {
    id:17, emoji:'🌙', category:'soul',
    ar:{title:'الإيمان والعمل الصالح',desc:'الإيمان ليس كلاماً فقط بل قول وعمل. يزيد بالطاعة وينقص بالمعصية. المؤمن الحق يجمع بين إيمان القلب وعمل الجوارح.',verse:'وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أُولَٰئِكَ أَصْحَابُ الْجَنَّةِ',verseRef:'البقرة ٢: ٨٢',young:'الإيمان ليس كلاماً فقط! لازم تعمل أشياء حلوة: تصلي، تساعد الناس، تكون طيباً!',action:'اجمع اليوم بين إيمان القلب وعمل اليد — صلِّ وافعل خيراً'},
    en:{title:'Faith and Good Deeds',desc:'Faith is not just words but speech and action. It increases with obedience and decreases with disobedience. A true believer combines heart faith with physical action.',verse:'And those who believe and do good deeds — those are the companions of Paradise.',verseRef:'Al-Baqarah 2:82',young:'Faith is not just words! You must do good things too: pray, help people, be kind!',action:'Combine heart faith with hand action today — pray and do a good deed'},
    fr:{title:'Foi et Bonnes Actions',desc:'La foi n\'est pas que des mots mais des paroles et des actions. Elle augmente avec l\'obeissance et diminue avec la desobeissance. Un vrai croyant combine la foi du coeur avec l\'action physique.',verse:'Ceux qui croient et font de bonnes oeuvres — ceux-la sont les compagnons du Paradis.',verseRef:'Al-Baqarah 2:82',young:'La foi n\'est pas que des mots ! Vous devez aussi faire de bonnes choses : prier, aider les gens, etre gentil !',action:'Combinez la foi du coeur avec l\'action de la main aujourd\'hui — priez et faites une bonne action'}
  },
  {
    id:18, emoji:'🛡️', category:'tawhid',
    ar:{title:'الشرك وخطره',desc:'الشرك أعظم الذنوب عند الله. هو أن تجعل لله شريكاً في عبادته أو ربوبيته. الشرك يحبط الأعمال. حتى الرياء شرك أصغر يجب الحذر منه.',verse:'إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيمٌ',verseRef:'لقمان ٣١: ١٣',young:'أهم شيء: لا تعبد إلا الله! لا تطلب المساعدة إلا منه! هذا هو التوحيد!',action:'راجع نيتك في كل عمل: هل تفعله لله أم لإرضاء الناس؟'},
    en:{title:'Polytheism and Its Danger',desc:'Polytheism is the gravest sin before God. It means associating partners with God in worship or lordship. It invalidates all deeds. Even showing off (riya) is a minor form that must be avoided.',verse:'Indeed, associating partners with God is a tremendous injustice.',verseRef:'Luqman 31:13',young:'The most important thing: worship only God! Ask for help only from Him! This is Tawhid!',action:'Review your intention in every action: are you doing it for God or to please people?'},
    fr:{title:'Le Polytheisme et Son Danger',desc:'Le polytheisme est le peche le plus grave devant Dieu. C\'est associer des partenaires a Dieu dans l\'adoration ou la seigneurie. Il invalide toutes les actions. Meme l\'ostentation est une forme mineure a eviter.',verse:'En verite, l\'association a Dieu est une injustice immense.',verseRef:'Luqman 31:13',young:'Le plus important : n\'adorez que Dieu ! Ne demandez de l\'aide qu\'a Lui ! C\'est le Tawhid !',action:'Reexaminez votre intention dans chaque action : le faites-vous pour Dieu ou pour plaire aux gens ?'}
  },
  {
    id:19, emoji:'🔬', category:'ethics',
    ar:{title:'العقل والنقل',desc:'الإسلام يحترم العقل ويدعو للتفكر والتدبر. لا تعارض بين العقل الصحيح والنقل الصحيح. الغزالي يؤكد أن الإسلام دين العقل والفطرة.',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا',verseRef:'محمد ٤٧: ٢٤',young:'الإسلام يحب العلم والتفكير! ربنا يقول لنا: فكّروا! تعلّموا! اسألوا! لا تكونوا مثل الببغاء!',action:'اسأل سؤالاً ذكياً اليوم عن شيء تريد فهمه في دينك'},
    en:{title:'Reason and Revelation',desc:'Islam respects reason and calls for reflection and contemplation. There is no contradiction between sound reason and authentic revelation. Al-Ghazali affirms that Islam is the religion of reason and natural disposition.',verse:'Do they not reflect upon the Quran, or are there locks upon their hearts?',verseRef:'Muhammad 47:24',young:'Islam loves knowledge and thinking! God tells us: Think! Learn! Ask! Don\'t be like a parrot!',action:'Ask a smart question today about something you want to understand in your religion'},
    fr:{title:'Raison et Revelation',desc:'L\'Islam respecte la raison et appelle a la reflexion et la contemplation. Il n\'y a pas de contradiction entre la raison saine et la revelation authentique. Al-Ghazali affirme que l\'Islam est la religion de la raison et de la nature.',verse:'Ne meditent-ils pas sur le Coran, ou y a-t-il des verrous sur leurs coeurs ?',verseRef:'Muhammad 47:24',young:'L\'Islam aime la connaissance et la reflexion ! Dieu nous dit : Reflechissez ! Apprenez ! Posez des questions ! Ne soyez pas comme un perroquet !',action:'Posez une question intelligente aujourd\'hui sur quelque chose que vous voulez comprendre dans votre religion'}
  },
  {
    id:20, emoji:'🌈', category:'soul',
    ar:{title:'الإسلام دين الفطرة',desc:'العقيدة الإسلامية توافق الفطرة السليمة التي فطر الله الناس عليها. الإسلام لا يعقّد الحياة بل ييسّرها. التوحيد هو الأصل والفطرة، والشرك هو الانحراف.',verse:'فَأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا',verseRef:'الروم ٣٠: ٣٠',young:'الإسلام سهل وجميل! هو الدين الطبيعي الذي يحبه قلبك. لا تعقيد ولا صعوبة!',action:'اشعر بجمال بساطة الإسلام: كل ما يطلبه منك هو الإيمان والعمل الصالح'},
    en:{title:'Islam: The Religion of Nature',desc:'Islamic creed aligns with the pure nature (fitrah) upon which God created people. Islam does not complicate life but simplifies it. Monotheism is the origin and nature; polytheism is the deviation.',verse:'So direct your face toward the religion, inclining to truth — the nature of God upon which He created mankind.',verseRef:'Ar-Rum 30:30',young:'Islam is easy and beautiful! It is the natural religion that your heart loves. No complications or difficulty!',action:'Feel the beauty of Islam\'s simplicity: all it asks is faith and good deeds'},
    fr:{title:'L\'Islam : Religion de la Nature',desc:'La croyance islamique s\'aligne avec la nature pure (fitrah) selon laquelle Dieu a cree les gens. L\'Islam ne complique pas la vie mais la simplifie. Le monotheisme est l\'origine et la nature ; le polytheisme est la deviation.',verse:'Dirige donc ton visage vers la religion en pur monotheiste — la nature de Dieu selon laquelle Il a cree les hommes.',verseRef:'Ar-Rum 30:30',young:'L\'Islam est facile et beau ! C\'est la religion naturelle que votre coeur aime. Pas de complications ni de difficultes !',action:'Ressentez la beaute de la simplicite de l\'Islam : tout ce qu\'il demande c\'est la foi et les bonnes actions'}
  }
];

// ═══════════════ PILLARS DATA (4 pillars of worship) ═══════════════
const PILLARS = [
  {
    id:1, emoji:'🕌',
    ar:{title:'الصلاة',desc:'الصلاة عماد الدين وصلة بين العبد وربه. خمس صلوات يومية تطهّر القلب وتنظّم الحياة. هي أول ما يُحاسب عليه العبد يوم القيامة.',verse:'إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ',verseRef:'العنكبوت ٢٩: ٤٥',problem:'التكاسل عن الصلاة وتأخيرها',solution:'الصلاة في وقتها بخشوع تحقق السكينة والقرب من الله'},
    en:{title:'Prayer (Salah)',desc:'Prayer is the pillar of religion and the connection between servant and Lord. Five daily prayers purify the heart and organize life. It is the first thing a person is judged for on the Day of Judgment.',verse:'Indeed, prayer prohibits immorality and wrongdoing.',verseRef:'Al-Ankabut 29:45',problem:'Laziness about prayer and delaying it',solution:'Praying on time with reverence brings tranquility and closeness to God'},
    fr:{title:'La Priere (Salah)',desc:'La priere est le pilier de la religion et le lien entre le serviteur et son Seigneur. Cinq prieres quotidiennes purifient le coeur et organisent la vie. C\'est la premiere chose sur laquelle une personne sera jugee au Jour du Jugement.',verse:'En verite, la priere preserve de la turpitude et du blamable.',verseRef:'Al-Ankabut 29:45',problem:'La paresse envers la priere et son retard',solution:'Prier a l\'heure avec recueillement apporte tranquillite et proximite de Dieu'}
  },
  {
    id:2, emoji:'🌙',
    ar:{title:'الصيام',desc:'صيام رمضان ركن من أركان الإسلام. الصيام يهذّب النفس ويعلّم الصبر ويذكّر بالفقراء. هو مدرسة سنوية لتزكية النفس.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ',verseRef:'البقرة ٢: ١٨٣',problem:'رؤية الصيام كمجرد جوع وعطش',solution:'الصيام فرصة لتهذيب النفس والتقرب من الله وتقوية الإرادة'},
    en:{title:'Fasting (Sawm)',desc:'Fasting in Ramadan is a pillar of Islam. Fasting refines the soul, teaches patience, and reminds us of the poor. It is an annual school for purifying the soul.',verse:'O you who believe, fasting has been prescribed for you as it was prescribed for those before you, so that you may attain piety.',verseRef:'Al-Baqarah 2:183',problem:'Seeing fasting as merely hunger and thirst',solution:'Fasting is an opportunity to refine the soul, draw closer to God, and strengthen willpower'},
    fr:{title:'Le Jeune (Sawm)',desc:'Le jeune du Ramadan est un pilier de l\'Islam. Le jeune raffine l\'ame, enseigne la patience et nous rappelle les pauvres. C\'est une ecole annuelle pour purifier l\'ame.',verse:'O vous qui croyez, le jeune vous a ete prescrit comme il a ete prescrit a ceux avant vous, afin que vous atteigniez la piete.',verseRef:'Al-Baqarah 2:183',problem:'Voir le jeune comme simplement la faim et la soif',solution:'Le jeune est une opportunite de raffiner l\'ame, se rapprocher de Dieu et renforcer la volonte'}
  },
  {
    id:3, emoji:'💰',
    ar:{title:'الزكاة',desc:'الزكاة تطهّر المال وتزكّي النفس. هي حق الفقير في مال الغني. تبني مجتمعاً متكافلاً وتمنع تكدّس الثروة.',verse:'وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ',verseRef:'البقرة ٢: ٤٣',problem:'البخل والتعلق بالمال',solution:'الزكاة تطهر المال والنفس وتبني مجتمعاً عادلاً متكافلاً'},
    en:{title:'Charity (Zakat)',desc:'Zakat purifies wealth and refines the soul. It is the right of the poor in the wealth of the rich. It builds a supportive society and prevents wealth hoarding.',verse:'Establish prayer and give zakat.',verseRef:'Al-Baqarah 2:43',problem:'Stinginess and attachment to wealth',solution:'Zakat purifies wealth and soul and builds a fair, supportive society'},
    fr:{title:'L\'Aumone (Zakat)',desc:'La Zakat purifie la richesse et raffine l\'ame. C\'est le droit du pauvre dans la richesse du riche. Elle construit une societe solidaire et empeche l\'accumulation des richesses.',verse:'Accomplissez la priere et acquittez la zakat.',verseRef:'Al-Baqarah 2:43',problem:'L\'avarice et l\'attachement a la richesse',solution:'La Zakat purifie la richesse et l\'ame et construit une societe juste et solidaire'}
  },
  {
    id:4, emoji:'🕋',
    ar:{title:'الحج',desc:'الحج ركن الإسلام الأعظم. رحلة تجمع المسلمين من كل أنحاء العالم. يذكّر بالمساواة بين البشر ويجدّد العهد مع الله.',verse:'وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا',verseRef:'آل عمران ٣: ٩٧',problem:'التأجيل والتسويف في أداء الحج',solution:'الحج تجربة تحويلية تجدد الإيمان وتوحد الأمة'},
    en:{title:'Pilgrimage (Hajj)',desc:'Hajj is the greatest pillar of Islam. A journey that gathers Muslims from around the world. It reminds of equality among people and renews the covenant with God.',verse:'And due to God from the people is a pilgrimage to the House — for whoever is able to find thereto a way.',verseRef:'Al Imran 3:97',problem:'Procrastinating and delaying Hajj',solution:'Hajj is a transformative experience that renews faith and unites the community'},
    fr:{title:'Le Pelerinage (Hajj)',desc:'Le Hajj est le plus grand pilier de l\'Islam. Un voyage qui rassemble les musulmans du monde entier. Il rappelle l\'egalite entre les gens et renouvelle l\'alliance avec Dieu.',verse:'C\'est un devoir envers Dieu pour les gens qui ont les moyens d\'aller faire le pelerinage de la Maison.',verseRef:'Al Imran 3:97',problem:'La procrastination et le report du Hajj',solution:'Le Hajj est une experience transformatrice qui renouvelle la foi et unit la communaute'}
  }
];

// ═══════════════ QUIZ DATA (20 questions) ═══════════════
const QUIZ_DATA = [
  {q:{ar:'ما هو أساس العقيدة الإسلامية؟',en:'What is the foundation of Islamic creed?',fr:'Quel est le fondement de la croyance islamique ?'},
   opts:{ar:['التوحيد','الصلاة','الحج','الزكاة'],en:['Monotheism','Prayer','Pilgrimage','Charity'],fr:['Le monotheisme','La priere','Le pelerinage','L\'aumone']},
   correct:0, hint:{ar:'كلمة التوحيد هي "لا إله إلا الله"',en:'The word of monotheism is "There is no god but God"',fr:'Le mot du monotheisme est « Il n\'y a de dieu que Dieu »'},
   ref:'Al-Ikhlas 112:1'},
  {q:{ar:'كم عدد أركان الإيمان؟',en:'How many pillars of faith are there?',fr:'Combien de piliers de la foi y a-t-il ?'},
   opts:{ar:['خمسة','ستة','سبعة','أربعة'],en:['Five','Six','Seven','Four'],fr:['Cinq','Six','Sept','Quatre']},
   correct:1, hint:{ar:'تشمل الإيمان بالله والملائكة والكتب والرسل واليوم الآخر والقدر',en:'They include belief in God, angels, books, messengers, the Last Day, and destiny',fr:'Ils comprennent la croyance en Dieu, les anges, les livres, les messagers, le Jour Dernier et le destin'},
   ref:'Hadith Jibril'},
  {q:{ar:'ما هي سورة الإخلاص؟',en:'What does Surah Al-Ikhlas teach?',fr:'Qu\'enseigne la Sourate Al-Ikhlas ?'},
   opts:{ar:['توحيد الله','قصة نوح','أحكام الصلاة','أحكام الزكاة'],en:['God\'s Oneness','Story of Noah','Rules of prayer','Rules of charity'],fr:['L\'unicite de Dieu','L\'histoire de Noe','Les regles de la priere','Les regles de l\'aumone']},
   correct:0, hint:{ar:'سورة قصيرة تبدأ بـ "قل هو الله أحد"',en:'A short surah starting with "Say: He is God, the One"',fr:'Une courte sourate commencant par « Dis : Il est Dieu, l\'Unique »'},
   ref:'Al-Ikhlas 112:1-4'},
  {q:{ar:'من هو خاتم الأنبياء؟',en:'Who is the seal of the prophets?',fr:'Qui est le sceau des prophetes ?'},
   opts:{ar:['محمد ﷺ','عيسى','موسى','إبراهيم'],en:['Muhammad ﷺ','Jesus','Moses','Abraham'],fr:['Muhammad ﷺ','Jesus','Moise','Abraham']},
   correct:0, hint:{ar:'ذُكر في سورة الأحزاب',en:'Mentioned in Surah Al-Ahzab',fr:'Mentionne dans la Sourate Al-Ahzab'},
   ref:'Al-Ahzab 33:40'},
  {q:{ar:'ما أول ما يُحاسب عليه العبد يوم القيامة؟',en:'What is the first thing a person is judged for on Judgment Day?',fr:'Quelle est la premiere chose sur laquelle on sera juge au Jour du Jugement ?'},
   opts:{ar:['الصلاة','الصيام','الزكاة','الحج'],en:['Prayer','Fasting','Zakat','Hajj'],fr:['La priere','Le jeune','La zakat','Le hajj']},
   correct:0, hint:{ar:'هي عماد الدين وأول الأركان العملية',en:'It is the pillar of religion and the first practical pillar',fr:'C\'est le pilier de la religion et le premier pilier pratique'},
   ref:'Prophetic Hadith'},
  {q:{ar:'من أي شيء خُلقت الملائكة؟',en:'What were angels created from?',fr:'De quoi les anges ont-ils ete crees ?'},
   opts:{ar:['نور','نار','طين','ماء'],en:['Light','Fire','Clay','Water'],fr:['Lumiere','Feu','Argile','Eau']},
   correct:0, hint:{ar:'مادة مضيئة ونقية',en:'A luminous and pure substance',fr:'Une substance lumineuse et pure'},
   ref:'Sahih Muslim'},
  {q:{ar:'أي كتاب سماوي محفوظ من التحريف؟',en:'Which divine book is preserved from corruption?',fr:'Quel livre divin est preserve de la corruption ?'},
   opts:{ar:['القرآن','التوراة','الإنجيل','الزبور'],en:['The Quran','The Torah','The Gospel','The Psalms'],fr:['Le Coran','La Torah','L\'Evangile','Les Psaumes']},
   correct:0, hint:{ar:'الله تعهد بحفظه',en:'God promised to protect it',fr:'Dieu a promis de le proteger'},
   ref:'Al-Hijr 15:9'},
  {q:{ar:'ما معنى "لا إله إلا الله"؟',en:'What does "There is no god but God" mean?',fr:'Que signifie « Il n\'y a de dieu que Dieu » ?'},
   opts:{ar:['لا معبود بحق إلا الله','الله أكبر من كل شيء','الله خلق كل شيء','الله رحيم'],en:['No deity worthy of worship except God','God is greater than everything','God created everything','God is merciful'],fr:['Aucune divinite ne merite l\'adoration sauf Dieu','Dieu est plus grand que tout','Dieu a cree tout','Dieu est misericordieux']},
   correct:0, hint:{ar:'تتعلق بالعبادة والاستحقاق',en:'Related to worship and deserving',fr:'Lie a l\'adoration et au merite'},
   ref:'Surah Al-Ikhlas'},
  {q:{ar:'ما هو الشرك؟',en:'What is polytheism (shirk)?',fr:'Qu\'est-ce que le polytheisme (shirk) ?'},
   opts:{ar:['عبادة غير الله','ترك الصلاة','الكذب','الغيبة'],en:['Worshipping other than God','Neglecting prayer','Lying','Backbiting'],fr:['Adorer autre que Dieu','Negliger la priere','Mentir','Medire']},
   correct:0, hint:{ar:'أعظم الذنوب عند الله — جعل شريك لله',en:'The gravest sin — associating partners with God',fr:'Le plus grand peche — associer des partenaires a Dieu'},
   ref:'Luqman 31:13'},
  {q:{ar:'ما اسم الملك الموكل بالوحي؟',en:'What is the name of the angel of revelation?',fr:'Quel est le nom de l\'ange de la revelation ?'},
   opts:{ar:['جبريل','ميكائيل','إسرافيل','عزرائيل'],en:['Gabriel','Michael','Israfil','Azrael'],fr:['Gabriel','Michael','Israfil','Azrael']},
   correct:0, hint:{ar:'نزل بالقرآن على محمد ﷺ',en:'Brought the Quran to Muhammad ﷺ',fr:'A apporte le Coran a Muhammad ﷺ'},
   ref:'Al-Baqarah 2:97'},
  {q:{ar:'ماذا يعني الإيمان بالقضاء والقدر؟',en:'What does belief in divine destiny mean?',fr:'Que signifie la croyance au destin divin ?'},
   opts:{ar:['أن كل شيء بتقدير الله مع بذل الجهد','أن لا نعمل شيئاً','أن نقبل الظلم','أن لا نخطط'],en:['Everything is by God\'s decree while making effort','That we do nothing','That we accept injustice','That we don\'t plan'],fr:['Tout est par le decret de Dieu tout en faisant des efforts','Qu\'on ne fait rien','Qu\'on accepte l\'injustice','Qu\'on ne planifie pas']},
   correct:0, hint:{ar:'الإيمان بالقدر يجمع بين التوكل والعمل',en:'Belief in destiny combines trust and effort',fr:'La croyance au destin combine confiance et effort'},
   ref:'At-Tawbah 9:51'},
  {q:{ar:'كم صلاة فُرضت على المسلمين يومياً؟',en:'How many daily prayers are obligatory for Muslims?',fr:'Combien de prieres quotidiennes sont obligatoires pour les musulmans ?'},
   opts:{ar:['خمس','ثلاث','سبع','أربع'],en:['Five','Three','Seven','Four'],fr:['Cinq','Trois','Sept','Quatre']},
   correct:0, hint:{ar:'الفجر، الظهر، العصر، المغرب، العشاء',en:'Fajr, Dhuhr, Asr, Maghrib, Isha',fr:'Fajr, Dhuhr, Asr, Maghrib, Isha'},
   ref:'Al-Isra 17:78'},
  {q:{ar:'ما الحكمة من الصيام؟',en:'What is the wisdom behind fasting?',fr:'Quelle est la sagesse du jeune ?'},
   opts:{ar:['تحقيق التقوى','إظهار القوة','العقوبة','التباهي'],en:['Achieving piety','Showing strength','Punishment','Showing off'],fr:['Atteindre la piete','Montrer la force','La punition','L\'ostentation']},
   correct:0, hint:{ar:'الآية تنتهي بـ "لعلكم تتقون"',en:'The verse ends with "so that you may attain piety"',fr:'Le verset se termine par « afin que vous atteigniez la piete »'},
   ref:'Al-Baqarah 2:183'},
  {q:{ar:'ما هي تزكية النفس؟',en:'What is purification of the soul?',fr:'Qu\'est-ce que la purification de l\'ame ?'},
   opts:{ar:['تطهير النفس من الرذائل','الغسل بالماء','الصيام فقط','العزلة عن الناس'],en:['Purifying the soul from vices','Washing with water','Only fasting','Isolation from people'],fr:['Purifier l\'ame des vices','Se laver avec de l\'eau','Seulement le jeune','L\'isolement des gens']},
   correct:0, hint:{ar:'تشمل العبادة والذكر والمحاسبة — تطهير القلب',en:'Includes worship, remembrance, and accountability — purifying the heart',fr:'Comprend l\'adoration, le rappel et l\'evaluation — purifier le coeur'},
   ref:'Ash-Shams 91:9-10'},
  {q:{ar:'ما علاقة الأخلاق بالعقيدة؟',en:'What is the relationship between ethics and creed?',fr:'Quelle est la relation entre l\'ethique et la croyance ?'},
   opts:{ar:['الأخلاق ثمرة العقيدة الصحيحة','لا علاقة بينهما','الأخلاق تغني عن العقيدة','العقيدة تغني عن الأخلاق'],en:['Ethics are the fruit of sound creed','No relationship','Ethics replace creed','Creed replaces ethics'],fr:['L\'ethique est le fruit d\'une croyance saine','Aucune relation','L\'ethique remplace la croyance','La croyance remplace l\'ethique']},
   correct:0, hint:{ar:'قال النبي: "إنما بعثت لأتمم مكارم الأخلاق"',en:'The Prophet said: "I was sent to perfect noble character"',fr:'Le Prophete a dit : « J\'ai ete envoye pour parfaire les nobles caracteres »'},
   ref:'Prophetic Hadith'},
  {q:{ar:'ما هو آخر كتاب سماوي نزل؟',en:'What is the last divine book revealed?',fr:'Quel est le dernier livre divin revele ?'},
   opts:{ar:['القرآن الكريم','الإنجيل','التوراة','الزبور'],en:['The Holy Quran','The Gospel','The Torah','The Psalms'],fr:['Le Saint Coran','L\'Evangile','La Torah','Les Psaumes']},
   correct:0, hint:{ar:'نزل على خاتم الأنبياء',en:'Revealed to the seal of the prophets',fr:'Revele au sceau des prophetes'},
   ref:'Al-Hijr 15:9'},
  {q:{ar:'ما الركن الخامس من أركان الإسلام؟',en:'What is the fifth pillar of Islam?',fr:'Quel est le cinquieme pilier de l\'Islam ?'},
   opts:{ar:['الحج','الصيام','الزكاة','الشهادة'],en:['Hajj','Fasting','Zakat','Testimony'],fr:['Le Hajj','Le jeune','La zakat','Le temoignage']},
   correct:0, hint:{ar:'رحلة إلى مكة المكرمة',en:'A journey to Mecca',fr:'Un voyage a La Mecque'},
   ref:'Al Imran 3:97'},
  {q:{ar:'لماذا يحترم الإسلام العقل؟',en:'Why does Islam respect reason?',fr:'Pourquoi l\'Islam respecte-t-il la raison ?'},
   opts:{ar:['لأنه يدعو للتفكر والتدبر','لأنه يرفض الوحي','لأنه يعتمد على الفلسفة فقط','لأنه يرفض الإيمان'],en:['Because it calls for reflection','Because it rejects revelation','Because it relies only on philosophy','Because it rejects faith'],fr:['Parce qu\'il appelle a la reflexion','Parce qu\'il rejette la revelation','Parce qu\'il ne s\'appuie que sur la philosophie','Parce qu\'il rejette la foi']},
   correct:0, hint:{ar:'القرآن مليء بآيات "أفلا تعقلون"',en:'The Quran is full of verses like "Do you not reason?"',fr:'Le Coran est plein de versets comme « Ne raisonnez-vous pas ? »'},
   ref:'Muhammad 47:24'},
  {q:{ar:'ما معنى "فطرة الله"؟',en:'What does "fitrah of God" mean?',fr:'Que signifie « fitrah de Dieu » ?'},
   opts:{ar:['الطبيعة السليمة التي خُلق عليها الإنسان','العادات المكتسبة','الثقافة المجتمعية','التعليم المدرسي'],en:['The pure nature upon which humans were created','Acquired habits','Social culture','School education'],fr:['La nature pure selon laquelle les humains ont ete crees','Les habitudes acquises','La culture sociale','L\'education scolaire']},
   correct:0, hint:{ar:'كل إنسان يولد على هذه الطبيعة',en:'Every human is born with this nature',fr:'Chaque humain nait avec cette nature'},
   ref:'Ar-Rum 30:30'}
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء الإيمان',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ إِيمَانًا لَا يَرْتَدُّ، وَنَعِيمًا لَا يَنْفَدُ، وَمُرَافَقَةَ النَّبِيِّ مُحَمَّدٍ فِي أَعْلَى جَنَّةِ الْخُلْدِ',tr:'اللهم ثبتنا على الإيمان'},en:{label:'Dua for Faith',text:'O God, I ask You for faith that does not waver, bliss that does not end, and the companionship of Prophet Muhammad in the highest Paradise.',tr:'O God, keep us firm in faith'},fr:{label:'Dua pour la Foi',text:'O Dieu, je Te demande une foi qui ne faiblit pas, un bonheur qui ne s\'epuise pas, et la compagnie du Prophete Muhammad au plus haut du Paradis.',tr:'O Dieu, affermis-nous dans la foi'}},
  {ar:{label:'دعاء التوحيد',text:'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',tr:'من أعظم أذكار التوحيد'},en:{label:'Dua of Monotheism',text:'There is no god but God alone with no partner. To Him belongs the kingdom and praise, and He is over all things capable.',tr:'One of the greatest remembrances of monotheism'},fr:{label:'Dua du Monotheisme',text:'Il n\'y a de dieu que Dieu seul sans associe. A Lui le royaume et la louange, et Il est Omnipotent.',tr:'L\'un des plus grands rappels du monotheisme'}},
  {ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'دعاء قصير وعظيم المعنى'},en:{label:'Dua for Guidance',text:'O God, guide me and direct me.',tr:'A short yet profound prayer'},fr:{label:'Dua pour la Guidance',text:'O Dieu, guide-moi et dirige-moi.',tr:'Une priere courte mais profonde'}},
  {ar:{label:'دعاء الثبات',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَىٰ دِينِكَ',tr:'من أكثر أدعية النبي ﷺ'},en:{label:'Dua for Steadfastness',text:'O Turner of hearts, keep my heart firm upon Your religion.',tr:'One of the Prophet\'s most frequent prayers'},fr:{label:'Dua pour la Constance',text:'O Celui qui retourne les coeurs, affermis mon coeur sur Ta religion.',tr:'L\'une des prieres les plus frequentes du Prophete'}},
  {ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'دعاء طلب العلم'},en:{label:'Dua for Knowledge',text:'My Lord, increase me in knowledge.',tr:'The prayer for seeking knowledge'},fr:{label:'Dua pour la Connaissance',text:'Mon Seigneur, augmente ma connaissance.',tr:'La priere pour rechercher la connaissance'}},
  {ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'دعاء الكفاية والتوكل'},en:{label:'Dua of Trust',text:'God is sufficient for me. There is no deity except Him. On Him I rely, and He is the Lord of the Great Throne.',tr:'The prayer of sufficiency and trust'},fr:{label:'Dua de Confiance',text:'Dieu me suffit. Il n\'y a de divinite que Lui. En Lui je me confie, et Il est le Seigneur du Trone Immense.',tr:'La priere de suffisance et de confiance'}}
];

// ═══════════════ GLOBALS ═══════════════
let lang = localStorage.getItem('aqm-lang') || 'ar';
let theme = localStorage.getItem('aqm-theme') || 'ocean';
const themes = ['ocean', 'night', 'desert'];
const themeIcons = ['🌊', '🌙', '🏜️'];
const themeNames = { ocean: 'Ocean / محيط', night: 'Night / ليل', desert: 'Desert / صحراء' };
let currentCardIdx = -1;
let ageMode = localStorage.getItem('aqm-age') || 'teen';

// XP & Badge System
let xp = parseInt(localStorage.getItem('aqm-xp') || '0');
let readCards = JSON.parse(localStorage.getItem('aqm-read') || '[]');
let quizScore = parseInt(localStorage.getItem('aqm-quiz-score') || '0');
let quizTotal = parseInt(localStorage.getItem('aqm-quiz-total') || '0');
let currentQuizIdx = -1;
let usedLifelines = {};

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  renderHome();
  renderCreed();
  renderPillars();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  renderXPBar();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('aqm-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCreed', t.tabCreed); set('tabPillars', t.tabPillars);
  set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('creedTitle', t.creedTitle); set('creedDesc', t.creedDesc);
  set('pillarsTitle', t.pillarsTitle); set('pillarsDesc', t.pillarsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  renderHome(); renderCreed(); renderPillars(); renderQuiz(); renderAbout(); renderHelp(); renderDuas(); renderXPBar();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('aqm-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ AGE MODE ═══════════════
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem('aqm-age', ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderCreed(); renderPillars();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('click');
}

// ═══════════════ XP & BADGES ═══════════════
function addXP(pts) {
  xp += pts;
  localStorage.setItem('aqm-xp', xp);
  renderXPBar();
}
function getLevel() {
  if (xp >= 500) return 5;
  if (xp >= 300) return 4;
  if (xp >= 150) return 3;
  if (xp >= 50) return 2;
  return 1;
}
function getBadge() {
  const lvl = getLevel();
  const badges = T[lang].badges;
  if (lvl >= 5) return badges.expert;
  if (lvl >= 4) return badges.persistent;
  if (lvl >= 3) return badges.scholar;
  if (lvl >= 2) return badges.reader;
  return badges.beginner;
}
function renderXPBar() {
  const bar = document.getElementById('xpBar');
  if (!bar) return;
  const lvl = getLevel();
  const thresholds = [0, 50, 150, 300, 500];
  const nextThreshold = lvl < 5 ? thresholds[lvl] : 500;
  const prevThreshold = thresholds[lvl - 1] || 0;
  const pct = lvl >= 5 ? 100 : Math.min(100, ((xp - prevThreshold) / (nextThreshold - prevThreshold)) * 100);
  bar.innerHTML = `
    <div class="xp-info">
      <span class="xp-badge">${getBadge()}</span>
      <span class="xp-level">${T[lang].levelLabel} ${lvl}</span>
      <span class="xp-points">${xp} ${T[lang].xpLabel}</span>
    </div>
    <div class="xp-bar-track"><div class="xp-bar-fill" style="width:${pct}%"></div></div>
  `;
}
function markCardRead(cardId) {
  if (!readCards.includes(cardId)) {
    readCards.push(cardId);
    localStorage.setItem('aqm-read', JSON.stringify(readCards));
    addXP(10);
  }
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CREED.length;
  const c = CREED[dayIdx];
  const cd = c[lang];
  const desc = ageMode === 'young' ? cd.young : cd.desc;
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${cd.title}</div>
    <div class="daily-body">${desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=creed]').click()">${t.tabCreed} &#8594;</div>
  `;
  const sections = [
    {icon:'☝️',tab:'creed',title:t.tabCreed,desc:lang==='ar'?'٢٠ أصلاً للعقيدة':lang==='fr'?'20 fondements':'20 foundations'},
    {icon:'🕌',tab:'pillars',title:t.tabPillars,desc:lang==='ar'?'صلاة، صيام، زكاة، حج':lang==='fr'?'Priere, jeune, zakat, hajj':'Prayer, fasting, zakat, hajj'},
    {icon:'🏆',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر معلوماتك':lang==='fr'?'Testez-vous':'Test yourself'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  document.getElementById('homeGrid').innerHTML = sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: CREED (20 cards) ═══════════════
function renderCreed() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="creedSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCreed(this.value)"><span class="search-icon">🔍</span></div>`;
  const ageBtnLabel = ageMode === 'young' ? t.teenMode : t.youngMode;
  const ageBtn = `<button class="age-toggle-btn" onclick="toggleAgeMode()">${ageBtnLabel}</button>`;
  const cards = CREED.map((c, i) => {
    const d = c[lang];
    const desc = ageMode === 'young' ? d.young : d.desc;
    const isRead = readCards.includes('creed-' + c.id);
    return `
    <div class="creed-card scroll-reveal ${isRead ? 'card-read' : ''}" id="creed-${c.id}" data-search="${d.title.toLowerCase()}">
      <div class="creed-head" onclick="toggleCard('creed-${c.id}'); markCardRead('creed-${c.id}')">
        <span class="creed-num">${c.id}</span>
        <span class="creed-emoji">${c.emoji}</span>
        <span class="creed-title">${d.title}</span>
        <span class="creed-chev">&#9660;</span>
      </div>
      <div class="creed-body">
        <div class="creed-inner">
          <p class="creed-desc">${desc}</p>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareCreed(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('creedContainer').innerHTML = ageBtn + searchBar + cards;
}

function filterCreed(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.creed-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.creed-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

async function shareCreed(idx) {
  const c = CREED[idx];
  const d = c[lang];
  const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n📖 ${d.verseRef}\n\n— عقيدة المسلم | The Muslim's Creed`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try { await navigator.clipboard.writeText(text); showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copie !' : 'Copied!'); } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: PILLARS ═══════════════
function renderPillars() {
  const t = T[lang];
  document.getElementById('pillarsContainer').innerHTML = PILLARS.map(p => {
    const d = p[lang];
    return `
    <div class="pillar-card scroll-reveal">
      <div class="pillar-header">
        <span class="pillar-emoji">${p.emoji}</span>
        <span class="pillar-title">${d.title}</span>
      </div>
      <p class="pillar-desc">${d.desc}</p>
      <div class="pillar-problem">
        <span class="pillar-label">${lang==='ar'?'😰 المشكلة':lang==='fr'?'😰 Le Probleme':'😰 The Problem'}</span>
        ${d.problem}
      </div>
      <div class="pillar-solution">
        <span class="pillar-label">${lang==='ar'?'😌 الحل':lang==='fr'?'😌 La Solution':'😌 The Solution'}</span>
        ${d.solution}
      </div>
      <div class="verse-box">
        <div class="verse-arabic">${d.verse}</div>
        <div class="verse-ref">${d.verseRef}</div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: QUIZ ("Who Wants to Be a Scholar?") ═══════════════
function renderQuiz() {
  if (currentQuizIdx < 0) pickNewQuestion();
  renderQuizQuestion();
}

function pickNewQuestion() {
  const available = QUIZ_DATA.map((_, i) => i);
  currentQuizIdx = available[Math.floor(Math.random() * available.length)];
  usedLifelines = {};
}

function renderQuizQuestion() {
  const t = T[lang];
  const q = QUIZ_DATA[currentQuizIdx];
  const container = document.getElementById('quizContainer');
  const opts = q.opts[lang].map((o, i) => {
    const hidden = usedLifelines.fiftyFifty && usedLifelines.removed && usedLifelines.removed.includes(i);
    return `<button class="quiz-opt ${hidden ? 'hidden' : ''}" id="qopt-${i}" onclick="checkAnswer(${i})" ${hidden ? 'disabled' : ''}>${o}</button>`;
  }).join('');

  container.innerHTML = `
    <div class="quiz-score-bar">
      <span>🏆 ${quizScore}/${quizTotal}</span>
      <span>${getBadge()}</span>
    </div>
    <div class="quiz-question scroll-reveal">
      <div class="quiz-q-text">${q.q[lang]}</div>
      <div class="quiz-options">${opts}</div>
    </div>
    <div class="quiz-lifelines">
      <button class="lifeline-btn ${usedLifelines.fiftyFifty ? 'used' : ''}" onclick="useFiftyFifty()" ${usedLifelines.fiftyFifty ? 'disabled' : ''}>${t.fiftyFifty}</button>
      <button class="lifeline-btn ${usedLifelines.hint ? 'used' : ''}" onclick="useHint()" ${usedLifelines.hint ? 'disabled' : ''}>${t.hintBtn}</button>
      <button class="lifeline-btn ${usedLifelines.quranRef ? 'used' : ''}" onclick="useQuranRef()" ${usedLifelines.quranRef ? 'disabled' : ''}>${t.quranRef}</button>
    </div>
    <div id="quizFeedback" class="quiz-feedback hidden"></div>
  `;
  document.getElementById('quizResult').classList.add('hidden');
}

function checkAnswer(idx) {
  const q = QUIZ_DATA[currentQuizIdx];
  const t = T[lang];
  const feedback = document.getElementById('quizFeedback');
  const isCorrect = idx === q.correct;

  quizTotal++;
  localStorage.setItem('aqm-quiz-total', quizTotal);

  // Highlight answers
  document.querySelectorAll('.quiz-opt').forEach((o, i) => {
    o.disabled = true;
    if (i === q.correct) o.classList.add('correct');
    if (i === idx && !isCorrect) o.classList.add('wrong');
  });

  if (isCorrect) {
    quizScore++;
    localStorage.setItem('aqm-quiz-score', quizScore);
    addXP(5);
    feedback.innerHTML = `<div class="feedback-correct">✅ ${t.correct}</div>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<div class="feedback-wrong">❌ ${t.wrong}</div>`;
    playSound('click');
  }
  feedback.classList.remove('hidden');

  // Show next button
  feedback.innerHTML += `<button class="quiz-submit" onclick="nextQuestion()" style="margin-top:12px">${t.nextQ}</button>`;
  renderXPBar();
}

function nextQuestion() {
  pickNewQuestion();
  renderQuizQuestion();
}

function useFiftyFifty() {
  const q = QUIZ_DATA[currentQuizIdx];
  usedLifelines.fiftyFifty = true;
  // Remove 2 wrong answers
  const wrongIdxs = [0,1,2,3].filter(i => i !== q.correct);
  const toRemove = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  usedLifelines.removed = toRemove;
  toRemove.forEach(i => {
    const el = document.getElementById('qopt-' + i);
    if (el) { el.classList.add('hidden'); el.disabled = true; }
  });
  document.querySelector('.lifeline-btn').classList.add('used');
  document.querySelector('.lifeline-btn').disabled = true;
  playSound('click');
}

function useHint() {
  const q = QUIZ_DATA[currentQuizIdx];
  usedLifelines.hint = true;
  const feedback = document.getElementById('quizFeedback');
  feedback.innerHTML = `<div class="feedback-hint">💡 ${q.hint[lang]}</div>`;
  feedback.classList.remove('hidden');
  document.querySelectorAll('.lifeline-btn')[1].classList.add('used');
  document.querySelectorAll('.lifeline-btn')[1].disabled = true;
  playSound('click');
}

function useQuranRef() {
  const q = QUIZ_DATA[currentQuizIdx];
  usedLifelines.quranRef = true;
  const feedback = document.getElementById('quizFeedback');
  feedback.innerHTML = `<div class="feedback-hint">📖 ${q.ref}</div>`;
  feedback.classList.remove('hidden');
  document.querySelectorAll('.lifeline-btn')[2].classList.add('used');
  document.querySelectorAll('.lifeline-btn')[2].disabled = true;
  playSound('click');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"عقيدة المسلم" كتاب يشرح أصول الإيمان بأسلوب الشيخ الغزالي السهل الممتنع. يتناول التوحيد وصفات الله والملائكة والرسل والكتب السماوية واليوم الآخر والقضاء والقدر. ثم يربط العقيدة بالعبادات: الصلاة والصيام والزكاة والحج. كتاب يناسب المبتدئ والمتخصص.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "عقيدة المسلم" — الشيخ محمد الغزالي — دار نهضة مصر','القرآن الكريم','صحيح البخاري ومسلم'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and accessible writing.',
      bookTitle: 'About the Book',
      bookDesc: '"The Muslim\'s Creed" explains the foundations of faith in Sheikh al-Ghazali\'s accessible yet profound style. It covers monotheism, God\'s attributes, angels, messengers, divine books, the afterlife, and destiny. It then connects creed to worship: prayer, fasting, zakat, and hajj. A book for beginners and experts alike.',
      sourcesTitle: 'Sources',
      sources: ['"The Muslim\'s Creed" (Aqidat al-Muslim) — Sheikh Mohammed al-Ghazali — Dar Nahdet Misr','The Holy Quran','Sahih al-Bukhari and Muslim'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme « Le Litteraire de la Predication ». Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal. Connu pour le renouveau et l\'ecriture accessible.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '« La Croyance du Musulman » explique les fondements de la foi dans le style accessible et profond du Sheikh al-Ghazali. Il couvre le monotheisme, les attributs de Dieu, les anges, les messagers, les livres divins, l\'au-dela et le destin. Il lie ensuite la croyance au culte : priere, jeune, zakat et hajj. Un livre pour debutants et experts.',
      sourcesTitle: 'Sources',
      sources: ['« La Croyance du Musulman » (Aqidat al-Muslim) — Sheikh Mohammed al-Ghazali — Dar Nahdet Misr','Le Saint Coran','Sahih al-Bukhari et Muslim'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر عقيدة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "عقيدة المسلم" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٠ أصلاً للعقيدة، ٤ أركان عبادة، اختبار تفاعلي مع نقاط وأوسمة، وضع المستكشف الصغير.'},
      {title:'⌨️ اختصارات',body:'استخدم الأسهم للتنقل. اضغط Escape لإغلاق اللوحات.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/aqidat-al-muslim'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s creed teachings interactively.'},
      {title:'📚 Sources',body:'"The Muslim\'s Creed" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages, 3 themes, 20 creed foundations, 4 worship pillars, interactive quiz with XP and badges, Young Explorer mode.'},
      {title:'⌨️ Shortcuts',body:'Use arrow keys to navigate. Press Escape to close panels.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/aqidat-al-muslim'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager les enseignements du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'« La Croyance du Musulman » par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues, 3 themes, 20 fondements, 4 piliers de culte, quiz interactif avec XP et badges, mode Jeune Explorateur.'},
      {title:'⌨️ Raccourcis',body:'Utilisez les fleches pour naviguer. Echap pour fermer les panneaux.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/aqidat-al-muslim'},
    ]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
    const dd = d[lang];
    return `
    <div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  window._scrollObserver = observer;
  function observeAll() {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el));
  }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => setTimeout(observeAll, 100));
  });
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.creed-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const creedPanel = document.getElementById('panel-creed');
      if (!creedPanel || !creedPanel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'creedSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.creed-card')).filter(c => c.style.display !== 'none');
      if (cards.length === 0) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentCardIdx = Math.max(0, Math.min(cards.length - 1, currentCardIdx + dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() {
  document.getElementById('helpPanel').classList.toggle('hidden');
  playSound('click');
}
function toggleDuaPanel() {
  document.getElementById('duaPanel').classList.toggle('hidden');
  playSound('click');
}
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (btn) btn.classList.toggle('visible', window.scrollY > 300);
  });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ TICKER ═══════════════
(function initTicker() {
  const el = document.getElementById('tickerText');
  if (!el) return;
  const msgs = {
    ar: ['☝️ لا إله إلا الله','📖 عقيدة المسلم — الشيخ محمد الغزالي','🕌 الصلاة عماد الدين','🌙 رمضان مدرسة التقوى','⭐ الإيمان يزيد بالطاعة'],
    en: ['☝️ There is no god but God',"📖 The Muslim's Creed — Sheikh al-Ghazali",'🕌 Prayer is the pillar of religion','🌙 Ramadan: school of piety','⭐ Faith increases with obedience'],
    fr: ['☝️ Il n\'y a de dieu que Dieu','📖 La Croyance du Musulman — Sheikh al-Ghazali','🕌 La priere est le pilier de la religion','🌙 Ramadan : ecole de piete','⭐ La foi augmente avec l\'obeissance']
  };
  function setTicker() {
    const m = msgs[lang] || msgs.en;
    const doubled = [...m, ...m].map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
    el.innerHTML = doubled;
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = `tickerMarquee ${m.length * 8}s linear infinite`;
  }
  setTicker();
  const orig = window.setLang;
  const _sl = setLang;
  window.setLang = function(l) { _sl(l); setTimeout(setTicker, 100); };
})();
