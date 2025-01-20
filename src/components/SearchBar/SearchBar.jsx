import s from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const customQuery = evt.target.customQuery.value.trim();

        if (!customQuery) {
            console.log("OMG ERROR");
            return;
        }
        onSubmit(customQuery);
    };

    return (
        <header>
            <form className={s.form} onSubmit={handleSubmit}>
                <div className={s.wrapper}>
                    <input
                        className={s.input}
                        type="text"
                        name="customQuery"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <button type="submit">Search</button>
                </div>
            </form>
        </header>
    );
};

export default SearchBar;