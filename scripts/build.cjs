const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
const data=JSON.parse(fs.readFileSync(path.join(root,'data/portfolio.json'),'utf8'));
require(path.join(root,'js/views.js'));
const views=globalThis.PortfolioViews;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function page(id){
 const detail=Boolean(id),prefix=detail?'../':'',project=data.projects.find(p=>p.id===id);
 const title=detail?`${project.title.zh.replace(/\n/g,' ')} · ${data.name.zh}`:data.ui.zh.pageTitle;
 const description=detail?project.summary.zh:data.ui.zh.description;
 return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><meta name="theme-color" content="#f6f5ed"><link rel="icon" href="data:,"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Noto+Serif+SC:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet"><link rel="stylesheet" href="${prefix}css/style.css">${detail?'':`<link rel="preload" as="image" href="images/meadow-sky.webp">`}<meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><script>try{if(!${detail}&&location.hash==='#projects'&&sessionStorage.getItem('portfolio-archive-return'))document.documentElement.classList.add('restoring');}catch{}</script><noscript><style>.restoring{visibility:visible!important}.archive-tabs{display:none}</style></noscript><script defer src="${prefix}js/content.js"></script><script defer src="${prefix}js/views.js"></script><script defer src="${prefix}js/main.js"></script></head><body data-page="${detail?'detail':'home'}"${detail?` data-project="${id}"`:''}><div id="app">${detail?views.detail(data,'zh',id):views.home(data,'zh',data.projects[0].id)}</div></body></html>\n`;
}
fs.mkdirSync(path.join(root,'projects'),{recursive:true});
fs.writeFileSync(path.join(root,'js/content.js'),`/* Generated from data/portfolio.json. Run node scripts/build.cjs after editing. */\nwindow.PortfolioContent = ${JSON.stringify(data)};\n`);
fs.writeFileSync(path.join(root,'index.html'),page());
for(const p of data.projects)fs.writeFileSync(path.join(root,`projects/${p.id}.html`),page(p.id));
console.log(`Generated index.html and ${data.projects.length} directly accessible project pages.`);
