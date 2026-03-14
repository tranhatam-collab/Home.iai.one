/*
=====================================================
IAI SUBDOMAIN AUTO DISCOVERY
=====================================================
*/

(async function(){

const list=[

"iai.one",
"home.iai.one",
"flow.iai.one",
"lifecode.iai.one"

];

const container=document.getElementById("subdomainList");

if(!container) return;

list.forEach(domain=>{

const a=document.createElement("a");

a.href="https://"+domain;

a.textContent=domain;

a.target="_blank";

container.appendChild(a);

});

})();
