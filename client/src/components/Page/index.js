import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import Contact from '../Contact';
import Login from '../Login';
import Signup from '../Signup';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about':
        return <About />;
      case 'order':
        return <Contact />;
      case 'sign up':
        return <Signup />;
      case 'log in':
        return <Login />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
