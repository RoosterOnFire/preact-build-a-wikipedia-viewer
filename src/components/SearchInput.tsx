import { Search } from '../types';

export function SearchInput(props: {
  search: Search;
  onInput: (event: Event) => void;
  onSubmit: (event: Event) => void;
}) {
  return (
    <div class="container">
      <form onSubmit={props.onSubmit}>
        <div class="min-w-min max-w-4xl p-8 mx-auto">
          <div class=" bg-white flex items-center rounded-full shadow-xl">
            <input
              class="rounded-l-full w-full p-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder={props.search.placeholder}
              onInput={props.onInput}
            />
            <div class="p-4">
              <button
                type="submit"
                class="bg-blue-500 text-white rounded-full p-4 hover:bg-blue-400 focus:outline-none w-20 h-12 flex items-center justify-center"
              >
                {props.search.text}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
