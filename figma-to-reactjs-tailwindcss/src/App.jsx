import React, { useState } from 'react'
import page1 from './assets/page1.png'
import placeholder from './assets/placeholder-Image.png'
import BrandLogo from "./assets/BrandLogo.png";
import card from './assets/card.jpg';
import logo from './assets/logo.png';
import Sidebtn from './assets/Side-btn.png';
import dropdown from './assets/dropdown.png';
import Instagram from './assets/Instagram.png';
import LinkedIn from './assets/LinkedIn.png';
import Youtube from './assets/YouTube.png';
import X from './assets/X.png';
import Facebook from './assets/Facebook.png';
import './index.css'

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropDownOpen, setIsMobileDropDownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <div className="max-w-11/12 mx-auto">
        <nav className="px-4 flex items-center h-16 justify-between">
          <div className="flex items-center space-x-6">
            <img src={BrandLogo} alt="Brand-logo" className="logo-size" />

            <ul className="hidden md:flex items-center space-x-6 font-roboto text-base">
              <li><a href="#" className="text-black">Services</a></li>
              <li><a href="#" className="text-black">Resources Hub</a></li>
              <li><a href="#" className="text-black">Our Work</a></li>

              <li className="relative" >
                <button className="flex items-center gap-1 text-black" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <span>About Us</span>
                  <img src={dropdown} alt="about-dropdown" className="ml-2 mt-1" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 bg-white border rounded shadow-lg hidden md:block">
                    <ul>
                      <li><a href="#" className="block text-black">Services</a></li>
                      <li><a href="#" className="text-black block">Resources Hub</a></li>
                      <li><a href="#" className="text-black block">Our Work</a></li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div className="hidden md:flex gap-2">
            <button className="border bg-white py-2 px-5"> Get In Touch</button>
            <button className="text-white bg-black py-2 px-5">Button</button>
          </div>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>☰</button>
          {isMobileMenuOpen && (
            <div className="md:hidden px-4 py-6 bg-white border-t">
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-black">Services</a></li>
                <li><a href="#" className="text-black">Resources Hub</a></li>
                <li><a href="#" className="text-black">Our Work</a></li>
                <li>
                  <button className="flex items-center gap-1 text-black" onClick={() => setIsMobileDropDownOpen(!isMobileDropDownOpen)}>
                    <span>About Us</span>
                    <img src={dropdown} alt="about-dropdown" className="ml-2 mt-1" />
                  </button>
                  {isMobileDropDownOpen && (
                    <div className="mt-2 w-full bg-white border rounded shadow-lg">
                      <ul>
                        <li><a href="#" className="text-black">Services</a></li>
                        <li><a href="#" className="text-black">Resources Hub</a></li>
                        <li><a href="#" className="text-black">Our Work</a></li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          )}
        </nav>

        <div className="pt-8 px-4 md:px-8 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="mb-4 text-base font-semibold">Page group one</p>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1 shrink-0" alt="page" />
                <div className="py-1 px-2">
                  <p className="text-base font-semibold">Page one</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1 shrink-0" alt="page" />
                <div className="py-1 px-2">
                  <p className="text-base font-semibold">Page Two</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1 shrink-0" alt="page" />
                <div className="py-1 px-2">
                  <p className="text-base font-semibold">Page Three</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1 shrink-0" alt="page" />
                <div className="py-1 px-2">
                  <p className="text-base font-semibold">Page Four</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-4 text-base font-semibold">Page group two</p>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1 shrink-0" alt="page" />
                <div className="py-1 px-2">
                  <p className="text-base font-semibold">Page Five</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1 shrink-0" alt="page" />
                <div className="py-1 px-2">
                  <p className="text-base font-semibold">Page Six</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1 shrink-0" alt="page" />
                <div className="py-1 px-2">
                  <p className="text-base font-semibold">Page Seven</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1 shrink-0" alt="page" />
                <div className="py-1 px-2">
                  <p className="text-base font-semibold">Page Eight</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-4 text-base font-semibold">Page group three</p>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1 shrink-0" alt="page" />
                <div className="py-1 px-2">
                  <p className="text-base font-semibold">Page Nine</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1 shrink-0" alt="page" />
                <div className="py-1 px-2">
                  <p className="text-base font-semibold">page Ten</p>
                  <h6 className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</h6>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1 shrink-0" alt="page" />
                <div className="py-1 px-2">
                  <p className="text-base font-semibold">page Eleven</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1 shrink-0" alt="page" />
                <div className="py-1 px-2">
                  <p className="text-base font-semibold">page Twelve</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-4 text-base font-semibold">Featured from Blog</p>
              <div className="mb-4">
                <img src={placeholder} alt="placeholder-image" className="img-medium" />
              </div>
              <div className="flex gap-2 flex-col">
                <p className="font-semibold text-base">Article Title</p>
                <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                <a href="#" className="underline text-sm font-normal">Read more</a>
              </div>
              <div className="pt-1 pb-1 mt-8">
                <button className="text-base font-normal gap-4 flex">Button <img src={Sidebtn} alt="" className="h-4 mt-1" /> </button>
              </div>
            </div>
          </div>
        </div >
      </div>

      <hr />

      <div className="max-w-11/12 mx-auto relative mt-16 h-460 sm:h-520 lg:h-640">
        <img src={card} alt="card" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <p className="text-2xl sm:text-4xl lg:text-5xl font-bold px-4 sm:px-8 lg:px-16 text-white mb-4 leading-[1.2]">
              Full-Service Digital Marketing Agency That Drives Revenue Growth</p>
            <p className="max-w-2xl text-xs sm:text-sm lg:text-base font-normal text-white leading-relaxed mx-auto">At Social Gamma, we build data-driven marketing systems designed to scale your visibility, conversions, and long-term growth. From SEO and paid media to social, content, and web development — we help brands outperform competitors and dominate their digital landscape.</p>
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              <button className="bg-white py-2 px-4 border border-white">Explore Services</button>
              <button className="text-white py-2 px-4 border border-white"> Get In Touch</button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-10 mx-auto max-w-7xl space-y-4 mt-28">
        <div className="text-center">
          <p className="font-semibold">What we do</p>
          <p className="mt-4 
          font-bold 
          text-2xl 
          sm:text-4xl 
          lg:text-5xl 
          leading-tight 
          mx-auto 
          max-w-3xl">Digital Marketing Services That Deliver Measurable Results  </p>
          <p className="font-normal mt-6 sm:mt-6">We focus on what directly impacts your bottom line</p>
        </div>
        <div className="mt-16">
          <div className="grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4 gap-8">
            <div className="border lg:col-span-1">
              <img src={placeholder} className=" h-40 w-full object-cover" alt="page" />
              <div className="py-3 px-6">
                <p className="font-semibold">Search</p>
                <p className="text-xl lg:text-2xl font-bold mt-2">Search Engine Optimization (SEO)</p>
                <p className="font-normal mt-4">Get found by the people looking for you right now.</p>
                <button className="font-normal mt-7">Explore &gt; </button>
              </div>
            </div>
            <div className="border lg:col-span-1">
              <img src={placeholder} className=" h-40 w-full object-cover" alt="page" />
              <div className="py-3 px-6">
                <p className="font-semibold">paid</p>
                <p className="text-xl lg:text-2xl font-bold mt-2">paid Advertising & performance Media</p>
                <p className="font-normal mt-4">Reach your audience with precision and scale your revenue fast.</p>
                <button className="font-normal mt-7">Explore &gt; </button>
              </div>
            </div>
            <div className="border lg:col-span-2">
              <div className="flex h-full">
                <img src={placeholder} className="w-80 object-cover" alt="page" />
                <div className="py-4 px-4 flex flex-col justify-center">
                  <p className="font-semibold">Social</p>
                  <p className="text-xl lg:text-2xl font-bold mt-2">Social Media Marketing & Management</p>
                  <p className="font-normal mt-4">Build community and engage customers where they spend their time.</p>
                  <div>
                    <button className="font-normal mt-7">Explore &gt; </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-10 mt-40 max-w-7xl  space-y-4 mx-auto">
        <div className="grid 
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4 
        gap-8">
          <div className="border lg:col-span-1">
            <img src={placeholder} className=" h-40 w-full object-cover" alt="page" />
            <div className="py-3 px-6">
              <p className="font-semibold">Web</p>
              <p className="text-xl lg:text-2xl font-bold mt-2">Web Design</p>
              <p className="font-normal mt-4">We design clean, modern, conversion-focused websites that elevate your brand and guide users seamlessly.</p>
              <button className="font-normal mt-7">Explore &gt; </button>
            </div>
          </div>
          <div className="border lg:col-span-1">
            <img src={placeholder} className=" h-40 w-full object-cover" alt="page" />
            <div className="py-3 px-6">
              <p className="font-semibold">Web</p>
              <p className="text-xl lg:text-2xl font-bold mt-2">Website Development</p>
              <p className="font-normal mt-4">We build fast, secure, scalable websites with strong technical foundations and smooth user functionality.</p>
              <button className="font-normal mt-7">Explore &gt; </button>

            </div>
          </div>
          <div className="border lg:col-span-2">
            <div className="flex h-full">
              <img src={placeholder} className="w-80 object-cover" alt="page" />
              <div className="py-4 px-4 flex flex-col justify-center">
                <p className="font-semibold">Branding</p>
                <p className="text-xl lg:text-2xl font-bold mt-2">Branding & Visual Identity</p>
                <p className="font-normal mt-4">We create cohesive brand identities and visuals that strengthen recognition and set you apart from competitors.</p>
                <div>
                  <button className="font-normal mt-7">Explore &gt; </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto max-w-5xl mt-14">
        <div className="text-center space-y-6">
          <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mx-auto text-center max-w-3xl">What Our Clients Say About Working With Social Gamma</p>
          <p className="font-normal text-sm">Discover feedback from our clients</p>
        </div>
        <div className="grid 
          grid-cols-1 
          md:grid-cols-3 
          gap-16">
          <div className="flex flex-col items-center px-6 text-center mt-14">
            <img src={logo} className="mb-4 object-cover" alt="page" />
            <p className="text-xs font-bold mx-auto">Ria’s innovative strategies have significantly improved our brand visibility and business growth. Her cutting-edge digital marketing approach increased our customer engagement and lead generation. Ria’s ability to align market trends with our business goals has been instrumental in our success.</p>
            <img src={placeholder} className="rounded-full w-10 h-10 mt-4" alt="page" />
            <p className="font-semibold">Srinivas Palle</p>
            <p className="text-xs">Cloudseals</p>
          </div>
          <div className="flex flex-col items-center px-6 text-center mt-14">
            <img src={logo} className="mb-4 object-cover" alt="page" />
            <p className="text-xs font-bold">Working with Ria and her Social Gamma team has been smooth and highly productive. They collaborate deeply, listen carefully, and deliver measurable results. Our online lead generation efficiency improved dramatically.</p>
            <img src={placeholder} className="rounded-full w-10 h-10 mt-4" alt="page" />
            <p className="font-semibold">Joe Krenson</p>
            <p className="text-xs">Netbrain Technologies</p>
          </div>
          <div className="flex flex-col items-center px-6 text-center mt-14">
            <img src={logo} className="mb-4 object-cover" alt="page" />
            <p className="text-xs font-bold">Social Gamma gives us the space to innovate and grow. Their ability to understand brand identity and creative execution is unmatched.</p>
            <img src={placeholder} className="rounded-full w-10 h-10 mt-4" alt="page" />
            <p className="font-semibold">Michael Pucci</p>
            <p className="text-xs">Cubicall</p>
          </div>
        </div>
      </div>

      <div className="mt-14 max-w-7xl mx-auto px-6">
        <div className="py-12 max-w-5xl mx-auto text-center space-y-4">
          <p className="font-semibold">Work</p>
          <p className="font-bold text-6xl max-w-4xl mx-auto leading-tight">Digital Marketing Campaigns That Moved the Needle</p>
          <p className="font-semibold mt-18">Real strategies. Real execution. Real business impact.</p>
        </div>

        <div className="border-2 mt-10 p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="font-bold text-4xl">Project name here</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 px-2 py-1 font-semibold text-sm">Paid ads</span>
                <span className="bg-gray-200 px-2 py-1 font-semibold text-sm">Conversion</span>
                <span className="bg-gray-200 px-2 py-1 font-semibold text-sm">Strategy</span>
              </div>
              <p className="max-w-xl mt-26 text-base leading-relaxed">A performance-driven paid strategy that increased revenue by 40% in three months through optimized targeting, refined messaging, and continuous scaling.</p>
              <div className="flex gap-6 items-center">
                <button className="border-2 px-6 py-3 font-normal">View</button>
                <button className="font-normal">Details &gt;</button>
              </div>
            </div>
            <img src={placeholder} className=" h-96 w-full object-cover" alt="page" />
          </div>
        </div>
      </div>

      <div className="mt-14 max-w-7xl mx-auto px-6">
        <div className="border-2 mt-10 p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="font-bold text-4xl">Project name here</p>
              <div className="flex flex-wrap gap-2">
                <a href="#" className="bg-gray-200 px-2 py-1 font-semibold text-sm">SEO</a>
                <a href="#" className="bg-gray-200 px-2 py-1 font-semibold text-sm">Organic</a>
                <a href="#" className="bg-gray-200 px-2 py-1 font-semibold text-sm">Rankings</a>
              </div>
              <p className="max-w-xl text-base mt-26 leading-relaxed">Strategic SEO improvements that elevated keyword rankings, increased impressions, and strengthened organic acquisition month after month.</p>
              <div className="flex gap-6 items-center">
                <button className="border-2 px-6 py-3">View</button>
                <button>Details &gt;</button>
              </div>
            </div>
            <img src={placeholder} className=" h-96 w-full object-cover" alt="page" />
          </div>
        </div>
      </div>

      <div className="mt-14 max-w-7xl mx-auto px-6">
        <div className="border-2 mt-20 p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="font-bold text-4xl">Project name here</p>
              <div className="flex flex-wrap gap-2">
                <a href="#" className="bg-gray-200 px-2 py-1 font-semibold text-sm">Social media</a>
                <a href="#" className="bg-gray-200 px-2 py-1 font-semibold text-sm">Community</a>
                <a href="#" className="bg-gray-200 px-2 py-1 font-semibold text-sm">Engagement</a>
              </div>
              <p className="max-w-xl mt-28 text-base leading-relaxed">Community-led strategies that generated higher engagement, meaningful interactions, and sustained brand visibility across channels.</p>
              <div className="flex gap-6 items-center">
                <button className="border-2 px-6 py-3">View</button>
                <button>Details &gt;</button>
              </div>
            </div>
            <img src={placeholder} className=" h-96 w-full object-cover" alt="page" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mt-24 mx-auto px-6 py-20 text-center space-y-6">
        <p className="font-semibold">Resources</p>
        <p className="font-bold text-6xl max-w-4xl mx-auto leading-tight">Explore Our Insights & Resources Hub</p>
        <p className="text-base mx-auto max-w-2xl leading-relaxed">Expert articles designed to help you improve visibility, optimise performance, and accelerate digital growth.</p>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-5">
            <img src={placeholder} className=" h-60 w-full object-cover" alt="page" />
            <span className="inline-block bg-gray-200 px-2 py-1 text-sm font-semibold">Strategy</span>
            <p className="text-xl font-bold leading-snug">What SEO really means for growth</p>
            <p className="leading-relaxed">Search visibility compounds over time. Here's how to build it right.</p>
            <button className="text-xs">6-min read &gt; </button>
          </div>
          <div className="space-y-5">
            <img src={placeholder} className="h-60 w-full object-cover" alt="page" />
            <span className="inline-block bg-gray-200 px-2 py-1 text-sm font-semibold">Copywriting</span>
            <p className="text-xl font-bold leading-snug">Words that convert without trying</p>
            <p className="leading-relaxed">The best copy doesn't feel like selling. It feels like understanding.</p>
            <button className="text-xs">4-min read &gt; </button>
          </div>
          <div className="space-y-5">
            <img src={placeholder} className=" h-60 w-full object-cover" alt="page" />
            <span className="inline-block bg-gray-200 px-2 py-1 text-sm font-semibold">Design</span>
            <p className="text-xl font-bold leading-snug">Why design systems matter</p>
            <p className="leading-relaxed">Consistency builds trust. A system keeps everything aligned and scalable.</p>
            <button className="text-xs">5-min read &gt; </button>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="border-2 px-6 py-2 font-normal">View all</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-48  px-6">
        <div className="relative h-402 overflow-hidden">
          <img src={card} alt="card" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/45"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
            <p className="text-white text-5xl font-bold leading-tight">Ready to Accelerate Your
              Digital <span className="block">Growth?</span></p>
            <p className="text-white text-sm leading-relaxed">
              Let’s create a roadmap for your next stage of revenue and brand expansion.
              <br />
              Our marketing specialists are here to help you scale.</p>
            <div className="mt-6 bg-white px-6 py-2.5 text-sm font-medium">
              <button>Speak With A Strategic Advisor</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-40 px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div>
            <p className="font-semibold">Stay in touch</p>
            <p className="text-sm text-gray-600">Get the latest insights and strategies delivered to your inbox.</p>
          </div>
          <div className="ml-auto">
            <div className="flex items-center gap-4">
              <input type="text" placeholder="Your email" className="border px-4 py-3 mr-4" />
              <button className="border px-6 py-3">Subscribe </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-right">
              We respect your privacy and never share your information.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mt-16 py-10">
          <div>
            <img src={BrandLogo} alt="Brand-logo" className="h-8" />
          </div>
          <ul className="flex flex-col gap-4 text-sm">
            <li><a className="font-semibold text-base">Services</a></li>
            <li><a className="font-normal">Our services</a></li>
            <li><a className="font-normal">Our work</a></li>
            <li> <a className="font-normal">Blog</a></li>
            <li><a className="font-normal">About us</a></li>
            <li><a className="font-normal">Contact us</a></li>
          </ul>
          <ul className="flex flex-col gap-4 text-sm">
            <li> <a className="font-semibold text-base">Company</a></li>
            <li> <a className="font-normal">About us</a></li>
            <li> <a className="font-normal">Our work</a></li>
            <li><a className="font-normal">Contact us</a></li>
            <li> <a className="font-normal">Careers</a></li>
            <li> <a className="font-normal">Press</a></li>
          </ul>
          <ul className="flex flex-col gap-4 text-sm">
            <li><a className="font-semibold text-base">Resources</a></li>
            <li><a className="font-normal">Blog</a></li>
            <li><a className="font-normal">Case studies</a></li>
            <li><a className="font-normal">Guides</a></li>
            <li><a className="font-normal">Templates</a></li>
            <li><a className="font-normal">Support</a></li>
          </ul>
          <ul className="flex flex-col gap-4 text-sm">
            <li><a className="font-semibold text-base">Connect</a></li>
            <li><a className="font-normal">Twitter</a></li>
            <li><a className="font-normal">LinkedIn</a></li>
            <li><a className="font-normal">Instagram</a></li>
            <li><a className="font-normal">Facebook</a></li>
            <li><a className="font-normal">YouTube</a></li>
          </ul>
          <ul className="flex flex-col gap-4 text-sm">
            <li><a className="font-semibold text-base">Legal</a></li>
            <li><a className="font-normal">Privacy policy</a></li>
            <li><a className="font-normal">Terms of service</a></li>
            <li><a className="font-normal">Cookie settings</a></li>
            <li><a className="font-normal">Accessibility</a></li>
            <li><a className="font-normal">Sitemap</a></li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row items-center gap-4 mt-6 text-sm text-gray-600">
          <div className="flex flex-wrap gap-4">
            <p>© 2025 Digital Marketing Agency. All rights reserved.</p>
            <a href="#" className="underline">Privacy policy</a>
            <a href="#" className="underline">Terms of service</a>
            <a href="#" className="underline">Cookie settings</a>
          </div>
          <div className="flex gap-4 md:ml-auto">
            <img src={Facebook} alt="" className="h-4 w-4" />
            <img src={Instagram} alt="" className="h-4 w-4" />
            <img src={X} alt="" className="h-4 w-4" />
            <img src={LinkedIn} alt="" className="h-4 w-4" />
            <img src={Youtube} alt="" className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
