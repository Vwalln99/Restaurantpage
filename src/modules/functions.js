const createTags = (htmlTags) => {
    const tags = [];
    for (let tag of htmlTags) {
      tags.push(document.createElement(tag));
    }
    return tags;
  };
  
  const addImages = (imageSources) => {
    const images = [];
    for (let src of imageSources) {
      const imgElement = document.createElement('img');
      imgElement.src = src;
      images.push(imgElement);
    }
    return images;
  };
  
  const appendImages = (container, images) => {
    for (let img of images) {
      container.appendChild(img);
    }
  };

  
  export { createTags, addImages, appendImages };

  
  