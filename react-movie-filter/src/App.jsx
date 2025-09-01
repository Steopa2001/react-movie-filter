import { useState } from "react";

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

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Lista Film</h1>

          {/* select per il filtro per genere */}
          <label>
            Filtra per genere
            <select
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
      </div>
    </div>
  );
}

export default App;
