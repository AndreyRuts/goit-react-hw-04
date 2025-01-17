import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import { useState, useEffect } from 'react';
import { fetchData } from './services/api';


const App = () => {
    const [gallery, setGallery] = useState([]);
    const [searchData, setSearchData] = useState('');
    const [page, setPage] = useState(1);


    useEffect(() => {
        if (searchData === '') return;

        const getData = async () => {
            try {
                const { data } = await fetchData(searchData, page);
                if (data.total === 0) return;
                setGallery((prevGallery) => {
                    return [...prevGallery, ...data.results];
                });
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [page ,searchData]);


    const handleQuery = (newQuery) => {
        setSearchData(newQuery);
        setGallery([]);
        setPage(1);
    }


    return (
        <> 
            <SearchBar onSubmit={handleQuery}/>
            <ImageGallery gallery={gallery} />
            <Loader />
            <ErrorMessage />
            <LoadMoreBtn />
            <ImageModal />
        </>
    );
};
export default App;