// import logo from './logo.svg';
import LanguageList from './LanguageList';
import './App.css';

function App(props) {
  return (
    <div>
      <h2 class="bg-primary">Most popular languages</h2>
      <LanguageList items={props.items} />
    </div>
  );  
}

export default App;
