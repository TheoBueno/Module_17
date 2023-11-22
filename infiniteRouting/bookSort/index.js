// import logo from './logo.svg';
// import './App.css';

function App() {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    async function getData(){
      const response  = await fetch('./bookSort/books.json')
      const json      = await response.json()
      setData(json);
      setLoaded(true);
    }
    getData()
  },[])
  console.log('loaded:', loaded, 'data: ', data )

  return (<>
    <div className='container'>
      <h1>Books 5: React Components</h1>
      <h4>A 5th way to arrange books.</h4>
      <h3>Fast Navigation:
        <a href="#0">1rst</a>
        , <a href="#1">2nd</a>
        , <a href="#2">3rd</a>
        , <a href="#3">4th</a>
        , <a href="#4">5th</a>
        , <a href="#5">6th</a>
        , <a href="#6">7th</a>
        , <a href="#7">8th</a>.
      </h3>

      {loaded && data.books.map((book, i) => <mit-book
        title={book.title}
        subtitle    = {book.subtitle}
        author      = {book.author}
        publisher   = {book.publisher}
        description = {book.description}
        key={i}
        id={i}/>)}
    </div>  
  </>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

// export default App;
