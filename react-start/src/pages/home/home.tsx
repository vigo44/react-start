import Search from '../../components/search/search';
import Cards from '../../components/cards/cards';
import { useCards } from '../../hooks/cardsHook';

function Home() {
  const { cardsData, loading, error, prevPage, nextPage, setPath } = useCards(
    'https://rickandmortyapi.com/api/character'
  );
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
