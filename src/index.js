import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchRickAndMortyAPI } from './js/fetchApi.js';
import { renderCharacters } from './js/renderCharacters';

const form = document.querySelector('.js-search');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.js-load-more');

let page = 1;
let query = '';
form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(evt) {
  evt.preventDefault();

  gallery.innerHTML = '';
  page = 1;
  query = evt.currentTarget.elements.query.value;
  fetchRickAndMortyAPI(query, page)
    .then(({ data }) => {
      renderCharacters(data.results);
      loadMoreBtn.hidden = false;
      loadMoreBtn.disabled = false;

      console.log(data);
    })
    .catch(error => console.log(error));
}

function onLoadMore() {
  page += 1;
  fetchRickAndMortyAPI(query, page)
    .then(({ data }) => {
      renderCharacters(data.results);
      loadMoreBtn.hidden = false;
      if (page === data.info.pages) {
        loadMoreBtn.hidden = true;
      }
    })
    .catch(error => console.log(error));
}
