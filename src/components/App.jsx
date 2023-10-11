import { Component } from 'react';
import { AppContainer } from './Layout';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {};

  render() {
    return (
      <AppContainer>
        <Searchbar onSubmit={values => console.log(values)} />
      </AppContainer>
    );
  }
}
