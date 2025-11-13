document.addEventListener("DOMContentLoaded", () => {
  const model = document.querySelector("a-entity[gltf-model]");
  
  model.addEventListener("click", () => {
    model.setAttribute("material", "color", "#ff0000");
  });
});

<a-entity mindar-image-target="targetIndex: 0" 
          gltf-model="assets/models/modelo.gltf" 
          scale="0.5 0.5 0.5"
          rotation="0 0 0"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 10000">
</a-entity>
