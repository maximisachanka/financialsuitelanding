import { useState } from 'react';
import svgPaths from "../imports/svg-cogyjin2po";
import img599151 from "figma:asset/d49350460393f2d896c13e87d9ce7a1de715d770.png";
import imgHandDrawnInternationalTradeIllustrated1 from "figma:asset/360892e9378ede21394b51e62f6c410f09f4c0ec.png";
import imgHandDrawnInternationalTradeIllustrated2 from "figma:asset/6f153b9573f5f80d955e408cf347b79f8e2e607f.png";
import imgRectangle13 from "figma:asset/a6488a415e70d0f5731f542991b72ec3a8cae0e8.png";
import imgRectangle14 from "figma:asset/abcaab10079b498b22949a643f21a26dc39c5c51.png";
import imgRectangle15 from "figma:asset/4938db95a51ca2e4b9bc652ba753e4b7f2dab352.png";
import imgRectangle19 from "figma:asset/34cfac362a8aab00bb1d221e59d1682842e334b8.png";
import imgRectangle16 from "figma:asset/d7c829e6446a0d7cc043742324fd93fbd577c595.png";
import imgRectangle18 from "figma:asset/c1f7e99461eab8ee8f09fe6da69846f88cafaf6e.png";
import imgRectangle17 from "figma:asset/3692ab8bac828eea8f9c57d3164dc4f8120ab41b.png";
import imgUploadFile47255731 from "figma:asset/532e1c6a1cfcaaa912587bdce67034f3654b4de2.png";
import imgComputerScreenTransparentFreePng1 from "figma:asset/f554ef86411292e8560ed8724188cee18be01f76.png";
import imgImage20 from "figma:asset/7d335d71137e03ee85d696f5e82186da4bb6c8df.png";
import imgPdf931 from "figma:asset/4fe3b3a6749c5e0517df48685236b67bca69b9b5.png";
import dollarIcon from "../assets/dollar.png";
import { useLocalization } from '../context/LocalizationContext';
import { sendDemoFormEmail } from '../services/emailService';
import { useAlert } from '../context/AlertContext';
import '../styles/FormStyles.css';

// Hero Section
function HeroSection() {
  const { t } = useLocalization();

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-[154px] py-12 sm:py-16 lg:py-24 overflow-hidden" data-aos="fade-up">
      {/* Background gradient circles with animation */}
      <div className="absolute -left-40 top-0 w-[400px] h-[400px] lg:w-[696px] lg:h-[696px] opacity-10 pointer-events-none animate-pulse">
        <svg className="w-full h-full" viewBox="0 0 696 696">
          <defs>
            <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="130" />
            </filter>
          </defs>
          <circle cx="348" cy="348" r="218" fill="#5A7FF8" filter="url(#blur1)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8 lg:gap-10">
          <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] relative transform hover:scale-110 transition-transform duration-500 animate-[bounce_2s_ease-in-out_infinite]">
            <img alt="Dollar icon" className="w-full h-full object-contain drop-shadow-2xl" src={dollarIcon} />
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] lg:leading-[80px] text-[#1a1a1a] max-w-[1204px] mx-auto tracking-[-1.28px] animate-[fadeIn_1s_ease-in]">
              {t.hero.title}
            </h1>
            <p className="font-medium text-base sm:text-lg lg:text-xl leading-[32px] text-[rgba(36,54,94,0.4)] max-w-2xl mx-auto animate-[fadeIn_1.5s_ease-in]">
              {t.hero.subtitle}
            </p>
          </div>

          <a href="#demo-form" className="bg-[#5a7ff8] text-white font-bold px-8 sm:px-12 lg:px-[47px] py-3 sm:py-4 lg:h-[64px] rounded-full text-sm sm:text-base hover:bg-[#4968d4] hover:shadow-[0_8px_30px_rgba(90,127,248,0.5)] hover:scale-105 transform transition-all duration-300 shadow-lg animate-[fadeIn_2s_ease-in] inline-flex items-center justify-center cursor-pointer">
            {t.hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const { t } = useLocalization();
  const { showAlert } = useAlert();
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await sendDemoFormEmail(formData);

    if (result.success) {
      setFormData({ name: '', email: '', company: '' });
      showAlert('success', t.alerts.formSuccess);
    } else {
      showAlert('error', t.alerts.formError);
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-[112px] py-12 sm:py-16 lg:py-[64px]">
      <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-16 lg:space-y-[64px]">
        {/* Feature Card 1 */}
        <div id="demo-form" className="bg-[#f9fafd] rounded-[49px] p-6 sm:p-12 lg:p-[72px] lg:px-[104px] hover:shadow-2xl transition-all duration-500 hover:bg-white" data-aos="fade-right">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-[1216px] mx-auto">
            <div className="space-y-6 order-2 lg:order-1 mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-12 h-12 bg-[#5a7ff8] rounded-2xl flex items-center justify-center transform hover:rotate-12 hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p2e849180} fill="white" />
                  <path d={svgPaths.p2afac1e0} fill="white" />
                </svg>
              </div>
              <p className="font-bold text-xs sm:text-[12px] text-[#5a7ff8] tracking-[0.84px] uppercase">{t.features.reduce.badge}</p>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px] text-black tracking-[-0.8px]">{t.features.reduce.title}</h2>
              <p className="font-semibold text-sm sm:text-[15px] leading-[24px] text-[#24365e] opacity-[0.33] max-w-[304px]">
                {t.features.reduce.subtitle}
              </p>

              <form className="space-y-4 max-w-[298px] w-full" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={`${t.features.reduce.form.name} *`}
                    className="w-full px-4 py-3 border-2 border-black/40 rounded-2xl text-base font-semibold text-black/80 bg-white focus:border-[#5a7ff8] focus:ring-0 focus:shadow-[0_0_0_3px_rgba(90,127,248,0.2)] focus:outline-none transition-all duration-300 hover:border-[#5a7ff8]/60 placeholder:text-black/40 placeholder:font-semibold"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={`${t.features.reduce.form.email} *`}
                    className="w-full px-4 py-3 border-2 border-black/40 rounded-2xl text-base font-semibold text-black/80 bg-white focus:border-[#5a7ff8] focus:ring-0 focus:shadow-[0_0_0_3px_rgba(90,127,248,0.2)] focus:outline-none transition-all duration-300 hover:border-[#5a7ff8]/60 placeholder:text-black/40 placeholder:font-semibold"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={`${t.features.reduce.form.company} *`}
                    className="w-full px-4 py-3 border-2 border-black/40 rounded-2xl text-base font-semibold text-black/80 bg-white focus:border-[#5a7ff8] focus:ring-0 focus:shadow-[0_0_0_3px_rgba(90,127,248,0.2)] focus:outline-none transition-all duration-300 hover:border-[#5a7ff8]/60 placeholder:text-black/40 placeholder:font-semibold"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#5a7ff8] text-white font-bold h-[42px] px-8 rounded-full text-sm hover:bg-[#4968d4] hover:shadow-[0_8px_20px_rgba(90,127,248,0.4)] hover:scale-105 transform transition-all duration-300 shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer w-full"
                >
                  {isSubmitting ? 'Sending...' : t.features.reduce.form.submit}
                </button>
              </form>
            </div>

            <div className="order-1 lg:order-2 hidden lg:block">
              <div className="relative hover:scale-105 transition-transform duration-500">
                <img alt="Computer screen" className="w-full drop-shadow-2xl" src={imgComputerScreenTransparentFreePng1} />
                <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-8">
                  <img alt="Dashboard" className="w-3/4 lg:w-4/5 h-auto object-contain" src={imgImage20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Card 2 */}
        <div className="bg-[#f9fafd] rounded-[49px] p-6 sm:p-12 lg:p-[72px] lg:px-[104px] hover:shadow-2xl transition-all duration-500 hover:bg-white" data-aos="fade-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-[1216px] mx-auto">
            <div className="grid grid-cols-2 gap-[10px]">
              <img alt="Chart" className="rounded-xl w-full h-auto transform hover:scale-105 hover:rotate-2 transition-all duration-300 shadow-md hover:shadow-xl" src={imgRectangle17} />
              <img alt="Chart" className="rounded-xl w-full h-auto transform hover:scale-105 hover:-rotate-2 transition-all duration-300 shadow-md hover:shadow-xl" src={imgRectangle19} />
              <img alt="Chart" className="rounded-xl w-full h-auto transform hover:scale-105 hover:-rotate-2 transition-all duration-300 shadow-md hover:shadow-xl" src={imgRectangle18} />
              <img alt="Chart" className="rounded-xl w-full h-auto transform hover:scale-105 hover:rotate-2 transition-all duration-300 shadow-md hover:shadow-xl" src={imgRectangle16} />
            </div>

            <div className="space-y-6 lg:space-y-4 max-w-[445px]">
              <div className="space-y-8">
                <div className="w-12 h-12 bg-[#5a7ff8] rounded-2xl flex items-center justify-center transform hover:rotate-12 hover:scale-110 transition-transform duration-300 shadow-lg">
                  <p className="text-white text-[40px] leading-[24px] font-bold">?</p>
                </div>
                <p className="font-bold text-xs sm:text-[12px] text-[#5a7ff8] tracking-[0.84px] uppercase">{t.features.whyUs.badge}</p>
              </div>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px] text-black tracking-[-0.8px]" dangerouslySetInnerHTML={{ __html: t.features.whyUs.title }} />

              <div className="space-y-4">
                <p className="font-semibold text-[15px] leading-[24px] text-black">{t.features.whyUs.organize}</p>
                <div className="space-y-2">
                  {t.features.whyUs.points.map((text, i) => (
                    <div key={i} className="flex gap-2 items-start group hover:translate-x-2 transition-transform duration-300">
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 16 12">
                        <path d={svgPaths.p3b328f80} stroke="#5A7FF8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                      </svg>
                      <p className="font-semibold text-[15px] leading-[24px] text-[#24365e] opacity-[0.88] group-hover:opacity-100 transition-opacity duration-300">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Us Section
function WhyUsSection() {
  const { t } = useLocalization();

  return (
    <section id="why-us" className="relative w-full px-4 sm:px-8 lg:px-[112px] py-12 sm:py-16 lg:py-[88px] lg:pb-[136px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 mb-12 sm:mb-16" data-aos="fade-up">
          <p className="font-bold text-xs sm:text-[13px] text-[#5a7ff8] tracking-[0.91px] uppercase">{t.whyUsSection.badge}</p>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px] text-black tracking-[-0.8px]">
            {t.whyUsSection.title}
          </h2>
          <p className="font-medium text-base sm:text-lg lg:text-xl leading-[32px] text-[rgba(36,54,94,0.4)] max-w-[962px] mx-auto">
            {t.whyUsSection.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 lg:gap-[112px] mb-12 sm:mb-16">
          {t.whyUsSection.audiences.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-6 group" data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-[200px] lg:h-[200px] rounded-[33px] overflow-hidden bg-[#e4eaff] transform group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-3">
                <img alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={[imgRectangle13, imgRectangle14, imgRectangle15][i]} />
              </div>
              <div className="max-w-[308px]">
                <p className="font-bold text-lg sm:text-[21px] leading-[24px] text-black mb-1 group-hover:text-[#5a7ff8] transition-colors duration-300">{item.title}</p>
                <p className="font-medium text-sm sm:text-base leading-[32px] text-[rgba(36,54,94,0.4)] group-hover:text-[rgba(36,54,94,0.6)] transition-colors duration-300">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <p className="font-bold text-xl sm:text-2xl leading-[48px] text-[rgba(36,54,94,0.4)] max-w-[750px] mx-auto tracking-[-0.48px]">
            {t.whyUsSection.bottomText}
          </p>
          <a href="#demo-form" className="bg-[#5a7ff8] text-white font-bold px-8 py-3 h-[42px] rounded-full text-sm hover:bg-[#4968d4] hover:shadow-[0_8px_20px_rgba(90,127,248,0.4)] hover:scale-105 transform transition-all duration-300 shadow-md inline-flex items-center justify-center cursor-pointer">
            {t.whyUsSection.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const { t } = useLocalization();

  const images = [imgUploadFile47255731, imgRectangle16, imgPdf931];

  return (
    <section id="how-it-works" className="relative w-full px-4 sm:px-8 lg:px-[112px] py-12 sm:py-16 lg:py-[112px] lg:pb-[64px] bg-[#f9fafd]">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 mb-12 sm:mb-16 lg:mb-20" data-aos="fade-up">
          <p className="font-bold text-xs sm:text-[13px] text-[#5a7ff8] tracking-[0.91px] uppercase">{t.howItWorks.badge}</p>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px] text-black tracking-[-0.8px]">
            {t.howItWorks.title}
          </h2>
          <p className="font-medium text-base sm:text-lg lg:text-xl leading-[32px] text-[rgba(36,54,94,0.4)] max-w-[962px] mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-[1216px] mx-auto">
          {t.howItWorks.steps.map((step, i) => (
            <div key={i} className="bg-white rounded-[21px] p-6 sm:p-8 shadow-[5px_4px_15px_0px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_0px_rgba(90,127,248,0.3)] relative min-h-[380px] sm:min-h-[440px] flex flex-col items-center group hover:scale-105 hover:-translate-y-2 transition-all duration-500" data-aos="flip-left" data-aos-delay={i * 150}>
              <div className="absolute top-0 left-0 bg-neutral-50 group-hover:bg-[#5a7ff8] rounded-br-[20px] rounded-tl-[21px] px-4 py-2 transition-all duration-300">
                <p className="font-bold text-xl sm:text-2xl leading-[48px] text-[#5a7ff8] group-hover:text-white tracking-[-0.48px] transition-colors duration-300">{i + 1}</p>
              </div>
              <div className="w-32 h-32 sm:w-[180px] sm:h-[180px] mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 mt-12">
                <img alt={step.title} className="max-w-full max-h-full object-contain drop-shadow-lg" src={images[i]} />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-black group-hover:text-[#5a7ff8] transition-colors duration-300">{step.title}</h3>
                <p className="font-medium text-sm sm:text-base text-[rgba(36,54,94,0.6)] group-hover:text-[rgba(36,54,94,0.8)] transition-colors duration-300">{step.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// What We Do Section
function WhatWeDoSection() {
  const { t } = useLocalization();

  const featureData = [
    {
      image: img599151,
      bg: 'bg-[#e4eaff]',
      textColor: 'text-[#5a7ff8]'
    },
    {
      image: imgHandDrawnInternationalTradeIllustrated1,
      bg: 'bg-[#edeefc]',
      textColor: 'text-[#24365e]'
    },
    {
      image: imgHandDrawnInternationalTradeIllustrated2,
      bg: 'bg-[#e4eaff]',
      textColor: 'text-[#24365e]'
    }
  ];

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-[120px] py-12 sm:py-16 lg:py-[65px] lg:pb-[120px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 mb-12 sm:mb-16" data-aos="fade-up">
          <p className="font-bold text-xs sm:text-[13px] text-[#5a7ff8] tracking-[0.91px] uppercase">{t.whatWeDo.badge}</p>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px] text-black tracking-[-0.8px]">
            {t.whatWeDo.title}
          </h2>
          <p className="font-medium text-base sm:text-lg lg:text-xl leading-[32px] text-[rgba(36,54,94,0.4)] max-w-[962px] mx-auto">
            {t.whatWeDo.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-9">
          {t.whatWeDo.features.map((feature, i) => (
            <div key={i} className={`${featureData[i].bg} rounded-[27px] p-6 sm:p-10 lg:p-[40px] lg:py-[64px] flex flex-col items-center text-center gap-6 sm:gap-[35px] min-h-[400px] lg:h-[557px] justify-center group hover:shadow-2xl hover:scale-105 transform transition-all duration-500 hover:-translate-y-3`} data-aos="fade-up" data-aos-delay={i * 100}>
              <p className={`font-bold text-xs sm:text-sm ${featureData[i].textColor} tracking-[2px] sm:tracking-[2.38px] uppercase group-hover:scale-110 transition-transform duration-300`}>{feature.label}</p>
              <div className="w-48 h-48 sm:w-64 sm:h-[228px] lg:w-[295px] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <img alt={feature.title} className="max-w-full max-h-full object-contain drop-shadow-xl" src={featureData[i].image} />
              </div>
              <div className="w-full h-px bg-black/10 max-w-[274px] group-hover:bg-[#5a7ff8] transition-colors duration-300" />
              <p className="font-bold text-xl sm:text-2xl lg:text-[36px] lg:leading-[40px] text-black group-hover:text-[#5a7ff8] transition-colors duration-300">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// FAQ Section
function FAQSection() {
  const { t } = useLocalization();

  const faqIcons = [
    { iconPath: svgPaths.p3ed0df70 },
    { iconPaths: [svgPaths.p39578340, svgPaths.p12cb5b00] },
    { iconPath: svgPaths.p229201f0 },
    { iconPaths: [svgPaths.p3fbfaa00, svgPaths.p30b82adc, svgPaths.p1f09d040] }
  ];

  return (
    <section id="faq" className="relative w-full px-4 sm:px-8 lg:px-[112px] py-12 sm:py-16 lg:py-[88px] bg-white">
      <div className="max-w-[1216px] mx-auto">
        <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 mb-12 sm:mb-16" data-aos="fade-up">
          <p className="font-bold text-xs sm:text-[13px] text-[#5a7ff8] tracking-[0.91px] uppercase">{t.faq.badge}</p>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px] text-black tracking-[-0.8px]">
            {t.faq.title}
          </h2>
          <p className="font-medium text-base sm:text-lg lg:text-xl leading-[32px] text-[rgba(36,54,94,0.4)]">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-x-[72px] lg:gap-y-12">
          {t.faq.questions.map((faq, i) => (
            <div key={i} className="space-y-4 group hover:bg-white hover:p-6 hover:rounded-3xl hover:shadow-xl transition-all duration-500" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] border-2 border-[#5a7ff8] rounded-2xl flex-shrink-0 flex items-center justify-center p-3 group-hover:bg-[#5a7ff8] group-hover:scale-110 transition-all duration-300">
                  {i === 0 && (
                    <svg className="w-full h-full group-hover:[&_path]:fill-white transition-all duration-300" fill="none" viewBox="0 0 54 54">
                      <path d={faqIcons[i].iconPath} fill="#5A7FF8" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg className="w-full h-full group-hover:[&_path]:stroke-white group-hover:[&_path]:fill-white transition-all duration-300" fill="none" viewBox="0 0 48 48">
                      <path d={faqIcons[i].iconPaths[0]} stroke="#5A7FF8" strokeWidth="4" />
                      <path d={faqIcons[i].iconPaths[1]} fill="#5A7FF8" />
                      <path d="M16 24H32" stroke="#5A7FF8" strokeLinecap="round" strokeWidth="4" />
                      <path d="M16 31H27" stroke="#5A7FF8" strokeLinecap="round" strokeWidth="4" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg className="w-full h-full group-hover:[&_path]:stroke-white transition-all duration-300" fill="none" viewBox="0 0 48 48">
                      <path clipRule="evenodd" d={faqIcons[i].iconPath} fillRule="evenodd" stroke="#5A7FF8" strokeLinejoin="round" strokeWidth="4" />
                      <path d="M4 14L24 24" stroke="#5A7FF8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                      <path d="M24 44V24" stroke="#5A7FF8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                      <path d="M44 14L24 24" stroke="#5A7FF8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                    </svg>
                  )}
                  {i === 3 && (
                    <svg className="w-full h-full group-hover:[&_path]:stroke-white transition-all duration-300" fill="none" viewBox="0 0 48 48">
                      <path d={faqIcons[i].iconPaths[0]} stroke="#5A7FF8" strokeWidth="4" />
                      <path d={faqIcons[i].iconPaths[1]} stroke="#5A7FF8" strokeWidth="4" />
                      <path d={faqIcons[i].iconPaths[2]} stroke="#5A7FF8" strokeLinecap="round" strokeWidth="4" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-black mb-3">{faq.question}</h3>
                  <p className="font-medium text-sm sm:text-base lg:text-xl text-[rgba(36,54,94,0.4)]">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main Home Page Component
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <WhyUsSection />
      <HowItWorksSection />
      <WhatWeDoSection />
      <FAQSection />
    </>
  );
}
