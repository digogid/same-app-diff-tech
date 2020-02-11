import React, { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import httpClient from "axios";

function Details({history}) {
  let { id } = useParams();
  const [book, setBook] = useState({ 
    authors: [],
    imageLinks: {}
  });

  function goBack() {
    history.goBack();
  }

  useEffect(() => {
    const getDataAsync = async () => {
      const { data } = await httpClient.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
      setBook({ ...data.volumeInfo });
    };

    getDataAsync();
  });

  return (
    <section>
      <button onClick={goBack}>Go Back</button>
      <h2>{book.title}</h2>
      <p>{book.authors.join(", ")}</p>
      <img src={book.imageLinks.thumbnail} alt="alt" />
      <p dangerouslySetInnerHTML={{
         __html: book.description
      }}>
      </p>
    </section>
  );
}

export default withRouter(Details);
