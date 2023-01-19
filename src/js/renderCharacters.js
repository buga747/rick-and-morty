export { renderCharacters };

const gallery = document.querySelector('.gallery');

function renderCharacters(array) {
  const markup = array
    .map(({ image, name, status, species, gender }) => {
      return `<div class="character">
        <img src="${image}" alt="${name}" loading="lazy" class = "photo" />
        
        <div class="info">
          <p class="info-item">
            <b>Name: </b> ${name}
          </p>
          <p class="info-item">
            <b>Species: </b>${species}
          </p>
          <p class="info-item">
            <b>Status: </b>${status}
          </p>
                    <p class="info-item">
            <b>Gender: </b>${gender}
          </p>
        </div>
      </div>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}
