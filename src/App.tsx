import svgPaths from "./imports/svg-cogyjin2po";
import imgEllipse1 from "figma:asset/3484287c39d20ad9e78c4e35767fbf8aafcd06b8.png";
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
import imgDollarMoneyBubbleSpeechSignSymbolIcon3DRendering1 from "figma:asset/dab8524954a5fe497d4d1edb8c7b2d895ef5ec5e.png";
import img128X1281 from "figma:asset/fb623f6b059b888cf4155f7c95166d688f80915a.png";
import imgPdf931 from "figma:asset/4fe3b3a6749c5e0517df48685236b67bca69b9b5.png";
import imgUploadFile47255731 from "figma:asset/532e1c6a1cfcaaa912587bdce67034f3654b4de2.png";
import imgComputerScreenTransparentFreePng1 from "figma:asset/f554ef86411292e8560ed8724188cee18be01f76.png";
import imgImage20 from "figma:asset/7d335d71137e03ee85d696f5e82186da4bb6c8df.png";
import dollarIcon from "./assets/dollar.png";
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Header Component
function Header() {
  return (
    <header className="w-full px-4 sm:px-8 lg:px-[154px] py-6 lg:py-10">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" src={img128X1281} />
          <p className="font-bold text-lg sm:text-xl lg:text-2xl text-[#5a7ff8]">FinancialSuite</p>
        </div>

        <nav className="hidden md:flex items-center gap-8 lg:gap-14">
          <a href="#why-us" className="font-bold text-sm lg:text-base text-black hover:text-[#5a7ff8] transition-colors">Why Us</a>
          <a href="#how-it-works" className="font-bold text-sm lg:text-base text-black hover:text-[#5a7ff8] transition-colors">How It Works</a>
          <a href="#faq" className="font-bold text-sm lg:text-base text-black hover:text-[#5a7ff8] transition-colors">FAQ</a>
          <button className="border-2 border-[#5a7ff8] text-[#5a7ff8] font-bold px-6 py-2 sm:px-8 sm:py-3 rounded-full text-sm hover:bg-[#5a7ff8] hover:text-white transition-colors">
            TRY A DEMO
          </button>
        </nav>
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
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
              Cut your fixed costs by 40-50% with AI-Powered optimization tool
            </h1>
            <p className="font-medium text-base sm:text-lg lg:text-xl leading-[32px] text-[rgba(36,54,94,0.4)] max-w-2xl mx-auto animate-[fadeIn_1.5s_ease-in]">
              Automate expense analysis, eliminate manual work, and save time and money
            </p>
          </div>

          <button className="bg-[#5a7ff8] text-white font-bold px-8 sm:px-12 lg:px-[47px] py-3 sm:py-4 lg:h-[64px] rounded-full text-sm sm:text-base hover:bg-[#4968d4] hover:shadow-[0_8px_30px_rgba(90,127,248,0.5)] hover:scale-105 transform transition-all duration-300 shadow-lg animate-[fadeIn_2s_ease-in]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

// Features Section - две карточки идут сразу после Hero
function FeaturesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-[112px] py-12 sm:py-16 lg:py-[64px]">
      <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-16 lg:space-y-[64px]">
        {/* Feature Card 1 - Ready to reduce costs */}
        <div className="bg-[#f9fafd] rounded-[49px] p-6 sm:p-12 lg:p-[72px] lg:px-[104px] hover:shadow-2xl transition-all duration-500 hover:bg-white" data-aos="fade-right">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-[1216px] mx-auto">
            <div className="space-y-6 order-2 lg:order-1 mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-12 h-12 bg-[#5a7ff8] rounded-2xl flex items-center justify-center transform hover:rotate-12 hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p2e849180} fill="white" />
                  <path d={svgPaths.p2afac1e0} fill="white" />
                </svg>
              </div>
              <p className="font-bold text-xs sm:text-[12px] text-[#5a7ff8] tracking-[0.84px] uppercase">Real Results from Real Companies</p>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px] text-black tracking-[-0.8px]">Ready to reduce costs?</h2>
              <p className="font-semibold text-sm sm:text-[15px] leading-[24px] text-[#24365e] opacity-[0.33] max-w-[304px]">
                Try our free demo and get a customized optimization report
              </p>

              <form className="space-y-4 max-w-[298px] w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-[40px] px-4 py-3 border border-[rgba(0,0,0,0.4)] rounded-2xl text-base font-bold text-[rgba(0,0,0,0.4)] bg-white focus:border-[#5a7ff8] focus:ring-2 focus:ring-[#5a7ff8]/20 focus:outline-none transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-[40px] px-4 py-3 border border-[rgba(0,0,0,0.4)] rounded-2xl text-base font-bold text-[rgba(0,0,0,0.4)] bg-white focus:border-[#5a7ff8] focus:ring-2 focus:ring-[#5a7ff8]/20 focus:outline-none transition-all duration-300"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full h-[40px] px-4 py-3 border border-[rgba(0,0,0,0.4)] rounded-2xl text-base font-bold text-[rgba(0,0,0,0.4)] bg-white focus:border-[#5a7ff8] focus:ring-2 focus:ring-[#5a7ff8]/20 focus:outline-none transition-all duration-300"
                />
                <button className="bg-[#5a7ff8] text-white font-bold h-[42px] px-8 rounded-full text-sm hover:bg-[#4968d4] hover:shadow-[0_8px_20px_rgba(90,127,248,0.4)] hover:scale-105 transform transition-all duration-300 shadow-md">
                  Submit request
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

        {/* Feature Card 2 - Why FinancialSuite */}
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
                <p className="font-bold text-xs sm:text-[12px] text-[#5a7ff8] tracking-[0.84px] uppercase">Why Choose Us</p>
              </div>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px] text-black tracking-[-0.8px]">
                Why <span className="text-[#5a7ff8]">FinancialSuite</span> Stands Out
              </h2>

              <div className="space-y-4">
                <p className="font-semibold text-[15px] leading-[24px] text-black">Organize yourself financially by:</p>
                <div className="space-y-2">
                  {[
                    'AI over consultants (deep, automated analysis — no human middlemen)',
                    'Save up to 50% (optimize fixed costs: office rent, telecom, outsourced services)',
                    'Zero implementation hassle (just upload your P&L — we handle the rest)',
                    'Enterprise-grade security (your data stays private on our servers)'
                  ].map((text, i) => (
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
  const audiences = [
    {
      image: imgRectangle13,
      title: 'Mid-sized and large businesses',
      subtitle: '(IT, manufacturing, retail)'
    },
    {
      image: imgRectangle14,
      title: 'CFOs and finance managers',
      subtitle: '(across all industries)'
    },
    {
      image: imgRectangle15,
      title: 'Small business owners',
      subtitle: '(without dedicated finance staff)'
    }
  ];

  return (
    <section id="why-us" className="relative w-full px-4 sm:px-8 lg:px-[112px] py-12 sm:py-16 lg:py-[88px] lg:pb-[136px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 mb-12 sm:mb-16" data-aos="fade-up">
          <p className="font-bold text-xs sm:text-[13px] text-[#5a7ff8] tracking-[0.91px] uppercase">For Whom</p>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px] text-black tracking-[-0.8px]">
            Built for CFOs, Finance Teams, and Business Owner
          </h2>
          <p className="font-medium text-base sm:text-lg lg:text-xl leading-[32px] text-[rgba(36,54,94,0.4)] max-w-[962px] mx-auto">
            If you're still analyzing expenses manually, we've got your back
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 lg:gap-[112px] mb-12 sm:mb-16">
          {audiences.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-6 group" data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-[200px] lg:h-[200px] rounded-[33px] overflow-hidden bg-[#e4eaff] transform group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-3">
                <img alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={item.image} />
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
            No time for expense analysis? Excel and manual research are outdated!
          </p>
          <button className="bg-[#5a7ff8] text-white font-bold px-8 py-3 h-[42px] rounded-full text-sm hover:bg-[#4968d4] hover:shadow-[0_8px_20px_rgba(90,127,248,0.4)] hover:scale-105 transform transition-all duration-300 shadow-md">
            Try a free demo
          </button>
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      image: imgUploadFile47255731,
      title: 'Upload data',
      subtitle: '(P&L report)'
    },
    {
      number: '2',
      image: imgRectangle16,
      title: 'AI Analysis & Negotiation',
      subtitle: '(AI contacts vendors for alternatives)'
    },
    {
      number: '3',
      image: imgPdf931,
      title: 'Get your report',
      subtitle: '(actionable recommendations + savings estimate)'
    }
  ];

  return (
    <section id="how-it-works" className="relative w-full px-4 sm:px-8 lg:px-[112px] py-12 sm:py-16 lg:py-[112px] lg:pb-[64px] bg-[#f9fafd]">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 mb-12 sm:mb-16 lg:mb-20" data-aos="fade-up">
          <p className="font-bold text-xs sm:text-[13px] text-[#5a7ff8] tracking-[0.91px] uppercase">How it Works?</p>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px] text-black tracking-[-0.8px]">
            Optimize expenses in 3 simple steps
          </h2>
          <p className="font-medium text-base sm:text-lg lg:text-xl leading-[32px] text-[rgba(36,54,94,0.4)] max-w-[962px] mx-auto">
            Typical turnaround: 3–7 days
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-[1216px] mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="bg-white rounded-[21px] p-6 sm:p-8 shadow-[5px_4px_15px_0px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_0px_rgba(90,127,248,0.3)] relative min-h-[380px] sm:min-h-[440px] flex flex-col items-center group hover:scale-105 hover:-translate-y-2 transition-all duration-500" data-aos="flip-left" data-aos-delay={i * 150}>
              <div className="absolute top-0 left-0 bg-neutral-50 group-hover:bg-[#5a7ff8] rounded-br-[20px] rounded-tl-[21px] px-4 py-2 transition-all duration-300">
                <p className="font-bold text-xl sm:text-2xl leading-[48px] text-[#5a7ff8] group-hover:text-white tracking-[-0.48px] transition-colors duration-300">{step.number}</p>
              </div>
              <div className="w-32 h-32 sm:w-[180px] sm:h-[180px] mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 mt-12">
                <img alt={step.title} className="max-w-full max-h-full object-contain drop-shadow-lg" src={step.image} />
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
  const features = [
    {
      label: 'First',
      image: img599151,
      title: 'P&L and bank transaction analysis',
      bg: 'bg-[#e4eaff]',
      textColor: 'text-[#5a7ff8]'
    },
    {
      label: 'Second',
      image: imgHandDrawnInternationalTradeIllustrated1,
      title: 'Vendor alternatives (rent, telecom, etc.)',
      bg: 'bg-[#edeefc]',
      textColor: 'text-[#24365e]'
    },
    {
      label: 'Third',
      image: imgHandDrawnInternationalTradeIllustrated2,
      title: 'Cash flow forecasting (coming soon)',
      bg: 'bg-[#e4eaff]',
      textColor: 'text-[#24365e]'
    }
  ];

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-[120px] py-12 sm:py-16 lg:py-[65px] lg:pb-[120px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 mb-12 sm:mb-16" data-aos="fade-up">
          <p className="font-bold text-xs sm:text-[13px] text-[#5a7ff8] tracking-[0.91px] uppercase">What We Do</p>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px] text-black tracking-[-0.8px]">
            How FinancialSuite works
          </h2>
          <p className="font-medium text-base sm:text-lg lg:text-xl leading-[32px] text-[rgba(36,54,94,0.4)] max-w-[962px] mx-auto">
            F-Suite is an AI-powered solution for CFOs and finance teams that analyzes P&L, identifies hidden cost-saving opportunities, and delivers actionable recommendations — all in days, not weeks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-9">
          {features.map((feature, i) => (
            <div key={i} className={`${feature.bg} rounded-[27px] p-6 sm:p-10 lg:p-[40px] lg:py-[64px] flex flex-col items-center text-center gap-6 sm:gap-[35px] min-h-[400px] lg:h-[557px] justify-center group hover:shadow-2xl hover:scale-105 transform transition-all duration-500 hover:-translate-y-3`} data-aos="fade-up" data-aos-delay={i * 100}>
              <p className={`font-bold text-xs sm:text-sm ${feature.textColor} tracking-[2px] sm:tracking-[2.38px] uppercase group-hover:scale-110 transition-transform duration-300`}>{feature.label}</p>
              <div className="w-48 h-48 sm:w-64 sm:h-[228px] lg:w-[295px] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <img alt={feature.title} className="max-w-full max-h-full object-contain drop-shadow-xl" src={feature.image} />
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

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      company: 'IT FIRM',
      stat: 'Reduced accounting costs by 45%',
      quote: 'We used to spend weeks on expense analysis — now F-Suite does it in days.',
      author: 'Heiden Brown',
      position: 'CFO, X Company'
    },
    {
      company: 'Manufacturer',
      stat: 'Saved $12k/year on office rent',
      quote: 'We used to spend weeks on expense analysis — now F-Suite does it in days.',
      author: 'Heiden Brown',
      position: 'CFO, X Company'
    }
  ];

  return (
    <section id="reviews" className="relative w-full px-4 sm:px-8 lg:px-0 py-12 sm:py-16 lg:py-[64px] bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 mb-12 sm:mb-16 lg:mb-[88px]">
          <p className="font-bold text-xs sm:text-[13px] text-[#5a7ff8] tracking-[0.91px] uppercase">Case Studies</p>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px] text-black tracking-[-0.8px]">
            Real results from real companies
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-8 lg:px-[128px]">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-[#f4f6fa] rounded-[32px] p-6 sm:p-8 lg:p-[56px] lg:pt-[27px] lg:pb-[56px] space-y-6 lg:space-y-12 h-auto lg:h-[418px] flex flex-col group hover:bg-white hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-[72px] lg:h-[72px] bg-gray-200 rounded-full group-hover:bg-[#5a7ff8]/10 transition-colors duration-300" />
              <div className="space-y-4 flex-1">
                <p className="font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px] text-black tracking-[-0.8px] group-hover:text-[#5a7ff8] transition-colors duration-300">{testimonial.company}</p>
                <p className="font-medium text-lg sm:text-xl lg:text-2xl text-[#747474] group-hover:text-[#5a7ff8] transition-colors duration-300">{testimonial.stat}</p>
                <p className="font-bold text-lg sm:text-xl lg:text-2xl text-[#24365e] group-hover:text-black transition-colors duration-300">{testimonial.quote}</p>
              </div>
              <div className="flex items-center gap-4 pt-6">
                <img alt={testimonial.author} className="w-14 h-14 lg:w-[56px] lg:h-[56px] rounded-full group-hover:scale-110 transition-transform duration-300 shadow-md" src={imgEllipse1} />
                <div>
                  <p className="font-bold text-base sm:text-lg text-[#24365e]">{testimonial.author}</p>
                  <p className="text-sm sm:text-base text-black/40">{testimonial.position}</p>
                </div>
              </div>
              <button className="bg-[#5a7ff8] text-white font-bold px-6 py-2.5 h-[42px] rounded-full text-sm hover:bg-[#4968d4] hover:shadow-[0_8px_20px_rgba(90,127,248,0.4)] hover:scale-105 transform transition-all duration-300 shadow-md w-fit">
                Read case
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: 'How is my data secured?',
      answer: 'Your data is encrypted, stored securely, and never shared with third parties.',
      iconPath: svgPaths.p3ed0df70
    },
    {
      question: 'What data do I need to provide?',
      answer: 'Just upload your P&L statement — we\'ll handle the rest.',
      iconPaths: [svgPaths.p39578340, svgPaths.p12cb5b00]
    },
    {
      question: 'What\'s included in the demo?',
      answer: 'A full analysis of your P&L, savings opportunities, and actionable recommendations.',
      iconPath: svgPaths.p229201f0
    },
    {
      question: 'How much does F-suite cost?',
      answer: 'Pricing is based on your company\'s size and needs — get a free estimate after the demo.',
      iconPaths: [svgPaths.p3fbfaa00, svgPaths.p30b82adc, svgPaths.p1f09d040]
    }
  ];

  return (
    <section id="faq" className="relative w-full px-4 sm:px-8 lg:px-[112px] py-12 sm:py-16 lg:py-[88px] bg-white">
      <div className="max-w-[1216px] mx-auto">
        <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 mb-12 sm:mb-16" data-aos="fade-up">
          <p className="font-bold text-xs sm:text-[13px] text-[#5a7ff8] tracking-[0.91px] uppercase">FAQ</p>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px] text-black tracking-[-0.8px]">
            Frequently asked questions
          </h2>
          <p className="font-medium text-base sm:text-lg lg:text-xl leading-[32px] text-[rgba(36,54,94,0.4)]">
            Real results from real companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-x-[72px] lg:gap-y-12">
          {faqs.map((faq, i) => (
            <div key={i} className="space-y-4 group hover:bg-white hover:p-6 hover:rounded-3xl hover:shadow-xl transition-all duration-500" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] border-2 border-[#5a7ff8] rounded-2xl flex-shrink-0 flex items-center justify-center p-3 group-hover:bg-[#5a7ff8] group-hover:scale-110 transition-all duration-300">
                  {i === 0 && (
                    <svg className="w-full h-full group-hover:[&_path]:fill-white transition-all duration-300" fill="none" viewBox="0 0 54 54">
                      <path d={faq.iconPath} fill="#5A7FF8" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg className="w-full h-full group-hover:[&_path]:stroke-white group-hover:[&_path]:fill-white transition-all duration-300" fill="none" viewBox="0 0 48 48">
                      <path d={faq.iconPaths[0]} stroke="#5A7FF8" strokeWidth="4" />
                      <path d={faq.iconPaths[1]} fill="#5A7FF8" />
                      <path d="M16 24H32" stroke="#5A7FF8" strokeLinecap="round" strokeWidth="4" />
                      <path d="M16 31H27" stroke="#5A7FF8" strokeLinecap="round" strokeWidth="4" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg className="w-full h-full group-hover:[&_path]:stroke-white transition-all duration-300" fill="none" viewBox="0 0 48 48">
                      <path clipRule="evenodd" d={faq.iconPath} fillRule="evenodd" stroke="#5A7FF8" strokeLinejoin="round" strokeWidth="4" />
                      <path d="M4 14L24 24" stroke="#5A7FF8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                      <path d="M24 44V24" stroke="#5A7FF8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                      <path d="M44 14L24 24" stroke="#5A7FF8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                    </svg>
                  )}
                  {i === 3 && (
                    <svg className="w-full h-full group-hover:[&_path]:stroke-white transition-all duration-300" fill="none" viewBox="0 0 48 48">
                      <path d={faq.iconPaths[0]} stroke="#5A7FF8" strokeWidth="4" />
                      <path d={faq.iconPaths[1]} stroke="#5A7FF8" strokeWidth="4" />
                      <path d={faq.iconPaths[2]} stroke="#5A7FF8" strokeLinecap="round" strokeWidth="4" />
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

// Footer
function Footer() {
  return (
    <footer className="w-full px-4 sm:px-8 lg:px-[115px] py-12 sm:py-16 bg-[#f9fafd]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16" src={img128X1281} />
              <p className="font-bold text-xl sm:text-2xl text-[#5a7ff8]">FinancialSuite</p>
            </div>
            <p className="font-medium text-sm sm:text-base lg:text-xl text-[rgba(36,54,94,0.4)]">
              Cut your fixed costs by 40-50% with AI-Powered optimization tool
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:opacity-80 hover:scale-110 transform transition-all duration-300 hover:bg-[#5a7ff8]/10 rounded-full">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
                  <path d={svgPaths.paf75a00} stroke="#5A7FF8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                  <path d={svgPaths.p3dfecf70} stroke="#5A7FF8" strokeLinecap="round" strokeWidth="4" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:opacity-80 hover:scale-110 transform transition-all duration-300 hover:bg-[#5a7ff8]/10 rounded-full">
                <svg className="w-full h-full" fill="none" viewBox="0 0 36 36">
                  <path clipRule="evenodd" d={svgPaths.p242e9e00} fill="#5A7FF8" fillRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:opacity-80 hover:scale-110 transform transition-all duration-300 hover:bg-[#5a7ff8]/10 rounded-full">
                <svg className="w-full h-full" fill="none" viewBox="0 0 36 36">
                  <path d={svgPaths.pef95200} fill="#5A7FF8" />
                  <path d={svgPaths.p2a6c7600} fill="#5A7FF8" />
                  <path d={svgPaths.p10ee8380} fill="#5A7FF8" />
                  <path clipRule="evenodd" d={svgPaths.p33e89940} fill="#5A7FF8" fillRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-black">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="font-medium text-sm sm:text-base lg:text-xl text-[#24365e] hover:text-[#5a7ff8] transition-colors">Privacy policy</a></li>
              <li><a href="#" className="font-medium text-sm sm:text-base lg:text-xl text-[#24365e] hover:text-[#5a7ff8] transition-colors">Terms of services</a></li>
            </ul>
          </div>

          {/* Partnership */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-black">Partnership info</h3>
            <ul className="space-y-2">
              <li><a href="#" className="font-medium text-sm sm:text-base lg:text-xl text-[#24365e] hover:text-[#5a7ff8] transition-colors">Become a partner</a></li>
            </ul>

            <div className="pt-6 space-y-3">
              <h4 className="font-bold text-lg sm:text-xl lg:text-2xl text-black">Why partner with us?</h4>
              <ul className="space-y-2">
                {['Revenue share', 'White-label option', 'Exclusive perks', 'Seamless integration'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24">
                      <path d="M5 12L10 17L20 7" stroke="#5A7FF8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    <span className="font-medium text-sm sm:text-base lg:text-xl text-[#24365e]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How it works */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-black">How it works?</h3>
            <ul className="space-y-3">
              <li className="font-medium text-sm sm:text-base lg:text-xl text-[#24365e]">
                <span className="font-semibold text-[#5a7ff8]">1. Sign up</span>
                <span className="text-[rgba(36,54,94,0.4)]"> (Register as a partner in minutes.)</span>
              </li>
              <li className="font-medium text-sm sm:text-base lg:text-xl text-[#24365e]">
                <span className="font-semibold text-[#5a7ff8]">2. Promote</span>
                <span className="text-[rgba(36,54,94,0.4)]"> (Share F-Suite via emails, webinars, or 1:1 consultations.)</span>
              </li>
              <li className="font-medium text-sm sm:text-base lg:text-xl text-[#24365e]">
                <span className="font-semibold text-[#5a7ff8]">3. Earn</span>
                <span className="text-[rgba(36,54,94,0.4)]"> (Get paid for every successful conversion.)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Partner CTA */}
        <div className="border-t border-gray-200 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h3 className="font-bold text-xl sm:text-2xl text-black">Grow Your Revenue with F-Suite</h3>
              <p className="font-medium text-sm sm:text-base lg:text-xl text-[#24365e]">
                For accounting platforms, freelance advisors, consulting firms
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-xl sm:text-2xl text-black">Join now</h4>
              <form className="space-y-4 max-w-md">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-black/40 rounded-2xl text-sm sm:text-base bg-white focus:border-[#5a7ff8] focus:ring-2 focus:ring-[#5a7ff8]/20 focus:outline-none transition-all duration-300 hover:border-[#5a7ff8]/60"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-black/40 rounded-2xl text-sm sm:text-base bg-white focus:border-[#5a7ff8] focus:ring-2 focus:ring-[#5a7ff8]/20 focus:outline-none transition-all duration-300 hover:border-[#5a7ff8]/60"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 border border-black/40 rounded-2xl text-sm sm:text-base bg-white focus:border-[#5a7ff8] focus:ring-2 focus:ring-[#5a7ff8]/20 focus:outline-none transition-all duration-300 hover:border-[#5a7ff8]/60"
                />
                <button className="bg-[#5a7ff8] text-white font-bold px-8 py-3 rounded-full text-sm hover:bg-[#4968d4] hover:shadow-[0_8px_20px_rgba(90,127,248,0.4)] hover:scale-105 transform transition-all duration-300 shadow-md">
                  Submit request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden scroll-smooth">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <WhyUsSection />
      <HowItWorksSection />
      <WhatWeDoSection />
      <FAQSection />
      <Footer />
    </div>
  );
}