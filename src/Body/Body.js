import EmojiTile from "../EmojiTile/EmojiTile";
import emojiFilter from "../Funtions/emojiFilter";
import "./Body.css";

const Body = (props) => {

    console.log(props.searchText);
    var emojiList = emojiFilter(props.searchText);

    return (
        <div className="main-content">
            {emojiList.map((emoji, index) =>
                <EmojiTile emoji={emoji} key={index} />
            )}
        </div>
    )
}

export default Body;