import React from 'react';
import './Pagination.scss';

type Props = {
  toNextPage: () => void;
  toPreviousPage: () => void;
};

export const Pagination: React.FC<Props> = ({ toNextPage, toPreviousPage }) => {
  return (
    <section className='Pagination'>
      <div className='Pagination__prev'>
        <button type='button' onClick={() => toPreviousPage()}>
          &#10094; Previous
        </button>
      </div>
      <div className='Pagination__next'>
        <button type='button' onClick={() => toNextPage()}>
          Next &#10095;
        </button>
      </div>
    </section>
  );
};
