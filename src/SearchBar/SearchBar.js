import "./SearchBar.css";
import { useEffect, useRef } from "react";

const SearchBar = (props) => {

    const inputEle = useRef();

    useEffect(()=>{
        inputEle.current.focus();
    })

    const handleChange = (event) => {
        props.setSearchText(event.target.value);
    }

    return (
        <>
            <div className="search-bar">
                <input onChange={handleChange} className="search-content" ref={inputEle} placeholder="Search Emoji"></input>
            </div>
        </>
    )
}

export default SearchBar;