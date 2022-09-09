import React from 'react';
import './Header.scss';

type Props = {
  sortAZ: () => void;
  sortZA: () => void;
  clearFilter: () => void;
  setQuery: (query: string) => void;
  query: string;
};

export const Header: React.FC<Props> = ({
  sortAZ,
  sortZA,
  clearFilter,
  setQuery,
  query,
}) => {
  return (
    <section className='Header'>
      <div className='Header__filters'>
        <button type='button' onClick={() => sortAZ()}>
          Sort A-Z
        </button>
        <button type='button' onClick={() => sortZA()}>
          Sort Z-A
        </button>
        <button type='button' onClick={() => clearFilter()}>
          Clear
        </button>
      </div>
      <div className='Header__search'>
        <input
          type='text'
          placeholder='Search'
          value={query}
          onChange={(e) => setQuery(e.target.value.trim())} />
      </div>
    </section>
  );
};
