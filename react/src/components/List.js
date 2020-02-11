import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./List.css";
import axios from "axios";

function List() {
  const [term, setTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [empty, setEmpty] = useState(true);

  const useAsyncHook = useCallback(async() => {
    const { data } = await axios.get( `https://www.googleapis.com/books/v1/volumes?q=${term}`);
    setBooks( data.items.map(book => ({ id: book.id, ...book.volumeInfo })) );
    setEmpty(false);
  })

  return (
    <div className="container">
      <input type="text" onChange={e => setTerm(e.target.value)} />
      <button onClick={useAsyncHook}>Search</button>
      <section className="cards-container">
      { empty === true ? 
        (<p>There's no item to show</p>)
        : (
          books.map(book => {
            return (
              <Link to={"/details/" + book.id} key={book.id} className="card">
                 <h4>{ book.title }</h4>
                 <img src={book.imageLinks ? book.imageLinks.thumbnail : ''} />
              </Link>
            );
          })
          )
        }
      </section>
    </div>
  )
}


export default List;