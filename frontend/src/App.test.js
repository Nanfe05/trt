import { render, screen } from '@testing-library/react';
import App from './containers/App/App';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';


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