const reducedMotion=matchMedia('(prefers-reduced-motion:reduce)').matches;
const meter=document.querySelector('.scroll-meter');
addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;meter.style.width=`${max?scrollY/max*100:0}%`},{passive:true});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');observer.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.intro-copy,.intro-aside,.work-head,.portfolio-info,.services-head,.service-rows,.method-left,.method-steps').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
if(!reducedMotion&&matchMedia('(pointer:fine)').matches)document.querySelectorAll('.magnetic').forEach(btn=>{btn.addEventListener('mousemove',e=>{const r=btn.getBoundingClientRect();btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.1}px,${(e.clientY-r.top-r.height/2)*.1}px)`});btn.addEventListener('mouseleave',()=>btn.style.transform='')});
const briefButton=document.querySelector('#copy-brief');
briefButton.addEventListener('click',async()=>{const message='Посмотрел портфолио. Мне нужен [сайт / бот / сервис] для [задача]. Хочу запустить к [дата]. Давайте обсудим.';const status=document.querySelector('.copy-status');try{await navigator.clipboard.writeText(message);status.textContent='Скопировано. Вставьте сообщение в нашу переписку.';briefButton.querySelector('span').textContent='Сообщение скопировано';}catch{status.textContent='Выделите и скопируйте текст сообщения выше.';}});
