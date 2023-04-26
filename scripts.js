const imageSources = [
  "./images/tshirt.jpg",
  "./images/apple2-resize.png",
  "./images/book.jpeg",
  "./images/icecream.jpeg",
  "./images/soup.jpg",
  "./images/coffee3.jpg",
  "./images/watch.jpg",
  "./images/backpack.jpg",
  "./images/jeans.jpeg",
  "./images/sandwich.jpg",
  "./images/sunglasses.jpg",
  "./images/sneakers.jpg",
]

const buyButtons = document.querySelectorAll('.btn-buy');
const retButtons = document.querySelectorAll('.btn-ret');
// const images = document.querySelectorAll('img');

// images.forEach(img => console.log(img.src));



buyButtons.forEach(
  btn => {
    btn.addEventListener('click', e => {
      const image = e.target.parentElement.parentElement.firstElementChild.firstElementChild;
      const imageId = e.target.dataset.id;
      image.src = './images/sold-resized.png';
      e.target.previousElementSibling.style.textDecoration = 'line-through';
      e.target.disabled = true;
      e.target.nextElementSibling.disabled = false;
      e.target.nextElementSibling.style.cssText = `
        background-color: white; 
        color: black; 
        border: 2px solid #1fba00;
        
      `;
      
      e.target.nextElementSibling.addEventListener('mouseover', evt => {
        evt.target.style.cssText = `
          border-radius: 5px;
          background-color: #1fba00;
          color: white;
        `;
      });
      e.target.nextElementSibling.addEventListener('mouseleave', evt => {
        evt.target.style.cssText = `
          border-radius: 5px;
          background-color: #1fba00;
          color: white;
        `;
      })
    });

    
  }
);

retButtons.forEach(
  btn => {
    btn.addEventListener('click', e => {
      const image = e.target.parentElement.parentElement.firstElementChild.firstElementChild;
      const imageId = parseInt(image.dataset.id);
      image.src = imageSources[imageId - 1];
      console.log(e.target.parentElement.firstElementChild)
      e.target.parentElement.firstElementChild.style.textDecoration = 'none';
      e.target.disabled = true;
      e.target.previousElementSibling.disabled = false;
      // e.target.previousElementSibling.style.cssText = `
      //     border: none;
      //     color: #ccc;
      //     padding: 15px 32px;
      //     text-align: center;
      //     text-decoration: none;
      //     display: inline-block;
      //     font-size: 16px;
      //     margin: 4px 2px;
      //     transition-duration: 0.4s;
      //     cursor: pointer;
        
      //     background-color: white; 
      //     color: #ccc; 
      //     border: 2px solid #ccc;
      // `;
      e.target.previousElementSibling.style.cssText = `
        background-color: white; 
        color: black; 
        border: 2px solid #008CBA;
        border-radius: 5px;
      `;
      
      // e.target.style.cssText = `
      //   background-color: white; 
      //   color: black; 
      //   border: 2px solid #1fba00;
      //   border-radius: 5px;
      //   background-color: #1fba00;
      //   color: white;
      // `;
      e.target.style.cssText = `
        border: none;
        color: white;
        padding: 12px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
      `;
    });
  }
);