import type { Dict } from "./types";

export const vi: Dict = {
  meta: {
    home: {
      title: "{business} – Học lái xe tại {area}",
      description:
        "Học lái xe với giáo viên thân thiện, kiên nhẫn và có đầy đủ giấy phép tại {area}. Đặt buổi học ngay hôm nay.",
    },
    book: {
      title: "Đặt buổi học – {business}",
      description:
        "Yêu cầu một buổi học lái xe trực tuyến. Chúng tôi sẽ xác nhận qua điện thoại hoặc email. Không cần thanh toán trực tuyến.",
    },
    info: {
      title: "Giới thiệu & khóa học – {business}",
      description: "Gặp gỡ giáo viên, xem các loại buổi học và học phí, đọc câu trả lời cho các câu hỏi thường gặp.",
    },
    notFound: { title: "Không tìm thấy trang – {business}", description: "Không tìm thấy trang này." },
  },
  nav: {
    home: "Trang chủ",
    book: "Đặt lịch",
    info: "Giới thiệu & Khóa học",
    bookCta: "Đặt buổi học",
    menu: "Mở menu",
    language: "Ngôn ngữ",
    primary: "Điều hướng chính",
    skip: "Chuyển đến nội dung chính",
  },
  contact: { area: "Phục vụ" },
  stats: { years: "Năm kinh nghiệm", learners: "Học viên đã dạy", pass: "Tỷ lệ đậu lần đầu" },
  home: {
    heroEyebrow: "Giáo viên dạy lái xe có giấy phép",
    heroTitle: "Học lái xe với",
    heroTitleAccent: "sự hướng dẫn tận tâm, chuyên nghiệp",
    heroLead:
      "Các buổi học kiên nhẫn, chuyên nghiệp, phù hợp với bạn. Xây dựng sự tự tin thực sự khi lái xe và thi đậu ngay lần đầu.",
    heroBook: "Đặt buổi học đầu tiên",
    heroCall: "Gọi cho giáo viên",
    heroImageAlt: "Logo Lam Driving School với chiếc xe tập lái gắn biển học viên",
    badgeTitle: "Xe hai bộ điều khiển",
    badgeText: "An toàn & bảo hiểm đầy đủ",
    whyEyebrow: "Vì sao chọn chúng tôi",
    whyTitle: "Các buổi học được thiết kế quanh sự tự tin của bạn",
    whySubtitle:
      "Mỗi buổi học đều có cấu trúc, thân thiện và tập trung giúp bạn trở thành người lái xe an toàn, độc lập.",
    features: {
      patient: {
        title: "Kiên nhẫn & thân thiện",
        text: "Phương pháp thoải mái, không phán xét để người mới bắt đầu cảm thấy tự tin ngay từ buổi học đầu tiên.",
      },
      flexible: {
        title: "Lịch học linh hoạt",
        text: "Chọn ngày và giờ phù hợp với bạn, kể cả thứ Bảy, và dễ dàng đổi lịch.",
      },
      dualControl: {
        title: "Xe hai bộ điều khiển hiện đại",
        text: "Học trên chiếc xe an toàn, được bảo dưỡng tốt, bảo hiểm đầy đủ với bộ điều khiển đôi để bạn yên tâm.",
      },
      testRoutes: {
        title: "Am hiểu tuyến thi",
        text: "Luyện tập trên các tuyến thi địa phương để mọi thứ đều quen thuộc trong ngày thi.",
      },
      tailored: {
        title: "Giáo án riêng",
        text: "Buổi học điều chỉnh theo tốc độ của bạn, dù bạn mới bắt đầu hay ôn luyện trước kỳ thi.",
      },
      value: {
        title: "Gói học tiết kiệm",
        text: "Buổi học lẻ giá hợp lý và gói nhiều buổi được giảm giá giúp bạn tiết kiệm khi học.",
      },
    },
    stepsEyebrow: "Cách thức",
    stepsTitle: "Đặt buổi học rất đơn giản",
    steps: [
      { title: "Gửi yêu cầu", text: "Điền vào biểu mẫu đặt lịch nhanh với thông tin và ngày giờ mong muốn của bạn." },
      { title: "Nhận xác nhận", text: "Giáo viên kiểm tra lịch trống và xác nhận buổi học qua điện thoại hoặc email." },
      {
        title: "Bắt đầu lái xe",
        text: "Gặp nhau tại địa điểm đã hẹn và bắt đầu rèn luyện kỹ năng lái xe với sự hỗ trợ chuyên nghiệp.",
      },
    ],
    ctaTitle: "Sẵn sàng lên đường?",
    ctaText: "Đặt buổi học ngay hôm nay. Không cần thanh toán trực tuyến, chỉ cần gửi yêu cầu và chúng tôi sẽ liên hệ.",
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
    lesson: "Loại buổi học (không bắt buộc)",
    lessonNone: "Chưa chắc",
    experience: "Kinh nghiệm lái xe hiện tại",
    experienceSelect: "Chọn trình độ của bạn",
    experiences: {
      none: "Hoàn toàn mới",
      some: "Có một chút kinh nghiệm",
      refresher: "Ôn luyện / lái xe trở lại",
      test: "Chuẩn bị thi",
    },
    hasCar: "Bạn có xe riêng để sử dụng không?",
    hasCarYes: "Có",
    hasCarNo: "Không",
    date: "Ngày mong muốn",
    dateHint: "Các buổi học từ Thứ Hai đến Thứ Bảy. Giờ học là yêu cầu của bạn; chúng tôi sẽ xác nhận lại.",
    time: "Giờ mong muốn",
    timeHintSelect: "Chọn một ngày để xem các khung giờ.",
    timeHintNone: "Không còn khung giờ cho ngày này. Vui lòng thử ngày khác.",
    notes: "Điều gì khác? (không bắt buộc)",
    notesPlaceholder: "Địa điểm đón, mục tiêu, câu hỏi...",
    submit: "Gửi yêu cầu đặt lịch",
    submitting: "Đang gửi...",
    successTitle: "Đã gửi yêu cầu!",
    successText: "Cảm ơn {name}. Yêu cầu buổi học của bạn đã được nhận. Chúng tôi sẽ sớm liên hệ để xác nhận.",
    successFallback:
      "Cảm ơn {name}. Yêu cầu của bạn đã được ghi nhận để xem xét. (Chức năng gửi email chưa được cấu hình trong bản phát triển này.)",
    errorText: "Xin lỗi, đã có lỗi khi gửi yêu cầu. Vui lòng gọi hoặc gửi email trực tiếp cho chúng tôi.",
    another: "Đặt buổi học khác",
    asideTitle: "Muốn trao đổi trực tiếp?",
    asideText: "Hãy liên hệ trực tiếp, chúng tôi sẵn lòng giải đáp mọi câu hỏi về buổi học hay lịch trống.",
    summaryTitle: "Những gì bạn nhận được",
    summary: {
      confirm: "Cuộc gọi hoặc email xác nhận",
      pickup: "Địa điểm đón linh hoạt",
      payment: "Không cần thanh toán trực tuyến",
    },
    required: "bắt buộc",
    errors: {
      name: "Vui lòng nhập tên của bạn.",
      email: "Vui lòng nhập địa chỉ email hợp lệ.",
      phone: "Vui lòng nhập số điện thoại hợp lệ.",
      experience: "Vui lòng chọn trình độ của bạn.",
      hasCar: "Vui lòng cho biết bạn có xe hay không.",
      date: "Vui lòng chọn một ngày.",
      closed: "Chúng tôi nghỉ Chủ Nhật. Vui lòng chọn từ Thứ Hai đến Thứ Bảy.",
      time: "Vui lòng chọn một giờ.",
    },
  },
  info: {
    headerTitle: "Về giáo viên & các buổi học",
    headerLead:
      "Gặp gỡ giáo viên của bạn và tìm hiểu cách các buổi học giúp bạn trở thành người lái xe an toàn, tự tin.",
    aboutTitle: "Gặp gỡ {name}",
    aboutParagraphs: [
      "Với hơn {years} năm kinh nghiệm giảng dạy chuyên nghiệp, {name} đã giúp hơn {students} học viên ở mọi lứa tuổi và trình độ lấy được bằng lái.",
      "Nổi tiếng với phong cách giảng dạy điềm tĩnh, khích lệ, {name} tập trung xây dựng sự tự tin thực sự và thói quen an toàn lâu dài, không chỉ để thi đậu.",
      "Tất cả các buổi học diễn ra trên chiếc xe hiện đại, hai bộ điều khiển và được bảo hiểm đầy đủ, để bạn và gia đình hoàn toàn yên tâm.",
    ],
    glanceTitle: "Tóm tắt nhanh",
    tags: {
      licensed: "Có giấy phép đầy đủ",
      insured: "Bảo hiểm đầy đủ",
      dual: "Xe hai bộ điều khiển",
      friendly: "Kiên nhẫn & thân thiện",
    },
    lessonsEyebrow: "Các buổi học",
    lessonsTitle: "Loại hình & học phí",
    lessonsSubtitle: "Giá minh bạch, không phí ẩn. Gói nhiều buổi mang lại giá trị tốt nhất.",
    lessons: {
      single: {
        name: "Buổi học lẻ",
        unit: "/ giờ",
        text: "Buổi học tiêu chuẩn một giờ, hoàn hảo để bắt đầu hoặc nâng cao kỹ năng.",
      },
      package: {
        name: "Gói người mới",
        unit: "/ 10 giờ",
        text: "Mười giờ học có cấu trúc dành cho người mới lái, giúp bạn tiết kiệm khi học.",
      },
      test: {
        name: "Luyện thi",
        unit: "/ 90 phút",
        text: "Luyện tập tập trung trên tuyến thi địa phương, gồm thi thử và các bài kỹ thuật.",
      },
      refresher: {
        name: "Buổi ôn luyện",
        unit: "/ giờ",
        text: "Dành cho người đã có bằng muốn lấy lại sự tự tin sau thời gian không lái xe.",
      },
    },
    bestValue: "Tiết kiệm nhất",
    bookLesson: "Đặt buổi học này",
    faqEyebrow: "Câu hỏi",
    faqTitle: "Câu hỏi thường gặp",
    faqs: [
      {
        q: "Tôi có cần xe riêng không?",
        a: "Không. Các buổi học được dạy trên xe hiện đại hai bộ điều khiển. Nếu bạn có xe riêng và muốn dùng, cũng không sao, chỉ cần cho chúng tôi biết trên biểu mẫu đặt lịch.",
      },
      {
        q: "Bạn phục vụ những khu vực nào?",
        a: "Chúng tôi phục vụ {area} và các vùng lân cận. Việc đón và trả thường có thể sắp xếp tại nhà, nơi làm việc hoặc trường học của bạn.",
      },
      {
        q: "Tôi thanh toán học phí như thế nào?",
        a: "Không thu phí trực tuyến. Bạn có thể thanh toán bằng tiền mặt hoặc chuyển khoản trực tiếp với giáo viên trước hoặc sau buổi học.",
      },
      {
        q: "Tôi có thể chọn giờ học không?",
        a: "Có. Chỉ cần chọn ngày và giờ mong muốn trên biểu mẫu đặt lịch, chúng tôi sẽ xác nhận sớm nhất có thể.",
      },
    ],
    ctaTitle: "Còn thắc mắc?",
    ctaText: "Hãy liên hệ hoặc đặt buổi học đầu tiên của bạn ngay hôm nay.",
    ctaBook: "Đặt buổi học",
    ctaCall: "Gọi ngay",
  },
  footer: {
    tagline: "Các buổi học lái xe thân thiện, chuyên nghiệp xây dựng sự tự tin bền vững khi cầm lái.",
    quickLinks: "Liên kết nhanh",
    contactTitle: "Liên hệ",
    rights: "Bảo lưu mọi quyền.",
  },
  notFound: {
    title: "Không tìm thấy trang",
    text: "Rất tiếc, chúng tôi không tìm thấy trang bạn cần.",
    back: "Về trang chủ",
  },
};
