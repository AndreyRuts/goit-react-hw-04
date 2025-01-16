import s from './SearchBox.module.css'

const SearchBox = ({ searchData, setSearchData }) => { 
    
    const inputData = e => {
        setSearchData(e.target.value)
    }

    return (
        <div className={s.searchBoxWrapper}>
            <p>Find contacts by name</p>
            <input className={s.searchBoxInput} value={searchData} onChange={inputData}/>
        </div>
    )
}
export default SearchBox;