import SearchBar from "../SearchBar/SearchBar"
import Title from "../Title/Title"
import "./Header.css";


const Header = (props) => {

    return (
        <div className="header">
            <Title />
            <SearchBar setSearchText={props.setSearchText}/>
        </div>
    )
}

export default Header;