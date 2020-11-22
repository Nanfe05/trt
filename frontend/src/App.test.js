import { render, screen } from '@testing-library/react';
import App from './containers/App/App';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import NavBar from './components/NavBar/navBar';
import Home from './components/Home/home';
import About from './components/About/about';

import LogManager from './components/LogManager/logManager';

import Btn from './components/Btn/btn';


// Test main component
test('Render APP Component', () => {
  render(<App />);
  const linkElement = screen.getByTitle("application");
  // console.log('XXXXXX: ',linkElement);
  expect(linkElement).toBeInTheDocument();
});

// Test Header component
test('Render Header Component', () => {
  render(<Header />);
  const linkElement = screen.getByTitle("header");
  expect(linkElement).toBeInTheDocument();
});

// Test Footer component
test('Render Footer Component', () => {
  render(<Footer />);
  const linkElement = screen.getByTitle("footer");
  expect(linkElement).toBeInTheDocument();
});

// Test Btn component
test('Render Btn Component', () => {
  render(<Btn onClick={()=>{console.log('boton')}} classes='try' label='boton'/>);
  const linkElement = screen.getByText('boton');
  expect(linkElement).toBeInTheDocument();
});

// Test LogManager component
test('Render Btn Component', () => {
  render(<LogManager/>);
  const linkElement = screen.getByTitle("LogManager");
  expect(linkElement).toBeInTheDocument();
});


// Test NavBar component
test('Render Btn Component', () => {
  render(<NavBar/>);
  const linkElement = screen.getByTitle("navBar");
  expect(linkElement).toBeInTheDocument();
});

// Test NavBar component
test('Render Home Component', () => {
  render(<Home/>);
  const linkElement = screen.getByTitle("home-page");
  expect(linkElement).toBeInTheDocument();
});

// Test About component
test('Render About Component', () => {
  render(<About/>);
  const linkElement = screen.getByTitle("about-page");
  expect(linkElement).toBeInTheDocument();
});