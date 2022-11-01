import { useState, useEffect } from "react";
import { charLoad, searchChar } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";
import { useDebounce } from "../../hooks/useDebounce";
import CharCard from "../../components/charCard/CharCard";
import Paginations from "../../components/Pagination/Pagination";
import "./characters.css";

function CharactersPage() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const debouncedValue = useDebounce(value, 500);

  const dispatch = useDispatch();
  let characters = useSelector((state) => state.characters);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const numPage = (page) => {
    setPage(page)
  }

  useEffect(() => {
    dispatch(charLoad(page));
  }, [page]);

  useEffect(() => {
    dispatch(searchChar(value));
  }, [debouncedValue]);

  return (
    <div className="characters-page">
      <h1 className="char-title">
        {characters.count} Peoples for you to choose your favorite
      </h1>
      <input
        className="char-search"
        type="text"
        placeholder="find..."
        value={value}
        onChange={handleChange}
      />
      <div className="char-list">
        {characters.results ? (
          characters.results.map((char) => {
            return (
              <CharCard
                key={char.name}
                {...char}
                
              />
            );
          })
        ) : (
          <BeatLoader color="grey" />
        )}
      </div>

      {characters ? (
        <Paginations page={page} characters={characters} numPage={numPage} />
      ) : null}
    </div>
  );
}

export default CharactersPage;
