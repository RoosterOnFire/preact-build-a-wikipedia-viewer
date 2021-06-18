export type AppState = {
  header: string;
  random: {
    text: string;
    url: string;
  };
  search: Search;
  searchResult: WikiEndpointResult;
};

export type Search = {
  placeholder: string;
  text: string;
  value: string;
};

export type WikiEndpointResult = {
  error?: object;
  query: {
    pages: object;
  };
};
