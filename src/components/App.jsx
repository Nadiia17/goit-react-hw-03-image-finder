import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AppContainer } from './Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { searchByQuery } from './api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
    totalHits: 0,
  };

  handleSubmit = query => {
    const trimmedQuery = query.trim();

    if (trimmedQuery === '') {
      toast.error('Please enter a search query!');
      return;
    }

    this.setState({
      query: trimmedQuery,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    try {
      // Starting loading
      this.setState({ loading: true, error: false });

      // API request
      const data = await searchByQuery(this.state.query, this.state.page);
      if (data.hits.length === 0) {
        toast.error('No images found for your query!');
        return;
      }
      // Updating state with data
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        totalHits: data.totalHits,
      }));
    } catch (error) {
      // Handling error
      console.error('Error fetching data: ', error);
      this.setState({ error: true });
      toast.error('Error fetching images, please try again!');
    } finally {
      // Ending loading
      this.setState({ loading: false });
    }
  };

  render() {
    const { images, loading, error, totalHits } = this.state;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        <ImageGallery images={this.state.images} />
        {images.length > 0 &&
          images.length < totalHits &&
          !loading &&
          !error && <Button onClick={this.handleLoadMore}>Load more</Button>}
        <Toaster position="top-right" />
      </AppContainer>
    );
  }
}
