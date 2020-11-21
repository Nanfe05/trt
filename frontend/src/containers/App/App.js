import './App.scss';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const DynamicHeight = (props) =>{
  return(<div className='dynamicHeght'>
    {props.children}
  </div>);
};

function App() {
  return (
    <div className="App">
        <Header/>
          <DynamicHeight>
            <p>lkdfj</p>
          </DynamicHeight>
        <Footer/>
    </div>
  );
}

export default App;
