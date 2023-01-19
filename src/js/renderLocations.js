export { renderLocations };

const gallery = document.querySelector('.gallery');

function renderLocations(array) {
  const markup = array
    .map(({ dimension, name, type }) => {
      return `<div class="location">
       
        <div class="info">
          <p class="info-item">
            <b>Name: </b> ${name}
          </p>
          <p class="info-item">
            <b>Dimension: </b>${dimension}
          </p>
          <p class="info-item">
            <b>Type: </b>${type}
        </div>
      </div>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}
