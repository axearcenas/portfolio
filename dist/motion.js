(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = matchMedia('(min-width: 701px)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const hero = document.querySelector('.hero');
  const planes = []; // Hero animation is controlled by maui.js.
  const timeline = document.querySelector('.timeline');
  const cards = [...document.querySelectorAll('.project')];
  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('.navigation a')];
  let queued = false;
  const clamp = x => Math.max(0,Math.min(1,x));
  function update() {
    queued = false;
    if (!reduced.matches) {
      const p = clamp(-hero.getBoundingClientRect().top / Math.max(1,hero.offsetHeight * .75));
      planes.forEach((el,i) => {
        el.style.transform = desktop.matches ? `translateY(${(1-p)*(i === 0 ? -8 : 8)}px) rotate(${(1-p)*(i === 0 ? -5 : 5)}deg)` : '';
      });
      const box = timeline.getBoundingClientRect();
      timeline.style.setProperty('--progress',clamp((innerHeight*.7-box.top)/box.height));
    } else {
      planes.forEach(el=>el.style.removeProperty('transform'));
      timeline.style.setProperty('--progress',1);
    }
    const active = sections.filter(el=>el.getBoundingClientRect().top < innerHeight*.4).at(-1);
    links.forEach(a=> {if(active && a.hash === '#'+active.id) a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
  }
  function schedule(){if(!queued){queued=true;requestAnimationFrame(update);}}
  addEventListener('scroll',schedule,{passive:true});
  addEventListener('resize',schedule,{passive:true});
  document.addEventListener('toggle',schedule,true);
  reduced.addEventListener('change',()=>{cards.forEach(el=>el.classList.remove('entering'));schedule();});
  const seen = new WeakSet();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries=>{
      let stagger=0;
      entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        const el=entry.target;
        el.classList.add('in-view');
        if(el.matches('.project') && !seen.has(el) && !reduced.matches){
          el.style.setProperty('--delay',`${stagger++*75}ms`);
          el.classList.add('entering');
          el.addEventListener('animationend',()=>el.classList.remove('entering'),{once:true});
        }
        seen.add(el);observer.unobserve(el);
      });
    },{threshold:.12});
    document.querySelectorAll('.project,.story,.teaching').forEach(el=>observer.observe(el));
  }
  cards.forEach(card=>{
    card.addEventListener('pointermove',e=>{
      if(reduced.matches || !desktop.matches || !fine.matches)return;
      const r=card.getBoundingClientRect();
      card.style.setProperty('--tilt-x',`${((e.clientY-r.top)/r.height-.5)*-3}deg`);
      card.style.setProperty('--tilt-y',`${((e.clientX-r.left)/r.width-.5)*3}deg`);
    });
    const reset=()=>{card.style.removeProperty('--tilt-x');card.style.removeProperty('--tilt-y');};
    card.addEventListener('pointerleave',reset);card.addEventListener('focusin',reset);
  });
  if('ResizeObserver' in window)new ResizeObserver(schedule).observe(timeline);
  update();
})();


