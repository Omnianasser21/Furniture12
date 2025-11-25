import React from "react";
import { Carousel } from "flowbite-react";
import img1 from "../Images/2 (1).jpeg";
import img2 from "../Images/2 (2).jpeg";
import img3 from "../Images/2 (3).jpeg";
import img4 from "../Images/2 (4).jpeg";
import {
  FaClipboardCheck,
  FaFileInvoice,
  FaCalendarAlt,
  FaTruck,
} from "react-icons/fa";

export default function Home() {
  const steps = [
    {
      title: "إدارة المشاريع المخصصة",
      desc: "نخصص مدير مشروع لكل عملية نقل ليكون نقطة الاتصال الوحيدة، ويقوم بتطوير خطة عمل مفصلة تتناسب مع احتياجاتك. تواصل فعال، تنفيذ منظم، وتجنب أي سوء فهم أو تأخير.",
      icon: <FaClipboardCheck size={22} />,
      side: "left",
    },
    {
      title: "الجدولة المرنة",
      desc: "نقدم خيارات جدولة مرنة تشمل العمل خارج ساعات الدوام الرسمية، في عطلات نهاية الأسبوع، أو خلال الليل. الهدف تقليل تأثير عملية النقل على إنتاجية موظفيك وعملائك إلى الحد الأدنى.",
      icon: <FaCalendarAlt size={22} />,
      side: "right",
    },
    {
      title: "التأمين والسرية",
      desc: "نوفر بوليصة تأمين شاملة على جميع المنقولات ضد أي أضرار محتملة، مع التزام كامل بسرية المستندات والبيانات. حماية أصولك القيمة وضمان عدم تسرب أي معلومات حساسة.",
      icon: <FaFileInvoice size={22} />,
      side: "left",
    },
    {
      title: "فريق عمل متخصص",
      desc: "فريقنا مكون من فنيين وعمال مدربين على أعلى مستوى للتعامل مع أثاث المكاتب، الأجهزة الإلكترونية، والمعدات الحساسة. فك وتركيب وتغليف احترافي يمنع الخدوش أو التلف.",
      icon: <FaTruck size={22} />,
      side: "right",
    },
    {
      title: "أسطول مجهز بالكامل",
      desc: "نمتلك أسطولاً من سيارات نقل الأثاث المتكاملة للشركات، المغلقة والمبطنة، والمجهزة بأحدث أوناش رفع الأثاث للأدوار العالية.",
      icon: <FaClipboardCheck size={22} />,
      side: "left",
    },
  ];

  const buttonStyle =
    "bg-blue-600 hover:bg-blue-700 px-5 py-2 md:px-6 md:py-3 rounded-full text-white font-semibold shadow-lg transition transform hover:scale-105 text-sm md:text-base";

  return (
    <div className="h-auto">
      <div className="h-56 sm:h-72 md:h-96 lg:h-[500px]">
        <Carousel slideInterval={3000}>
          {[img1, img2, img3, img4].map((image, index) => (
            <div key={index} className="relative w-full h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4 md:p-6">
                <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-3">
                  {index === 0 && "مرحباً بك في موقعنا"}
                  {index === 1 && "خدمات عالية الجودة"}
                  {index === 2 && "انضم إلينا اليوم"}
                  {index === 3 && "تواصل معنا بسهولة"}
                </h2>
                <p className="mb-4 text-sm sm:text-base md:text-lg">
                  {index === 0 && "هل تخطط لنقل أثاث مقر شركتك أو أحد فروعك؟"}
                  {index === 1 &&
                    "هل أنتم مستعدون لتجربة نقل احترافية وموثوقة؟"}
                  {index === 2 &&
                    "أسطول سيارات نقل اثاث شركات وأحدث أوناش الرفع 🚀"}
                  {index === 3 && "فريقنا مستعد لمساعدتك دائماً"}
                </p>
                <button className={buttonStyle}>
                  {index === 0 && "ابدأ الآن"}
                  {index === 1 && "اكتشف المزيد"}
                  {index === 2 && "اتصل الآن"}
                  {index === 3 && "تواصل الآن"}
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <section className="bg-slate-100 py-12 md:py-16 flex flex-col items-center">
        <div className="max-w-4xl text-center mb-10 md:mb-12 px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6">
            لماذا تختار <span className="text-blue-600">شركة النصر</span> لنقل
            أثاث شركتك؟
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto">
            عندما يتعلق الأمر بنقل أصول شركتك، فإن الاختيار الصحيح لمزود الخدمة
            يمثل قراراً استراتيجياً. شركة النصر لا تقدم مجرد خدمة نقل، بل شراكة
            حقيقية تضمن لك راحة البال. نحن نتميز عن غيرنا في السوق المصري بفضل
            مجموعة من العوامل التي تجعلنا الخيار الأول للشركات والمؤسسات.
          </p>
        </div>

        <div className="relative w-full sm:w-3/4 px-4">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 hidden sm:block"></div>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`mb-10 md:mb-12 flex flex-col sm:flex-row items-center w-full ${
                step.side === "left"
                  ? "sm:flex-row"
                  : "sm:flex-row-reverse text-right sm:text-left"
              }`}
            >
              <div className="w-full sm:w-5/12 bg-white text-gray-800 p-5 md:p-6 rounded-lg shadow-lg mb-4 sm:mb-0">
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base">{step.desc}</p>
              </div>
              <div className="w-full sm:w-2/12 flex justify-center relative mb-4 sm:mb-0">
                <div className="bg-blue-700 text-white rounded-full p-3 md:p-4 shadow-lg z-10">
                  {step.icon}
                </div>
              </div>
              <div className="w-5/12 hidden sm:block"></div>
            </div>
          ))}
        </div>
      </section>

      <div
        className="hero h-[350px] md:h-[450px] bg-fixed bg-center bg-cover relative"
        style={{ backgroundImage: `url(${img3})` }}
      >
        <div className="bg-black/60 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-2xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            مشروع ترحيل متكامل لنقل أثاث شركتك
          </h1>
          <p className="text-white text-base md:text-xl mb-6 max-w-2xl drop-shadow-md">
            نحن لا نكتفي بنقل الأثاث، بل ندير عملية الترحيل بالكامل. يقوم مدير
            المشروع المخصص لكم بوضع خطة عمل تفصيلية تشمل كل التفاصيل.
          </p>
          <button className={buttonStyle}>اقرأ المزيد...</button>
        </div>
      </div>

      <footer className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110581.37538778245!2d31.235711!3d30.044420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c7a6e7c4b1%3A0x2c6c2b1b18b8712b!2z2KjYp9mE2YrYqQ!5e0!3m2!1sar!2seg!4v1692974954856!5m2!1sar!2seg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-xl md:text-3xl font-bold mb-3">تواصل معنا</h2>
          <p className="mb-2 flex items-center gap-2 text-sm md:text-base">
            <i className="fas fa-phone-alt text-blue-600"></i> 01012345678
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-800 hover:text-blue-500 font-semibold text-sm md:text-base"
          >
            <i className="fab fa-instagram"></i> تابعنا على انستجرام
          </a>
        </div>
      </footer>
    </div>
  );
}
