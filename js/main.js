(()=>{
 'use strict';
 const data=window.PortfolioContent,views=window.PortfolioViews,app=document.getElementById('app');
 if(!data||!views||!app){document.documentElement.classList.remove('restoring');return;}
 const isDetail=document.body.dataset.page==='detail',id=document.body.dataset.project;
 const keys={language:'portfolio-lang',selection:'portfolio-archive-selection',back:'portfolio-archive-return'};
 const read=(key,store=sessionStorage)=>{try{return store.getItem(key);}catch{return null;}};
 const write=(key,value,store=sessionStorage)=>{try{store.setItem(key,value);}catch{}};
 let lang=read(keys.language,localStorage)==='en'?'en':'zh',selected=read(keys.selection)||data.projects[0].id;
 if(!data.projects.some(p=>p.id===selected))selected=data.projects[0].id;
 let observer;
 function observeSections(){
  if(observer)observer.disconnect();if(isDetail)return;
  observer=new IntersectionObserver(entries=>{
   const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);if(!visible.length)return;
   const current=visible[0].target.id;
   document.querySelectorAll('[data-nav]').forEach(link=>{if(link.dataset.nav===current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
  },{rootMargin:'-15% 0px -65% 0px',threshold:0});
  document.querySelectorAll('main>section').forEach(section=>observer.observe(section));
 }
 function updateTitle(){
  document.documentElement.lang=lang==='zh'?'zh-CN':'en';const p=data.projects.find(project=>project.id===id);
  document.title=isDetail?`${views.text(p.title,lang).replace(/\n/g,' ')} · ${views.text(data.name,lang)}`:data.ui[lang].pageTitle;
  document.querySelector('meta[name="description"]').content=isDetail?views.text(p.summary,lang):data.ui[lang].description;
 }
 function headerState(){document.querySelector('.site-header')?.classList.toggle('is-solid',isDetail||window.scrollY>70);}
 function updateTabOrientation(){document.querySelector('.archive-tabs')?.setAttribute('aria-orientation',window.matchMedia('(max-width:760px)').matches?'horizontal':'vertical');}
 function render(){app.innerHTML=isDetail?views.detail(data,lang,id):views.home(data,lang,selected);updateTitle();observeSections();headerState();updateTabOrientation();}
 function selectProject(projectId,focus=false){
  const p=data.projects.find(project=>project.id===projectId);if(!p)return;selected=projectId;write(keys.selection,selected);
  document.querySelectorAll('[data-project-select]').forEach(button=>{const active=button.dataset.projectSelect===selected;button.classList.toggle('is-selected',active);button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
  const panel=document.getElementById('project-preview');if(panel){panel.className=`project-showcase accent-${p.accent}`;panel.setAttribute('aria-labelledby',`tab-${p.id}`);panel.innerHTML=views.showcase(p,data,lang);}
  if(focus){const button=document.getElementById(`tab-${selected}`);button.focus({preventScroll:true});button.scrollIntoView({behavior:'instant',block:'nearest',inline:'nearest'});}
 }
 function saveReturn(projectId){write(keys.selection,projectId);write(keys.back,JSON.stringify({selected:projectId,scrollY:window.scrollY}));}
 function setLanguage(next){const y=window.scrollY;lang=next;write(keys.language,lang,localStorage);render();window.scrollTo({top:y,behavior:'instant'});document.querySelector(`[data-language="${next}"]`)?.focus({preventScroll:true});}
 document.addEventListener('click',async event=>{
  const language=event.target.closest('[data-language]');if(language){setLanguage(language.dataset.language);return;}
  const tab=event.target.closest('[data-project-select]');if(tab){selectProject(tab.dataset.projectSelect);return;}
  const open=event.target.closest('[data-project-open]');if(open&&!event.ctrlKey&&!event.metaKey&&!event.shiftKey){saveReturn(open.dataset.projectOpen);return;}
  const back=event.target.closest('[data-back-to-archive]');if(back){write(keys.selection,id);try{const saved=JSON.parse(read(keys.back));if(saved){saved.selected=id;write(keys.back,JSON.stringify(saved));}}catch{}return;}
  const copy=event.target.closest('[data-copy-email]');if(copy){const status=document.querySelector('.copy-status');try{await navigator.clipboard.writeText(copy.dataset.copyEmail);status.textContent=data.ui[lang].copied;}catch{status.textContent=data.ui[lang].copyFail;}}
 });
 document.addEventListener('keydown',event=>{
  if(!event.target.matches('[data-project-select]'))return;
  const order=data.projects.map(project=>project.id),index=order.indexOf(selected),advance=['ArrowRight','ArrowDown'].includes(event.key),reverse=['ArrowLeft','ArrowUp'].includes(event.key);
  if(advance||reverse){event.preventDefault();selectProject(order[(index+(advance?1:-1)+order.length)%order.length],true);}else if(event.key==='Home'||event.key==='End'){event.preventDefault();selectProject(event.key==='Home'?order[0]:order.at(-1),true);}
 });
 window.addEventListener('scroll',headerState,{passive:true});
 window.matchMedia('(max-width:760px)').addEventListener('change',updateTabOrientation);
 window.addEventListener('pageshow',event=>{if(event.persisted){document.documentElement.classList.remove('restoring');headerState();}});
 let awaitingRestore=false;
 try{
  render();
  if(!isDetail&&location.hash==='#projects'){
   let saved;try{saved=JSON.parse(read(keys.back));}catch{}
   if(saved){
    selectProject(saved.selected||selected);awaitingRestore=true;
    const restore=()=>{window.scrollTo({top:saved.scrollY||document.getElementById('projects').offsetTop-82,behavior:'instant'});document.getElementById(`tab-${selected}`)?.focus({preventScroll:true});document.documentElement.classList.remove('restoring');headerState();};
    if(document.readyState==='complete')requestAnimationFrame(restore);
    else window.addEventListener('load',()=>requestAnimationFrame(restore),{once:true});
    setTimeout(()=>{if(document.documentElement.classList.contains('restoring'))restore();},2500);
   }
  }
 }finally{if(!awaitingRestore)document.documentElement.classList.remove('restoring');}
})();
