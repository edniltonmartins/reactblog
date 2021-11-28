import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Post from './components/Post';

function App() {
  return (
    <>
      <Header/>
     <main>
       <Post title="Primeiro Post" readingTime={1}>
          <p>Introdução...</p>
          <p>Desenvolvimento da idéia...</p>
          <p>Conclusão...</p>
       </Post>
       <Post title="Segundo Post" readingTime={5}>
          <p>Introdução...</p>
          <p>Desenvolvimento da idéia...</p>
          <p>Conclusão...</p>
        </Post>
     </main>
      <Footer/>
    </>
  );
}

export default App;
