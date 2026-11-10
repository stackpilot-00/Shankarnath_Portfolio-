// ===== EDIT YOUR CONTENT HERE =====
const skills = {
  "Programming": [["Python","Intermediate"],["C Programming","Intermediate"],["Java","Intermediate"]],
  "Web Development": [["HTML","Intermediate"],["CSS","Intermediate"],["JavaScript","Intermediate"]],
  "Data & AI": [["SQL","Intermediate"],["Data Science","Intermediate"],["Machine Learning","Beginner"]],
  "Tools & Productivity": [["MS Excel","Advanced"],["Git & GitHub","Intermediate"]]
};
// To add a project, copy one object. cat: "Web", "IoT" or "AI & Data"
const projects = [
 {title:"M.E.S Convent English High School Website",type:"Live website",cat:["Web"],tags:["HTML","CSS","JavaScript","Responsive design"],short:"A school website with a clear page layout, navigation and responsive experience.",
  long:["Designed and developed a school website with attention to page layout, navigation and responsive user experience.","This is the project from my Vasudevcore internship."],link:"https://mesconventtvk.com/"},
 {title:"Smart Bus Crowd Management System",type:"Concept / prototype",cat:["IoT"],tags:["IoT","ESP32/ESP8266","IR sensors","GPS"],short:"Passenger counting, crowd-level monitoring and GPS bus tracking.",
  long:["A smart public-transport concept/prototype with passenger entry and exit counting, crowd-level monitoring and GPS-based bus tracking.","The goal is to help passengers understand how crowded a bus is and make better travel decisions. It is not a deployed BMTC system."]},
 {title:"Placement Training LMS (CYPHER 4.0 Hackathon)",type:"Hackathon project",cat:["Web"],tags:["Hackathon","LMS","Team project"],short:"A Learning Management System for placement training, built at a hackathon.",
  long:["I contributed to a Placement Training Learning Management System while participating in the CYPHER 4.0 Hackathon.","This was a team effort; I contributed to it and don't claim ownership of the entire system."]},
 {title:"FoodWise AI",type:"Concept / prototype",cat:["AI & Data"],tags:["Python","Machine Learning","Food waste"],short:"An AI concept for food-waste prediction and nutrition intelligence.",
  long:["An AI-focused concept for predicting food waste and providing nutrition intelligence, intended to support better food decisions and reduce waste."]},
 {title:"IoT-Based Smoke Detector",type:"Concept / prototype",cat:["IoT"],tags:["IoT","Sensors","Safety"],short:"An IoT safety project that detects smoke and indicates potential fire hazards.",
  long:["An IoT-based safety project focused on smoke detection and indicating potential fire hazards."]},
 {title:"Smart Parking System",type:"Concept / prototype",cat:["IoT"],tags:["IoT","Sensors","Smart parking"],short:"Monitors parking-slot availability to help vehicles park more efficiently.",
  long:["A smart parking project focused on monitoring parking-slot availability and supporting more efficient vehicle parking."]}
];
// ===== END OF CONTENT =====

const $ = (s, r=document) => r.querySelector(s);
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h !== undefined) e.textContent = h; return e; };
const rank = {Beginner:1, Intermediate:3, Advanced:5};

const sg = $("#skillGrid");
for (const [group, items] of Object.entries(skills)) {
  const box = el("div","card sk-group"); box.append(el("h3","",group));
  items.forEach(([n,l]) => {
    const row = el("div","sk"); row.append(el("span","",n));
    const lv = el("span","lvl"), dots = el("span","dots"); dots.setAttribute("aria-hidden","true");
    for (let i=1;i<=5;i++) dots.append(el("b", i<=rank[l] ? "f" : ""));
    lv.append(dots, el("span","",l)); row.append(lv); box.append(row);
  });
  sg.append(box);
}

const grid = $("#projectGrid"), dlg = $("#dlg"), dBody = $("#dBody");
const badge = p => el("span","badge"+(p.type==="Live website"?" live":""),p.type);
const tagList = p => { const tg = el("div","tags"); p.tags.forEach(t => tg.append(el("span","",t))); return tg; };
function openDetails(p) {
  dBody.replaceChildren(badge(p));
  const h = el("h3","",p.title); h.id = "dTitle"; dBody.append(h);
  p.long.forEach(t => dBody.append(el("p","",t)));
  dBody.append(tagList(p));
  if (p.link) { const a = el("a","btn primary","Visit live website"); a.href=p.link; a.target="_blank"; a.rel="noopener noreferrer"; a.style.marginTop="16px"; dBody.append(a); }
  dlg.showModal();
}
function render(cat) {
  grid.replaceChildren();
  projects.filter(p => cat==="All" || p.cat.includes(cat)).forEach(p => {
    const c = el("article","card proj");
    c.append(badge(p), el("h3","",p.title), el("p","",p.short), tagList(p));
    const d = el("button","btn","View details"); d.type="button"; d.onclick = () => openDetails(p); c.append(d);
    grid.append(c);
  });
}
const fb = $("#filters");
["All","Web","IoT","AI & Data"].forEach((c,i) => {
  const b = el("button","",c); b.type="button"; b.setAttribute("aria-pressed", i===0);
  b.onclick = () => { fb.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x===b)); render(c); };
  fb.append(b);
});
render("All");
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });

const menuBtn = $("#menuBtn"), links = $("#links");
menuBtn.onclick = () => { const o = links.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o); };
links.addEventListener("click", e => { if (e.target.tagName==="A") { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded","false"); } });
const root = document.documentElement, tb = $("#theme");
function setTheme(t) { root.dataset.theme = t; tb.textContent = t==="dark" ? "Light" : "Dark"; tb.setAttribute("aria-label","Switch to "+(t==="dark"?"light":"dark")+" theme"); try { localStorage.setItem("theme", t); } catch(e){} }
let saved = "light"; try { saved = localStorage.getItem("theme") || "light"; } catch(e){}
setTheme(saved);
tb.onclick = () => setTheme(root.dataset.theme==="dark" ? "light" : "dark");
$("#year").textContent = new Date().getFullYear();
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.querySelectorAll("a").forEach(a => a.classList.toggle("on", a.getAttribute("href")==="#"+e.target.id)); }), {rootMargin:"-40% 0px -55% 0px"});
document.querySelectorAll("main section[id]").forEach(s => io.observe(s));
