import React, {useState, useEffect} from 'react';
import './App.scss';
import { User } from './types/User';
import { getUsers } from './helpers/getUsers';
import { Header } from './components/Header';
import { Pagination } from './components/Pagination';
import { Main } from './components/Main';

const usersPerPage = 4;

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [sortedUsers, setSortedUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentUsers, setCurrentUsers] = useState<User[]>([]);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    getUsers().then((resp) => {
      setUsers(resp);
      setSortedUsers(resp);
      setCurrentPage(1);
    });
  }, []);

  useEffect(() => {
    const start = currentPage * usersPerPage - usersPerPage;
    const end = currentPage * usersPerPage;
    setCurrentUsers(sortedUsers.slice(start, end));
  }, [sortedUsers, currentPage]);

  useEffect(() => {
    const filteredUsers = users.filter((user) => {
      if (query === '') {
        return user;
      }

      if (user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
        return user;
      }

      return null;
    });
    setSortedUsers(filteredUsers);
  }, [query]);

  const sortAZ = ():void => {
    const usersAZ = [...sortedUsers].sort((a, b) => a.name.localeCompare(b.name));
    setSortedUsers(usersAZ);
  };

  const sortZA = (): void => {
    const usersZA = [...sortedUsers].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setSortedUsers(usersZA);
  };

  const clearFilter = (): void => {
    setSortedUsers(users);
    setQuery('');
  };

  const toNextPage = (): void => {
    if (users.length / usersPerPage > currentPage) {
      setCurrentPage((state) => state + 1);
    }
  };

  const toPreviousPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);
    }
  };

  return (
    <div className='App'>
      <header className='App__header'>
        <Header
          sortAZ={sortAZ}
          sortZA={sortZA}
          clearFilter={clearFilter}
          setQuery={setQuery}
          query={query}
        />
      </header>
      <main className='App__main'>
        <Main currentUsers={currentUsers} />
      </main>
      <section className='App__pagination'>
        <Pagination toNextPage={toNextPage} toPreviousPage={toPreviousPage} />
      </section>
    </div>
  );
};

export default App;
