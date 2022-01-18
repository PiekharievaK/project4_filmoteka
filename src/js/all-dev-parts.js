import './dev-1/renders.js';
import './dev-2/dev-2-main.js';
import './dev-3/dev-3-main.js';
import './dev-4/dev-4-main.js';
import './dev-5/dev-5-main.js';
import './dev-6/dev-6-main.js';
import './dev-7/dev-7-main.js';

import ApiService from './dev-1/api.js';
import { renderTrends, renderLibrary } from './dev-1/renders.js';
import { renderModal } from './dev-3/dev-3-main.js';
import { renderSearch, idToGenre } from './dev-2/dev-2-main.js';

const API_KEY = `718b7347396ac1052bb7bdc76b11dbfa`;
const apiService = new ApiService();
apiService.fetchMovieGenre().then(saveGenreList);

function saveGenreList(list) {
  localStorage.setItem('genreList', JSON.stringify(list));
}

apiService
  .fetchMovieTrends()
  .then(data => {
    localStorage.setItem('filmInfo', JSON.stringify(data));
    return data;
  })
  .then(renderTrends);

idToGenre(
  JSON.parse(localStorage.getItem('genreList')),
  JSON.parse(localStorage.getItem('filmInfo')),
);

import './dev-1/pagination.js';

localStorage.setItem('watched', JSON.stringify([]));
localStorage.setItem('queue', JSON.stringify([]));
