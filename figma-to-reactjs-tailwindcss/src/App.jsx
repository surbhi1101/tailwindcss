import React from 'react'
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
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <nav className="px-4 flex items-center h-16">
          <div className="flex items-center space-x-6">
            <div>
              <img src={BrandLogo} alt="Brand-logo" className="logo-size" />
            </div>
            <ul className="flex items-center space-x-6 font-roboto font-normal text-base">
              <li><a href="#" className="text-black">Services</a></li>
              <li><a href="#" className="text-black">Resources Hub</a></li>
              <li><a href="#" className="text-black">Our Work</a></li>
              <li className="relative" >
                <button className="flex items-center gap-1 text-black" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <span>About Us</span>
                  <img src={dropdown} alt="about-dropdown" className="ml-2 mt-1" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white border rounded shadow-lg">
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
          <div className="space-x-4 ml-auto flex gap-2">
            <button className="border bg-white py-2 px-5"> Get In Touch</button>
            <button className="text-white bg-black py-2 px-5">Button</button>
          </div>

        </nav >

        <div className="pt-8 pr-8 pb-8 pl-0">
          <div className="grid grid-cols-4 gap-8 flex-col pb-1">
            <div className="">
              <p className="mb-4 text-base font-semibold">Page group one</p>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1" alt="page" />
                <div>
                  <p className="text-base font-semibold">Page one</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1" alt="page" />
                <div>
                  <p className="text-base font-semibold">Page Two</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1" alt="page" />
                <div>
                  <p className="text-base font-semibold">Page Three</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1" alt="page" />
                <div>
                  <p className="text-base font-semibold">Page Four</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
            </div>
            <div className="">
              <p className="mb-4 text-base font-semibold">Page group two</p>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1" alt="page" />
                <div>
                  <p className="text-base font-semibold">Page Five</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1" alt="page" />
                <div>
                  <p className="text-base font-semibold">Page Six</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1" alt="page" />
                <div>
                  <p className="text-base font-semibold">Page Seven</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1" alt="page" />
                <div>
                  <p className="text-base font-semibold">Page Eight</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
            </div>
            <div className="">
              <p className="mb-4 text-base font-semibold">Page group three</p>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1" alt="page" />
                <div>
                  <p className="text-base font-semibold">Page Nine</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1" alt="page" />
                <div>
                  <p className="text-base font-semibold">page Ten</p>
                  <h6 className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</h6>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1" alt="page" />
                <div>
                  <p className="text-base font-semibold">page Eleven</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-2 mb-4">
                <img src={page1} className="w-5 h-5 mt-1" alt="page" />
                <div>
                  <p className="text-base font-semibold">page Twelve</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
              </div>
            </div>
            <div className="">
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
      </div >
      <hr />
      <div className="max-w-7xl mx-auto relative mt-10 ">
        <img src={card} alt="card" className="w-full h-640" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <p className="text-5xl font-bold px-16 text-white mb-4 leading-120">Full-Service Digital Marketing Agency That Drives Revenue Growth</p>
            <p className="text-base font-normal text-white line-height mx-auto">At Social Gamma, we build data-driven marketing systems designed to scale your visibility, conversions, and long-term growth. From SEO and paid media to social, content, and web development — we help brands outperform competitors and dominate their digital landscape.</p>
            <div className="flex justify-center gap-4 mt-6">
              <button className="bg-white py-2 px-4 font-normal border border-white">Explore Services</button>
              <button className="text-white py-2 px-4 border border-white"> Get In Touch</button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-10 mx-auto max-w-7xl space-y-4 mt-25">
        <div className="text-center">
          <p className="font-semibold">What we do</p>
          <p className="font-bold text-5xl leading-tight mx-auto text-center max-w-3xl">Digital Marketing Services That Deliver Measurable Results  </p>
          <p className="font-normal mt-8">We focus on what directly impacts your bottom line</p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-4 gap-8">
            <div className="border col-span-1">
              <img src={placeholder} className=" h-40 w-full object-cover" alt="page" />
              <div className="py-3 px-6">
                <p className="font-semibold">Search</p>
                <p className="text-2xl font-bold mt-2">Search Engine Optimization (SEO)</p>
                <p className="font-normal mt-4">Get found by the people looking for you right now.</p>
                <button className="font-normal mt-7">Explore &gt; </button>
              </div>
            </div>
            <div className="border col-span-1">
              <img src={placeholder} className=" h-40 w-full object-cover" alt="page" />
              <div className="py-3 px-6">
                <p className="font-semibold">paid</p>
                <p className="text-2xl font-bold mt-2">paid Advertising & performance Media</p>
                <p className="text-custom mt-4">Reach your audience with precision and scale your revenue fast.</p>
                <button className="text-custom mt-7">Explore &gt; </button>

              </div>
            </div>
            <div className="border col-span-2">
              <div className="flex h-full">
                <img src={placeholder} className="w-80 object-cover" alt="page" />
                <div className="py-4 px-4 flex flex-col justify-center">
                  <p className="font-semibold">Social</p>
                  <p className="text-2xl font-bold mt-2">Social Media Marketing & Management</p>
                  <p className="text-custom mt-4">Build community and engage customers where they spend their time.</p>
                  <div className="py-0">
                    <button className="text-custom mt-7">Explore &gt; </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-50 max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-8">
          <div className="border col-span-1">
            <img src={placeholder} className=" h-40 w-full object-cover" alt="page" />
            <div className="py-3 px-6">
              <p className="font-semibold">Web</p>
              <p className="text-2xl font-bold mt-2">Web Design</p>
              <p className="text-custom mt-4">We design clean, modern, conversion-focused websites that elevate your brand and guide users seamlessly.</p>
              <button className="text-custom mt-7">Explore &gt; </button>
            </div>
          </div>
          <div className="border col-span-1">
            <img src={placeholder} className=" h-40 w-full object-cover" alt="page" />
            <div className="py-3 px-6">
              <p className="font-semibold">Web</p>
              <p className="text-2xl font-bold mt-2">Website Development</p>
              <p className="text-custom mt-4">We build fast, secure, scalable websites with strong technical foundations and smooth user functionality.</p>
              <button className="text-custom mt-7">Explore &gt; </button>

            </div>
          </div>
          <div className="border col-span-2">
            <div className="flex h-full">
              <img src={placeholder} className="w-80 object-cover" alt="page" />
              <div className="py-4 px-4 flex flex-col justify-center">
                <p className="font-semibold">Branding</p>
                <p className="text-2xl font-bold mt-2">Branding & Visual Identity</p>
                <p className="text-custom mt-4">We create cohesive brand identities and visuals that strengthen recognition and set you apart from competitors.</p>
                <div className="py-0">
                  <button className="text-custom mt-7">Explore &gt; </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-10 mx-auto max-w-5xl space-y-4 mt-25">
        <div className="text-center">
          <p className="font-bold text-5xl leading-tight mx-auto text-center max-w-3xl">What Our Clients Say About Working With Social Gamma</p>
          <p className="font-normal mt-6">Discover feedback from our clients</p>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-14">
            <div className="flex flex-col items-center text-center p-7">
              <img src={logo} className="mb-4 object-cover" alt="page" />
              <p className="text-xs font-bold max-w-8xl mx-auto">Ria’s innovative strategies have significantly improved our brand visibility and business growth. Her cutting-edge digital marketing approach increased our customer engagement and lead generation. Ria’s ability to align market trends with our business goals has been instrumental in our success.</p>
              <img src={placeholder} className="rounded-full w-10 h-10 mt-2" alt="page" />
              <p className="font-semibold">Srinivas Palle</p>
              <p className="font-normal">Cloudseals</p>
            </div>
            <div className="flex flex-col items-center text-center p-7">
              <img src={logo} className="mb-4 object-cover" alt="page" />
              <p className="text-xs font-bold">Working with Ria and her Social Gamma team has been smooth and highly productive. They collaborate deeply, listen carefully, and deliver measurable results. Our online lead generation efficiency improved dramatically.</p>
              <img src={placeholder} className="rounded-full w-10 h-10 mt-2" alt="page" />
              <p className="font-semibold">Joe Krenson</p>
              <p className="font-normal">Netbrain Technologies</p>
            </div>
            <div className="flex flex-col items-center text-center p-7">
              <img src={logo} className="mb-4 object-cover" alt="page" />
              <p className="text-xs font-bold">Social Gamma gives us the space to innovate and grow. Their ability to understand brand identity and creative execution is unmatched.</p>
              <img src={placeholder} className="rounded-full w-10 h-10 mt-2" alt="page" />
              <p className="font-semibold">Michael Pucci</p>
              <p className="font-normal">Cubicall</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 max-w-7xl mx-auto">
        <div className=" px-4 py-12 max-w-6xl mx-auto text-center space-y-2">
          <p className="font-semibold">Work</p>
          <p className="font-bold text-6xl">Digital Marketing Campaigns That Moved the Needle</p>
          <p className="font-semibold mt-18">Real strategies. Real execution. Real business impact.</p>
        </div>
        <div className="border-2 mt-10 p-12">
          <div className="grid grid-cols-2">
            <div className=" mx-auto">
              <p className="font-bold text-4xl">Project name here</p>
              <div className="flex flex-wrap gap-2 mt-8">
                <a href="#" className="bg-gray-200 px-2 py-1">Paid ads</a>
                <a href="#" className="bg-gray-200 px-2 py-1">Conversion</a>
                <a href="#" className="bg-gray-200 px-2 py-1">Strategy</a>
              </div>
              <p className="mt-28 font-normal w-124 max-w-2xl mr-20 mx-auto">A performance-driven paid strategy that increased revenue by 40% in three months through optimized targeting, refined messaging, and continuous scaling.</p>
              <div className="flex gap-4 mt-5">
                <button className="border-2 px-6 py-3 font-normal">View</button>
                <button className="font-normal">Details &gt;</button>
              </div>

            </div>
            <img src={placeholder} className=" h-96 w-full object-cover" alt="page" />
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-7xl mx-auto">
        <div className="border-2 mt-20 p-12">
          <div className="grid grid-cols-2">
            <div className="mx-auto">
              <p className="font-bold text-4xl">Project name here</p>
              <div className="flex flex-wrap mt-8 gap-2">
                <a href="#" className="bg-gray-200 px-2 py-1">SEO</a>
                <a href="#" className="bg-gray-200 px-2 py-1">Organic</a>
                <a href="#" className="bg-gray-200 px-2 py-1">Rankings</a>
              </div>
              <p className="mt-28 font-normal w-124 max-w-2xl mr-20 mx-auto">Strategic SEO improvements that elevated keyword rankings, increased impressions, and strengthened organic acquisition month after month.</p>
              <div className="flex gap-4 mt-5">
                <button className="border-2 px-6 py-3 font-normal">View</button>
                <button className="font-normal">Details &gt;</button>
              </div>
            </div>
            <img src={placeholder} className=" h-96 w-full object-cover" alt="page" />
          </div>
        </div>
      </div>
      <div className="mt-20 max-w-7xl mx-auto">
        <div className="border-2 mt-20 p-12">
          <div className="grid grid-cols-2">
            <div className="mx-auto">
              <p className="font-bold text-4xl">Project name here</p>
              <div className="flex flex-wrap gap-2 mt-8">
                <a href="#" className="bg-gray-200 px-2 py-1">Social media</a>
                <a href="#" className="bg-gray-200 px-2 py-1">Community</a>
                <a href="#" className="bg-gray-200 px-2 py-1">Engagement</a>
              </div>
              <p className="mt-28 font-normal w-124 max-w-2xl mr-20 mx-auto">Community-led strategies that generated higher engagement, meaningful interactions, and sustained brand visibility across channels.</p>
              <div className="flex gap-4 mt-5">
                <button className="border-2 px-6 py-3 font-normal">View</button>
                <button className="font-normal">Details &gt;</button>
              </div>
            </div>
            <img src={placeholder} className=" h-96 w-full object-cover" alt="page" />
          </div>
        </div>
      </div>
      <div className="mt-30 max-w-5xl mx-auto px-4 py-12 text-center space-y-2">
        <p className="font-semibold mt-8">Resources</p>
        <p className="font-bold text-6xl">Explore Our Insights & Resources Hub</p>
        <p className="font-normal mt-10 mx-auto max-w-2xl">Expert articles designed to help you improve visibility, optimise performance, and accelerate digital growth.</p>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-10 max-w-7xl mx-auto">
          <div>
            <img src={placeholder} className=" h-60 w-full object-cover" alt="page" />
            <div className="py-7">
              <a href="#" className="bg-gray-200 font-semibold px-2 py-1">Strategy</a>
              <p className="text-2xl font-bold mt-2">What SEO really means for growth</p>
              <p className="font-normal mt-4">Search visibility compounds over time. Here's how to build it right.</p>
              <button className="font-normal mt-6">6-min read &gt; </button>
            </div>
          </div>
          <div>
            <img src={placeholder} className="h-60 w-full object-cover" alt="page" />
            <div className="py-7">
              <a href="#" className="bg-gray-200 font-semibold px-2 py-1">Copywriting</a>
              <p className="text-2xl font-bold mt-2">Words that convert without trying</p>
              <p className="font-normal mt-4">The best copy doesn't feel like selling. It feels like understanding.</p>
              <button className="font-normal mt-6">4-min read &gt; </button>
            </div>
          </div>
          <div>
            <img src={placeholder} className=" h-60 w-full object-cover" alt="page" />
            <div className="py-7">
              <a href="#" className="bg-gray-200 px-2 py-1">Design</a>
              <p className="text-2xl font-bold mt-2">Why design systems matter</p>
              <p className="font-normal mt-4">Consistency builds trust. A system keeps everything aligned and scalable.</p>
              <button className="font-normal mt-6">5-min read &gt; </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="border-2 px-6 py-2 font-normal">View all</button>
        </div>
      </div>
      <div className="mt-50 max-w-7xl mx-auto">
        <div className="relative mt-20">
          <img src={card} alt="card" className="w-full h-96 object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <div className="max-w-3xl">
              <p className="text-5xl font-bold px-2 text-white mb-4">Ready to Accelerate Your Digital Growth?</p>
              <p className="text-white font-normal mt-10">Let’s create a roadmap for your next stage of revenue and brand expansion.</p>
              <p className="text-white font-normal">Our marketing specialists are here to help you scale.</p>
              <div className="flex justify-center gap-4 mt-6 ">
                <button className=" bg-white py-4 px-6 text-xl font-normal">Speak With A Strategic Advisor</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40 max-w-7xl mx-auto">
        <div className="">
          <div className="flex items-start">
            <div>
              <p className="font-semibold">Stay in touch</p>
              <p>Get the latest insights and strategies delivered to your inbox.</p>
            </div>
            <div className="ml-auto flex items-center">
              <input type="text" placeholder="Your email" className="border px-4 py-3 mr-4" />
              <button className="border px-6 py-3">Subscribe </button>
            </div>
          </div>
          <div className="flex">
            <a href="#" className="underline ml-auto text-sm mt-2">We respect your privacy and never share your information.</a>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 mt-15 py-10">
          <div>
            <img src={BrandLogo} alt="Brand-logo" className="logo-size" />
          </div>
          <ul className="flex flex-col gap-4">
            <li><a className="text-xl font-semibold">Services</a></li>
            <li><a className="font-normal">Our services</a></li>
            <li><a className="font-normal">Our work</a></li>
            <li> <a className="font-normal">Blog</a></li>
            <li><a className="font-normal">About us</a></li>
            <li><a className="font-normal">Contact us</a></li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li> <a className="text-xl font-semibold">Company</a></li>
            <li> <a className="font-normal">About us</a></li>
            <li> <a className="font-normal">Our work</a></li>
            <li><a className="font-normal">Contact us</a></li>
            <li> <a className="font-normal">Careers</a></li>
            <li> <a className="font-normal">Press</a></li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li><a className="text-xl font-semibold">Resources</a></li>
            <li><a className="font-normal">Blog</a></li>
            <li><a className="font-normal">Case studies</a></li>
            <li><a className="font-normal">Guides</a></li>
            <li><a className="font-normal">Templates</a></li>
            <li><a className="font-normal">Support</a></li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li><a className="text-xl font-semibold">Connect</a></li>
            <li><a className="font-normal">Twitter</a></li>
            <li><a className="font-normal">LinkedIn</a></li>
            <li><a className="font-normal">Instagram</a></li>
            <li><a className="font-normal">Facebook</a></li>
            <li><a className="font-normal">YouTube</a></li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li><a className="text-xl font-semibold">Legal</a></li>
            <li><a className="font-normal">Privacy policy</a></li>
            <li><a className="font-normal">Terms of service</a></li>
            <li><a className="font-normal">Cookie settings</a></li>
            <li><a className="font-normal">Accessibility</a></li>
            <li><a className="font-normal">Sitemap</a></li>
          </ul>
        </div>
        <hr />
        <div className="container flex mx-auto mt-10 px-4">
          <div className="flex items-center gap-2 text-sm text-gray-700 flex-nowrap overflow-x-auto">
            <p>© 2025 Digital Marketing Agency. All rights reserved.</p>
            <a href="#" className="underline">Privacy policy</a>
            <a href="#" className="underline">Terms of service</a>
            <a href="#" className="underline">Cookie settings</a>
          </div>
          <div className="flex gap-4 ml-auto justify-start md:justify-end">
            <img src={Facebook} alt="" className="h-4 w-4" />
            <img src={Instagram} alt="" className="h-4 w-4" />
            <img src={X} alt="" className="h-4 w-4" />
            <img src={LinkedIn} alt="" className="h-4 w-4" />
            <img src={Youtube} alt="" className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
