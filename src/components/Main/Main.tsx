import React, {useState} from 'react';
import './Main.scss';
import { User } from '../../types/User';
import classNames from 'classnames';
import { Posts } from '../Posts';

type Props = {
  currentUsers: User[];
};

export const Main: React.FC<Props> = ({ currentUsers }) => {
  const [userId, setUserId] = useState<number | null>(null);

  const onClose = () => {
    setUserId(null);
   };

  return (
    <>
      <section className='Main'>
        {currentUsers.map((user) => (
          <div
            key={user.id}
            className={classNames('Main__userCard', {
              minimized: userId !== null,
            })}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.address.city}</p>
            <button
              type='button'
              className={classNames({ minimized: userId !== null })}
              onClick={() => setUserId(user.id)}
            >
              Show all posts
            </button>
          </div>
        ))}
      </section>

      {userId !== null && <Posts id={userId} onClose={onClose} />}
    </>
  );
};
