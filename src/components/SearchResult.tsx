import { WikiEndpointResult } from '../types';

export function SearchResult({
  result: { query },
}: {
  result: WikiEndpointResult;
}) {
  const pages = Object.values(query.pages).map((page: any) => {
    const href = `https://en.wikipedia.org/?curid=${page.pageid}`;

    return (
      <div
        class="container box-border p-4 border-l-4 border-b-4 shadow-md text-left"
        key={page.pageid}
      >
        <a class="space-y-1.5" href={href} target="_blank">
          <h2 class="text-2xl">{page.title}</h2>
          <p class="text-xl">{page.extract}</p>
        </a>
      </div>
    );
  });

  return (
    <div class="container">
      <div class="w-1/2 mx-auto inline-flex flex-col content-center space-y-10">
        {pages}
      </div>
    </div>
  );
}
