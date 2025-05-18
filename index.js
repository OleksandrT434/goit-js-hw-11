import{a as n,S as d,i as u}from"./assets/vendor-1AYLTIiv.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const p="50347023-c170e0a84468278d26beb99ca",f="https://pixabay.com/api/";function m(e){const a={key:p,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return n.get(f,{params:a}).then(s=>s.data.hits).catch(s=>(console.log("error"),[]))}const l={allGallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function y(){l.loader.classList.remove("hidden")}function i(){l.loader.classList.add("hidden")}function h(){l.allGallery.innerHTML=""}const g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function v(e){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
        />
      </a>
      <div class="image-stats">
        <div class="stat-block">
          <p class="label">Likes</p>
          <p class="value">${e.likes}</p>
        </div>
        <div class="stat-block">
          <p class="label">Views</p>
          <p class="value">${e.views}</p>
        </div>
        <div class="stat-block">
          <p class="label">Comments</p>
          <p class="value">${e.comments}</p>
        </div>
        <div class="stat-block">
          <p class="label">Downloads</p>
          <p class="value">${e.downloads}</p>
        </div>
      </div>
    </li>`}function b(e){l.allGallery.innerHTML=e.map(v).join(""),g.refresh()}const L=document.querySelector(".form");L.addEventListener("submit",e=>{e.preventDefault();const a=e.target.elements["search-text"].value.trim();a&&(y(),h(),m(a).then(s=>{if(s.length===0){u.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),i();return}b(s)}).catch(s=>{console.error("Error",s),i()}).finally(()=>{i(),e.target.reset()}))});
//# sourceMappingURL=index.js.map
