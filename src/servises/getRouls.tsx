export interface RuleType { 
  title: string; 
  contentTitle?: string[]; 
  listItems?: string[]; 
  content: string[]; 
} 
 
export const rules: RuleType[] = [ 
  { 
    title: 
      "قوانین ثبت آگهی و خدمات نرم افزار نوبت دهی مطب ها در «نوبت دات آی آر» چیست؟", 
    contentTitle: [ 
      "چنانچه از ناحیه مراجع ذیصلاح قانونی دستور حذف آگهی صادر شده باشد، نوبت دات آی آر فوراً اقدام به حذف آگهی می‌نماید. همچنین در صورتی که گزارش نارضایتی کاربران نسبت به آگهی خدمات پزشکی بیشتر از ۵ مورد باشد، نوبت دات آی آر به صلاحدید خود ممکن است اقدام به حذف آگهی نماید. در هر دو فرض ذکر شده نوبت دات آی آر هیچ‌گونه مسئولیتی در قبال بازپرداخت هزینه‌های پرداختی بابت آگهی حذف شده به کاربر ندارد.", 
      "آگهی‌دهندگان (پزشکان و یا ...) با ثبت آگهی خود در نوبت دات آی آر تأیید می‌کنند که آگهی ایشان شامل مواردی که در ادامه آورده می‌شوند، نخواهد بود:", 
    ], 
    listItems: [ 
      "مغایرت با قوانین جاری جمهوری اسلامی ایران و عرف جامعه", 
      "هرگونه محتوای مندرج در فهرستمصادیق محتوای مجرمانه", 
      "استفاده از عبارت‌ها یا کلماتی مانند: ویژه، رند، مفت، ارزان، زیر قیمت، استثنائی، حراج و موارد مشابه", 
      "هر گونه توهین به ادیان رسمی کشور، آداب، رسوم، قومیت‌ها، لهجه‌ها و گویش‌های مختلف", 
      "استفاده ابزاری از تصاویر اشخاص در آگهی، درج بی‌مورد عکس صورت اشخاص یا استفاده از عکس کودکان برای معرفی خدمات و خدماتی که مخاطب آن کودکان نیستند.", 
      "استفاده از حروف انگلیسی برای نوشتن عبارات فارسی (اصطلاحا فینگلیش)، لازم به ذکر است که استفاده از زبان انگلیسی برای نوشتن کلمات غیرفارسی و برندها و یا ثبت آگهی به زبان انگلیسی مانعی ندارد.", 
      "هر نوع آگهی و خبرپراکنی سیاسی، اجتماعی یا مذهبی که جنبه تجاری نداشته باشد.", 
      "هر شکلی از شرط‌بندی (با جایزه یا بدون جایزه)", 
    ], 
    content: [ 
      "هرگونه سوءاستفاده از شماره تلفن همراه یا نشانی پست الکترونیکی دیگران پیگرد قانونی دارد و آگهی دهنده مسئول آن تلقی شده و نوبت دات آی آر در این مورد هیچ گونه مسئولیتی ندارد.", 
      "درخواست دهنده نرم افزار نوبت دهی مطب در صورت ارائه هرگونه اطلاعات اشتباه و یا جعل عنوان مورد پیگرد قانونی قرار میگیرد و مسئول آن تلقی شده و نوبت دات آی آر در این مورد هیچ گونه مسئولیتی ندارد.", 
    ], 
  }, 
  { 
    title: "قوانین مرتبط با بخش نظرات ویژه آگهی دهندگان", 
    content: [ 
      "استفاده از بخش نظرات و نمایش نظرات در این سایت کاملا به اراده مطب بستگی دارد", 
      "مطب می تواند در هر لحظه از شبانه روز از طریق دکمه عدم نمایش کادر نظرات صفحه خود را از دید عموم پنهان کرده و بخش نظرات را غیر فعال نماید.", 
      "نوبت دات آی آر امکان غیرفعال سازی کلی بخش نظرات (نه به صورت تک نظر خاص) را در پنل پزشکان قرار داده است و حتی پزشکان با تماس تلفنی نیز می توانند سیستم نظرات خود را به طور کلی غیر فعال کنند تا هیچ نظری چه مثبت و چه منفی نمایش داده نشود.", 
      "نوبت دات آی آر هیچ گونه مسئولیتی در قبال محتوای نظرات ندارد، چرا که این امکان اجباری نبوده و در هر لحظه پزشک امکان غیر فعال سازی/پنهان سازی (تنها به طور کلی و نه به صورت تک نظر) بخش نظرات را دارد.", 
      "در صورتی که پزشک نسبت به نظری انتقاد داشته باشد و نظر مربوطه دارای واژه هایی مغایر با اخلاق و قوانین جامعه باشد این امکان برای پزشک فراهم است که با تماس با پشتیبانی یا ثبت تیکت، آن نظر را در حالت عدم نمایش قرار دهد.", 
      "از پزشکان عزیز تقاضا می شود به صورت روزانه خود یا منشی از بخش آخرین نظرات نظرات را بررسی و مدیریت نمایند در صورت هرگونه گزارش نسبت به نظری از طریق تلفن های پشتیبانی و یا ثبت تیک به پشتیبانی اطلاع دهند . لازم به ذکر است امکان عدم نمایش کلیه نظرات در پنل پزشک بخش تنظیمات پروفایل برای مطب فراهم است و بدون نیاز به تماس نیز میتواند بلافاصله پس از ثبت نظر بخش نظرات را در حالت عدم نمایش قرار دهد.", 
    ], 
  }, 
  { 
    title: "قوانین استعلام", 
    content: [ 
      "تنها مدارکی تایید می شوند که مورد تایید وزارت بهداشت و نظام پزشکی ایران باشند.", 
      "هیچگونه مدارکی به جز مدارک مورد تایید وزارت بهداشت و سازمان نظام پزشکی قابل قبول نیست.", 
    ], 
  }, 
  { 
    title: "نحوه پرداخت وجه", 
    content: [ 
      "در اکثر موارد شما میتوانید بدون پرداخت وجه از خدمات نوبت دهی استفاده نمایید و وجه پرداختی را به صورت حضوری در مطب پرداخت نمایید. در مواردی که علامت کارت اعتباری درج شده است مطب تنها در صورت پرداخت وجه امکان نوبت دهی را فعال گذاشته است.", 
    ], 
  }, 
  { 
    title: "مطب های دارای پرداخت آنلاین", 
    content: [ 
      "مطب هایی که از سرویس پرداخت آنلاین استفاده می کنند می بایست قرارداد تایید پرداخت نوبت هایشان توسط نوبت دات آی آر را امضا کنند و در صورت عدم ارسال قرارداد، نوبت دات آی آر این حق را دارد که همکاری نوبت دهی خود را با مطب مربوطه قطع نماید. لازم به ذکر است صفحه مربوطه تا پایان تاریخ اشتراک حذف نمی شود و پس از ارسال قرارداد امکان ادامه همکاری نوبت دهی فراهم میباشد.", 
    ], 
  }, 
  { 
    title: "قوانین بازگشت وجه", 
    content: [ 
      "در صورت پرداخت مبلغ خدمات یک مطب در صورت رضایت مطب نوبت دات آی آر مبلغ پرداختی شما را ظرف ۲۴ ساعت به شماره کارتی که در پنل وارد نموده اید، بازگشت می دهد.", 
    ], 
  }, 
  { 
    title: "پشتیبانی خدمات نوبت", 
    content: [ 
      "ساعات پشتیبانی نوبت هر روز هفته از ساعت ۸ صبح الی ۸ شب می باشد.", 
    ], 
  }, 
  { 
    title: "حریم شخصی", 
    content: [ 
      "نوبت دات آی آر تحت هیچ شرایطی هیچگونه اطلاعاتی از شما را در اختیار شرکت های تبلیغاتی و سایر افراد قرار نمی دهد و در ۱۱ سال گذشته به صورت جدی از حریم خصوصی مخاطبین خود حفاظت کرده است.", 
    ], 
  }, 
  { 
    title: "نحوه ثبت پیشنهادات و شکایات", 
    content: [ 
      "نوبت دات آی آر آماده شنیدن نظرات، انتقادات و شکایات شما می باشد، لطفا از طریق شماره تماس ۹۱۰۱۰۰۰۲-۰۲۱ - ۹۲۰۰۰۰۲۱-۰۲۱ با ما در ارتباط باشید، اطمینان داشته باشید ما به طور جدی و فوری پیگیر درخواست های شما هستیم.", 
    ], 
  }, 
];