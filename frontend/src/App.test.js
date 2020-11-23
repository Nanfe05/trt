import { render, screen } from '@testing-library/react';
import App from './containers/App/App';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import NavBar from './components/NavBar/navBar';
import Home from './components/Home/home';
import About from './components/About/about';
import LogModal from './containers/LogModal/LogModal';
import LoginForm from './components/Forms/loginForm';
import SigninForm from './components/Forms/signinForm';
import Toast from './components/Toast/toast';

import LogManager from './components/LogManager/logManager';

import Btn from './components/Btn/btn';

import BusinessIcon from './components/BusinessIcon/businessIcon';


// Test main component
test('Render APP Component', () => {
  render(<App test={true}/>);
  const linkElement = screen.getByTitle("application");
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

// Test LogModal component
test('Render LogModal Component', () => {
  render(<LogModal modal={true}/>);
  const linkElement = screen.getByTitle("modal");
  expect(linkElement).toBeInTheDocument();
});

// Test SigninForm component
test('Render SigninForm Component', () => {
  render(<SigninForm />);
  const linkElement = screen.getByTitle("signin-form");
  expect(linkElement).toBeInTheDocument();
});

// Test LoginForm component
test('Render LoginForm Component', () => {
  render(<LoginForm />);
  const linkElement = screen.getByTitle("login-form");
  expect(linkElement).toBeInTheDocument();
});

// Test Toast component
test('Render Toast Component', () => {
  render(<Toast appMsg='prueba' />);
  const linkElement = screen.getByTitle("toast");
  expect(linkElement).toBeInTheDocument();
});

// Test BusinessIcon component
test('Render Toast Component', () => {
  render(<BusinessIcon />);
  const linkElement = screen.getByTitle("business-icon");
  expect(linkElement).toBeInTheDocument();
});