function buildSeamlessLoop(items, spacing, animateFunc) {
  let overlap = Math.ceil(1 / spacing),
    startTime = items.length * spacing + 0.5,
    loopTime = (items.length + overlap) * spacing + 1,
    raw = gsap.timeline({ paused: true }),
    seamless = gsap.timeline({ repeat: -1, paused: true });

  let l = items.length + overlap * 2;

  for (let i = 0; i < l; i++) {
    let index = i % items.length;
    let time = i * spacing;
    raw.add(animateFunc(items[index]), time);
  }

  raw.time(startTime);

  seamless
    .to(raw, {
      time: loopTime,
      duration: loopTime - startTime,
      ease: "none",
    })
    .fromTo(
      raw,
      { time: overlap * spacing + 1 },
      {
        time: startTime,
        duration: startTime - (overlap * spacing + 1),
        ease: "none",
      }
    );

  return seamless;
}