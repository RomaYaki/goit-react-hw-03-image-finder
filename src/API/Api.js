import PropTypes from 'prop-types';
// import axios from 'axios';

function fetchImg(name, page) {
  const key = '22022516-c571923560df7aebf84694af6';
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет картинки с именем ${name}`));
  });
}

fetchImg.propTypes = {
  name: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

const api = {
  fetchImg,
};

export default api;