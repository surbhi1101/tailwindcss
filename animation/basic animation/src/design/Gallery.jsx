import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import "../assets/css/gallery.css";

gsap.registerPlugin(ScrollTrigger, Draggable);

const images = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
];

const Gallery = () => {
  //   Why refs?
  // Because GSAP needs real DOM elements, not React virtual DOM.
  // Ref	Purpose
  // galleryRef	section to pin during scroll
  // cardsRef	all cards
  // nextRef / prevRef	buttons
  // proxyRef	invisible drag handler
  const galleryRef = useRef(null);
  const cardsRef = useRef([]);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const proxyRef = useRef(null);
  // buildSeamlessLoop();
  // This creates infinite looping illusion
  function buildSeamlessLoop(items, spacing, animateFunc) {
    // Extra animations added at start & end
    let overlap = Math.ceil(1 / spacing),
      startTime = items.length * spacing + 0.5,
      loopTime = (items.length + overlap) * spacing + 1,
      rawSequence = gsap.timeline({ paused: true }),
      seamlessLoop = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat() {
          this._time === this._dur && (this._tTime += this._dur - 0.01);
        },
      }),
      l = items.length + overlap * 2,
      time,
      i,
      index;

    for (i = 0; i < l; i++) {
      index = i % items.length;
      time = i * spacing;
      rawSequence.add(animateFunc(items[index]), time);
    }

    rawSequence.time(startTime);

    seamlessLoop
      .to(rawSequence, {
        time: loopTime,
        duration: loopTime - startTime,
        ease: "none",
      })
      .fromTo(
        rawSequence,
        { time: overlap * spacing + 1 },
        {
          time: startTime,
          duration: startTime - (overlap * spacing + 1),
          ease: "none",
        },
      );

    return seamlessLoop;
  }
  useEffect(() => {
    const cards = cardsRef.current;

    let iteration = 0;

    // Initial State
    // All cards start:

    // off-screen (right)
    // invisible
    // scaled down
    gsap.set(cards, { xPercent: 400, opacity: 0, scale: 0 });

    const spacing = 0.1;
    // Snap System
    // Ensures:

    // cards stop at correct positions
    // not between items
    const snapTime = gsap.utils.snap(spacing);

    const animateFunc = (el) => {
      const tl = gsap.timeline();
      // Card Animation (animateFunc)
      // What happens:
      // Card appears (scale 0 → 1)
      // Then disappears again (yoyo)
      tl.fromTo(
        el,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          zIndex: 100,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "power1.in",
        },
      ).fromTo(
        //Card moves:
        el,
        { xPercent: 400 },
        { xPercent: -400, duration: 1, ease: "none" },
        0,
      );

      return tl;
    };

    const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);

    // Playhead System
    // This is a fake timeline controller
    const playhead = { offset: 0 };

    const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

    //     This:
    // updates timeline position smoothly
    // makes animation feel fluid
    const scrub = gsap.to(playhead, {
      offset: 0,
      duration: 0.5,
      ease: "power3",
      paused: true,
      onUpdate() {
        seamlessLoop.time(wrapTime(playhead.offset));
      },
    });
    // Scroll Control
    // What it does:
    // Pins section
    // Maps scroll → animation
    const trigger = ScrollTrigger.create({
      start: 0,
      end: "+=3000",
      pin: galleryRef.current,
      onUpdate(self) {
        let scroll = self.scroll();
        // Infinite Scroll Logic
        if (scroll > self.end - 1) {
          wrap(1, 2);
        } else if (scroll < 1 && self.direction < 0) {
          wrap(-1, self.end - 2);
        } else {
          scrub.vars.offset =
            (iteration + self.progress) * seamlessLoop.duration();
          scrub.invalidate().restart();
        }
      },
    });

    const progressToScroll = (progress) =>
      gsap.utils.clamp(
        1,
        trigger.end - 1,
        gsap.utils.wrap(0, 1, progress) * trigger.end,
      );

    const wrap = (delta, scrollTo) => {
      iteration += delta;
      trigger.scroll(scrollTo);
      trigger.update();
    };
    // Moves animation forward/backward by 1 card
    const scrollToOffset = (offset) => {
      let snapped = snapTime(offset);
      let progress =
        (snapped - seamlessLoop.duration() * iteration) /
        seamlessLoop.duration();

      let scroll = progressToScroll(progress);

      if (progress >= 1 || progress < 0) {
        return wrap(Math.floor(progress), scroll);
      }

      trigger.scroll(scroll);
    };

    ScrollTrigger.addEventListener("scrollEnd", () =>
      scrollToOffset(scrub.vars.offset),
    );

    // buttons
    nextRef.current.addEventListener("click", () =>
      scrollToOffset(scrub.vars.offset + spacing),
    );

    prevRef.current.addEventListener("click", () =>
      scrollToOffset(scrub.vars.offset - spacing),
    );

    // drag
    // Dragging = changing timeline
    Draggable.create(proxyRef.current, {
      type: "x",
      trigger: cards,
      onPress() {
        this.startOffset = scrub.vars.offset;
      },
      onDrag() {
        scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
        scrub.invalidate().restart();
      },
      onDragEnd() {
        scrollToOffset(scrub.vars.offset);
      },
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div ref={galleryRef} className="gallery">
      <ul className="cards">
        {images.map((num, i) => (
          <li
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="card-item"
            style={{
              backgroundImage: `url(https://assets.codepen.io/16327/portrait-number-${num}.png)`,
            }}
          />
        ))}
      </ul>

      <div className="gallery-actions">
        <button ref={prevRef} className="btn-prev">
          Prev
        </button>
        <button ref={nextRef} className="btn-next">
          Next
        </button>
      </div>

      <div ref={proxyRef} className="drag-proxy"></div>
    </div>
  );
};

export default Gallery;
