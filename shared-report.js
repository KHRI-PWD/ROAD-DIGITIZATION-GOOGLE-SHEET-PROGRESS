export const REPO='KHRI-PWD/ROAD-DIGITIZATION-GOOGLE-SHEET-PROGRESS';
const endpoint=`https://api.github.com/repos/${REPO}/contents/snapshot.json`;
export const encode=value=>{const bytes=new TextEncoder().encode(JSON.stringify(value));let binary='';for(const b of bytes)binary+=String.fromCharCode(b);return btoa(binary);};
export function unpack(value){if(!value||!Array.isArray(value.sections)||!value.sections.length)throw Error('Published report has no sections.');return {data:value,previous:value.previousReport||null};}
export function publication(data,previous){const clean=x=>{if(!x)return null;const y=structuredClone(x);delete y.previousReport;return y;};return {...clean(data),previousReport:clean(previous),publishedAt:new Date().toISOString(),publicationId:crypto.randomUUID()};}
export async function publishReport(report,token,fetcher=fetch){
 if(!token.trim())throw Error('Enter a repository-scoped GitHub token.');
 const headers={Accept:'application/vnd.github+json',Authorization:'Bearer '+token.trim(),'X-GitHub-Api-Version':'2022-11-28'};
 const existing=await fetcher(endpoint+'?ref=main',{headers,cache:'no-store'});
 if(!existing.ok)throw Error('Cannot read the repository ('+existing.status+'). Check token access and organisation approval.');
 const file=await existing.json();if(!file.sha)throw Error('GitHub did not return the report version.');
 const response=await fetcher(endpoint,{method:'PUT',headers:{...headers,'Content-Type':'application/json'},body:JSON.stringify({message:'Publish road digitization progress report',branch:'main',sha:file.sha,content:encode(report)})});
 if(!response.ok)throw Error(response.status===409?'The report changed during publishing. Refresh the published report and try again.':'Publishing failed ('+response.status+'). Check Contents write permission, organisation approval and branch protection.');
 const result=await response.json();if(!result.commit?.sha)throw Error('Publication was not confirmed by GitHub.');return result.commit.sha;
}
