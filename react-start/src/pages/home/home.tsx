import Search from '../../components/search/search';
import Cards from '../../components/cards/cards';
import { useCards } from '../../hooks/cardsHook';

function Home() {
  let path = 'https://rickandmortyapi.com/api/character';
  if (localStorage.getItem('valueSearchInput') !== null) {
    path = `https://rickandmortyapi.com/api/character/?name=${localStorage.getItem(
      'valueSearchInput'
    )}`;
  }
  const { cardsData, loading, error, prevPage, nextPage, setPath } = useCards(path);
  return (
    <div>
      <Search onSearch={setPath} />
      <Cards
        cardsData={cardsData}
        loading={loading}
        error={error}
        prevPage={prevPage}
        nextPage={nextPage}
        setPath={setPath}
      />
    </div>
  );
}
export default Home;
