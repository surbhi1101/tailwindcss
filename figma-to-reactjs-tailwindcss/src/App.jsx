import page1 from './assets/page1.png'
import placeholder from './assets/placeholder-Image.png'
import card from './assets/card.jpg'
import logo from './assets/logo.png'
import './index.css'

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <nav className="px-4 flex items-center h-16">
        <div className="flex items-center space-x-8">
          <div className="text-4xl font-dancing italic font-semibold text-black drop-shadow-2xl">
            Logo
          </div>
          <ul className="flex items-center space-x-6">
            <a href="#" className="text-black text-xl">Services</a>
            <a href="#" className="text-black text-xl">Our Work</a>
            <a href="#" className="text-black text-xl">Resources Hub</a>
            <a href="#" className="text-black text-xl">About Us</a>
          </ul>
        </div>
        <div className="space-x-4 ml-auto">
          <button className="border bg-white py-2 px-2"> Get In Touch</button>
          <button className="text-white bg-black py-2 px-2">Button</button>
        </div>
      </nav>

      <div className="px-4 py-12">
        <div className="grid grid-cols-4 gap-4">
          <div className="p-6">
            <p className="mb-4 text-xs font-semibold">Page group one</p>
            <div className="flex items-start gap-4 py-2 mb-4">
              <img src={page1} className="w-5 h-5 mt-1" alt="page" />
              <div>
                <p className="font-semibold">Page one</p>
                <h6 className="text-xs">Lorem ipsum dolor sit amet consectetur elit</h6>
              </div>
            </div>
            <div className="flex items-start gap-4 py-2 mb-4">
              <img src={page1} className="w-5 h-5 mt-1" alt="page" />
              <div>
                <p className="font-semibold">Page Two</p>
                <h6 className="text-xs">Lorem ipsum dolor sit amet consectetur elit</h6>
              </div>
            </div>
            <div className="flex items-start gap-4 py-2 mb-4">
              <img src={page1} className="w-5 h-5 mt-1" alt="page" />
              <div>
                <p className="font-semibold">Page Three</p>
                <h6 className="text-xs">Lorem ipsum dolor sit amet consectetur elit</h6>
              </div>
            </div>
            <div className="flex items-start gap-4 py-2 mb-4">
              <img src={page1} className="w-5 h-5 mt-1" alt="page" />
              <div>
                <p className="font-semibold">Page Four</p>
                <h6 className="text-xs">Lorem ipsum dolor sit amet consectetur elit</h6>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="mb-4 text-xs font-semibold">Page group two</p>
            <div className="flex items-start gap-4 py-2 mb-4">
              <img src={page1} className="w-5 h-5 mt-1" alt="page" />
              <div>
                <p className="font-semibold">Page Five</p>
                <h6 className="text-xs">Lorem ipsum dolor sit amet consectetur elit</h6>
              </div>
            </div>
            <div className="flex items-start gap-4 py-2 mb-4">
              <img src={page1} className="w-5 h-5 mt-1" alt="page" />
              <div>
                <p className="font-semibold">Page Six</p>
                <h6 className="text-xs">Lorem ipsum dolor sit amet consectetur elit</h6>
              </div>
            </div>
            <div className="flex items-start gap-4 py-2 mb-4">
              <img src={page1} className="w-5 h-5 mt-1" alt="page" />
              <div>
                <p className="font-semibold">Page Seven</p>
                <h6 className="text-xs">Lorem ipsum dolor sit amet consectetur elit</h6>
              </div>
            </div>
            <div className="flex items-start gap-4 py-2 mb-4">
              <img src={page1} className="w-5 h-5 mt-1" alt="page" />
              <div>
                <p className="font-semibold">Page Eight</p>
                <h6 className="text-xs">Lorem ipsum dolor sit amet consectetur elit</h6>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="mb-4 text-xs font-semibold">Page group three</p>
            <div className="flex items-start gap-4 py-2 mb-4">
              <img src={page1} className="w-5 h-5 mt-1" alt="page" />
              <div>
                <p className="font-semibold">Page Nine</p>
                <h6 className="text-xs">Lorem ipsum dolor sit amet consectetur elit</h6>
              </div>
            </div>
            <div className="flex items-start gap-4 py-2 mb-4">
              <img src={page1} className="w-5 h-5 mt-1" alt="page" />
              <div>
                <p className="font-semibold">Page Ten</p>
                <h6 className="text-xs">Lorem ipsum dolor sit amet consectetur elit</h6>
              </div>
            </div>
            <div className="flex items-start gap-4 py-2 mb-4">
              <img src={page1} className="w-5 h-5 mt-1" alt="page" />
              <div>
                <p className="font-semibold">Page Eleven</p>
                <h6 className="text-xs">Lorem ipsum dolor sit amet consectetur elit</h6>
              </div>
            </div>
            <div className="flex items-start gap-4 py-2 mb-4">
              <img src={page1} className="w-5 h-5 mt-1" alt="page" />
              <div>
                <p className="font-semibold">Page Twelve</p>
                <h6 className="text-xs">Lorem ipsum dolor sit amet consectetur elit</h6>
              </div>
            </div>
          </div>
          <div className="p-6 font-semibold">
            <p className="mb-4 text-xs font-semibold">Featured from Blog</p>
            <div className="mb-4">
              <img src={placeholder} alt="placeholder-image" className="w-32 h-24" />
            </div>
            <div>
              <p className="font-semibold">Article Title</p>
              <h6 className="text-xs font-normal">Lorem ipsum dolor sit amet consectetur elit</h6>
              <a href="#" className="underline text-xs font-normal">Read more</a>
            </div>

            <button className="text-xs mt-7 font-semibold">Button{' > '} </button>
          </div>

        </div>
      </div>

      <div className="relative">
        <img src={card} alt="card" className="w-full" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <p className="text-5xl font-semibold px-16 text-white mb-4">Full-Service Digital Marketing Agency That Drives Revenue Growth</p>
            <p className="text-white px-24">At Social Gamma, we build data-driven marketing systems designed to scale your visibility, conversions, and long-term growth. From SEO and paid media to social, content, and web development — we help brands outperform competitors and dominate their digital landscape.</p>
            <div className="flex justify-center gap-4 mt-6 ">
              <button className=" bg-white py-2 px-4">Explore Services</button>
              <button className="border text-white py-2 px-4"> Get In Touch</button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-10 max-w-5xl mx-auto text-center space-y-4">
        <p className="font-bold">What we do</p>
        <p className="font-bold text-6xl ">Digital Marketing Services That Deliver Measurable Results  </p>
        <p className="font-normal mt-8">We focus on what directly impacts your bottom line</p>
      </div>

      <div>
        <div className="grid grid-cols-4 gap-4">
          <div className="border col-span-1">
            <img src={placeholder} className=" h-40 w-full object-cover" alt="page" />
            <div className="py-7 px-7">
              <p className="font-bold">Search</p>
              <p className="text-2xl font-bold mt-2">Search Engine Optimization (SEO)</p>
              <p className="text-custom mt-4">Get found by the people looking for you right now.</p>
              <button className="text-custom mt-7">Explore &gt; </button>
            </div>
          </div>
          <div className="border col-span-1">
            <img src={placeholder} className=" h-40 w-full object-cover" alt="page" />
            <div className="py-7 px-7">
              <p className="font-bold">Paid</p>
              <p className="text-2xl font-bold mt-2">Paid Advertising & Performance Media</p>
              <p className="text-custom mt-4">Reach your audience with precision and scale your revenue fast.</p>
              <button className="text-custom mt-7">Explore &gt; </button>

            </div>
          </div>
          <div className="border col-span-2">
            <div className="flex h-full">
              <img src={placeholder} className="w-80 object-cover" alt="page" />
              <div className="py-4 px-4 flex flex-col justify-center">
                <p className="font-bold">Social</p>
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

      <div className="mt-20">
        <div className="grid grid-cols-4 gap-4">
          <div className="border col-span-1">
            <img src={placeholder} className=" h-40 w-full object-cover" alt="page" />
            <div className="py-7 px-7">
              <p className="font-bold">Web</p>
              <p className="text-2xl font-bold mt-2">Web Design</p>
              <p className="text-custom mt-4">We design clean, modern, conversion-focused websites that elevate your brand and guide users seamlessly.</p>
              <button className="text-custom mt-7">Explore &gt; </button>
            </div>
          </div>
          <div className="border col-span-1">
            <img src={placeholder} className=" h-40 w-full object-cover" alt="page" />
            <div className="py-7 px-7">
              <p className="font-bold">Web</p>
              <p className="text-2xl font-bold mt-2">Website Development</p>
              <p className="text-custom mt-4">We build fast, secure, scalable websites with strong technical foundations and smooth user functionality.</p>
              <button className="text-custom mt-7">Explore &gt; </button>

            </div>
          </div>
          <div className="border col-span-2">
            <div className="flex h-full">
              <img src={placeholder} className="w-80 object-cover" alt="page" />
              <div className="py-4 px-4 flex flex-col justify-center">
                <p className="font-bold">Branding</p>
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

      <div className="px-4 py-12 text-center space-y-4  mt-5">
        <p className="font-bold text-6xl">What Our Clients Say About Working With Social Gamma</p>
        <p className="font-normal mt-8">Discover feedback from our clients</p>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-7">
            <img src={logo} className="mb-4 object-cover" alt="page" />
            <p className="text-xs font-bold">Ria’s innovative strategies have significantly improved our brand visibility and business growth. Her cutting-edge digital marketing approach increased our customer engagement and lead generation. Ria’s ability to align market trends with our business goals has been instrumental in our success.</p>
            <img src={placeholder} className="rounded-full w-10 h-10 mt-2" alt="page" />
            <p className="font-bold">Srinivas Palle</p>
            <p className="text-xs mt-2">Cloudseals</p>
          </div>
          <div className="flex flex-col items-center text-center p-7">
            <img src={logo} className="mb-4 object-cover" alt="page" />
            <p className="text-xs font-bold">Working with Ria and her Social Gamma team has been smooth and highly productive. They collaborate deeply, listen carefully, and deliver measurable results. Our online lead generation efficiency improved dramatically.</p>
            <img src={placeholder} className="rounded-full w-10 h-10 mt-2" alt="page" />
            <p className="font-bold">Joe Krenson</p>
            <p className="text-xs mt-2">Netbrain Technologies</p>
          </div>
          <div className="flex flex-col items-center text-center p-7">
            <img src={logo} className="mb-4 object-cover" alt="page" />
            <p className="text-xs font-bold">Social Gamma gives us the space to innovate and grow. Their ability to understand brand identity and creative execution is unmatched.</p>
            <img src={placeholder} className="rounded-full w-10 h-10 mt-2" alt="page" />
            <p className="font-bold">Michael Pucci</p>
            <p className="text-xs mt-2">Cubicall</p>
          </div>
        </div>
      </div>

      <div className=" px-4 py-12 max-w-6xl mx-auto text-center space-y-2">
        <p className="font-semibold">Work</p>
        <p className="font-bold text-6xl">Digital Marketing Campaigns That Moved the Needle</p>
        <p className="font-semibold">Real strategies. Real execution. Real business impact.</p>
      </div>

      <div className="border-2">
        <div className="grid grid-cols-2">
          <div className="py-4 px-8">
            <p className="font-bold text-2xl px-2 py-2">Project name here</p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-200 px-2 py-1">Paid ads</a>
              <a href="#" className="bg-gray-200 px-2 py-1">Conversion</a>
              <a href="#" className="bg-gray-200 px-2 py-1">Strategy</a>
            </div>
            <p className="mt-28">A performance-driven paid strategy that increased revenue by 40% in three months through optimized targeting, refined messaging, and continuous scaling.</p>
            <div className="flex gap-4 mt-5">
              <button className="border-2 px-4 py-1">View</button>
              <button>Details &gt;</button>
            </div>

          </div>
          <img src={placeholder} className=" h-96 py-5 px-5 w-full object-cover" alt="page" />
        </div>
      </div>

      <div className="border-2 mt-16">
        <div className="grid grid-cols-2">
          <div className="py-4 px-8">
            <p className="font-bold text-2xl px-2 py-2">Project name here</p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-200 px-2 py-1">SEO</a>
              <a href="#" className="bg-gray-200 px-2 py-1">Organic</a>
              <a href="#" className="bg-gray-200 px-2 py-1">Rankings</a>
            </div>
            <p className="mt-28">Strategic SEO improvements that elevated keyword rankings, increased impressions, and strengthened organic acquisition month after month.</p>
            <div className="flex gap-4 mt-5">
              <button className="border-2 px-4 py-1">View</button>
              <button>Details &gt;</button>
            </div>

          </div>
          <img src={placeholder} className=" h-96 py-5 px-5 w-full object-cover" alt="page" />
        </div>
      </div>

      <div className="border-2 mt-16">
        <div className="grid grid-cols-2">
          <div className="py-4 px-8">
            <p className="font-bold text-2xl px-2 py-2">Project name here</p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-200 px-2 py-1">Social media</a>
              <a href="#" className="bg-gray-200 px-2 py-1">Community</a>
              <a href="#" className="bg-gray-200 px-2 py-1">Engagement</a>
            </div>
            <p className="mt-28">Community-led strategies that generated higher engagement, meaningful interactions, and sustained brand visibility across channels.</p>
            <div className="flex gap-4 mt-5">
              <button className="border-2 px-4 py-1">View</button>
              <button>Details &gt;</button>
            </div>

          </div>
          <img src={placeholder} className=" h-96 py-5 px-5 w-full object-cover" alt="page" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 text-center space-y-2">
        <p className="font-semibold mt-8">Resources</p>
        <p className="font-bold text-6xl">Explore Our Insights & Resources Hub</p>
        <p className="text-xl mt-10">Expert articles designed to help you improve visibility, optimise performance, and accelerate digital growth.</p>
      </div>

      <div>
        <div className="grid grid-cols-3 gap-10">
          <div>
            <img src={placeholder} className=" h-60 w-full object-cover" alt="page" />
            <div className="py-7">
              <a href="#" className="bg-gray-200 px-2 py-1">Strategy</a>
              <p className="text-xl font-bold mt-2">What SEO really means for growth</p>
              <p className="text-custom mt-4">Search visibility compounds over time. Here's how to build it right.</p>
              <button className="text-xs font-semibold mt-7">6-min read &gt; </button>
            </div>
          </div>
          <div>
            <img src={placeholder} className="h-60 w-full object-cover" alt="page" />
            <div className="py-7">
              <a href="#" className="bg-gray-200 px-2 py-1">Copywriting</a>
              <p className="text-xl font-bold mt-2">Words that convert without trying</p>
              <p className="text-custom mt-4">The best copy doesn't feel like selling. It feels like understanding.</p>
              <button className="text-xs font-semibold mt-7">4-min read &gt; </button>
            </div>
          </div>
          <div>
            <img src={placeholder} className=" h-60 w-full object-cover" alt="page" />
            <div className="py-7">
              <a href="#" className="bg-gray-200 px-2 py-1">Design</a>
              <p className="text-xl font-bold mt-2">Why design systems matter</p>
              <p className="text-custom mt-4">Consistency builds trust. A system keeps everything aligned and scalable.</p>
              <button className="text-xs font-semibold mt-7">5-min read &gt; </button>

            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button className="border-2 px-2 py-2">View all</button>
        </div>
      </div>
      <div className="relative mt-20">
        <img src={card} alt="card" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="max-w-3xl">
            <p className="text-5xl font-semibold px-2 text-white mb-4">Ready to Accelerate Your Digital Growth?</p>
            <p className="text-white text-xs mt-10">Let’s create a roadmap for your next stage of revenue and brand expansion.</p>
            <p className="text-white text-xs">Our marketing specialists are here to help you scale.</p>
            <div className="flex justify-center gap-4 mt-6 ">
              <button className=" bg-white py-2 px-4">Speak With A Strategic Advisor</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
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
      <div className="grid grid-cols-6 gap-4 mt-10 py-10">
        <div className="flex flex-col text-4xl font-dancing italic font-semibold text-black drop-shadow-2xl">
          Logo
        </div>
        <ul className="flex flex-col">
          <li><a className="text-xl font-semibold">Services</a></li>
          <li><a className="text-custom mt-5">Our services</a></li>
          <li><a className="text-custom mt-2">Our work</a></li>
          <li> <a className="text-custom mt-2">Blog</a></li>
          <li><a className="text-custom mt-2">About us</a></li>
          <li><a className="text-custom mt-2">Contact us</a></li>
        </ul>
        <ul className="flex flex-col">
          <li> <a className="text-xl font-semibold">Company</a></li>
          <li> <a className="text-custom mt-5">About us</a></li>
          <li> <a className="text-custom mt-2">Our work</a></li>
          <li><a className="text-custom mt-2">Contact us</a></li>
          <li> <a className="text-custom mt-2">Careers</a></li>
          <li> <a className="text-custom mt-2">Press</a></li>
        </ul>
        <ul className="flex flex-col">
          <li><a className="text-xl font-semibold">Resources</a></li>
          <li><a className="text-custom mt-5">Blog</a></li>
          <li><a className="text-custom mt-2">Case studies</a></li>
          <li><a className="text-custom mt-2">Guides</a></li>
          <li><a className="text-custom mt-2">Templates</a></li>
          <li><a className="text-custom mt-2">Support</a></li>
        </ul>
        <ul className="flex flex-col">
          <li><a className="text-xl font-semibold">Connect</a></li>
          <li><a className="text-custom mt-5">Twitter</a></li>
          <li><a className="text-custom mt-2">LinkedIn</a></li>
          <li><a className="text-custom mt-2">Instagram</a></li>
          <li><a className="text-custom mt-2">Facebook</a></li>
          <li><a className="text-custom mt-2">YouTube</a></li>
        </ul>
        <ul className="flex flex-col">
          <li><a className="text-xl font-semibold">Legal</a></li>
          <li><a className="text-custom mt-5">Privacy policy</a></li>
          <li><a className="text-custom mt-2">Terms of service</a></li>
          <li><a className="text-custom mt-2">Cookie settings</a></li>
          <li><a className="text-custom mt-2">Accessibility</a></li>
          <li><a className="text-custom mt-2">Sitemap</a></li>
        </ul>
      </div>
      <hr />
      <div className="mt-10 flex gap-6">
        <p>© 2025 Digital Marketing Agency. All rights reserved.</p>
        <a href="#" className="underline">Privacy policy</a>
        <a href="#" className="underline">Terms of service</a>
        <a href="#" className="underline">Cookie settings</a>
      </div>
    </div >

  )
}

export default App
