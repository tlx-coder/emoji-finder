import emojiList from "../Body/emoji.json";

const emojiFilter = (searchText) => {

    return emojiList.filter((emoji)=>{
        if(emoji.keywords.includes(searchText.toLowerCase()))
         return true;
    });

}

export default emojiFilter;