import { AppState, WikiEndpointResult } from './types';
import { Component } from 'preact';
import { SearchInput } from './components/SearchInput';
import { SearchResult } from './components/SearchResult';

export class App extends Component<{}, AppState> {
  constructor() {
    super();

    this.state = {
      header: 'Wikipedia Viewer',
      random: {
        text: 'Click for random article',
        url: 'https://en.wikipedia.org/wiki/Special:Random',
      },
      search: {
        placeholder: 'Type to search',
        text: 'Search',
        value: '',
      },
      searchResult: {
        query: {
          pages: {},
        },
      },
    };
  }

  async fetchSearch(input: string): Promise<WikiEndpointResult> {
    const url = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${input}`;

    const response = await fetch(url);

    return await response.json();
  }

  onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;

    this.setState({
      search: { ...this.state.search, value: target.value },
    });
  };

  onSubmit = async (event: Event) => {
    event.preventDefault();

    const searchResult = await this.fetchSearch(this.state.search.value);

    if (searchResult.error) {
      return;
    }

    this.setState({ searchResult: { ...searchResult } });
  };

  render(_: any, { header, random, search }: AppState) {
    return (
      <div id="app" class="min-h-full p-5 space-y-10 text-center">
        <div class="container">
          <h1 class="text-6xl">{header}</h1>
        </div>
        <div class="container">
          <a class="text-3xl underline" href={random.url} target="_blank">
            {random.text}
          </a>
        </div>
        <SearchInput
          search={this.state.search}
          onInput={this.onInput}
          onSubmit={this.onSubmit}
        />
        <SearchResult result={this.state.searchResult} />
      </div>
    );
  }
}
