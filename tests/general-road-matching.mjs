import assert from 'node:assert/strict';
import {scoreWorkbook,progress} from '../engine.js';
function score(names,entries){
 const raw=[{name:'1 Listed Single Strech',rows:names.map((B,i)=>({number:i+3,cells:{B,H:'Yes'}}))},{name:'General Road Data',rows:entries.map((B,i)=>({number:i+2,cells:{B,C:'High',D:'No',E:'High',F:'High',G:'High',H:'Good',I:'No'}}))}];
 return scoreWorkbook(raw).tabs.find(t=>t.kind===4);
}
assert.equal(progress(score(['Ramakkalmettu-Cumbummettu Road'],['Ramakkalmedu -Cumbummettu Road'])),1);
assert.equal(progress(score(['Chettukuzhy Pazhayakochera','Munnar Kumily rd'],['Chettukuzhy Pazhayakochera Road','Munnar Kumily Road'])),1);
assert.equal(score(['Ramakkalmettu-Cumbummettu','Ramakkalmedu-Cumbummettu'],['Ramakkalmedu-Cumbummettu']).rows,1,'exact match cannot be stolen by a spelling match');
assert.equal(score(['Ramakkalmettu-Cumbummettu','Ramakkalmeda-Cumbummettu'],['Ramakkalmedu-Cumbummettu']).rows,0,'ambiguous parent must remain unmatched');
assert.equal(score(['Ramakkalmettu-Cumbummettu'],['Ramakkalmedu-Cumbummettu','Ramakkalmetta-Cumbummettu']).rows,0,'conflicting candidate names require review');
assert.equal(score(['Alpha Junction'],['Beta Junction']).rows,0);
assert.equal(score(['Ramakkalmettu'],['Ramakkalmedu']).rows,0,'single place typo has insufficient corroboration');
assert.equal(score(['Alpha Road'],['Alpha Road','Alpha Road']).rows,1,'duplicates do not inflate credit');
assert.equal(progress(score(['Alpha Road','Beta Road'],['Alpha Road'])),0.5,'missing roads still count');
console.log('9 general road matching checks passed');
