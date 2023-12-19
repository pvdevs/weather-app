import searchBar from './SearchBar';

const search = document.getElementById('search');

export default function searchBarEvent() {
  search.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      searchBar(search.value);
    }
  });
}
