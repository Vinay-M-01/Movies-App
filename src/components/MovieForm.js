import "./MovieForm.css";
const MovieForm = (props) => {
  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log("Button is working");
    const NewMovieObj = {
        title:event.target[0].value,
        opening_text: event.target[1].value,
        release_date:event.target[2].value
    }
    console.log(NewMovieObj)
  };
  return (
    <form className="form" onSubmit={submitFormHandler}>
      <span>
        <label htmlFor="title" className="title">
          Title
        </label>
        <input type="text" className="title" />
      </span>
      <span>
        <label htmlFor="opening-text" className="openingText">
          Opening Text
        </label>
        <input type="text" className="openingText" />
      </span>
      <span>
        <label htmlFor="release-date" className="releaseDate">
          Release Date
        </label>
        <input type="text" className="releaseDate" />
      </span>
      <button type='submit' className="addmovies">Add movies</button>
    </form>
  );
};

export default MovieForm;
