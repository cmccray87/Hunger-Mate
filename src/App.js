import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Home from './pages/Home';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const [pages] = useState([
    {
      name: "about"
    },
    {
      name: "order"
    },
    {
      name: "sign up"
    },
    {
      name: "log in"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

    return (
      <ApolloProvider client={client}>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header>
            <Nav
              pages={pages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            ></Nav>
          </Header>
          <div className="container">
            <main>
              <Page currentPage={currentPage}></Page>
            </main>
          <Home />
          </div>
        </div>
      </ApolloProvider>
    );
  };

export default App;