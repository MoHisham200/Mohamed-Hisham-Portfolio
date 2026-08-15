const PROJECTS = {
  wordpress: [
    {title:'Al Ansaf Al Adel',year:'2026',url:'https://alansaf.sa/',description:'A professional legal services website for Al Ansaf Al Adel, presenting integrated legal consultation and representation for individuals and businesses in Saudi Arabia.',tags:['WordPress','Legal','Responsive'],tone:'steel',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://alansaf.sa/'},
    {title:'Smou Cars',year:'2026',url:'https://smoucars.com/',description:'A modern automotive platform for Smou Cars, showcasing Changan models, offers, service coverage and a complete vehicle discovery journey.',tags:['WordPress','Automotive','UX'],tone:'blue',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://smoucars.com/'},
    {title:'Dar View',year:'2026',url:'https://dar-view.com/',description:'A real-estate experience for Dar View, focused on property marketing, selected residential projects, investment opportunities and lead generation.',tags:['WordPress','Real Estate','UI'],tone:'slate',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://dar-view.com/'},
    {title:'Kidsland School',year:'2026',url:'https://kidsland-school.com/',description:'An educational website for Kidsland School built around Montessori learning, child development, school services and a clear parent-focused experience.',tags:['WordPress','Education','Responsive'],tone:'ice',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://kidsland-school.com/'},
    {title:'Skyline Elevators',year:'2026',url:'https://skyline-e.com/',description:'A corporate website for Skyline Elevators presenting elevator installation, maintenance, technical support and nationwide service coverage.',tags:['WordPress','Corporate','Performance'],tone:'navy',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://skyline-e.com/'},
    {title:'Sheryan Al Shamal International',year:'2026',url:'https://sheryanint.com/',description:'An integrated engineering and environmental solutions website covering construction, real-estate development, environmental consulting and studies.',tags:['WordPress','Engineering','Corporate'],tone:'graphite',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://sheryanint.com/'},
    {title:'Dar Saad Equestrian Center',year:'2026',url:'https://daarsaad.com/',description:'A service-focused website for Dar Saad Equestrian Center, presenting riding training, horse care, events and experiences for different ages.',tags:['WordPress','Services','Responsive'],tone:'silver',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://daarsaad.com/'},
    {title:'ELOVYN',year:'2026',url:'https://elovyn.co.uk/',description:'A premium skincare commerce experience focused on evidence-based menopause skincare, personalized routines and specialist support.',tags:['WordPress','E-commerce','UI'],tone:'bluegray',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://elovyn.co.uk/'},
    {title:'SAWH Law Firm',year:'2026',url:'https://sawh-law.com/',description:'A professional legal website for SAWH Law Firm covering litigation, legal consultation, arbitration, contracts and corporate services in Saudi Arabia.',tags:['WordPress','Legal','Corporate'],tone:'midnight',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://sawh-law.com/'},
    {title:"My Child's Future Sports Club",year:'2026',url:'https://mychildsfuture.club/',description:'A children’s sports club website presenting safe training, professional coaching and a wide range of activities for young athletes.',tags:['WordPress','Sports','Education'],tone:'frost',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://mychildsfuture.club/'}
  ],
  salla: [
    {title:'Virea Beauty',year:'2026',url:'https://vireabeauty.online/',description:'A Saudi beauty e-commerce store focused on cosmetics and a polished online shopping experience.',tags:['Salla','Beauty','Commerce'],tone:'blue',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://vireabeauty.online/'},
    {title:'Bahr Al Aqmasha',year:'2026',url:'https://bher-alaqmasha.com/ar',description:'A specialized Saudi store offering premium imported men’s fabrics for winter and summer, with a broad collection and competitive pricing.',tags:['Salla','Fashion','Responsive'],tone:'slate',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://bher-alaqmasha.com/ar'},
    {title:'Diwan Al Mutanabi',year:'2026',url:'https://diwanalmutanabi.com/',description:'An online bookstore offering a wide selection of Arabic and international books, school supplies and office essentials with reliable delivery across Saudi Arabia.',tags:['Salla','Books','E-commerce'],tone:'steel',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://diwanalmutanabi.com/'},
    {title:'Black Season',year:'2026',url:'https://blackseason-sa.com/',description:'A premium women’s accessories store combining classic elegance with modern designs and gold-plated details.',tags:['Salla','Accessories','UI'],tone:'midnight',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://blackseason-sa.com/'},
    {title:'Mushtry',year:'2026',url:'https://mushtry.sa/ar',description:'A Saudi multi-category store bringing together mother and baby products, toys, coffee, camping, sports, home and office essentials in one shopping experience.',tags:['Salla','Multi-Category','UX'],tone:'bluegray',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://mushtry.sa/ar'},
    {title:'SheaBody',year:'2026',url:'https://sheabody.com.sa/ar',description:'A Saudi natural-products store specializing in shea butter, body butters, cocoa butter, soaps and personal care products, with retail and wholesale options.',tags:['Salla','Beauty','Natural Products'],tone:'frost',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://sheabody.com.sa/ar'},
    {title:'Sol Frio',year:'2026',url:'https://sol-frio.com/ar',description:'A specialized automotive protection store offering high-quality car films and protection solutions with a 10-year warranty.',tags:['Salla','Automotive','Performance'],tone:'navy',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://sol-frio.com/ar'},
    {title:'Fayruz Gifts',year:'2026',url:'https://fayruz-gifts.com/',description:'A handmade gifts and candles store creating custom scents, designs and packaging for graduations, weddings, celebrations and special occasions.',tags:['Salla','Gifts','Handmade'],tone:'silver',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://fayruz-gifts.com/'},
    {title:'Dar Celine',year:'2026',url:'https://dar-celine.com/',description:'A Saudi abaya and women’s fashion store offering elegant designs that balance luxury, quality and simplicity for modern Arabic style.',tags:['Salla','Fashion','Abayas'],tone:'neutral',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://dar-celine.com/'},
    {title:'SWARM',year:'2026',url:'https://swarm-sa.com/',description:'A Saudi accessories store offering gold-plated smart necklaces designed to carry feelings and memories in a refined way.',tags:['Salla','Accessories','Commerce'],tone:'blue',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://swarm-sa.com/'},
  ],
  zid: [
    {title:'Motika',year:'2026',url:'https://motikastore.com/',description:'A Saudi store for oud, incense burners and heritage wooden gift pieces, combining traditional character with a polished shopping experience.',tags:['Zid','Oud','Commerce'],tone:'steel',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://motikastore.com/'},
    {title:'Amaala',year:'2026',url:'https://byamaala.store/',description:'A beauty store focused on skincare and dark-circle care, with a clean product-led shopping experience.',tags:['Zid','Beauty','Responsive'],tone:'blue',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://byamaala.store/'},
    {title:'Glint & Glimmer',year:'2026',url:'https://glintandglimmerstore.com/ar-eg/',description:'A modern jewelry store offering elegant gold-plated and rhodium-finished pieces with a premium shopping experience.',tags:['Zid','Jewelry','E-commerce'],tone:'silver',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://glintandglimmerstore.com/ar-eg/'},
    {title:'Sada Store',year:'2026',url:'https://sada-store.com/',description:'A stationery and planning store offering elegant notebooks, planners and desk accessories designed for organized everyday life.',tags:['Zid','Stationery','UX'],tone:'frost',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://sada-store.com/'},
    {title:'Shoal Academy',year:'2026',url:'https://academy.shoal.sa/',description:'A professional training center website focused on skills development, vocational programs and accredited certificates.',tags:['Zid','Training','Education'],tone:'navy',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://academy.shoal.sa/'}
  ],
  shopify: [
    {title:'The Native Walkers',year:'2026',url:'https://thenativewalkers.net/',description:'A modern fashion storefront for men and women, built around casual and streetwear collections with a strong product-discovery experience.',tags:['Shopify','Fashion','E-commerce'],tone:'bluegray',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://thenativewalkers.net/'}
  ],
  other: [
    {title:'Sheryan Al Shamal International',year:'2026',url:'https://sheryanint.com/',description:'An integrated engineering and environmental solutions website covering construction, real-estate development, environmental consulting and studies.',tags:['WordPress','Engineering','Corporate'],tone:'blue',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://sheryanint.com/'},
    {title:'Dar Saad Equestrian Center',year:'2026',url:'https://daarsaad.com/',description:'A service-focused website for Dar Saad Equestrian Center, presenting riding training, horse care, events and experiences for different ages.',tags:['WordPress','Services','Responsive'],tone:'blue',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://daarsaad.com/'},
    {title:'ELOVYN',year:'2026',url:'https://elovyn.co.uk/',description:'A premium skincare commerce experience focused on evidence-based menopause skincare, personalized routines and specialist support.',tags:['WordPress','E-commerce','UI'],tone:'blue',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://elovyn.co.uk/'},
    {title:'SAWH Law Firm',year:'2026',url:'https://sawh-law.com/',description:'A professional legal website for SAWH Law Firm covering litigation, legal consultation, arbitration, contracts and corporate services in Saudi Arabia.',tags:['WordPress','Legal','Corporate'],tone:'blue',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://sawh-law.com/'},
    {title:"My Child's Future Sports Club",year:'2026',url:'https://mychildsfuture.club/',description:'A children’s sports club website presenting safe training, professional coaching and a wide range of activities for young athletes.',tags:['WordPress','Sports','Education'],tone:'blue',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://mychildsfuture.club/'},
    {title:'Moos Al Wasama',year:'2026',url:'https://moosalwasama.com/ar',description:'A polished salon and beauty experience presenting services, appointments and a refined customer journey.',tags:['Rakez','Beauty','Services'],tone:'slate',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://moosalwasama.com/ar'},
    {title:'Lense Bunny',year:'2026',url:'https://lense-bunny.com/',description:'A Saudi optical store specializing in medical and cosmetic contact lenses with a clear product-led shopping experience.',tags:['Salla','Lenses','Commerce'],tone:'ice',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://lense-bunny.com/'},
    {title:'MC Gift Boxes',year:'2026',url:'https://occasion-cards.com/',description:'A gift store offering premium children’s gift boxes and newborn clothing for memorable occasions.',tags:['Salla','Gifts','Kids'],tone:'silver',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://occasion-cards.com/'},
    {title:'Lumea Co',year:'2026',url:'https://lumeaco.store/',description:'An elegant artificial-flower store focused on everlasting floral arrangements and refined decorative pieces.',tags:['Salla','Flowers','E-commerce'],tone:'frost',imageUrl:'https://image.thum.io/get/width/800/crop/600/noanimate/https://lumeaco.store/'},
  ]
};

const state = {platform:'wordpress', selected:0};
const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>[...root.querySelectorAll(s)];

function getProjectsForPlatform(platform){
  if(platform==='all'){
    const order=['wordpress','salla','zid','shopify','other'];
    return order.flatMap(key=>PROJECTS[key].map((p,i)=>({...p, platform:key, mixedIndex:i})));
  }
  return (PROJECTS[platform]||[]).map(p=>({...p,platform}));
}

function renderProjects(){
  const list=$('#projectList');
  const items=getProjectsForPlatform(state.platform);
  state.items=items;
  state.selected=Math.min(state.selected,Math.max(0,items.length-1));
  list.innerHTML=items.map((p,i)=>`<article class="project-item ${i===state.selected?'active':''}" data-index="${i}">
    <span class="project-number">${String(i+1).padStart(2,'0')}</span>
    <div class="project-main"><div class="project-platform-mini"><span class="mini-platform-logo">${platformMark(p.platform)}</span><small>${platformLabel(p.platform)}</small></div><h3>${p.title}</h3><p>${p.description}</p><div class="project-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div>
    <span class="project-arrow">↗</span>
  </article>`).join('');
  $('#workCount').textContent = `${String(items.length).padStart(2,'0')} ${state.platform==='all'?'Mixed Projects':'Projects'}`;
  previewLocked=false;
  const work=$('#work'); if(work)work.dataset.previewLocked='false';
  updatePreview();
  stopPreviewAutoplay();
  startPreviewAutoplay();
}
function platformLabel(key){return ({wordpress:'WordPress',salla:'Salla',zid:'Zid',shopify:'Shopify',other:'OpenCart / Other'})[key]||'Other';}
function platformMark(key){return ({wordpress:'W',salla:'S',zid:'Z',shopify:'S',other:'O'})[key]||'✦';}
let previewAutoTimer=null;
let previewLocked=false;
function stopPreviewAutoplay(){if(previewAutoTimer){clearInterval(previewAutoTimer);previewAutoTimer=null;}}
function startPreviewAutoplay(){
  stopPreviewAutoplay();
  if(previewLocked || !state.items || state.items.length<2)return;
  previewAutoTimer=setInterval(()=>{
    if(document.hidden || previewLocked)return;
    state.selected=(state.selected+1)%state.items.length;
    $$('.project-item').forEach((el,i)=>el.classList.toggle('active',i===state.selected));
    updatePreview(true);
  },4200);
}
function selectProject(index){
  state.selected=index;
  previewLocked=true;
  const work=$('#work'); if(work)work.dataset.previewLocked='true';
  stopPreviewAutoplay();
  $$('.project-item').forEach((el,i)=>{el.classList.toggle('active',i===index);el.classList.remove('is-locked');});
  const current=$(`.project-item[data-index="${index}"]`); if(current)current.classList.add('is-locked');
  updatePreview();
}
function unlockPreview(){
  previewLocked=false;
  const work=$('#work'); if(work)work.dataset.previewLocked='false';
  $$('.project-item').forEach(el=>el.classList.remove('is-locked'));
  startPreviewAutoplay();
}
const previewImageCache = new Map();

function warmPreviewImage(project){
  if(!project || !project.imageUrl || previewImageCache.has(project.imageUrl)) return;
  const img = new Image();
  img.decoding = 'async';
  img.fetchPriority = 'low';
  img.src = project.imageUrl;
  previewImageCache.set(project.imageUrl, img);
}

function warmNearbyPreviewImages(){
  if(!state.items || !state.items.length) return;
  const next = state.items[(state.selected + 1) % state.items.length];
  const next2 = state.items[(state.selected + 2) % state.items.length];
  warmPreviewImage(next);
  warmPreviewImage(next2);
}

function warmPlatformImages(platform){
  const items=PROJECTS[platform]||[];
  items.forEach((project,index)=>{
    const img=new Image();
    img.decoding='async';
    img.fetchPriority=index<3?'high':'low';
    img.src=project.imageUrl||'';
    if(project.imageUrl) previewImageCache.set(project.imageUrl,img);
  });
}

function updatePreview(isAuto=false){
  const items=state.items||getProjectsForPlatform(state.platform); const p=items[state.selected]||items[0]; if(!p)return;
  const platform=p.platform||state.platform;
  $('#previewPlatform').textContent=platformLabel(platform); $('#previewYear').textContent=p.year;
  $('#previewUrl').textContent=p.url.replace(/^https?:\/\//,'').replace(/\/$/,'');
  const previewTitle = p.title.trim().split(/\s+/);
  $('#previewTitle').textContent = previewTitle.length > 2 ? `${previewTitle.slice(0, 2).join(' ')} …` : p.title;
  $('#previewDescription').textContent=p.description;
  $('#previewTags').innerHTML=p.tags.map(t=>`<span>${t}</span>`).join(''); $('#previewLink').href=p.url;
  $('#fakeTitle').innerHTML=p.title.split(' ').slice(0,3).join('<br>')+'<br><span style="color:#66666f">Store.</span>';
  $('#fakeTag').textContent=`${platformLabel(platform)} / ${p.year}`; $('#fakeLogo').textContent=p.title.split(' ').map(x=>x[0]).join('').slice(0,3)+'.';
  const site=$('#fakeSite');
  site.style.background=p.tone==='red'?'radial-gradient(circle at 80% 20%,rgba(165,45,67,.28),transparent 34%),linear-gradient(135deg,#141014,#070709)':p.tone==='blue'?'radial-gradient(circle at 80% 20%,rgba(23,59,115,.31),transparent 34%),linear-gradient(135deg,#0f1218,#070709)':'linear-gradient(135deg,#141416,#070709)';
  const preview=$('#projectPreview');
  if(preview){
    const tintMap={
      steel:'rgba(170,184,202,.10)',blue:'rgba(62,103,164,.13)',slate:'rgba(91,108,132,.11)',ice:'rgba(150,180,205,.09)',navy:'rgba(24,57,106,.15)',graphite:'rgba(120,128,140,.08)',silver:'rgba(205,210,218,.08)',bluegray:'rgba(74,98,128,.12)',midnight:'rgba(37,60,94,.14)',frost:'rgba(182,202,220,.09)',neutral:'rgba(255,255,255,.055)',red:'rgba(130,35,50,.10)'
    };
    preview.style.setProperty('--preview-tint',tintMap[p.tone]||tintMap.neutral);
  }

  /* Real website preview: use a live homepage screenshot for every supplied site.
     The local fake preview remains as a safe fallback if the screenshot service
     cannot load the remote page. */
  const previewImage=$('#previewImage');
  const previewFallback=$('#previewImageFallback');
  if(previewImage && previewFallback){
    previewImage.onload=()=>{
      previewImage.classList.add('is-loaded');
      previewFallback.classList.remove('is-visible');
      warmNearbyPreviewImages();
    };
    previewImage.onerror=()=>{
      previewImage.classList.remove('is-loaded');
      previewFallback.classList.add('is-visible');
      warmNearbyPreviewImages();
    };
    previewFallback.classList.remove('is-visible');
    previewImage.classList.remove('is-loaded');
    previewImage.alt=`${p.title} website preview`;
    previewImage.loading='eager';
    previewImage.fetchPriority='high';
    previewImage.src=p.imageUrl || '';
    if(!p.imageUrl) previewFallback.classList.add('is-visible');
  }

  const work=$('#work'); if(work)work.dataset.activePlatform=platform;
  if(window.gsap){gsap.fromTo('#projectPreview .browser-frame',{y:8,opacity:.72},{y:0,opacity:1,duration:.45,ease:'power3.out'});gsap.fromTo('#projectPreview .preview-info > *',{y:8,opacity:.4},{y:0,opacity:1,duration:.35,stagger:.04,ease:'power2.out'});}
}

function initNav(){
  const menu=$('#mobileMenu'),toggle=$('.menu-toggle');

  // Smooth section navigation for every internal link/button.
  // Lenis is used when available so the movement stays slow and premium.
  const scrollToHash=(hash)=>{
    if(!hash || hash==='#')return;
    const target=document.querySelector(hash);
    if(!target)return;
    const headerOffset=18;
    if(window.__portfolioLenis){
      window.__portfolioLenis.scrollTo(target,{offset:-headerOffset,duration:1.45,immediate:false});
    }else{
      const top=target.getBoundingClientRect().top+window.pageYOffset-headerOffset;
      window.scrollTo({top,behavior:'smooth'});
    }
  };

  document.addEventListener('click',(e)=>{
    const link=e.target.closest('a[href^="#"]');
    if(!link)return;
    const hash=link.getAttribute('href');
    if(!hash || hash==='#')return;
    const target=document.querySelector(hash);
    if(!target)return;
    e.preventDefault();
    scrollToHash(hash);
    history.replaceState(null,'',hash);
  });
  toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.classList.toggle('active',open);toggle.setAttribute('aria-expanded',String(open));});
  $$('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.classList.remove('active');toggle.setAttribute('aria-expanded','false');}));
  let ticking=false;
  const updateHeader=()=>{
    const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
    const progress=Math.min(1,Math.max(0,window.scrollY/max));
    const header=$('#siteHeader');
    header.classList.toggle('scrolled',window.scrollY>20);
    header.style.setProperty('--header-progress',(progress*100).toFixed(2)+'%');
    ticking=false;
  };
  window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateHeader);ticking=true;}},{passive:true});
  updateHeader();
}

function initCursor(){
  if(matchMedia('(pointer: coarse)').matches)return;
  const dot=$('.cursor-dot'),ring=$('.cursor-ring');let x=0,y=0,rx=0,ry=0;
  window.addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;dot.style.left=x+'px';dot.style.top=y+'px'});
  function tick(){rx+=(x-rx)*.15;ry+=(y-ry)*.15;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(tick)}tick();
  $$('a,button,.project-item,.platform-card,.glass-panel').forEach(el=>{el.addEventListener('mouseenter',()=>ring.classList.add('active'));el.addEventListener('mouseleave',()=>ring.classList.remove('active'))});
}

function initMagnetic(){
  if(matchMedia('(pointer: coarse)').matches)return;
  $$('.magnetic').forEach(el=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.08}px)`});el.addEventListener('mouseleave',()=>el.style.transform='')});
}

function initMotion(){
  document.documentElement.classList.add('js-ready');
  if(typeof Lenis!=='undefined'){
    const lenis=new Lenis({duration:1.35,smoothWheel:true,touchMultiplier:1.05,easing:(t)=>1-Math.pow(1-t,4)});
    window.__portfolioLenis=lenis;
    function raf(t){lenis.raf(t);requestAnimationFrame(raf)}
    requestAnimationFrame(raf);
  }
  if(typeof gsap==='undefined' || typeof ScrollTrigger==='undefined'){ $$('.reveal-up,.reveal-left,.reveal-right,.reveal-scale').forEach(el=>{el.style.opacity=1;el.style.transform='none'}); return; }
  gsap.registerPlugin(ScrollTrigger);
  const ease='power3.out';
  gsap.utils.toArray('.reveal-up').forEach(el=>gsap.fromTo(el,{opacity:0,y:38},{opacity:1,y:0,duration:.9,ease,scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
  gsap.utils.toArray('.reveal-left').forEach(el=>gsap.fromTo(el,{opacity:0,x:-45},{opacity:1,x:0,duration:1,ease,scrollTrigger:{trigger:el,start:'top 82%',once:true}}));
  gsap.utils.toArray('.reveal-right').forEach(el=>gsap.fromTo(el,{opacity:0,x:45},{opacity:1,x:0,duration:1,ease,scrollTrigger:{trigger:el,start:'top 82%',once:true}}));
  gsap.utils.toArray('.reveal-scale').forEach(el=>gsap.fromTo(el,{opacity:0,scale:.88,y:25},{opacity:1,scale:1,y:0,duration:1.2,ease,delay:.15,scrollTrigger:{trigger:el,start:'top 82%',once:true}}));
  gsap.to('.hero-stage',{y:-45,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
  gsap.to('.hero-title',{y:-30,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1.2}});
  gsap.to('.hero-glow-blue',{x:-80,y:50,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
  gsap.to('.hero-glow-red',{x:70,y:-60,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
  gsap.to('.scroll-progress',{width:'100%',ease:'none',scrollTrigger:{start:0,end:'max',scrub:.2}});
  gsap.utils.toArray('.section-wash').forEach(el=>gsap.fromTo(el,{yPercent:-7},{yPercent:7,ease:'none',scrollTrigger:{trigger:el.parentElement,start:'top bottom',end:'bottom top',scrub:1}}));
  gsap.utils.toArray('.process-card').forEach((el,i)=>gsap.fromTo(el,{y:40*(i%2?1:-1)},{y:0,ease:'none',scrollTrigger:{trigger:'.process-section',start:'top bottom',end:'bottom top',scrub:1}}));
}

setTimeout(()=>warmPlatformImages('salla'),700);
setTimeout(()=>warmPlatformImages('zid'),1100);
setTimeout(()=>warmPlatformImages('shopify'),1500);
setTimeout(()=>warmPlatformImages('other'),1900);

function initTabs(){
  const previewLink = $('#previewLink');
  if(previewLink){
    // External project links always open in a separate tab.
    // Keep the portfolio page untouched in the current tab.
    previewLink.target = '_blank';
    previewLink.rel = 'noopener noreferrer';
  }

  $$('.platform-tab').forEach(btn=>btn.addEventListener('click',()=>{
    state.platform=btn.dataset.platform; state.selected=0; previewLocked=false;
    const workState=$('#work'); if(workState)workState.dataset.previewLocked='false';
    stopPreviewAutoplay(); $$('.platform-tab').forEach(x=>x.classList.remove('active')); btn.classList.add('active');
    renderProjects(); const work=$('#work'); if(work)work.dataset.activePlatform=state.platform;
    if(window.gsap)gsap.fromTo('#projectList .project-item',{opacity:0,x:22},{opacity:1,x:0,duration:.5,stagger:.035,ease:'power3.out'});
  }));
  const list=$('#projectList');
  if(list)list.addEventListener('click',e=>{const item=e.target.closest('.project-item');if(!item)return;const index=+item.dataset.index;if(previewLocked&&state.selected===index){unlockPreview();return;}selectProject(index);});
}

function initAmbient(){
  const ambient=$('.site-ambient');
  if(!ambient)return;
  const palette={
    home:['18,31,58','38,64,112'],
    about:['22,42,76','38,64,112'],
    platforms:['26,47,83','38,64,112'],
    work:['20,36,67','75,18,34'],
    experience:['27,42,68','38,64,112'],
    skills:['18,38,73','38,64,112'],
    process:['22,35,64','38,64,112'],
    contact:['29,42,70','38,64,112']
  };
  const setAmbient=id=>{
    const [a,b]=palette[id]||palette.home;
    ambient.style.setProperty('--ambient-rgb',a);
    ambient.style.setProperty('--ambient-rgb-2',b);
    ambient.style.setProperty('--ambient-alpha',id==='home'?'.15':'.11');
  };
  const sections=$$('main > section');
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting && entry.intersectionRatio>.35)setAmbient(entry.target.id);
    }),{threshold:[.35,.6]});
    sections.forEach(s=>io.observe(s));
  }
  window.addEventListener('mousemove',e=>{
    ambient.style.setProperty('--ambient-x',(e.clientX/window.innerWidth*100).toFixed(1)+'%');
  },{passive:true});
  setAmbient('home');
}

function initPlatformInteractions(){
  const section=$('#platforms');
  if(!section)return;
  const palette={wordpress:['24,38,70','38,64,112'],salla:['30,37,62','38,64,112'],zid:['21,45,85','38,64,112'],shopify:['20,47,55','38,64,112'],opencart:['28,34,56','38,64,112']};
  $$('.platform-card',section).forEach(card=>{
    card.addEventListener('mouseenter',()=>{
      const p=palette[card.dataset.platformGlow]||palette.wordpress;
      const ambient=document.querySelector('.site-ambient');
      if(ambient){ambient.style.setProperty('--ambient-rgb',p[0]);ambient.style.setProperty('--ambient-rgb-2',p[1]);ambient.style.setProperty('--ambient-alpha','.075');}
    });
    card.addEventListener('mouseleave',()=>{
      const ambient=document.querySelector('.site-ambient');
      if(ambient)ambient.style.setProperty('--ambient-alpha','.11');
    });
  });
}

function initScrollType(){
  const phrases=$$('.unified-phrase');
  if(!phrases.length)return;
  const run=el=>{
    if(el.dataset.typed==='1')return;
    el.dataset.typed='1';
    const text=el.textContent.trim();
    el.textContent='';
    let i=0;
    const tick=()=>{el.textContent=text.slice(0,i++);if(i<=text.length)requestAnimationFrame(tick);};
    tick();
  };
  if(typeof ScrollTrigger!=='undefined' && typeof gsap!=='undefined'){
    phrases.forEach(el=>ScrollTrigger.create({trigger:el,start:'top 90%',once:true,onEnter:()=>run(el)}));
  }else if('IntersectionObserver' in window){
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){run(e.target);io.unobserve(e.target)}}),{threshold:.4});
    phrases.forEach(p=>io.observe(p));
  }else phrases.forEach(run);
}

function initImageFallbacks(){
  $$('.platform-logo img,.tab-logo img,.tech-logo img').forEach(img=>img.addEventListener('error',()=>{
    img.classList.add('logo-failed');
    const fallback=img.parentElement.querySelector('span,b');
    if(fallback)fallback.style.display='block';
  },{once:true}));
}

function initSectionTransitions(){
  if(typeof gsap==='undefined' || typeof ScrollTrigger==='undefined')return;
  gsap.registerPlugin(ScrollTrigger);

  // One-way reveal: sections animate in when first reached and stay visible.
  // Scrolling back up must NOT reverse the reveal or make sections disappear.
  const sections=gsap.utils.toArray('main > section:not(.hero):not(#what-we-do)');
  const modes=[
    {x:0,y:28},{x:-20,y:18},{x:20,y:18},{x:0,y:24},
    {x:-16,y:14},{x:16,y:14},{x:0,y:20},{x:-12,y:12},{x:12,y:12}
  ];

  sections.forEach((section,i)=>{
    const mode=modes[i%modes.length];
    const inner=section.querySelector(':scope > .container, :scope > .contact-inner') || section;
    gsap.set(inner,{opacity:0,x:mode.x,y:mode.y});
    gsap.to(inner,{
      opacity:1,x:0,y:0,duration:.95,ease:'power3.out',
      scrollTrigger:{trigger:section,start:'top 84%',toggleActions:'play none none none',once:true,invalidateOnRefresh:true}
    });

    const wash=section.querySelector('.section-wash');
    if(wash){
      gsap.fromTo(wash,{yPercent:-4},{yPercent:4,ease:'none',scrollTrigger:{trigger:section,start:'top bottom',end:'bottom top',scrub:1.4,invalidateOnRefresh:true}});
    }
  });

  const work=document.querySelector('.work-section');
  if(work){
    const preview=work.querySelector('.project-preview');
    const list=work.querySelector('.project-list');
    if(preview)gsap.fromTo(preview,{y:18,opacity:.72},{y:-8,opacity:1,ease:'none',scrollTrigger:{trigger:work,start:'top bottom',end:'bottom top',scrub:1.2}});
    if(list)gsap.fromTo(list,{y:18,opacity:.72},{y:-8,opacity:1,ease:'none',scrollTrigger:{trigger:work,start:'top bottom',end:'bottom top',scrub:1.25}});
  }

  ScrollTrigger.refresh();
}

function initHeroType(){
  if(typeof gsap==='undefined')return;
  const title=document.querySelector('.hero-title');
  if(title){gsap.fromTo(title,{opacity:0,y:35,letterSpacing:'-.02em'},{opacity:1,y:0,letterSpacing:'-.065em',duration:1.15,ease:'power4.out',delay:.15});}
  gsap.fromTo('.hero-description',{opacity:0,y:18},{opacity:1,y:0,duration:.8,delay:.45,ease:'power3.out'});
  gsap.fromTo('.hero-actions',{opacity:0,y:16},{opacity:1,y:0,duration:.75,delay:.58,ease:'power3.out'});
}

function initExperienceTabs(){
  const shell=document.querySelector('.career-frame');
  if(!shell)return;
  const tabs=[...shell.querySelectorAll('.career-tab')];
  const panels=[...shell.querySelectorAll('.career-panel')];
  const label=shell.querySelector('#careerLabel');
  const counter=shell.querySelector('#careerCounter');
  const progress=shell.querySelector('#careerProgress');
  const labels={current:'CURRENT ROLE',previous:'PREVIOUS ROLE',education:'EDUCATION',skills:'EXPERIENCE BUILT'};
  let activeKey='';
  let switchToken=0;

  const animatePanelContent=(panel)=>{
    if(!window.gsap || panel.dataset.contentRevealed==='true')return;
    panel.dataset.contentRevealed='true';
    const items=panel.querySelectorAll('.career-date,.career-main h2,.career-role,.career-main>p,.career-tags,.career-side-card,.career-panel-number');
    gsap.fromTo(items,{opacity:0,y:18},{opacity:1,y:0,duration:.48,stagger:.055,ease:'power3.out',clearProps:'transform'});
  };

  const activate=(key,animate=true)=>{
    const next=panels.find(p=>p.dataset.careerPanel===key);
    if(!next || (key===activeKey && animate))return;
    activeKey=key;
    const token=++switchToken;
    const n=tabs.findIndex(t=>t.dataset.careerTab===key)+1;

    tabs.forEach(t=>{
      const on=t.dataset.careerTab===key;
      t.classList.toggle('active',on);
      t.setAttribute('aria-selected',on?'true':'false');
    });
    if(label)label.textContent=labels[key]||key.toUpperCase();
    if(counter)counter.textContent=`${String(n).padStart(2,'0')} / 04`;
    if(progress)progress.style.width=`${n*25}%`;

    // Hard exclusivity first: only ONE panel can ever be active/visible.
    panels.forEach(panel=>{
      panel.classList.remove('active');
      panel.style.visibility='hidden';
      panel.style.pointerEvents='none';
      panel.style.opacity='0';
      panel.style.transform='translate3d(0,18px,0)';
    });

    next.classList.add('active');
    next.style.visibility='visible';
    next.style.pointerEvents='auto';
    next.style.zIndex='2';

    if(!window.gsap || !animate){
      next.style.opacity='1';
      next.style.transform='translate3d(0,0,0)';
      return;
    }

    gsap.killTweensOf(panels);
    gsap.killTweensOf(next.querySelectorAll('*'));
    gsap.fromTo(next,
      {opacity:0,y:20},
      {opacity:1,y:0,duration:.52,ease:'power3.out',onComplete:()=>{if(token===switchToken)animatePanelContent(next)}}
    );
  };

  tabs.forEach(tab=>tab.addEventListener('click',()=>activate(tab.dataset.careerTab,true)));
  activate('current',false);

  if(window.gsap && window.ScrollTrigger){
    const section=document.querySelector('.experience-section');
    const frame=section?.querySelector('.career-frame');
    if(section && frame){
      gsap.fromTo(frame,{opacity:0,y:38},{opacity:1,y:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:section,start:'top 82%',toggleActions:'play none none none',once:true,invalidateOnRefresh:true}});
      gsap.fromTo(section.querySelectorAll('.career-tab'),{opacity:0,x:-16},{opacity:1,x:0,duration:.55,stagger:.07,ease:'power3.out',scrollTrigger:{trigger:section,start:'top 74%',toggleActions:'play none none none',once:true,invalidateOnRefresh:true}});
      gsap.fromTo(section.querySelector('.career-stage'),{opacity:.45,y:18},{opacity:1,y:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:section,start:'top 86%',toggleActions:'play none none none',once:true,invalidateOnRefresh:true}});
    }
  }
}

function initPageLoader(){
  const loader=document.getElementById('pageLoader');
  if(!loader || window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const open=()=>{
    loader.classList.add('is-opening');
    window.setTimeout(()=>loader.classList.add('is-done'),2150);
  };
  // Let the first frame paint before the door reveal starts.
  window.requestAnimationFrame(()=>window.setTimeout(open,180));
}

function init(){initPageLoader();renderProjects();initNav();initCursor();initMagnetic();initMotion();initSectionTransitions();initHeroType();initTabs();initExperienceTabs();initAmbient();initPlatformInteractions();initScrollType();initImageFallbacks();initWhatWeDo();}
window.addEventListener('DOMContentLoaded',init);


/* =========================================================
   WHAT WE DO — SCROLL WORD EFFECT
   ========================================================= */
function initWhatWeDo(){
  const section=document.querySelector('#what-we-do');
  if(!section)return;

  const words=[...section.querySelectorAll('.what-we-do li')];
  const progress=section.querySelector('.what-we-do-progress i');
  const stage=section.querySelector('.what-we-do-stage');
  if(!words.length || !stage)return;

  const colors=['#a52d43','#3f6fbd','#d2b36a'];
  words.forEach((word,i)=>{
    word.style.setProperty('--word-color',colors[i%colors.length]);
  });

  let raf=0;
  let active=-1;
  const update=()=>{
    raf=0;
    const rect=section.getBoundingClientRect();
    const scrollDistance=Math.max(1,section.offsetHeight-window.innerHeight);
    const passed=Math.min(scrollDistance,Math.max(0,-rect.top));
    const progressValue=passed/scrollDistance;

    /* Leave a small breathing room at both ends so the first/last word
       never flashes in too early or disappears before the section exits. */
    const usableStart=.06;
    const usableEnd=.94;
    const usable=Math.min(1,Math.max(0,(progressValue-usableStart)/(usableEnd-usableStart)));
    const scaled=usable*(words.length-1);
    const next=Math.min(words.length-1,Math.round(scaled));

    words.forEach((word,i)=>{
      const distance=Math.abs(i-scaled);
      word.classList.toggle('is-active',i===next && progressValue>0.025 && progressValue<.985);
      word.classList.toggle('is-near',distance<1.15);
      word.style.setProperty('--word-color',colors[i%colors.length]);
    });

    if(active!==next){
      active=next;
      section.dataset.activeWord=String(next);
    }

    if(progress)progress.style.width=`${Math.min(100,Math.max(0,progressValue*100))}%`;
    section.classList.toggle('is-entered',progressValue>.015);
    section.classList.toggle('is-exiting',progressValue>.97);

    /* Slow ambient parallax: the background drifts a few pixels rather than
       jumping, which makes the section feel physically connected to the
       section before and after it. */
    const shift=(progressValue-.5)*70;
    const glowA=section.querySelector('.what-we-do-glow-a');
    const glowB=section.querySelector('.what-we-do-glow-b');
    if(glowA)glowA.style.transform=`translate3d(${shift}px,${shift*.35}px,0)`;
    if(glowB)glowB.style.transform=`translate3d(${-shift}px,${-shift*.28}px,0)`;
  };

  const requestUpdate=()=>{if(!raf)raf=requestAnimationFrame(update)};
  window.addEventListener('scroll',requestUpdate,{passive:true});
  window.addEventListener('resize',requestUpdate,{passive:true});
  requestUpdate();

  /* Enter/leave motion for the complete story, intentionally independent
     from the word timing so the words never race the section transition. */
  if(typeof gsap!=='undefined' && typeof ScrollTrigger!=='undefined'){
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(stage,{opacity:.25,y:22},{opacity:1,y:0,ease:'power2.out',
      scrollTrigger:{trigger:section,start:'top 94%',end:'top 62%',scrub:.9,invalidateOnRefresh:true}});
    gsap.to(stage,{opacity:.86,y:-10,ease:'none',
      scrollTrigger:{trigger:section,start:'bottom 60%',end:'bottom top',scrub:1.15,invalidateOnRefresh:true}});
  }
}
