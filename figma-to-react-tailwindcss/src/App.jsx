import './App.css'
import Logo from './assets/Logo.png'
import Path from './assets/path.png'
import heroSection from './assets/hero-section.png'
import Location from './assets/Location.png'
import Heart from './assets/Heart.png'
import Compass from './assets/Compass.png'
import Sunset from './assets/Sunset.png'
import SuperbTents from './assets/SuperbTents.png'
import SuperbFamilyTents from './assets/SuperbFamilyTents.png'
import DeluxeTents from './assets/DeluxeTents.png'
import Lion from './assets/Lion.png'
import RightArrow from './assets/Right-arrow.png'
import LeftArrow from './assets/Left-arrow.png'
import Dining from './assets/Dining.png'
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
              <button className="white-btn w-166" >
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
            <button className="white-btn w-291">
              Explore Accommodation
            </button>
          </div>
        </section>
      </header>
      
      <section className="hero-section relative top-20">
        <div className="grid grid-cols-2 items-center">
          <div className="flex justify-center">
            <img src={heroSection} alt="herosection image" className="h-630" />
          </div>
          <div className="flex flex-col gap-4 w-491 content">
            <p className="title text-color">Our Story</p>
            <p className="heading-title">Tulia Amboseli Safari Camp</p>
              <p className="text-paragraph">Tulia Amboseli Safari Camp is an eco-friendly
                safari camp just outside of Kimana Gate in the southeast area of the
                Amboseli National Park in Kenya.</p>
              <p className="text-paragraph">
                lia offers an intimacy like no other camp in the area. Each tent opens to Mt Kilimanjaro
                and offers wonderful views of both sunrise and sunset. The welcoming restaurant and lounge
                overlook a very active waterhole where daily visits from elephant, giraffe, zebra, eland,
                cheetah, lion, wildebeest, warthog, gazelle, waterbuck, and perhaps gerenuk if you are
                lucky, offers guests an up close, intimate experience.</p>
              <p className="text-paragraph">
                Enjoy the African Sunset during our daily sundowners at the campfire and reminisce
                day's safari with other guests.</p>
                
            <button className="golden-btn w-158">Our Story</button>
          </div>
        </div>
      </section>

        <img src={Path} alt="path"/>
      
      <section className="why-book-with-us">
          <p className="section-title">Why book with us?</p>
          <div className="grid grid-cols-4 items-center justify-center gap-8 relative">
<div className="flex flex-col items-center gap-4">
  <img src={Location} alt="Location" />
  <p className="title text-color items-center">Location, Location, Location</p>
  <p className="text-paragraph">Our portfolio features properties in Africa's most celebrated wildlife regions, ensuring that our guests get as close to the action as possible</p>
</div>
<div className="flex flex-col items-center gap-4">
  <img src={Heart} alt="Heart" />
  <p className="title text-color"> Our Impact</p>
  <p className="text-paragraph">We're committed to supporting conservation, education and empowerment in the reserves and communities we call home.</p>
</div>
<div className="flex flex-col items-center gap-4">
  <img src={Compass} alt="Compass" />
  <p className="title text-color">Authentic Experiences</p>
  <p className="text-paragraph">Whether it's game viewing, climbing Kilimanjaro, diving in Zanzibar or just relaxing in a pristine hideaway, we'll help you fulfil your wildest dreams.</p>
</div>
<div  className="flex flex-col items-center gap-4">
  <img src={Sunset} alt="Sunset" />
  <p className="title text-color">The Spirit of Tulia</p>
  <p className="text-paragraph">Each member of the Tulia team is committed and thrilled to be able to share our properties and experiences with our guests.</p>
</div>
          </div>
      </section>

    <section className="our-accommodation">
    <div className="flex items-center justify-between">
<p className="heading-title">Our Accommodation</p>
<button className="golden-btn self-end">Explore All</button>
    </div>
<p className="text-paragraph w-619">Spread over lush greenery, ample space for privacy and a chance to relax and rejuvenate, 
  Tulia Amboseli Safari Camp offers spacious Tents, each with stunning views of Mt Kilimanjaro.</p>
 <div className="grid grid-cols-3 gap-41">
    <div className="relative">
      <img src={SuperbTents} alt="Superb Tents" className="w-full" />
      <div className="overlay-content">
       <p className="tent-title">
      Superb Tents
    </p>
    <p className="explore-btn">Explore</p>
      </div>
    </div>
    <div className="relative">
      <img src={SuperbFamilyTents} alt="SuperbFamilyTents" />
      <div className="overlay-content">
      <p className="tent-title">Superb Family Tents</p>
          <p className="explore-btn">Explore</p>
          </div>
    </div> 
     <div className="relative">
      <img src={DeluxeTents} alt="DeluxeTents" />
      <div className="overlay-content">
       <p className="tent-title">Deluxe Tents</p>
    <p className="explore-btn">Explore</p>
    </div>
    </div>
  </div>
    </section>

    <section className="section-wrapper">
      <div className="relative">
      <img src={Lion} alt="Lion" className="w-full"/>
     <div className="experience">
      <div className="flex flex-col gap-30">
      <p class="title">Experiences</p>
      <p className="heading-title">Breathe in the Real Africa</p>
      <p className="w-40"> Nothing can prepare you for a trip to Africa - the vast landscapes, the thrilling 
        encounters with big game, the details brought to life by your expert guides. It's in the cool of the 
        morning and afternoon that your senses will be most alive, stimulated whether you are on foot, 
        atop a horse, in a game vehicle, hot air balloon or boat. </p> 
                </div>
                <div className="flex items-end justify-between mt-8">
       <button className="white-btn w-291">Explore Accommodation</button>
        <div className="flex items-center gap-10 mr-100">
            <p>Game Drives</p>
               <button><img src={LeftArrow} alt="Left arrow" /></button>
               <button><img src={RightArrow} alt="Right arrow" /></button>
        </div>       
        </div>
  </div>
     </div>
    </section>
    
    <section className="Dining">
      <div className="flex items-center">
<div className="grid grid-cols-2">
  <div className=""><img src={Dining} alt="" /></div>
  <div className="content">
    <div className="gap-24 flex flex-col">
    <p className="title text-colors">Dining</p>
    <p className="heading-title">Dine in the open</p>
    <p className="text-paragraph w-50">Enjoy cereals, fresh fruit, and pastries along with a hot breakfast in the morning.For lunch we 
      offer the option of a packed lunch on safari or a cooked 3-course lunch back at the camp, 
      depending on your plans for the day.In the evening, our chef will prepare a delicious 4-course 
      meal that can be accompanied by a selection of fine wines or a drink from the fully stocked bar.
The highly trained chefs will cater to any dietary restrictions.</p>
 <button className="golden-btn w-24">Explore Dining</button>
  </div>
  </div>
</div>
</div>
    </section>

 <img src={Path} alt="path"/>

    </div>
    
  )
}

export default App
