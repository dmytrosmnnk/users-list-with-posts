import React, {useState, useEffect} from 'react';
import './Posts.scss';
import { getPosts } from '../../helpers/getPosts';
import { Post } from '../../types/Post';

type Props = {
  id: number;
  onClose: () => void;
};

export const Posts: React.FC<Props> = ({ id, onClose }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((resp) => {
      setPosts(resp);
    });
  }, []);

  return (
    <section className='Posts'>
      {posts
        .filter((post) => post.userId === id)
        .map((item) => (
          <div key={item.id} className='Posts__item'>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      <button
        type='button'
        className='Posts__close'
        onClick={() => onClose()}
      >
        x
      </button>
    </section>
  );
};
