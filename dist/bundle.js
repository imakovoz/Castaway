!function(e){var t={};function a(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=6)}([function(e,t,a){"use strict";function i(e,t){t=1===t?"green":2===t?"yellow":"red";let a=document.createElement("div"),i=document.createElement("img"),r=document.createElement("h4"),n=document.createElement("div");n.id="card-body",r.textContent=`${e.hazard.name}`,r.style.textAlign="center","Explore The Wreck"===e.hazard.name?i.src="./assets/images/wreck.jpg":"Wild Animals"===e.hazard.name?i.src="./assets/images/tiger.jpg":"Cannibals"===e.hazard.name?i.src="./assets/images/cannibals.jpg":"Explore Deep Into The Island"===e.hazard.name?i.src="./assets/images/jungle.jpg":"Explore The Island"===e.hazard.name&&(i.src="./assets/images/island.jpg"),i.style.height="30%",i.style.width="80%",i.style.margin="5px 0";let o=document.createElement("div"),s=document.createElement("img"),l=document.createElement("span"),c=document.createElement("div"),d=document.createElement("img"),m=document.createElement("span");return o.style.position="relative",o.style.borderRadius="50%",o.style.backgroundColor="#602403",o.style.padding="7px 7px 2px 7px",c.style.position="relative",c.style.borderRadius="50%",c.style.backgroundColor="#602403",c.style.padding="7px 7px 2px 7px",s.src="./assets/images/card-draw-icon.png",l.textContent=`${e.hazard.draw}`,d.src="./assets/images/fight-icon.png",m.textContent=`${e.hazard[t]}`,o.innerHTML+=l.outerHTML,c.innerHTML+=m.outerHTML,o.innerHTML+=s.outerHTML,c.innerHTML+=d.outerHTML,n.innerHTML+=o.outerHTML,n.innerHTML+=c.outerHTML,a.innerHTML+=r.outerHTML,"Wild Animals"!==e.hazard.name&&"Cannibals"!==e.hazard.name||(a.innerHTML+=document.createElement("br").outerHTML),a.innerHTML+=i.outerHTML,a.innerHTML+=n.outerHTML,a.id="hazard-card",a.className="card",a.style.display="flex",a.style.flexDirection="column",a.style.alignItems="center",a}function r(e,t){t=1===t?"green":2===t?"yellow":"red";let a=document.createElement("div"),i=document.createElement("img"),r=document.createElement("h4"),n=document.createElement("div"),o=document.createElement("div");n.id="card-header",o.id="card-body",r.textContent=`${e.ability.name}`,r.style.textAlign="center","Weapon"===e.ability.name?i.src="./assets/images/weapon.png":"Strategy"===e.ability.name?i.src="./assets/images/weapon.png":"Vision"===e.ability.name?i.src="./assets/images/weapon.png":"Experience"===e.ability.name?i.src="./assets/images/weapon.png":"Knowledge"===e.ability.name?i.src="./assets/images/weapon.png":"Repetition"===e.ability.name?i.src="./assets/images/weapon.png":"Trick"===e.ability.name?i.src="./assets/images/weapon.png":"Nutritious Food"===e.ability.name?i.src="./assets/images/weapon.png":"Reader"===e.ability.name?i.src="./assets/images/weapon.png":"Equipement"===e.ability.name?i.src="./assets/images/weapon.png":"Very Hungry"===e.ability.name?i.src="./assets/images/weapon.png":"Tired"===e.ability.name?i.src="./assets/images/weapon.png":"Afraid"===e.ability.name?i.src="./assets/images/weapon.png":"Stupid"===e.ability.name?i.src="./assets/images/weapon.png":"Unconcentrated"===e.ability.name?i.src="./assets/images/weapon.png":"Hungry"===e.ability.name?i.src="./assets/images/weapon.png":"Distracted"===e.ability.name?i.src="./assets/images/weapon.png":"Weak"===e.ability.name?i.src="./assets/images/weapon.png":"Genius"===e.ability.name?i.src="./assets/images/weapon.png":"Focused"===e.ability.name?i.src="./assets/images/weapon.png":"Mimicry"===e.ability.name?i.src="./assets/images/weapon.png":"Eat"===e.ability.name&&(i.src="./assets/images/weapon.png"),i.style.height="30%",i.style.width="80%",i.style.margin="5px 0";let s=document.createElement("div"),l=document.createElement("img"),c=document.createElement("span");s.style.position="relative",s.style.borderBottomRightRadius="50%",s.style.borderTopLeftRadius="5px",s.style.backgroundColor="#15afb2",s.style.padding="2px 4px 0px 0px",s.style.margin="-2px 0 0 -2px",l.src="./assets/images/fight-icon.png",c.textContent=`${e.ability.fight}`,s.innerHTML+=c.outerHTML,s.innerHTML+=l.outerHTML,n.innerHTML+=s.outerHTML;let d=document.createElement("div"),m=document.createElement("img"),h=document.createElement("span");d.style.position="relative",d.style.borderBottomLeftRadius="50%",d.style.borderTopRightRadius="5px",d.style.backgroundColor="#15afb2",d.style.padding="2px 4px 0px 0px",d.style.margin="-2px -2px 0 0",m.src="./assets/images/cost-icon.png",h.textContent=`${e.ability.cost}`,d.innerHTML+=h.outerHTML,d.innerHTML+=m.outerHTML,n.innerHTML+=d.outerHTML;const u=e.ability.spec.text||"...";return o.textContent=`${u}`,a.innerHTML+=r.outerHTML,e.ability.name.length<11&&(a.innerHTML+=document.createElement("br").outerHTML),a.innerHTML+=i.outerHTML,a.innerHTML+=o.outerHTML,a.innerHTML+=n.outerHTML,a.className="card",a.id="ability-card",a.style.display="flex",a.style.flexDirection="column",a.style.alignItems="center",a}function n(e){console.log(e);const t=document.createElement("div");t.className="pirate";let a=document.createElement("div"),i=document.createElement("img"),r=document.createElement("span"),n=document.createElement("div"),o=document.createElement("img"),s=document.createElement("span");return a.style.position="relative",a.style.borderRadius="50%",a.style.backgroundColor="#602403",n.style.position="relative",n.style.borderRadius="50%",n.style.backgroundColor="#602403",i.src="./assets/images/card-draw-icon.png",r.textContent=`${e[0].draw}`,o.src="./assets/images/fight-icon.png",s.textContent=`${e[0].fight}`,a.innerHTML+=r.outerHTML,n.innerHTML+=s.outerHTML,a.innerHTML+=i.outerHTML,n.innerHTML+=o.outerHTML,t.innerHTML+=a.outerHTML,t.innerHTML+=n.outerHTML,t}a.r(t),a.d(t,"createHazard",function(){return i}),a.d(t,"createAbility",function(){return r}),a.d(t,"createPirate",function(){return n})},function(e,t,a){"use strict";a.r(t),a.d(t,"chooseHazard",function(){return n});const i=a(0),r=a(3),n=(e,t)=>{document.querySelector("#hazard").textContent=t.hazards.length;const a=document.querySelector("#main-game"),i=document.createElement("div");i.id="selection-div";const r=document.createElement("div");r.id="confirm-div";const n=document.createElement("div");n.id="confirm-btn",n.className="confirm-not",n.textContent="Confirm Selection",r.innerHTML+=n.outerHTML;let l=document.createElement("img"),c=document.createElement("input");l.src="./assets/images/switch.png",c.setAttribute("type","checkbox"),o(c,l,1,i,t,e[0]),o(c,l,2,i,t,e[1]),a.innerHTML=i.outerHTML,a.innerHTML+=r.outerHTML,s(e,t)},o=(e,t,a,r,n,o)=>{let s=document.createElement("div"),l=i.createHazard(o,n.level),c=document.createElement("aside");s.className="card-holder",s.id=`hazard-side-${a}`,c.id=`card${a}-aside`,t.id=`switch-${a}`,e.id=`checkbox-${a}`,c.innerHTML+=t.outerHTML,c.innerHTML+=e.outerHTML,s.innerHTML+=c.outerHTML,s.innerHTML+=l.outerHTML,r.innerHTML+=s.outerHTML},s=(e,t)=>{$("#switch-1").data("card",e[0]),$("#switch-1").data("level",t.level),$("#switch-2").data("card",e[1]),$("#switch-2").data("level",t.level),document.querySelector("#switch-1").addEventListener("click",e=>{l(e)}),document.querySelector("#checkbox-1").addEventListener("click",e=>{c(e)}),document.querySelector("#switch-2").addEventListener("click",e=>{l(e)}),document.querySelector("#checkbox-2").addEventListener("click",e=>{c(e)})},l=e=>{const t=document.querySelector(`#checkbox-${e.path[0].id.split("-")[1]}`).checked;let a=null;const r=$(`#switch-${e.path[0].id.split("-")[1]}`).data("card"),n=$(`#switch-${e.path[0].id.split("-")[1]}`).data("level");let o=document.querySelector(`#hazard-side-${e.path[0].id.split("-")[1]}`)||document.querySelector(`#ability-side-${e.path[0].id.split("-")[1]}`);$(`#hazard-side-${e.path[0].id.split("-")[1]} div`).remove(),$(`#ability-side-${e.path[0].id.split("-")[1]} div`).remove(),"hazard"===o.id.split("-")[0]?(a=i.createAbility(r,n),o.id=`ability-side-${e.path[0].id.split("-")[1]}`):(a=i.createHazard(r,n),o.id=`hazard-side-${e.path[0].id.split("-")[1]}`),o.innerHTML+=a.outerHTML;document.querySelector(`#switch-${e.path[0].id.split("-")[1]}`);$(`#switch-${e.path[0].id.split("-")[1]}`).data("card",r),$(`#switch-${e.path[0].id.split("-")[1]}`).data("level",n),!0===t&&(document.querySelector(`#checkbox-${e.path[0].id.split("-")[1]}`).checked=!0),document.querySelector(`#switch-${e.path[0].id.split("-")[1]}`).addEventListener("click",e=>{l(e)}),document.querySelector(`#checkbox-${e.path[0].id.split("-")[1]}`).addEventListener("click",e=>{c(e)})},c=e=>{if(1==e.target.checked){let t=1;1==e.target.id.split("-")[1]&&(t=2),$("#game").data("selected",e.target.id.split("-")[1]),$("#confirm-btn").css("color","white"),$("#confirm-btn").removeClass("confirm-not"),$("#confirm-btn").addClass("confirm-yes"),$("#confirm-btn").css("cursor","pointer"),$(`#checkbox-${t}`).prop("checked",!1),$(`#checkbox-${e.target.id.split("-")[1]}`).prop("checked",!0),$("#confirm-div").off(),$("#confirm-div").on("click","div",e=>{d(e)})}else $("#game").data("selected",!1),$("#confirm-btn").css("color","#c4c4c4"),$("#confirm-btn").removeClass("confirm-yes"),$("#confirm-btn").addClass("confirm-not"),$("#confirm-btn").css("cursor","not-allowed"),$("#confirm-div").off()},d=e=>{let t=1;1==$("#game").data("selected")&&(t=2);const a=$("#game").data("game");a.returnHazard($(`#switch-${t}`).data("card")),a.setHazard($(`#switch-${$("#game").data("selected")}`).data("card")),r.fightHazard($(`#switch-${$("#game").data("selected")}`).data("card"),a)}},function(e,t,a){"use strict";function i(e){const t=document.querySelector("#life"),a=document.querySelector("#age-aside");document.querySelectorAll("#hazard-stage"),document.querySelector("#stage"),document.querySelector("#main-game");document.querySelector("#abilities").textContent=e.abilities.length,3===e.level?($("#stage").removeClass("yellow"),$("#stage").addClass("red")):2===e.level?($("#stage").removeClass("green"),$("#stage").addClass("yellow")):$("#stage").addClass("green"),t.textContent=`Life: ${e.life}`;const i=document.createElement("img");"young"===e.age()?(i.src="./assets/images/young.png",a.appendChild(i)):(i.src="./assets/images/old.png",a.appendChild(i))}a.r(t),a.d(t,"setup",function(){return i})},function(e,t,a){"use strict";a.r(t),a.d(t,"fightHazard",function(){return o});const i=a(0),r=a(1),n=a(7),o=(e,t)=>{const a=document.querySelector("#main-game"),r=document.createElement("div");r.id="fight-div";const n=document.createElement("div");n.id="draw-div";const o=document.createElement("div");o.id="hazard-div";const l=document.createElement("div");l.id="push-div";const c=i.createHazard(e,t.level);o.innerHTML+=c.outerHTML;const d=document.createElement("div");d.id="powers-disp",o.innerHTML+=d.outerHTML;const m=document.createElement("div");m.id="fight-disp";const h=document.createElement("div");h.id="total-fight",h.textContent="Total Fight: 0";const u=document.createElement("div");u.id="draw-cnt",u.textContent=`Free draws: ${e.hazard.draw}`;const p=document.createElement("div");p.textContent="Resolve Fight",p.id="resolve-fight",m.innerHTML+=h.outerHTML,m.innerHTML+=u.outerHTML,m.innerHTML+=p.outerHTML,o.innerHTML+=m.outerHTML,t.playerFght=0,$("#game").data("drawCnt",e.hazard.draw),1===t.level?$("#game").data("drawFght",e.hazard.green):2===t.level?$("#game").data("drawFght",e.hazard.yellow):$("#game").data("drawFght",e.hazard.red),r.innerHTML+=n.outerHTML,r.innerHTML+=o.outerHTML,r.innerHTML+=l.outerHTML,a.innerHTML=r.outerHTML,s(t)},s=e=>{document.querySelector("#abilities").addEventListener("click",e=>{l(e)}),document.querySelector("#resolve-fight").addEventListener("click",t=>{$("#game").data("active",e.activeAbilities.slice(0)),c(t)}),$("#abilities").hover(function(){$(this).css("border","2px solid #4a82db")},function(){$(this).css("border","none")})},l=e=>{const t=$("#game").data("game");if("stop"!==t.stop&&(t.abilities.length>0||t.spentAbilities.length>0)){let e=document.querySelector("#draw-div");const a=document.querySelector("#life");$("#game").data("drawCnt")<=0&&(t.changeLife(-1),a.textContent=`Life: ${t.life}`,e=document.querySelector("#push-div"));const r=document.createElement("div"),o=t.drawAbility();if(document.querySelector("#abilities").textContent=t.abilities.length,"life"===o.ability.spec.type?(t.changeLife(o.ability.spec.value),a.textContent=`Life: ${t.life}`):"card"===o.ability.spec.type?$("#game").data("drawCnt",$("#game").data("drawCnt")+o.ability.spec.value):"stop"===o.ability.spec.type&&($("#game").data("drawCnt")>0?$("#game").data("drawCnt",1):t.stop="stop"),!1!==o.ability.spec&&"draw"!==o.ability.spec.type&&"life"!==o.ability.spec.type){t.powers.push(o);const e=document.querySelector("#powers-disp"),a=document.querySelectorAll("#powers-disp > *");let i=!1;if(null!==a&&a.forEach((e,t)=>{e.dataset.type===o.ability.spec.type&&(i=t+1)}),0==i){const t=document.createElement("div");t.id=o.ability.spec.type+"-power",t.dataset.type=o.ability.spec.type,t.dataset.positions=1;const a=document.createElement("div");a.id="power-title",a.textContent=o.ability.spec.type,t.innerHTML+=a.outerHTML;const i=document.createElement("div"),r=document.createElement("div");r.id="power-box-gem",r.dataset.value=o.ability.spec.type,r.dataset.pos=1,r.textContent=o.ability.spec.value,t.innerHTML+=r.outerHTML,i.id="power-box",i.textContent="",t.innerHTML+=i.outerHTML,t.innerHTML+=i.outerHTML,e.innerHTML+=t.outerHTML,document.querySelectorAll("#power-box-gem").forEach(e=>{e.addEventListener("click",e=>{n.activateAbility(e)})})}else{const e=document.querySelector("#"+o.ability.spec.type+"-power");console.log(e),console.log(o.ability.spec.type),e.dataset.positions+=1;const t=e.dataset.positions,a=e.querySelector("#power-box");a.id="power-box-gem",a.dataset.value=o.ability.spec.type,a.dataset.pos=t,a.textContent=o.ability.spec.value,document.querySelector(`#${o.ability.spec.type+"-power"}`).querySelectorAll("#power-box-gem")[t-1].addEventListener("click",e=>{n.activateAbility(e)})}}r.innerHTML=i.createAbility(o).outerHTML,t.playerFght=t.playerFght+o.ability.fight,$("#total-fight").text(`Total Fight: ${t.playerFght}`),r.style.margin="-75px 0",e.innerHTML+=r.outerHTML,$("#game").data("drawCnt",$("#game").data("drawCnt")-1),$("#game").data("drawCnt")>0?$("#draw-cnt").text(`Free draws: ${$("#game").data("drawCnt")}`):$("#draw-cnt").text("Free draws: 0")}else document.querySelector("#abilities").style.cursor="not-allowed"},c=e=>{const t=$("#game").data("game");var a=document.getElementById("abilities"),i=a.cloneNode(!0);a.parentNode.replaceChild(i,a);let n=$("#game").data("playerFght");if(n<$("#game").data("drawFght")&&t.activeAbilities.length>0){let e=$("#game").data("drawFght")-n;t.activeAbilities.length<e&&(e=t.activeAbilities.length),t.changeLife(-1*e),t.cardsToDelete=e,$("#life").text(`Life: ${t.life}`);const a=document.querySelector("#game"),i=d(t);a.innerHTML+=i.outerHTML,document.querySelectorAll(".card-delete #card-header").forEach(e=>{e.style.width="163px",e.style.marginTop="2px"}),document.querySelectorAll(".card-delete").forEach(e=>{e.addEventListener("click",e=>{const t=e.path[e.path.length-11].getAttribute("key"),a=e.path[e.path.length-11].getAttribute("selected"),i=$("#game").data("game");if("true"===a?(i.cardsToDelete+=1,e.path[e.path.length-11].setAttribute("selected","false"),e.path[e.path.length-11].style.border="2px solid rgb(0, 0, 0, 0.1)",i.unmarkForDelete($("#game").data("active")[t])):"false"===a&&i.cardsToDelete>0&&(i.cardsToDelete-=1,e.path[e.path.length-11].setAttribute("selected","true"),e.path[e.path.length-11].style.border="2px solid #4a82db",i.markForDelete($("#game").data("active")[t])),0===i.cardsToDelete)document.querySelector("#modal-confirm").addEventListener("click",e=>{const t=$("#game").data("game"),a=t.drawHazards();3===t.level?($("#stage").removeClass("yellow"),$("#stage").addClass("red")):2===t.level&&($("#stage").removeClass("green"),$("#stage").addClass("yellow")),t.delete();const i=document.querySelector("#modal");i.parentNode.removeChild(i),r.chooseHazard(a,t)}),document.querySelector("#modal-confirm").style.color="black",document.querySelector("#modal-confirm").style.cursor="pointer";else{var n=document.getElementById("modal-confirm"),o=n.cloneNode(!0);n.parentNode.replaceChild(o,n),document.getElementById("modal-confirm").style.color="#4c4c4c",document.getElementById("modal-confirm").style.cursor="not-allowed"}})}),document.querySelector("#modal-confirm").addEventListener("click",e=>{const t=$("#game").data("game"),a=t.drawHazards();3===t.level?($("#stage").removeClass("yellow"),$("#stage").addClass("red")):2===t.level&&($("#stage").removeClass("green"),$("#stage").addClass("yellow")),t.delete();const i=document.querySelector("#modal");i.parentNode.removeChild(i),r.chooseHazard(a,t)})}else{n<$("#game").data("drawFght")&&t.changeLife(n-$("#game").data("drawFght"));const e=t.drawHazards();3===t.level?($("#stage").removeClass("yellow"),$("#stage").addClass("red")):2===t.level&&($("#stage").removeClass("green"),$("#stage").addClass("yellow")),t.delete(),r.chooseHazard(e,t)}},d=e=>{const t=document.createElement("div");t.id="modal";const a=document.createElement("h4");$("#game").data("drawFght"),$("#game").data("playerFght");a.textContent=`Please select ${e.cardsToDelete} cards to remove`,t.innerHTML+=a.outerHTML;let r=document.createElement("div");r.id="card-selection";let n=null;e.activeAbilities.forEach((a,o)=>{o%7==6&&(t.innerHTML+=r.outerHTML,(r=document.createElement("div")).id="card-selection"),(n=i.createAbility(a,e.level)).className="card-delete",n.setAttribute("key",o),n.setAttribute("selected","false"),r.innerHTML+=n.outerHTML}),t.innerHTML+=r.outerHTML;const o=document.createElement("div");return o.id="modal-confirm",o.textContent="Confirm Selection",t.innerHTML+=o.outerHTML,t}},function(e,t){e.exports={start:[{ability:{fight:2,name:"Genius",cost:1,spec:{type:"double",value:1,text:"Double fighting power of 1 card"}}},{ability:{fight:1,name:"Focused",cost:1,spec:!1}},{ability:{fight:1,name:"Focused",cost:1,spec:!1}},{ability:{fight:1,name:"Focused",cost:1,spec:!1}},{ability:{fight:1,name:"Focused",cost:1,spec:!1}},{ability:{fight:0,name:"Weak",cost:1,spec:!1}},{ability:{fight:0,name:"Weak",cost:1,spec:!1}},{ability:{fight:0,name:"Weak",cost:1,spec:!1}},{ability:{fight:0,name:"Weak",cost:1,spec:!1}},{ability:{fight:0,name:"Weak",cost:1,spec:!1}},{ability:{fight:0,name:"Weak",cost:1,spec:!1}},{ability:{fight:0,name:"Weak",cost:1,spec:!1}},{ability:{fight:0,name:"Eat",cost:1,spec:{type:"life",value:2,text:"Heal 2 life"}}},{ability:{fight:-1,name:"Distracted",cost:1,spec:!1}},{ability:{fight:-1,name:"Distracted",cost:1,spec:!1}},{ability:{fight:-1,name:"Distracted",cost:1,spec:!1}},{ability:{fight:-1,name:"Distracted",cost:1,spec:!1}},{ability:{fight:-1,name:"Distracted",cost:1,spec:!1}}],age_young:[{ability:{fight:0,name:"Hungry",cost:2,spec:{type:"life",value:-1,text:"Lose 1 life"}}},{ability:{fight:-1,name:"Unconcentrated",cost:2,spec:!1}},{ability:{fight:-1,name:"Unconcentrated",cost:2,spec:!1}},{ability:{fight:-2,name:"Stupid",cost:2,spec:!1}},{ability:{fight:-2,name:"Stupid",cost:2,spec:!1}},{ability:{fight:-1,name:"Afraid",cost:2,spec:{type:"negate top card",value:!1,text:"Strongest cards fight is now 0"}}},{ability:{fight:-1,name:"Tired",cost:2,spec:{type:"stop",value:!1,text:"Stop turn"}}}],age_old:[{ability:{fight:0,name:"Very Hungry",cost:2,spec:{type:"life",value:-2,text:"Lose 2 life"}}},{ability:{fight:-5,name:"self homicidal",cost:2,spec:!1}},{ability:{fight:-4,name:"idiot",cost:2,spec:!1}}],hazards:[{ability:{fight:4,name:"Weapon",cost:1,spec:!1},hazard:{draw:5,green:5,yellow:9,red:14,name:"Cannibals"}},{ability:{fight:4,name:"Weapon",cost:1,spec:!1},hazard:{draw:5,green:5,yellow:9,red:14,name:"Cannibals"}},{ability:{fight:3,name:"Strategy",cost:1,spec:{type:"exchange",value:1,text:"Exchange 1 card"}},hazard:{draw:4,green:4,yellow:7,red:11,name:"Wild Animals"}},{ability:{fight:3,name:"Vision",cost:1,spec:{type:"sort",value:3,text:"Sort 3 cards"}},hazard:{draw:4,green:4,yellow:7,red:11,name:"Wild Animals"}},{ability:{fight:3,name:"Experience",cost:1,spec:{type:"card",value:1,text:"Draw 1 card"}},hazard:{draw:4,green:4,yellow:7,red:11,name:"Wild Animals"}},{ability:{fight:3,name:"Knowledge",cost:1,spec:{type:"destroy",value:1,text:"Destroy 1 card"}},hazard:{draw:4,green:4,yellow:7,red:11,name:"Wild Animals"}},{ability:{fight:2,name:"Repetition",cost:1,spec:{type:"double",value:1,text:"Double fighting power of 1 card"}},hazard:{draw:3,green:2,yellow:5,red:8,name:"Explore Deep Into The Island"}},{ability:{fight:2,name:"Nutritious Food",cost:1,spec:{type:"life",value:1,text:"Heal 1 life"}},hazard:{draw:3,green:2,yellow:5,red:8,name:"Explore Deep Into The Island"}},{ability:{fight:2,name:"Strategy",cost:1,spec:{type:"exchange",value:1,text:"Exchange 1 card"}},hazard:{draw:3,green:2,yellow:5,red:8,name:"Explore Deep Into The Island"}},{ability:{fight:2,name:"Vision",cost:1,spec:{type:"sort",value:3,text:"Sort 3 cards"}},hazard:{draw:3,green:2,yellow:5,red:8,name:"Explore Deep Into The Island"}},{ability:{fight:2,name:"Knowledge",cost:1,spec:{type:"destroy",value:1,text:"Destroy 1 card"}},hazard:{draw:3,green:2,yellow:5,red:8,name:"Explore Deep Into The Island"}},{ability:{fight:2,name:"Experience",cost:1,spec:{type:"card",value:1,text:"Draw 1 card"}},hazard:{draw:3,green:2,yellow:5,red:8,name:"Explore Deep Into The Island"}},{ability:{fight:2,name:"Weapon",cost:1,spec:!1},hazard:{draw:2,green:1,yellow:3,red:6,name:"Explore The Island"}},{ability:{fight:2,name:"Weapon",cost:1,spec:!1},hazard:{draw:2,green:1,yellow:3,red:6,name:"Explore The Island"}},{ability:{fight:2,name:"Nutritious Food",cost:1,spec:{type:"life",value:1,text:"Heal 1 life"}},hazard:{draw:2,green:1,yellow:3,red:6,name:"Explore The Island"}},{ability:{fight:2,name:"Nutritious Food",cost:1,spec:{type:"life",value:1,text:"Heal 1 life"}},hazard:{draw:2,green:1,yellow:3,red:6,name:"Explore The Island"}},{ability:{fight:2,name:"Trick",cost:1,spec:{type:"below pile",value:1,text:"Move 1 card to bottom of pile"}},hazard:{draw:2,green:1,yellow:3,red:6,name:"Explore The Island"}},{ability:{fight:2,name:"Repetition",cost:1,spec:{type:"double",value:1,text:"Double fighting power of 1 card"}},hazard:{draw:2,green:1,yellow:3,red:6,name:"Explore The Island"}},{ability:{fight:2,name:"Knowledge",cost:1,spec:{type:"destroy",value:1,text:"Destroy 1 card"}},hazard:{draw:2,green:1,yellow:3,red:6,name:"Explore The Island"}},{ability:{fight:2,name:"Mimicry",cost:1,spec:{type:"copy",value:1,text:"Copy ability of another card"}},hazard:{draw:2,green:1,yellow:3,red:6,name:"Explore The Island"}},{ability:{fight:2,name:"Strategy",cost:1,spec:{type:"exchange",value:2,text:"Exchange 2 cards"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Strategy",cost:1,spec:{type:"exchange",value:2,text:"Exchange 2 cards"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Equipement",cost:1,spec:{type:"card",value:2,text:"Draw 2 cards"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Equipement",cost:1,spec:{type:"card",value:2,text:"Draw 2 cards"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Nutritious Food",cost:1,spec:{type:"life",value:1,text:"Heal 1 life"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Nutritious Food",cost:1,spec:{type:"life",value:1,text:"Heal 1 life"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Mimicry",cost:1,spec:{type:"copy",value:1,text:"Copy the ability of another card"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Knowledge",cost:1,spec:{type:"destroy",value:1,text:"Destroy 1 card"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Trick",cost:1,spec:{type:"below pile",value:1,text:"Move 1 card to bottom of pile"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Reader",cost:1,spec:{type:"step",value:-1,text:"Reduce hazard level by 1"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}}],pirates:[{draw:6,fight:20,spec:!1},{draw:7,fight:25,spec:!1},{draw:8,fight:30,spec:!1},{draw:9,fight:35,spec:!1},{draw:10,fight:40,spec:!1}]}},function(e,t,a){var i=a(4);e.exports=class{constructor(){this.level=1,this.life=20,this.hazards=this.shuffle(i.hazards),this.activeHazard=null,this.spentHazards=[],this.markDelete=[],this.yage=this.shuffle(i.age_young),this.oage=this.shuffle(i.age_old);let e=i.pirates;this.goals=[e.splice(Math.floor(Math.random()*e.length),1),e.splice(Math.floor(Math.random()*e.length),1)],this.abilities=this.shuffle(i.start),this.activeAbilities=[],this.holdAbilities=[],this.spentAbilities=[],this.cardsToDelete=0,this.powers=[],this.selected=[]}returnActiveAbilities(){return this.activeAbilities}age(){return this.yage.length>0?"young":"old"}drawHazards(){let e=[];return this.hazards.length>1?(e.push(this.hazards.pop()),e.push(this.hazards.pop()),[e[0],e[1]]):(console.log(this.hazards),this.hazards=this.shuffle(this.hazards.concat(this.spentHazards)),console.log(this.hazards),this.level+=1,e.push(this.hazards.pop()),e.push(this.hazards.pop()),console.log(e),[e[0],e[1]])}returnHazard(e){this.spentHazards.push(e)}addToTop(e){e.concat(this.pile)}addToBottom(e){this.pile.concat(e)}drawAbility(){0===this.abilities.length&&(this.abilities=this.spentAbilities,this.yage.length>0?this.abilities.push(this.yage.pop()):this.abilities.push(this.oage.pop()),this.abilities=this.shuffle(this.abilities));const e=this.abilities.pop();return this.activeAbilities.push(e),e}changeLife(e){this.life+=e}setHazard(e){this.activeHazard=e}setHold(){this.holdAbilities=this.activeAbilities}markForDelete(e){let t=!0;this.activeAbilities.forEach((a,i)=>{a===e&&t&&(this.markDelete.push(this.activeAbilities.splice(i,1)[0]),t=!1)})}unmarkForDelete(e){const t=[];let a=!1;t.forEach(i=>{i!==e&&a?t.push(e):(this.activeAbilities.push(e),a=!0)}),this.markDelete=t}delete(){this.spentAbilities=this.spentAbilities.concat(this.activeAbilities),this.markDelete=[],this.activeAbilities=[],this.powers=[],this.stop=""}shuffle(e){for(let t=e.length-1;t>0;t--){const a=Math.floor(Math.random()*(t+1));[e[t],e[a]]=[e[a],e[t]]}return e}}},function(e,t,a){const i=a(5),r=a(0),n=a(1),o=a(2),s=a(8);document.addEventListener("DOMContentLoaded",function(e){document.querySelector("audio").muted=!0,s.helpModal();const t=document.querySelector("#main-game");let a=document.createElement("h2");a.id="startGame",a.textContent="Start Game?",t.innerHTML+=a.outerHTML,document.querySelector("#help").addEventListener("click",e=>{s.helpModal()}),document.querySelector("#music").addEventListener("click",e=>{document.querySelector("audio").muted?(document.querySelector("audio").muted=!1,document.querySelector("#music").className="musicOn"):(document.querySelector("audio").muted=!0,document.querySelector("#music").className="musicOff")}),document.querySelector("#startGame").addEventListener("click",e=>{const t=new i;$("#game").data("game",t),o.setup(t);let a=r.createPirate(t.goals[0]);document.querySelector("#goal").innerHTML=a.outerHTML,a=r.createPirate(t.goals[1]),document.querySelector("#goal").innerHTML+=a.outerHTML;const s=t.drawHazards();n.chooseHazard(s,t)})})},function(e,t,a){"use strict";a.r(t),a.d(t,"activateAbility",function(){return r});const i=a(0),r=e=>{const t=$("#game").data("game");if("destroy"===e.target.dataset.value)n("Select a card to remove from the game",e,t);else if("copy"===e.target.dataset.value);else if("below pile"===e.target.dataset.value)n("Select a card to move to bottom of abilities pile",e,t);else if("step"===e.target.dataset.value){const e=t.activeHazard;2===t.level?e.hazard.yellow=e.hazard.green:(3===t.level&&(t.activeHazard.hazard.yellow,t.activeHazard.hazard.red),e.hazard.red=e.hazard.yellow),t.activeHazard=e}else"exchange"===e.target.dataset.value?"1"===e.target.textContent?n("Select a card to discard and exchange for another",e,t):n("Select up to 2 cards to discard and exchange",e,t):"double"===e.target.dataset.value?n("Select a card to double fighting strength",e,t):e.target.dataset.value;document.querySelector("#confirm-btn").style.cursor="pointer",document.querySelector("#confirm-btn").addEventListener("click",e=>{s(e)});const a=e.path[e.path.length-13].querySelectorAll("#power-box-gem");if(a.length>1)for(let t=e.target.dataset.pos;t<a.length;t++)t===a.length-1?(a[t].textContent="",a[t].id="power-box"):(a[t].outerHTML=a[t+1].outerHTML,a[t].dataset.value=a[t+1].dataset.value,a[t].dataset.pos=a[t+1].dataset.pos-1);else{const t=document.querySelector("#"+e.path[e.path.length-13].id);t.parentNode.removeChild(t)}},n=(e,t,a)=>{const r=document.createElement("div");r.id="modal";const n=document.createElement("h4");n.textContent=e,r.innerHTML+=n.outerHTML;const s=document.createElement("div");s.id="card-selection";let l=null;$("#game").data("active",a.returnActiveAbilities()),$("#game").data("selected",[]),$("#game").data("total",t.target.textContent),$("#game").data("type",t.target.dataset.value),a.activeAbilities.forEach((e,t)=>{(l=i.createAbility(e,a.level)).dataset.place=t,s.innerHTML+=l.outerHTML}),r.innerHTML+=s.outerHTML;const c=document.createElement("div");c.id="confirm-btn",c.textContent="confirm",r.innerHTML+=c.outerHTML,document.querySelector("#game").innerHTML+=r.outerHTML,document.querySelector("#card-selection").querySelectorAll(".card").forEach(e=>{e.addEventListener("click",e=>{o(e)})})},o=e=>{$("#game").data("game");const t=e.path[e.path.length-11].dataset.place;let a=!0;$("#game").data("selected").forEach((i,r)=>{i===$("#game").data("active")[t]&&a&&(a=!1,$("#game").data("selected").splice(r,1),e.path[e.path.length-11].style.border="2px solid transparent",$("#game").data("total",$("#game").data("total")+1))}),a&&$("#game").data("total")>0&&($("#game").data("selected").push($("#game").data("active")[t]),e.path[e.path.length-11].style.border="2px solid blue",$("#game").data("total",$("#game").data("total")-1))},s=e=>{const t=$("#game").data("game");"double"===$("#game").data("type")?($("#game").data("selected").forEach(e=>{t.playerFght+=e.ability.fight}),$("#total-fight").text(`Total Fight: ${t.playerFght}`)):$("#game").data("type");const a=document.querySelector("#modal");a.parentNode.removeChild(a),console.log($("#game").data("selected")),console.log($("#game").data("type")),console.log(e)}},function(e,t,a){"use strict";a.r(t),a.d(t,"helpModal",function(){return i});const i=()=>{const e=document.querySelector("#game"),t=document.createElement("div");t.id="modal";const a=document.createElement("div");a.id="helpModal",t.innerHTML+=a.outerHTML,e.innerHTML+=t.outerHTML,r()},r=()=>{const e=document.querySelector("#helpModal"),t=document.createElement("h1");t.textContent="Castaway",e.innerHTML=t.outerHTML;const a=document.createElement("div");a.innerHTML="Thanks for playing Castaway, my version of the card game Friday by Friedemann Friese!<br><br> You are Friday and spend your time on a deserted Island. After Robinson suddenly capsizes with his ship and runs ashore at your beach, your peaceful times are disturbed. To give Robinson a chance to leave the Island again, you start to teach him to improve his survival abilities against the hazards of the Island. If Robinson beats two Pirates at the end of the game, he successfully leaves the island and you will have your beloved peace back",e.innerHTML+=a.outerHTML;const i=document.createElement("div");i.id="helpModal-nav";const r=document.createElement("div");r.id="helpModal-basic",r.textContent="Basic Instructions";const s=document.createElement("div");s.id="helpModal-powers",s.textContent="Power Details",i.innerHTML+=r.outerHTML,i.innerHTML+=s.outerHTML,e.innerHTML+=i.outerHTML;const l=document.createElement("div");l.id="helpModal-returnDiv",e.innerHTML+=l.outerHTML,document.querySelector("#helpModal-returnDiv").addEventListener("click",e=>{const t=document.querySelector("#modal");t.parentNode.removeChild(t)}),document.querySelector("#helpModal-basic").addEventListener("click",e=>{n()}),document.querySelector("#helpModal-powers").addEventListener("click",e=>{o()})},n=()=>{const e=document.querySelector("#helpModal"),t=document.createElement("h1");t.textContent="Basic Instructions",e.innerHTML=t.outerHTML;const a=document.createElement("div");a.innerHTML="While playing you are trying to guide Robinson through the game. He must win against two pirates without dying to finally leave the island again. <br><br> At the start of the game Robinson is not very cunning. In this game the pile of fighting cards (represented on the bottom right corner of the screen by the card pile) represents his abilities. By comparison Robinson‘s health is in good shape and he starts with many life points. You have two possibilities to help Robinson. You can either cleverly beat the hazards of the island (represented on the bottom left corner of the screen by the card pile) and receive additional cards to improve Robinson‘s fighting abilities, or you deliberately lose against certain hazards and pay with Robinson‘s life points to remove unwanted fighting cards from play. <br><br> During the game you will improve the quality and quantity of your fighting cards thanks to both possibilities and help Robinson with his newly gained abilities and knowledge to win against even more difficult hazards. However, life on the island is energy-sapping for Robinson so he is forced to always add aging cards (represented on the top left corner of the screen by the card pile) to his fighting cards pile. These cards are all cumbersome, so you‘d better remember to keep them in mind when planning your next steps. <br><br> It is up to you. Use Robinson‘s life points cleverly and choose the correct hazards to keep Robinson healthy and strong for the final fights against both pirates.",e.innerHTML+=a.outerHTML;const i=document.createElement("div");i.id="helpModal-returnDiv",e.innerHTML+=i.outerHTML,document.querySelector("#helpModal-returnDiv").addEventListener("click",e=>{r()})},o=()=>{const e=document.querySelector("#helpModal"),t=document.createElement("h1");t.textContent="Special Card Powers",e.innerHTML=t.outerHTML;const a=document.createElement("div");a.innerHTML="<strong>1x destroy:</strong> Not all fighting cards in the Robinson stack are helpful for you. With this special ability you can destroy one fighting card and remove it from the game.<br><br> <strong>1x double:</strong> You can double the fighting value of 1 of your drawn fighting cards. This ability is not cumulative!<br><br><strong>1x copy:</strong> You can copy the special ability of 1 of the other drawn fighting cards, to use it again. You can copy the same ability with several »copy« abilities. <br><br> <strong>step -1:</strong> If you fight against a hazard in the »yellow Step« or the »red Step«, you can reduce the hazard value by one Step. This special ability is useless against »green Step« hazards and pirates. <br><br> <strong>sort 3 cards:</strong> You can draw up to 3 cards one after the other from the Robinson stack and look at them. Afterwards you can discard up to 1 of these cards on the Robinson discard pile and place the remaining cards face-down back on the Robinson stack in the order you choose. <br><br> <strong>1x exchange:</strong> You place 1 of the other drawn face-up fighting cards on the Robinson discard pile (you can choose one card you already used for the special ability) and draw a new card as replacement. If the new card has a special ability, you can use it now or later during the fight.<br><br> <strong>1x below the stack:</strong> You place 1 of the other drawn drawn fighting cards back below the Robinson stack. If you choose one of the free cards from the left side of the hazard card, you can draw an exchange card.",e.innerHTML+=a.outerHTML;const i=document.createElement("div");i.id="helpModal-returnDiv",e.innerHTML+=i.outerHTML,document.querySelector("#helpModal-returnDiv").addEventListener("click",e=>{r()})}}]);
//# sourceMappingURL=bundle.js.map