import { useEffect, useState } from "react";
import "./list.css"
import {nanoid} from "nanoid";

const List = () => {
    const [listItems, setListItems] = useState(Array.from(Array(25).keys(), n => n + 1));
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
        console.log('Fetch more list items!');
      }
      useEffect(() => {
        fetchMoreListItems();
      }, [isFetching]);

      function fetchMoreListItems() {
        setTimeout(() => {
          setListItems(prevState => ([...prevState, ...Array.from(Array(25).keys(), n => n + prevState.length + 1)]));
          setIsFetching(false);
        }, 5000);
      }

    return (
      <>
        <ul className="list-group mb-2">
          {listItems.map(listItem => <li key={nanoid()} className="list-group-item">Masai Student {listItem}</li>)}
        </ul>
        {isFetching && 'Fetching more students...'}
      </>
    );
  };
  
  export default List;