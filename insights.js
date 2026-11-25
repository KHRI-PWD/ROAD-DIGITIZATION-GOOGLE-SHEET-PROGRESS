import {sectionProgress} from './engine.js?v=20261125-1';
const key=s=>[s.division,s.subdivision,s.section].map(v=>String(v||'').trim().toLowerCase()).join('|');
const mean=a=>a.length?a.reduce((x,s)=>x+sectionProgress(s),0)/a.length:0;
export function summarize(current,previous){
 const old=new Map((previous?.sections||[]).map(s=>[key(s),s]));
 return [...new Set(current.sections.map(s=>s.division))].map(name=>{
 const rows=current.sections.filter(s=>s.division===name),matched=rows.filter(s=>old.has(key(s))),oldRows=(previous?.sections||[]).filter(s=>s.division===name);
 return {name,count:rows.length,value:mean(rows),previous:oldRows.length?mean(oldRows):null,delta:matched.length?mean(matched)-mean(matched.map(s=>old.get(key(s)))):null,matched:matched.length,added:rows.length-matched.length,removed:oldRows.length-matched.length};
 }).sort((a,b)=>b.value-a.value||a.name.localeCompare(b.name));
}
