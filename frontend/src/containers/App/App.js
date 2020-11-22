import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

const DynamicHeight = (props) =>{
  return(<div className='dynamicHeght'>
    {props.children}
  </div>);
};

function App() {
  return (
    <div title="application" className="App">
        <Header/>
          <DynamicHeight>
            <p>Holder</p>
          </DynamicHeight>
        <Footer/>
    </div>
  );
}

export default App;
