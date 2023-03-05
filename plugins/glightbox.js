import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

export default ({ app }, inject) => {
  let lightbox;

  inject("initGLightbox", () => {
    lightbox = GLightbox({
      zoomable: false,
      touchNavigation: true,
    });
  });
  inject("destroyGLightbox", () => {
    lightbox.destroy();
  });
};
