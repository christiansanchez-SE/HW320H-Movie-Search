import { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

// Import our components
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  // Constant with your API key
  const apiKey = "4b8c7626";

  // State to hold the movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);
  };


  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Form mvoiesearch ={getMovie}/>
      <MovieDisplay />
    </div>
  );
}
