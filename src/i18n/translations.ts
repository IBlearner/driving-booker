export type Language = "en" | "vi" | "zh";

export const languages: {
  code: Language;
  label: string;
  native: string;
}[] = [
  { code: "en", label: "English", native: "English" },
  { code: "vi", label: "Vietnamese", native: "Tiếng Việt" },
  { code: "zh", label: "Mandarin", native: "中文" },
];

const en = {
  nav: {
    home: "Home",
    book: "Book Now",
    info: "About & Lessons",
    bookCta: "Book a Lesson",
    menu: "Open menu",
    language: "Language",
  },
  contact: {
    call: "Call",
    email: "Email",
    area: "Serving",
  },
  home: {
    heroEyebrow: "Fully licensed driving instructor",
    heroTitle: "Learn to drive with",
    heroTitleAccent: "calm, expert guidance",
    heroLead:
      "Patient, professional lessons tailored to you. Build real confidence behind the wheel and pass your test the first time.",
    heroBook: "Book your first lesson",
    heroCall: "Call the instructor",
    statLearners: "Learners taught",
    statPass: "First-time pass rate",
    statYears: "Years experience",
    badgeTitle: "Dual-control car",
    badgeText: "Safe & fully insured",
    whyEyebrow: "Why choose us",
    whyTitle: "Driving lessons built around your confidence",
    whySubtitle:
      "Every lesson is structured, friendly, and focused on helping you become a safe, independent driver.",
    feature1Title: "Patient & friendly",
    feature1Text:
      "A relaxed, judgement-free approach so nervous beginners feel at ease from the very first lesson.",
    feature2Title: "Flexible scheduling",
    feature2Text:
      "Pick the day and time that suits you, including evenings and weekends, and reschedule easily.",
    feature3Title: "Modern dual-control car",
    feature3Text:
      "Learn in a safe, well-maintained, fully insured vehicle with dual controls for peace of mind.",
    feature4Title: "Test-route knowledge",
    feature4Text:
      "Practise on local test routes so nothing feels unfamiliar on the day of your driving test.",
    feature5Title: "Tailored lesson plans",
    feature5Text:
      "Lessons adapt to your pace, whether you're a first-timer or brushing up before your test.",
    feature6Title: "Great value packages",
    feature6Text:
      "Affordable single lessons and discounted block bookings to help you save as you learn.",
    stepsEyebrow: "How it works",
    stepsTitle: "Booking a lesson is simple",
    step1Title: "Send a request",
    step1Text:
      "Fill in the quick booking form with your details and preferred day and time.",
    step2Title: "Get confirmation",
    step2Text:
      "The instructor reviews availability and confirms your lesson by phone or email.",
    step3Title: "Start driving",
    step3Text:
      "Meet at an agreed location and begin building your driving skills with expert support.",
    ctaTitle: "Ready to get on the road?",
    ctaText:
      "Reserve your lesson today. No online payment needed, just send a request and we'll be in touch.",
    ctaBook: "Book now",
    ctaLearn: "Learn more",
  },
  book: {
    headerTitle: "Book your lesson",
    headerLead:
      "Fill in the form below to request a lesson. We'll confirm your booking by phone or email. No payment is taken online.",
    formTitle: "Lesson request",
    name: "Full name",
    namePlaceholder: "e.g. Jamie Smith",
    email: "Email address",
    emailPlaceholder: "you@example.com",
    phone: "Phone number",
    phonePlaceholder: "e.g. 0400 123 456",
    experience: "Current driving experience",
    experienceSelect: "Select your experience level",
    expNone: "Complete beginner",
    expSome: "Some experience",
    expRefresher: "Refresher / returning driver",
    expTest: "Preparing for test",
    hasCar: "Do you have access to your own car?",
    hasCarYes: "Yes",
    hasCarNo: "No",
    date: "Preferred date",
    dateHint: "Lessons are available Monday to Saturday.",
    time: "Available time slots",
    timeHintSelect: "Select a date to see available times.",
    timeHintNone: "No slots available for this date. Please try another day.",
    notes: "Anything else? (optional)",
    notesPlaceholder: "Pickup location, goals, questions...",
    submit: "Send booking request",
    submitting: "Sending...",
    successTitle: "Request sent!",
    successText:
      "Thanks {name}. Your lesson request has been received. We'll contact you shortly to confirm.",
    successFallback:
      "Thanks {name}. Your request has been recorded for review. (Email delivery isn't configured in this demo.)",
    errorText:
      "Sorry, something went wrong sending your request. Please call or email us directly.",
    another: "Make another booking",
    asideTitle: "Prefer to talk?",
    asideText:
      "Get in touch directly and we'll happily answer any questions about lessons or availability.",
    summaryTitle: "What to expect",
    summary1: "A confirmation call or email",
    summary2: "Flexible pickup locations",
    summary3: "No online payment required",
    required: "required",
    errName: "Please enter your name.",
    errEmail: "Please enter a valid email address.",
    errPhone: "Please enter a valid phone number.",
    errExperience: "Please select your experience level.",
    errHasCar: "Please let us know if you have a car.",
    errDate: "Please choose a date.",
    errTime: "Please choose a time slot.",
  },
  info: {
    headerTitle: "About the instructor & lessons",
    headerLead:
      "Meet your instructor and learn how our lessons help you become a safe, confident driver.",
    aboutTitle: "Meet {name}",
    aboutP1:
      "With over 12 years of professional instructing experience, {name} has helped hundreds of learners of all ages and abilities gain their licence.",
    aboutP2:
      "Known for a calm, encouraging teaching style, {name} focuses on building genuine confidence and safe habits that last a lifetime, not just passing the test.",
    aboutP3:
      "All lessons take place in a modern, dual-control vehicle and are fully insured, so you and your family can have complete peace of mind.",
    tagLicensed: "Fully licensed",
    tagInsured: "Fully insured",
    tagDual: "Dual-control car",
    tagFriendly: "Patient & friendly",
    lessonsEyebrow: "Our lessons",
    lessonsTitle: "Lesson types & pricing",
    lessonsSubtitle:
      "Transparent pricing with no hidden fees. Block bookings offer the best value.",
    lesson1Name: "Single lesson",
    lesson1Price: "$70 / hr",
    lesson1Text:
      "A standard one-hour lesson, perfect for getting started or topping up your skills.",
    lesson2Name: "Beginner package",
    lesson2Price: "$650 / 10 hrs",
    lesson2Text:
      "Ten hours of structured lessons for new drivers, saving you money as you learn.",
    lesson3Name: "Test preparation",
    lesson3Price: "$95 / 90 min",
    lesson3Text:
      "Focused practice on local test routes, including mock tests and manoeuvres.",
    lesson4Name: "Refresher lesson",
    lesson4Price: "$70 / hr",
    lesson4Text:
      "For licensed drivers wanting to rebuild confidence after time away from driving.",
    faqEyebrow: "Questions",
    faqTitle: "Frequently asked questions",
    faq1Q: "Do I need my own car?",
    faq1A:
      "No. Lessons are taught in a modern dual-control car. If you have your own car and prefer to use it, that's fine too, just let us know on the booking form.",
    faq2Q: "Which areas do you cover?",
    faq2A:
      "We cover {area} and surrounding suburbs. Pickup and drop-off can usually be arranged at your home, work, or school.",
    faq3Q: "How do I pay for lessons?",
    faq3A:
      "No payment is taken online. You can pay by cash or bank transfer directly with the instructor before or after your lesson.",
    faq4Q: "Can I choose my lesson times?",
    faq4A:
      "Yes. Simply pick your preferred day and available time slot on the booking form, and we'll confirm as soon as possible.",
    ctaTitle: "Have more questions?",
    ctaText: "Get in touch or book your first lesson today.",
    ctaBook: "Book a lesson",
    ctaCall: "Call now",
  },
  footer: {
    tagline:
      "Friendly, professional driving lessons that build lasting confidence behind the wheel.",
    quickLinks: "Quick links",
    contactTitle: "Contact",
    rights: "All rights reserved.",
  },
};

type Dict = typeof en;

export const translations: Record<Language, Dict> = {
  en,
  vi: {
    nav: {
      home: "Trang chủ",
      book: "Đặt lịch",
      info: "Giới thiệu & Khóa học",
      bookCta: "Đặt buổi học",
      menu: "Mở menu",
      language: "Ngôn ngữ",
    },
    contact: {
      call: "Gọi",
      email: "Email",
      area: "Phục vụ",
    },
    home: {
      heroEyebrow: "Giáo viên dạy lái xe có giấy phép",
      heroTitle: "Học lái xe với",
      heroTitleAccent: "sự hướng dẫn tận tâm, chuyên nghiệp",
      heroLead:
        "Các buổi học kiên nhẫn, chuyên nghiệp, phù hợp với bạn. Xây dựng sự tự tin thực sự khi lái xe và thi đậu ngay lần đầu.",
      heroBook: "Đặt buổi học đầu tiên",
      heroCall: "Gọi cho giáo viên",
      statLearners: "Học viên đã dạy",
      statPass: "Tỷ lệ đậu lần đầu",
      statYears: "Năm kinh nghiệm",
      badgeTitle: "Xe hai bộ điều khiển",
      badgeText: "An toàn & bảo hiểm đầy đủ",
      whyEyebrow: "Vì sao chọn chúng tôi",
      whyTitle: "Các buổi học được thiết kế quanh sự tự tin của bạn",
      whySubtitle:
        "Mỗi buổi học đều có cấu trúc, thân thiện và tập trung giúp bạn trở thành người lái xe an toàn, độc lập.",
      feature1Title: "Kiên nhẫn & thân thiện",
      feature1Text:
        "Phương pháp thoải mái, không phán xét để người mới bắt đầu cảm thấy tự tin ngay từ buổi học đầu tiên.",
      feature2Title: "Lịch học linh hoạt",
      feature2Text:
        "Chọn ngày và giờ phù hợp với bạn, kể cả buổi tối và cuối tuần, và dễ dàng đổi lịch.",
      feature3Title: "Xe hai bộ điều khiển hiện đại",
      feature3Text:
        "Học trên chiếc xe an toàn, được bảo dưỡng tốt, bảo hiểm đầy đủ với bộ điều khiển đôi để bạn yên tâm.",
      feature4Title: "Am hiểu tuyến thi",
      feature4Text:
        "Luyện tập trên các tuyến thi địa phương để mọi thứ đều quen thuộc trong ngày thi.",
      feature5Title: "Giáo án riêng",
      feature5Text:
        "Buổi học điều chỉnh theo tốc độ của bạn, dù bạn mới bắt đầu hay ôn luyện trước kỳ thi.",
      feature6Title: "Gói học tiết kiệm",
      feature6Text:
        "Buổi học lẻ giá hợp lý và gói nhiều buổi được giảm giá giúp bạn tiết kiệm khi học.",
      stepsEyebrow: "Cách thức",
      stepsTitle: "Đặt buổi học rất đơn giản",
      step1Title: "Gửi yêu cầu",
      step1Text:
        "Điền vào biểu mẫu đặt lịch nhanh với thông tin và ngày giờ mong muốn của bạn.",
      step2Title: "Nhận xác nhận",
      step2Text:
        "Giáo viên kiểm tra lịch trống và xác nhận buổi học qua điện thoại hoặc email.",
      step3Title: "Bắt đầu lái xe",
      step3Text:
        "Gặp nhau tại địa điểm đã hẹn và bắt đầu rèn luyện kỹ năng lái xe với sự hỗ trợ chuyên nghiệp.",
      ctaTitle: "Sẵn sàng lên đường?",
      ctaText:
        "Đặt buổi học ngay hôm nay. Không cần thanh toán trực tuyến, chỉ cần gửi yêu cầu và chúng tôi sẽ liên hệ.",
      ctaBook: "Đặt ngay",
      ctaLearn: "Tìm hiểu thêm",
    },
    book: {
      headerTitle: "Đặt buổi học của bạn",
      headerLead:
        "Điền vào biểu mẫu dưới đây để yêu cầu một buổi học. Chúng tôi sẽ xác nhận qua điện thoại hoặc email. Không thu phí trực tuyến.",
      formTitle: "Yêu cầu buổi học",
      name: "Họ và tên",
      namePlaceholder: "vd: Nguyễn Văn A",
      email: "Địa chỉ email",
      emailPlaceholder: "ban@example.com",
      phone: "Số điện thoại",
      phonePlaceholder: "vd: 0400 123 456",
      experience: "Kinh nghiệm lái xe hiện tại",
      experienceSelect: "Chọn trình độ của bạn",
      expNone: "Hoàn toàn mới",
      expSome: "Có một chút kinh nghiệm",
      expRefresher: "Ôn luyện / lái xe trở lại",
      expTest: "Chuẩn bị thi",
      hasCar: "Bạn có xe riêng để sử dụng không?",
      hasCarYes: "Có",
      hasCarNo: "Không",
      date: "Ngày mong muốn",
      dateHint: "Các buổi học có sẵn từ Thứ Hai đến Thứ Bảy.",
      time: "Khung giờ trống",
      timeHintSelect: "Chọn một ngày để xem các khung giờ trống.",
      timeHintNone:
        "Không có khung giờ trống cho ngày này. Vui lòng thử ngày khác.",
      notes: "Điều gì khác? (không bắt buộc)",
      notesPlaceholder: "Địa điểm đón, mục tiêu, câu hỏi...",
      submit: "Gửi yêu cầu đặt lịch",
      submitting: "Đang gửi...",
      successTitle: "Đã gửi yêu cầu!",
      successText:
        "Cảm ơn {name}. Yêu cầu buổi học của bạn đã được nhận. Chúng tôi sẽ sớm liên hệ để xác nhận.",
      successFallback:
        "Cảm ơn {name}. Yêu cầu của bạn đã được ghi nhận để xem xét. (Chức năng gửi email chưa được cấu hình trong bản demo này.)",
      errorText:
        "Xin lỗi, đã có lỗi khi gửi yêu cầu. Vui lòng gọi hoặc gửi email trực tiếp cho chúng tôi.",
      another: "Đặt buổi học khác",
      asideTitle: "Muốn trao đổi trực tiếp?",
      asideText:
        "Hãy liên hệ trực tiếp, chúng tôi sẵn lòng giải đáp mọi câu hỏi về buổi học hay lịch trống.",
      summaryTitle: "Những gì bạn nhận được",
      summary1: "Cuộc gọi hoặc email xác nhận",
      summary2: "Địa điểm đón linh hoạt",
      summary3: "Không cần thanh toán trực tuyến",
      required: "bắt buộc",
      errName: "Vui lòng nhập tên của bạn.",
      errEmail: "Vui lòng nhập địa chỉ email hợp lệ.",
      errPhone: "Vui lòng nhập số điện thoại hợp lệ.",
      errExperience: "Vui lòng chọn trình độ của bạn.",
      errHasCar: "Vui lòng cho biết bạn có xe hay không.",
      errDate: "Vui lòng chọn một ngày.",
      errTime: "Vui lòng chọn một khung giờ.",
    },
    info: {
      headerTitle: "Về giáo viên & các buổi học",
      headerLead:
        "Gặp gỡ giáo viên của bạn và tìm hiểu cách các buổi học giúp bạn trở thành người lái xe an toàn, tự tin.",
      aboutTitle: "Gặp gỡ {name}",
      aboutP1:
        "Với hơn 12 năm kinh nghiệm giảng dạy chuyên nghiệp, {name} đã giúp hàng trăm học viên ở mọi lứa tuổi và trình độ lấy được bằng lái.",
      aboutP2:
        "Nổi tiếng với phong cách giảng dạy điềm tĩnh, khích lệ, {name} tập trung xây dựng sự tự tin thực sự và thói quen an toàn lâu dài, không chỉ để thi đậu.",
      aboutP3:
        "Tất cả các buổi học diễn ra trên chiếc xe hiện đại, hai bộ điều khiển và được bảo hiểm đầy đủ, để bạn và gia đình hoàn toàn yên tâm.",
      tagLicensed: "Có giấy phép đầy đủ",
      tagInsured: "Bảo hiểm đầy đủ",
      tagDual: "Xe hai bộ điều khiển",
      tagFriendly: "Kiên nhẫn & thân thiện",
      lessonsEyebrow: "Các buổi học",
      lessonsTitle: "Loại hình & học phí",
      lessonsSubtitle:
        "Giá minh bạch, không phí ẩn. Gói nhiều buổi mang lại giá trị tốt nhất.",
      lesson1Name: "Buổi học lẻ",
      lesson1Price: "$70 / giờ",
      lesson1Text:
        "Buổi học tiêu chuẩn một giờ, hoàn hảo để bắt đầu hoặc nâng cao kỹ năng.",
      lesson2Name: "Gói người mới",
      lesson2Price: "$650 / 10 giờ",
      lesson2Text:
        "Mười giờ học có cấu trúc dành cho người mới lái, giúp bạn tiết kiệm khi học.",
      lesson3Name: "Luyện thi",
      lesson3Price: "$95 / 90 phút",
      lesson3Text:
        "Luyện tập tập trung trên tuyến thi địa phương, gồm thi thử và các bài kỹ thuật.",
      lesson4Name: "Buổi ôn luyện",
      lesson4Price: "$70 / giờ",
      lesson4Text:
        "Dành cho người đã có bằng muốn lấy lại sự tự tin sau thời gian không lái xe.",
      faqEyebrow: "Câu hỏi",
      faqTitle: "Câu hỏi thường gặp",
      faq1Q: "Tôi có cần xe riêng không?",
      faq1A:
        "Không. Các buổi học được dạy trên xe hiện đại hai bộ điều khiển. Nếu bạn có xe riêng và muốn dùng, cũng không sao, chỉ cần cho chúng tôi biết trên biểu mẫu đặt lịch.",
      faq2Q: "Bạn phục vụ những khu vực nào?",
      faq2A:
        "Chúng tôi phục vụ {area} và các vùng lân cận. Việc đón và trả thường có thể sắp xếp tại nhà, nơi làm việc hoặc trường học của bạn.",
      faq3Q: "Tôi thanh toán học phí như thế nào?",
      faq3A:
        "Không thu phí trực tuyến. Bạn có thể thanh toán bằng tiền mặt hoặc chuyển khoản trực tiếp với giáo viên trước hoặc sau buổi học.",
      faq4Q: "Tôi có thể chọn giờ học không?",
      faq4A:
        "Có. Chỉ cần chọn ngày và khung giờ trống mong muốn trên biểu mẫu đặt lịch, chúng tôi sẽ xác nhận sớm nhất có thể.",
      ctaTitle: "Còn thắc mắc?",
      ctaText: "Hãy liên hệ hoặc đặt buổi học đầu tiên của bạn ngay hôm nay.",
      ctaBook: "Đặt buổi học",
      ctaCall: "Gọi ngay",
    },
    footer: {
      tagline:
        "Các buổi học lái xe thân thiện, chuyên nghiệp xây dựng sự tự tin bền vững khi cầm lái.",
      quickLinks: "Liên kết nhanh",
      contactTitle: "Liên hệ",
      rights: "Bảo lưu mọi quyền.",
    },
  },
  zh: {
    nav: {
      home: "首页",
      book: "立即预约",
      info: "关于与课程",
      bookCta: "预约课程",
      menu: "打开菜单",
      language: "语言",
    },
    contact: {
      call: "致电",
      email: "邮箱",
      area: "服务范围",
    },
    home: {
      heroEyebrow: "持证驾驶教练",
      heroTitle: "学车，选择",
      heroTitleAccent: "从容而专业的指导",
      heroLead:
        "耐心、专业、量身定制的课程。建立真正的驾驶信心，一次通过考试。",
      heroBook: "预约第一节课",
      heroCall: "致电教练",
      statLearners: "已教学员",
      statPass: "首次通过率",
      statYears: "年经验",
      badgeTitle: "双控制汽车",
      badgeText: "安全且全额投保",
      whyEyebrow: "为何选择我们",
      whyTitle: "围绕您的信心设计的驾驶课程",
      whySubtitle: "每节课都有条理、友好，专注于帮助您成为安全、独立的驾驶者。",
      feature1Title: "耐心又友好",
      feature1Text:
        "轻松、不评判的教学方式，让紧张的初学者从第一节课就感到自在。",
      feature2Title: "灵活的时间安排",
      feature2Text: "选择适合您的日期和时间，包括晚上和周末，并可轻松改期。",
      feature3Title: "现代双控制汽车",
      feature3Text:
        "在安全、保养良好、全额投保并配有双控制装置的车辆中学习，让您安心。",
      feature4Title: "熟悉考试路线",
      feature4Text: "在本地考试路线上练习，让考试当天的一切都不陌生。",
      feature5Title: "量身定制的课程",
      feature5Text: "课程按您的节奏调整，无论您是初学者还是考前复习。",
      feature6Title: "超值套餐",
      feature6Text: "价格实惠的单节课和优惠的套餐预约，助您边学边省。",
      stepsEyebrow: "流程",
      stepsTitle: "预约课程非常简单",
      step1Title: "提交申请",
      step1Text: "填写快速预约表，写上您的信息以及理想的日期和时间。",
      step2Title: "获得确认",
      step2Text: "教练查看空档并通过电话或邮件确认您的课程。",
      step3Title: "开始驾驶",
      step3Text: "在约定地点会面，在专业指导下开始培养您的驾驶技能。",
      ctaTitle: "准备好上路了吗？",
      ctaText: "今天就预约课程。无需在线付款，只需提交申请，我们会与您联系。",
      ctaBook: "立即预约",
      ctaLearn: "了解更多",
    },
    book: {
      headerTitle: "预约您的课程",
      headerLead:
        "填写以下表格以申请课程。我们将通过电话或邮件确认您的预约。不在线收取任何费用。",
      formTitle: "课程申请",
      name: "姓名",
      namePlaceholder: "例如：张伟",
      email: "电子邮箱",
      emailPlaceholder: "you@example.com",
      phone: "电话号码",
      phonePlaceholder: "例如：0400 123 456",
      experience: "当前驾驶经验",
      experienceSelect: "选择您的经验水平",
      expNone: "完全新手",
      expSome: "有一些经验",
      expRefresher: "复习 / 重新驾驶",
      expTest: "备考",
      hasCar: "您有自己的车可用吗？",
      hasCarYes: "有",
      hasCarNo: "没有",
      date: "理想日期",
      dateHint: "课程于周一至周六提供。",
      time: "可选时间段",
      timeHintSelect: "请选择日期以查看可用时间。",
      timeHintNone: "该日期没有可用时间段。请尝试其他日期。",
      notes: "还有其他事项吗？（选填）",
      notesPlaceholder: "接送地点、目标、问题……",
      submit: "发送预约申请",
      submitting: "发送中……",
      successTitle: "申请已发送！",
      successText:
        "谢谢您，{name}。我们已收到您的课程申请，将尽快与您联系确认。",
      successFallback:
        "谢谢您，{name}。您的申请已记录以供查看。（本演示未配置邮件发送功能。）",
      errorText: "抱歉，发送申请时出错。请直接致电或发邮件给我们。",
      another: "再次预约",
      asideTitle: "想直接沟通？",
      asideText: "直接联系我们，我们很乐意解答关于课程或时间的任何问题。",
      summaryTitle: "您可以期待",
      summary1: "确认电话或邮件",
      summary2: "灵活的接送地点",
      summary3: "无需在线付款",
      required: "必填",
      errName: "请输入您的姓名。",
      errEmail: "请输入有效的电子邮箱。",
      errPhone: "请输入有效的电话号码。",
      errExperience: "请选择您的经验水平。",
      errHasCar: "请告知您是否有车。",
      errDate: "请选择日期。",
      errTime: "请选择时间段。",
    },
    info: {
      headerTitle: "关于教练与课程",
      headerLead:
        "认识您的教练，了解我们的课程如何帮助您成为安全、自信的驾驶者。",
      aboutTitle: "认识 {name}",
      aboutP1:
        "凭借超过 12 年的专业教学经验，{name} 已帮助数百名各年龄段、各水平的学员取得驾照。",
      aboutP2:
        "{name} 以从容、鼓励的教学风格著称，专注于建立真正的信心和终身受用的安全习惯，而不仅仅是通过考试。",
      aboutP3:
        "所有课程均在现代化的双控制车辆中进行，并全额投保，让您和家人完全安心。",
      tagLicensed: "持证齐全",
      tagInsured: "全额投保",
      tagDual: "双控制汽车",
      tagFriendly: "耐心友好",
      lessonsEyebrow: "我们的课程",
      lessonsTitle: "课程类型与价格",
      lessonsSubtitle: "价格透明，无隐藏费用。套餐预约最划算。",
      lesson1Name: "单节课",
      lesson1Price: "$70 / 小时",
      lesson1Text: "标准一小时课程，适合入门或提升技能。",
      lesson2Name: "新手套餐",
      lesson2Price: "$650 / 10 小时",
      lesson2Text: "为新驾驶者提供十小时有条理的课程，助您边学边省。",
      lesson3Name: "考试准备",
      lesson3Price: "$95 / 90 分钟",
      lesson3Text: "在本地考试路线上进行针对性练习，包括模拟考试和技术动作。",
      lesson4Name: "复习课",
      lesson4Price: "$70 / 小时",
      lesson4Text: "适合持照驾驶者在一段时间未驾驶后重建信心。",
      faqEyebrow: "问题",
      faqTitle: "常见问题",
      faq1Q: "我需要自己的车吗？",
      faq1A:
        "不需要。课程在现代化的双控制汽车中进行。如果您有自己的车并希望使用，也没问题，只需在预约表中告知我们。",
      faq2Q: "您服务哪些区域？",
      faq2A: "我们服务 {area} 及周边郊区。通常可安排在您的家、公司或学校接送。",
      faq3Q: "我如何支付课程费用？",
      faq3A:
        "不在线收取费用。您可以在课前或课后直接以现金或银行转账方式向教练付款。",
      faq4Q: "我可以选择上课时间吗？",
      faq4A:
        "可以。只需在预约表上选择您理想的日期和可用时间段，我们会尽快确认。",
      ctaTitle: "还有更多问题？",
      ctaText: "立即联系我们或预约您的第一节课。",
      ctaBook: "预约课程",
      ctaCall: "立即致电",
    },
    footer: {
      tagline: "友好、专业的驾驶课程，帮助您建立持久的驾驶信心。",
      quickLinks: "快速链接",
      contactTitle: "联系方式",
      rights: "版权所有。",
    },
  },
};
