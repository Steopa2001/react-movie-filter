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

  // stato principale dei film (serve per aggiungere nuovi film)
  const [movies, setMovies] = useState(initialMovies);

  const [newTitle, setNewTitle] = useState("");
  const [newGenre, setNewGenre] = useState("");

  // useEffect che filtra i film in base a genere e ricerca
  useEffect(() => {
    let result = movies;

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
  }, [selectedGenre, searchTerm, movies]);

  // funzione per aggiungere un nuovo film
  const addMovie = (e) => {
    e.preventDefault(); // blocca il refresh del form
    if (!newTitle || !newGenre) return; // evita campi vuoti
    const newMovie = { title: newTitle, genre: newGenre }; // crea oggetto film
    setMovies([...movies, newMovie]); // aggiunge film alla lista
    setNewTitle(""); // reset input titolo
    setNewGenre(""); // reset input genere
  };

  // Funzione per rimuovere un film dalla lista
  const removeMovie = (index) => {
    setMovies((prevMovies) => prevMovies.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Lista Film</h1>
        </div>

        {/* select per il filtro per genere */}
        <div className="col-12 mb-3">
          <label className="form-label">Filtra per genere</label>
          <select
            className="form-select"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">Tutti</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>
        </div>

        {/* campo ricerca per titolo */}
        <div className="col-12 mb-3">
          <label className="form-label">Cerca per titolo</label>
          <input
            type="text"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Scrivi il titolo..."
          />
        </div>

        <div className="col-12">
          <h2>Film trovati</h2>
          <ul>
            {filteredMovies.map((movie, index) => (
              <li key={index}>
                {movie.title} - {movie.genre}
                <button
                  className="btn ms-2 btn-danger"
                  onClick={() => removeMovie(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-12 mb-3">
          <h2>Aggiungi un nuovo film</h2>
        </div>
        {/* form per aggiungere film */}
        <div className="col-12 mb-3">
          <form onSubmit={addMovie}>
            <input
              type="text"
              placeholder="Titolo"
              className="form-control mb-2"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Genere"
              className="form-control mb-2"
              value={newGenre}
              onChange={(e) => setNewGenre(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Aggiungi
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
