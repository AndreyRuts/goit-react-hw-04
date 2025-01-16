import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';

const App = () => {

    return (
        <>
            <LoadMoreBtn />
            <SearchBar />
            <ImageGallery />
            <Loader />
            <ErrorMessage />
            <ImageModal />
        </>
    );
};
export default App;