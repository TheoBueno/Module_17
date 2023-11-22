// import logo from './logo.svg';
// import './App.css';

function App() {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    async function getData(){
      const response  = await fetch('./books.json')
      const json      = await response.json()
      setData(json);
      setLoaded(true);
    }
    getData()
  },[])
  console.log('loaded:', loaded, 'data: ', data )

  return (<>
    <div className='container'>
      <h1>Books 4: React</h1>
      {loaded && data.books.map((book, i) => <Book data={book} key={i}/>)}
    </div>  
  </>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)


// export default App;
