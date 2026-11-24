(() => {
 const scene=document.querySelector('.mobile-diagram');

 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let paused=false,visible=true;
 function sync(){
  scene.classList.toggle('looping',!reduced.matches);
  scene.classList.toggle('motion-paused',paused||!visible||document.hidden);
 }
 reduced.addEventListener('change',sync);
 document.addEventListener('visibilitychange',sync);
 if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:0}).observe(scene);
 sync();
})();


