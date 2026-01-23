import './App.css'
import Logo from './assets/Logo.png'
import Path from './assets/path.png'
import heroSection from './assets/hero-section.png'

function App() {

  return (
    <div className="container" >
      <header className="header h-797 relative">
        <nav className="absolute top-47 left-65 flex items-center justify-between w-[calc(100%-130px)]">
          <img src={Logo} alt="Logo" />
          <ul className="flex gap-8 items-center text-white font-poppins">
            <li><a href="#">Accommodation</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">Experiences</a></li>
            <li>
              <button className="white-btn" >
                Plan Your Trip
              </button>
            </li>
          </ul>
        </nav>
        <section className="hero absolute">
          <div className="text-center items-center flex flex-col gap-10">
            <p className=" text-white text-50 font-light tracking-[1.14px] leading-[100%]">
              Authentic African Safaris
            </p>
            <button className="white-btn w-291 font-poppins text-18 font-normal">
              Explore Accommodation
            </button>
          </div>
        </section>
      </header>
      <section className="hero-section relative top-20">
        <div className="grid grid-cols-2 items-center">
          <div className="flex justify-center">
            <img src={heroSection} alt="herosection image" />
          </div>
          <div className="flex flex-col gap-4 w-491">
            <p className="text-16 font-raleway color-dark-olive">Our Story</p>
            <p className="text-36 font-raleway color-dark-olive">Tulia Amboseli Safari Camp</p>
            <div className="content line-height-paragraph">
              <p>Tulia Amboseli Safari Camp is an eco-friendly
                safari camp just outside of Kimana Gate in the southeast area of the
                Amboseli National Park in Kenya.</p>
              <p>
                lia offers an intimacy like no other camp in the area. Each tent opens to Mt Kilimanjaro
                and offers wonderful views of both sunrise and sunset. The welcoming restaurant and lounge
                overlook a very active waterhole where daily visits from elephant, giraffe, zebra, eland,
                cheetah, lion, wildebeest, warthog, gazelle, waterbuck, and perhaps gerenuk if you are
                lucky, offers guests an up close, intimate experience.</p>
              <p>
                Enjoy the African Sunset during our daily sundowners at the campfire and reminisce
                day's safari with other guests.</p>
            </div>
            <button className="golden-btn">Our Story</button>
          </div>
        </div>
        <img src={Path} alt="path" />
      </section>
      <section>
        <div>
          <p>Why book with us?</p>
        </div>
      </section>
    </div>
  )
}

export default App
