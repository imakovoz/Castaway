!function(e){var t={};function a(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t){e.exports={start:[{ability:{fight:2,name:"Genius",cost:1,spec:!1}},{ability:{fight:1,name:"Focused",cost:1,spec:!1}},{ability:{fight:1,name:"Focused",cost:1,spec:!1}},{ability:{fight:1,name:"Focused",cost:1,spec:!1}},{ability:{fight:1,name:"Focused",cost:1,spec:!1}},{ability:{fight:0,name:"Weak",cost:1,spec:!1}},{ability:{fight:0,name:"Weak",cost:1,spec:!1}},{ability:{fight:0,name:"Weak",cost:1,spec:!1}},{ability:{fight:0,name:"Weak",cost:1,spec:!1}},{ability:{fight:0,name:"Weak",cost:1,spec:!1}},{ability:{fight:0,name:"Weak",cost:1,spec:!1}},{ability:{fight:0,name:"Weak",cost:1,spec:!1}},{ability:{fight:0,name:"Eat",cost:1,spec:{type:"life",value:2,text:"Heal 2 life"}}},{ability:{fight:-1,name:"Distracted",cost:1,spec:!1}},{ability:{fight:-1,name:"Distracted",cost:1,spec:!1}},{ability:{fight:-1,name:"Distracted",cost:1,spec:!1}},{ability:{fight:-1,name:"Distracted",cost:1,spec:!1}},{ability:{fight:-1,name:"Distracted",cost:1,spec:!1}}],age_young:[{ability:{fight:0,name:"Hungry",cost:2,spec:{type:"life",value:-1,text:"Lose 1 life"}}},{ability:{fight:-1,name:"Unconcentrated",cost:2,spec:!1}},{ability:{fight:-1,name:"Unconcentrated",cost:2,spec:!1}},{ability:{fight:-2,name:"Stupid",cost:2,spec:!1}},{ability:{fight:-2,name:"Stupid",cost:2,spec:!1}},{ability:{fight:-1,name:"Afraid",cost:2,spec:{type:"negate top card",value:!1,text:"Strongest cards fight is now 0"}}},{ability:{fight:-1,name:"Tired",cost:2,spec:{type:"stop",value:!1,text:"Stop turn"}}}],age_old:[{ability:{fight:0,name:"Very Hungry",cost:2,spec:{type:"life",value:-2,text:"Lose 2 life"}}},{ability:{fight:-5,name:"self homicidal",cost:2,spec:!1}},{ability:{fight:-4,name:"idiot",cost:2,spec:!1}}],hazards:[{ability:{fight:4,name:"Weapon",cost:1,spec:!1},hazard:{draw:5,green:5,yellow:9,red:14,name:"Cannibals"}},{ability:{fight:4,name:"Weapon",cost:1,spec:!1},hazard:{draw:5,green:5,yellow:9,red:14,name:"Cannibals"}},{ability:{fight:3,name:"Strategy",cost:1,spec:{type:"exchange",value:1,text:"Exchange 1 card"}},hazard:{draw:4,green:4,yellow:7,red:11,name:"Wild Animals"}},{ability:{fight:3,name:"Vision",cost:1,spec:{type:"sort",value:3,text:"Sort 3 cards"}},hazard:{draw:4,green:4,yellow:7,red:11,name:"Wild Animals"}},{ability:{fight:3,name:"Experience",cost:1,spec:{type:"card",value:1,text:"draw 1 card"}},hazard:{draw:4,green:4,yellow:7,red:11,name:"Wild Animals"}},{ability:{fight:3,name:"Knowledge",cost:1,spec:{type:"destroy",value:1,text:"Destroy 1 card"}},hazard:{draw:4,green:4,yellow:7,red:11,name:"Wild Animals"}},{ability:{fight:2,name:"Repetition",cost:1,spec:{type:"double",value:1,text:"Double fighting power of 1 card"}},hazard:{draw:3,green:2,yellow:5,red:8,name:"Explore Deep Into The Island"}},{ability:{fight:2,name:"Nutritious Food",cost:1,spec:{type:"life",value:1,text:"Heal 1 life"}},hazard:{draw:3,green:2,yellow:5,red:8,name:"Explore Deep Into The Island"}},{ability:{fight:2,name:"Strategy",cost:1,spec:{type:"exchange",value:1,text:"Exchange 1 card"}},hazard:{draw:3,green:2,yellow:5,red:8,name:"Explore Deep Into The Island"}},{ability:{fight:2,name:"Vision",cost:1,spec:{type:"sort",value:3}},hazard:{draw:3,green:2,yellow:5,red:8,name:"Explore Deep Into The Island"}},{ability:{fight:2,name:"Knowledge",cost:1,spec:{type:"destroy",value:1,text:"Destroy 1 card"}},hazard:{draw:3,green:2,yellow:5,red:8,name:"Explore Deep Into The Island"}},{ability:{fight:2,name:"Experience",cost:1,spec:{type:"card",value:1,text:"draw 1 card"}},hazard:{draw:3,green:2,yellow:5,red:8,name:"Explore Deep Into The Island"}},{ability:{fight:2,name:"Weapon",cost:1,spec:!1},hazard:{draw:2,green:1,yellow:3,red:6,name:"Explore The Island"}},{ability:{fight:2,name:"Weapon",cost:1,spec:!1},hazard:{draw:2,green:1,yellow:3,red:6,name:"Explore The Island"}},{ability:{fight:2,name:"Nutritious Food",cost:1,spec:{type:"life",value:1,text:"Heal 1 life"}},hazard:{draw:2,green:1,yellow:3,red:6,name:"Explore The Island"}},{ability:{fight:2,name:"Nutritious Food",cost:1,spec:{type:"life",value:1,text:"Heal 1 life"}},hazard:{draw:2,green:1,yellow:3,red:6,name:"Explore The Island"}},{ability:{fight:2,name:"Trick",cost:1,spec:{type:"below pile",value:1}},hazard:{draw:2,green:1,yellow:3,red:6,name:"Explore The Island"}},{ability:{fight:2,name:"Repetition",cost:1,spec:{type:"double",value:1,text:"Double fighting power of 1 card"}},hazard:{draw:2,green:1,yellow:3,red:6,name:"Explore The Island"}},{ability:{fight:2,name:"Knowledge",cost:1,spec:{type:"destroy",value:1,text:"Destroy 1 card"}},hazard:{draw:2,green:1,yellow:3,red:6,name:"Explore The Island"}},{ability:{fight:2,name:"Mimicry",cost:1,spec:{type:"copy",value:1,text:"Copy the ability of another card"}},hazard:{draw:2,green:1,yellow:3,red:6,name:"Explore The Island"}},{ability:{fight:2,name:"Strategy",cost:1,spec:{type:"exchange",value:2,text:"Exchange 2 cards"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Strategy",cost:1,spec:{type:"exchange",value:2,text:"Exchange 2 cards"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Equipement",cost:1,spec:{type:"card",value:2,text:"draw 2 cards"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Equipement",cost:1,spec:{type:"card",value:2,text:"draw 2 cards"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Nutritious Food",cost:1,spec:{type:"life",value:1,text:"Heal 1 life"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Nutritious Food",cost:1,spec:{type:"life",value:1,text:"Heal 1 life"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Mimicry",cost:1,spec:{type:"copy",value:1,text:"Copy the ability of another card"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Knowledge",cost:1,spec:{type:"destroy",value:1,text:"Destroy 1 card"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Trick",cost:1,spec:{type:"below pile",value:1,text:"You may place 1 card at the bottom of your pile"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}},{ability:{fight:2,name:"Reader",cost:1,spec:{type:"step",value:-1,text:"Reduce hazard level by 1"}},hazard:{draw:1,green:0,yellow:1,red:3,name:"Explore The Wreck"}}],pirates:[{draw:6,fight:20,spec:!1},{draw:7,fight:25,spec:!1},{draw:8,fight:30,spec:!1},{draw:9,fight:35,spec:!1},{draw:10,fight:40,spec:!1},{draw:0,fight:0,spec:"hazard"},{draw:5,fight:0,spec:"double"},{draw:7,fight:16,spec:"double life"},{draw:9,fight:22,spec:"half"},{draw:10,fight:52,spec:"point"}]}},function(e,t,a){const i=a(3),r=(a(2),a(4)),n=a(5);document.addEventListener("DOMContentLoaded",function(e){const t=new i;$("#game").data("game",t),n.setup(t);const a=t.drawHazards();r.chooseHazard(a,t)})},function(e,t,a){"use strict";function i(e,t){t=1===t?"green":2===t?"yellow":"red";let a=document.createElement("div"),i=document.createElement("img"),r=document.createElement("h4"),n=document.createElement("div");n.id="card-body",r.textContent=`${e.hazard.name}`,r.style.textAlign="center",r.style.fontSize="smaller","Explore The Wreck"===e.hazard.name?i.src="./assets/images/wreck.jpg":"Wild Animals"===e.hazard.name?i.src="./assets/images/tiger.jpg":"Cannibals"===e.hazard.name?i.src="./assets/images/cannibals.jpg":"Explore Deep Into The Island"===e.hazard.name?i.src="./assets/images/jungle.jpg":"Explore The Island"===e.hazard.name&&(i.src="./assets/images/island.jpg"),i.style.height="30%",i.style.width="80%",i.style.margin="5px 0";let s=document.createElement("div"),l=document.createElement("img"),c=document.createElement("span"),o=document.createElement("div"),d=document.createElement("img"),m=document.createElement("span");return s.style.position="relative",s.style.borderRadius="50%",s.style.backgroundColor="blue",s.style.padding="7px 7px 2px 7px",o.style.position="relative",o.style.borderRadius="50%",o.style.backgroundColor="blue",o.style.padding="7px 7px 2px 7px",l.src="./assets/images/card-draw-icon.png",c.textContent=`${e.hazard.draw}`,d.src="./assets/images/fight-icon.png",m.textContent=`${e.hazard[t]}`,s.innerHTML+=c.outerHTML,o.innerHTML+=m.outerHTML,s.innerHTML+=l.outerHTML,o.innerHTML+=d.outerHTML,n.innerHTML+=s.outerHTML,n.innerHTML+=o.outerHTML,a.innerHTML+=r.outerHTML,"Wild Animals"!==e.hazard.name&&"Cannibals"!==e.hazard.name||(a.innerHTML+=document.createElement("br").outerHTML),a.innerHTML+=i.outerHTML,a.innerHTML+=n.outerHTML,a.className="card",a.style.backgroundColor="brown",a.style.display="flex",a.style.flexDirection="column",a.style.alignItems="center",a}function r(e,t){t=1===t?"green":2===t?"yellow":"red";let a=document.createElement("div"),i=document.createElement("img"),r=document.createElement("h4"),n=document.createElement("div");n.id="card-body",r.textContent=`${e.ability.name}`,r.style.textAlign="center",r.style.fontSize="smaller","Weapon"===e.ability.name?i.src="./assets/images/weapon.png":"Strategy"===e.ability.name?i.src="./assets/images/weapon.png":"Vision"===e.ability.name?i.src="./assets/images/weapon.png":"Experience"===e.ability.name?i.src="./assets/images/weapon.png":"Knowledge"===e.ability.name?i.src="./assets/images/weapon.png":"Repetition"===e.ability.name?i.src="./assets/images/weapon.png":"Trick"===e.ability.name?i.src="./assets/images/weapon.png":"Nutritious Food"===e.ability.name?i.src="./assets/images/weapon.png":"Reader"===e.ability.name?i.src="./assets/images/weapon.png":"Equipement"===e.ability.name?i.src="./assets/images/weapon.png":"Very Hungry"===e.ability.name?i.src="./assets/images/weapon.png":"Tired"===e.ability.name?i.src="./assets/images/weapon.png":"Afraid"===e.ability.name?i.src="./assets/images/weapon.png":"Stupid"===e.ability.name?i.src="./assets/images/weapon.png":"Unconcentrated"===e.ability.name?i.src="./assets/images/weapon.png":"Hungry"===e.ability.name?i.src="./assets/images/weapon.png":"Distracted"===e.ability.name?i.src="./assets/images/weapon.png":"Weak"===e.ability.name?i.src="./assets/images/weapon.png":"Genius"===e.ability.name?i.src="./assets/images/weapon.png":"Focused"===e.ability.name?i.src="./assets/images/weapon.png":"Mimicry"===e.ability.name?i.src="./assets/images/weapon.png":"Eat"===e.ability.name&&(i.src="./assets/images/weapon.png"),i.style.height="30%",i.style.width="80%",i.style.margin="5px 0";let s=document.createElement("div");s.textContent=e.ability.spec.text;let l=document.createElement("div");return l.textContent=`Fight: ${e.ability.fight}`,n.innerHTML+=s.outerHTML,n.innerHTML+=l.outerHTML,a.innerHTML+=r.outerHTML,a.innerHTML+=i.outerHTML,a.innerHTML+=n.outerHTML,a.className="card",a.style.backgroundColor="brown",a.style.display="flex",a.style.flexDirection="column",a.style.alignItems="center",a}a.r(t),a.d(t,"createHazard",function(){return i}),a.d(t,"createAbility",function(){return r})},function(e,t,a){var i=a(0);e.exports=class{constructor(){this.level=1,this.life=20,this.hazards=i.hazards,this.activeHazard=null,this.spentHazards=[],this.markDelete=[],this.yage=i.age_young,this.oage=i.age_old;let e=i.pirates;this.goals=[e.splice(Math.floor(Math.random()*e.length),1),e.splice(Math.floor(Math.random()*e.length),1)],this.abilities=i.start,this.activeAbilities=[],this.holdAbilities=[],this.spentAbilities=[],this.cardsToDelete=0}age(){return this.yage.length>0?"young":"old"}drawHazards(){let e=[];if(this.hazards.length>2)return e.push(this.hazards.splice(Math.floor(Math.random()*this.hazards.length),1)[0]),e.push(this.hazards.splice(Math.floor(Math.random()*this.hazards.length),1)[0]),[e[0],e[1]]}returnHazard(e){this.spentHazards.push(e)}addAbilities(e){this.abilities.concat(e)}drawAbility(){0===this.abilities.length&&(this.abilities=this.spentAbilities,this.yage.length,this.abilities.push(this.yage.splice(Math.floor(Math.random()*this.yage.length),1)[0]));const e=this.abilities.splice(Math.floor(Math.random()*this.abilities.length),1)[0];return this.activeAbilities.push(e),e}changeLife(e){this.life+=e}setHazard(e){this.activeHazard=e}setHold(){this.holdAbilities=this.activeAbilities}markForDelete(e){let t=!0;this.activeAbilities.forEach((a,i)=>{a===e&&t&&(this.markDelete.push(this.activeAbilities.splice(i,1)[0]),t=!1)}),console.log(this.markDelete)}unmarkForDelete(e){const t=[];let a=!0;t.forEach(i=>{i!==e&&!1===a?t.push(e):(this.activeAbilities.push(e),a=!1)}),this.markDelete=t}delete(){this.spentAbilities=this.spentAbilities.concat(this.activeAbilities),this.markDelete=[],this.activeAbilities=[]}}},function(e,t,a){"use strict";a.r(t),a.d(t,"chooseHazard",function(){return n});const i=a(2),r=a(6),n=(e,t)=>{const a=document.querySelector("#main-game"),i=document.createElement("div");i.id="selection-div";const r=document.createElement("div");r.id="confirm-div";const n=document.createElement("div");n.id="confirm-btn",n.textContent="Confirm Selection",r.innerHTML+=n.outerHTML;let c=document.createElement("img"),o=document.createElement("input");c.src="./assets/images/switch.png",o.setAttribute("type","checkbox"),s(o,c,1,i,t,e[0]),s(o,c,2,i,t,e[1]),a.innerHTML=i.outerHTML,a.innerHTML+=r.outerHTML,l(e,t)},s=(e,t,a,r,n,s)=>{let l=document.createElement("div"),c=i.createHazard(s,n.level),o=document.createElement("aside");l.className="card-holder",l.id=`hazard-side-${a}`,o.id=`card${a}-aside`,t.id=`switch-${a}`,e.id=`checkbox-${a}`,o.innerHTML+=t.outerHTML,o.innerHTML+=e.outerHTML,l.innerHTML+=o.outerHTML,l.innerHTML+=c.outerHTML,r.innerHTML+=l.outerHTML},l=(e,t)=>{$("#switch-1").data("card",e[0]),$("#switch-1").data("level",t.level),$("#switch-2").data("card",e[1]),$("#switch-2").data("level",t.level),document.querySelector("#switch-1").addEventListener("click",e=>{c(e)}),document.querySelector("#checkbox-1").addEventListener("click",e=>{o(e)}),document.querySelector("#switch-2").addEventListener("click",e=>{c(e)}),document.querySelector("#checkbox-2").addEventListener("click",e=>{o(e)})},c=e=>{const t=document.querySelector(`#checkbox-${e.path[0].id.split("-")[1]}`).checked;let a=null;const r=$(`#switch-${e.path[0].id.split("-")[1]}`).data("card"),n=$(`#switch-${e.path[0].id.split("-")[1]}`).data("level");let s=document.querySelector(`#hazard-side-${e.path[0].id.split("-")[1]}`)||document.querySelector(`#ability-side-${e.path[0].id.split("-")[1]}`);$(`#hazard-side-${e.path[0].id.split("-")[1]} div`).remove(),$(`#ability-side-${e.path[0].id.split("-")[1]} div`).remove(),"hazard"===s.id.split("-")[0]?(a=i.createAbility(r,n),s.id=`ability-side-${e.path[0].id.split("-")[1]}`):(a=i.createHazard(r,n),s.id=`hazard-side-${e.path[0].id.split("-")[1]}`),s.innerHTML+=a.outerHTML;document.querySelector(`#switch-${e.path[0].id.split("-")[1]}`);$(`#switch-${e.path[0].id.split("-")[1]}`).data("card",r),$(`#switch-${e.path[0].id.split("-")[1]}`).data("level",n),!0===t&&(document.querySelector(`#checkbox-${e.path[0].id.split("-")[1]}`).checked=!0),document.querySelector(`#switch-${e.path[0].id.split("-")[1]}`).addEventListener("click",e=>{c(e)}),document.querySelector(`#checkbox-${e.path[0].id.split("-")[1]}`).addEventListener("click",e=>{o(e)})},o=e=>{if(1==e.target.checked){let t=1;1==e.target.id.split("-")[1]&&(t=2),$("#game").data("selected",e.target.id.split("-")[1]),$("#confirm-btn").css("color","black"),$("#confirm-btn").css("cursor","pointer"),$(`#checkbox-${t}`).prop("checked",!1),$(`#checkbox-${e.target.id.split("-")[1]}`).prop("checked",!0),$("#confirm-div").off(),$("#confirm-div").on("click","div",e=>{d(e)})}else $("#game").data("selected",!1),$("#confirm-btn").css("color","#4c4c4c"),$("#confirm-btn").css("cursor","not-allowed"),$("#confirm-div").off()},d=e=>{let t=1;1==$("#game").data("selected")&&(t=2);const a=$("#game").data("game");a.returnHazard($(`#switch-${t}`).data("card")),a.setHazard($(`#switch-${$("#game").data("selected")}`).data("card")),r.fightHazard($(`#switch-${$("#game").data("selected")}`).data("card"),a)}},function(e,t,a){"use strict";function i(e){const t=document.querySelector("#life"),a=document.querySelector("#age-aside"),i=(document.querySelectorAll("#hazard-stage"),document.querySelector("#stage"));document.querySelector("#main-game");3===e.level?i.style.backgroundColor="red":2===e.level?i.style.backgroundColor="yellow":i.style.backgroundColor="green",t.textContent=`Life: ${e.life}`;const r=document.createElement("img");"young"===e.age()?(r.src="./assets/images/young.png",a.appendChild(r)):(r.src="./assets/images/old.png",a.appendChild(r))}a.r(t),a.d(t,"setup",function(){return i})},function(e,t,a){"use strict";a.r(t),a.d(t,"fightHazard",function(){return n});const i=a(2),r=a(4),n=(e,t)=>{const a=document.querySelector("#main-game"),r=document.createElement("div");r.id="fight-div";const n=document.createElement("div");n.id="draw-div";const l=document.createElement("div");l.id="hazard-div";const c=document.createElement("div");c.id="push-div";const o=i.createHazard(e,t.level);l.innerHTML+=o.outerHTML;const d=document.createElement("div");d.id="fight-disp";const m=document.createElement("div");m.id="total-fight",m.textContent="Total Fight: 0";const h=document.createElement("div");h.textContent="Resolve Fight",h.id="resolve-fight",d.innerHTML+=m.outerHTML,d.innerHTML+=h.outerHTML,l.innerHTML+=d.outerHTML,$("#game").data("playerFght",0),$("#game").data("drawCnt",e.hazard.draw),1===t.level?$("#game").data("drawFght",e.hazard.green):2===t.level?$("#game").data("drawFght",e.hazard.yellow):$("#game").data("drawFght",e.hazard.red),r.innerHTML+=n.outerHTML,r.innerHTML+=l.outerHTML,r.innerHTML+=c.outerHTML,a.innerHTML=r.outerHTML,s(t)},s=e=>{document.querySelector("#abilities").addEventListener("click",e=>{l(e)}),document.querySelector("#resolve-fight").addEventListener("click",t=>{$("#game").data("active",e.activeAbilities.slice(0)),c(t)}),$("#abilities").hover(function(){$(this).css("border","2px solid blue")},function(){$(this).css("border","none")})},l=e=>{const t=$("#game").data("game");let a=document.querySelector("#draw-div");if($("#game").data("drawCnt")<=0){t.changeLife(-1),document.querySelector("#life").textContent=`Life: ${t.life}`,a=document.querySelector("#push-div")}const r=document.createElement("div"),n=t.drawAbility();r.innerHTML=i.createAbility(n).outerHTML,$("#game").data("playerFght",$("#game").data("playerFght")+n.ability.fight),$("#total-fight").text(`Total Fight: ${$("#game").data("playerFght")}`),r.style.margin="-45px 0",a.innerHTML+=r.outerHTML,$("#game").data("drawCnt",$("#game").data("drawCnt")-1)},c=e=>{const t=$("#game").data("game");var a=document.getElementById("abilities"),i=a.cloneNode(!0);if(a.parentNode.replaceChild(i,a),$("#game").data("playerFght")<$("#game").data("drawFght")&&t.activeAbilities.length>0){t.changeLife($("#game").data("playerFght")-$("#game").data("drawFght"));let e=$("#game").data("drawFght")-$("#game").data("playerFght");t.activeAbilities.length<e&&(e=t.activeAbilities.length),t.cardsToDelete=e,$("#life").text(`Life: ${t.life}`);const a=document.querySelector("#game"),i=o(t);a.innerHTML+=i.outerHTML,document.querySelectorAll(".card-delete").forEach(e=>{e.addEventListener("click",e=>{const t=e.path[e.path.length-10].getAttribute("key"),a=e.path[e.path.length-10].getAttribute("selected"),i=$("#game").data("game");if("true"===a?(i.cardsToDelete+=1,e.path[e.path.length-10].setAttribute("selected","false"),e.path[e.path.length-10].style.border="2px solid transparent",i.unmarkForDelete($("#game").data("active")[t])):"false"===a&&i.cardsToDelete>0&&(i.cardsToDelete-=1,e.path[e.path.length-10].setAttribute("selected","true"),e.path[e.path.length-10].style.border="2px solid blue",i.markForDelete($("#game").data("active")[t])),0==i.cardsToDelete)document.querySelector("#modal-confirm").addEventListener("click",e=>{const t=$("#game").data("game"),a=t.drawHazards();t.delete();const i=document.querySelector("#modal");i.parentNode.removeChild(i),r.chooseHazard(a,t)}),document.querySelector("#modal-confirm").style.color="black",document.querySelector("#modal-confirm").style.cursor="pointer";else{var n=document.getElementById("modal-confirm"),s=n.cloneNode(!0);n.parentNode.replaceChild(s,n),document.getElementById("modal-confirm").style.color="#4c4c4c",document.getElementById("modal-confirm").style.cursor="not-allowed"}})}),document.querySelector("#modal-confirm").addEventListener("click",e=>{const t=$("#game").data("game"),a=t.drawHazards();t.delete();const i=document.querySelector("#modal");i.parentNode.removeChild(i),r.chooseHazard(a,t)})}else{const e=t.drawHazards();t.delete(),r.chooseHazard(e,t)}},o=e=>{const t=document.createElement("div");t.id="modal";const a=document.createElement("h4");let r=$("#game").data("drawFght")-$("#game").data("playerFght");e.activeAbilities.length<r&&(r=e.activeAbilities.length),a.textContent=`Please select ${r} cards to remove`,t.innerHTML+=a.outerHTML;const n=document.createElement("div");n.id="card-selection";let s=null;e.activeAbilities.forEach((t,a)=>{(s=i.createAbility(t,e.level)).className="card-delete",s.setAttribute("key",a),s.setAttribute("selected","false"),n.innerHTML+=s.outerHTML}),t.innerHTML+=n.outerHTML;const l=document.createElement("div");return l.id="modal-confirm",l.textContent="Confirm Selection",t.innerHTML+=l.outerHTML,t}}]);
//# sourceMappingURL=bundle.js.map