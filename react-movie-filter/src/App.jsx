import { useState, useEffect } from "react";

function App() {
  // lista iniziale dei film
  const initialMovies = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ];

  // stato per il genere selezionato
  const [selectedGenre, setSelectedGenre] = useState("");

  // stato per i film filtrati
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  // stato per la ricerca del titolo
  const [searchTerm, setSearchTerm] = useState("");

   // useEffect che filtra i film in base a genere e ricerca
  useEffect(() => {
        let result = initialMovies;

    // filtro per genere se selezionato
    if (selectedGenre !== "") {
      result = result.filter((movie) => movie.genre === selectedGenre);
    }

    // filtro per titolo se c'è testo nella ricerca
    if (searchTerm !== "") {
      result = result.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // aggiorna lo stato dei film filtrati
    setFilteredMovies(result);
  }, [selectedGenre, searchTerm, initialMovies]);


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Lista Film</h1>

          {/* select per il filtro per genere */}
          <label>
            Filtra per genere
            <select
              className="ms-2"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="">Tutti</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>
          </label>
        </div>

        {/* campo ricerca per titolo */}
        <div className="col-12">
          <label>
            Cerca per titolo
            <input
              className="ms-2"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Scrivi il titolo..."
            />
          </label>
        </div>

        <div className="col-12">
          <h2>Film trovati</h2>
          <ul>
            {filteredMovies.map((movie, index) => (
              <li key={index}>
                {movie.title} - {movie.genre}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
