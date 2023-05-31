import "./EmojiTile.css";
import copy from "copy-to-clipboard";
import { useRef } from "react";

const EmojiTile = (props) => {

    const copyEle = useRef();
    const handleMouseEnter = (event) => {
        copyEle.current.style.display = "block";
    }
    const handleMouseLeave = (event) => {
        copyEle.current.style.display = "none";
        copyEle.current.innerText = "click to copy";
        copyEle.current.style.color = "#A9A9A9";
    }
    const handleClick = (event) => {
        copy(props.emoji.symbol);
        copyEle.current.innerText = "copied !!!";
        copyEle.current.style.color = "#708090";

    }

    return (
        <div className="tile" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
            <div className="symbol">{props.emoji.symbol}</div>
            <div className="title-heading">
                <span className="title">{props.emoji.title}</span>
                <span className="copy-title" ref={copyEle}>click to copy</span>
            </div>
        </div>
    )
}

export default EmojiTile;