(()=>{var e={961:()=>{const e=["Олександр","Ігор","Олена","Іра","Олексій","Світлана"],t=["Диференційне рівняння","Теорія автоматів","Алгоритми і структури даних"],o=[4,5,5,3,4,5],s=()=>[[e[0],e[2]],[e[1],e[3]],[e[4],e[5]]];console.log(s());const n=()=>{const e=[];for(let o=0;o<s().length;o++){const n=[`${s()[o].join(" i ")}`,t[o]];e.push(n)}return e};console.log(n()),console.log((()=>{const t=[];for(let s=0;s<e.length;s++){const n=[e[s],o[s]];t.push(n)}return t})()),console.log((()=>{const e=[];for(let t=0;t<n().length;t++){const o=[...n()[t],Math.floor(5*Math.random())+1];e.push(o)}return e})())},831:()=>{const e=[0,0,0,0,0,0,0,0,0,0].map((e=>e+(Math.floor(99*Math.random())+1)));var t;console.log("1. Random array: ",e),console.log("2. Average count: ",(t=[2,5,4,3,6,7,4],t.reduce(((e,t)=>e+t),0)/t.length).toFixed(2));const o=[1,2,110,4,15,8,55,99],s=o.filter((e=>Math.floor(e)===e)).filter((e=>e%2!=0));console.log("3. Filtered array: ",s.join(", "));const n=[-1,2,5,-9,-4,1,14,-7].filter((e=>e>0));console.log("4. Positive numbers count: ",n.length);const r=o.filter((e=>e%5==0));var a,l;console.log("5. Divided by 5 numbers: ",r),console.log("6. Al combinations: ",(a="abc".split(""),l=[],function e(t,o){o=o||[];for(var s,n=0;n<t.length;n++)s=t.splice(n,1),0===t.length&&l.push(o.concat(s)),e(t.slice(),o.concat(s)),t.splice(n,0,s[0]);return l}(a)).join("//"))},834:()=>{const e=[{name:"Tanya",course:3,subjects:{math:[4,4,3,4],algorithms:[3,3,3,4,4,4],data_science:[5,5,3,4]}},{name:"Victor",course:4,subjects:{physics:[5,5,5,3],economics:[2,3,3,3,3,5],geometry:[5,5,2,3,5]}},{name:"Anton",course:2,subjects:{statistics:[4,5,5,5,5,3,4,3,4,5],english:[5,3],cosmology:[5,5,5,5]}}];var t;console.log("Subjects list for Victor:",(t=e[1],Object.keys(t.subjects).map((e=>e[0].toUpperCase()+e.slice(1).toLowerCase().replace("_"," ")))));const o=e=>{const t=Object.values(e.subjects).flat();return(t.reduce(((e,t)=>e+t),0)/t.length).toFixed(2)};console.log("Average mark for Tanya:",o(e[0])),console.log("Student info:",(e=>({name:e.name,course:e.course,mark:o(e)}))(e[2])),console.log("Names alphabetically:",(e=>e.map((e=>e.name)).sort())(e)),console.log("Best student:",(e=>{const t=e.map(((t,s)=>o(e[s]))),s=t.indexOf(`${Math.max(...t)}`);return e[s].name})(e)),console.log('Calculator for letters in phrase "Avengers are the best"',(e=>{const t="Avengers are the best".split(" ").join("").toLowerCase().split(""),o={};return t.forEach((e=>{void 0===o[e]?o[e]=1:++o[e]})),o})())},485:()=>{const e={tax:.25,middleSalary:1586,vacancies:3921};console.log("My taxes in Ukraine:",function(e){return(this.tax*e).toFixed(2)}.call({tax:.195,middleSalary:1789,vacancies:11476},3e3)),console.log("Middle taxes in Latvia:",function(){return(this.tax*this.middleSalary).toFixed(2)}.call(e)),console.log("Total taxes in Poland:",function(){return(this.tax*this.middleSalary*this.vacancies).toFixed(2)}.call({tax:.15,middleSalary:1509,vacancies:1114})),setInterval((function(e){const t=Math.floor(501*Math.random())+1500,o=e.tax*t,s=t-o;console.log({salary:t,taxes:o,profit:s})}),1e4,e)},655:()=>{const e=new class{constructor(e){this.university=e.university,this.course=e.course,this.fullName=e.fullName,this.marks=[5,4,4,5],this.dismiss=!1}getInfo(e){return`${this.fullName}, student of ${this.course}. course ${this.university}.`}dismissMe(){return this.dismiss=!0}recover(){return this.dismiss=!1}getAverageMark(){return this.dismiss?null:(this.marks.reduce(((e,t)=>e+t),0)/this.marks.length).toFixed(2)}get notes(){return this.marks}set notes(e){this.marks.push(e)}}({university:"University of Missouri, Kansas City",course:2,fullName:"Ostap Bender"});console.log(e.getInfo(e)),console.log(e.notes),e.notes=5,console.log(e.dismiss),console.log(e.getAverageMark()),e.dismissMe(),console.log(e.dismiss),console.log(e.getAverageMark())},762:()=>{const e=document.querySelector(".mainBlock");setInterval((()=>{e.innerHTML="",(()=>{for(let t=0;t<100;t++){const t=document.createElement("div"),o="#"+Math.random().toString(16).substr(2,6);t.style.cssText=`width: 50px; height: 50px; background-color: ${o};`,e.append(t)}})()}),100)}},t={};function o(s){var n=t[s];if(void 0!==n)return n.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(961),o(831),o(834),o(485),o(655),o(762)})()})();