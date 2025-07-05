import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Alert } from 'react-native';
import App from '../App';

// Mock Alert
jest.spyOn(Alert, 'alert');

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<App />);
    expect(screen.getByText('Expo Test App')).toBeTruthy();
    expect(screen.getByText('Count: 0')).toBeTruthy();
  });

  it('increments count when increment button is pressed', () => {
    render(<App />);
    const incrementButton = screen.getByTestId('increment-button');
    
    fireEvent.press(incrementButton);
    expect(screen.getByText('Count: 1')).toBeTruthy();
    
    fireEvent.press(incrementButton);
    expect(screen.getByText('Count: 2')).toBeTruthy();
  });

  it('decrements count when decrement button is pressed', () => {
    render(<App />);
    const decrementButton = screen.getByTestId('decrement-button');
    
    fireEvent.press(decrementButton);
    expect(screen.getByText('Count: -1')).toBeTruthy();
    
    fireEvent.press(decrementButton);
    expect(screen.getByText('Count: -2')).toBeTruthy();
  });

  it('resets count to 0 when reset button is pressed', () => {
    render(<App />);
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');
    
    // Increment first
    fireEvent.press(incrementButton);
    fireEvent.press(incrementButton);
    expect(screen.getByText('Count: 2')).toBeTruthy();
    
    // Then reset
    fireEvent.press(resetButton);
    expect(screen.getByText('Count: 0')).toBeTruthy();
  });

  it('shows alert with current count when alert button is pressed', () => {
    render(<App />);
    const incrementButton = screen.getByTestId('increment-button');
    const alertButton = screen.getByTestId('alert-button');
    
    // Increment to 3
    fireEvent.press(incrementButton);
    fireEvent.press(incrementButton);
    fireEvent.press(incrementButton);
    
    // Press alert button
    fireEvent.press(alertButton);
    
    expect(Alert.alert).toHaveBeenCalledWith('Hello!', 'Current count is: 3');
  });

  it('updates input display when text is entered', () => {
    render(<App />);
    const textInput = screen.getByTestId('text-input');
    const inputDisplay = screen.getByTestId('input-display');
    
    expect(inputDisplay).toHaveTextContent('You typed: ');
    
    fireEvent.changeText(textInput, 'Hello World');
    expect(inputDisplay).toHaveTextContent('You typed: Hello World');
  });

  it('handles empty input correctly', () => {
    render(<App />);
    const textInput = screen.getByTestId('text-input');
    const inputDisplay = screen.getByTestId('input-display');
    
    fireEvent.changeText(textInput, 'Test');
    expect(inputDisplay).toHaveTextContent('You typed: Test');
    
    fireEvent.changeText(textInput, '');
    expect(inputDisplay).toHaveTextContent('You typed: ');
  });

  it('handles multiple operations correctly', () => {
    render(<App />);
    const incrementButton = screen.getByTestId('increment-button');
    const decrementButton = screen.getByTestId('decrement-button');
    const resetButton = screen.getByTestId('reset-button');
    
    // Complex sequence
    fireEvent.press(incrementButton); // 1
    fireEvent.press(incrementButton); // 2
    fireEvent.press(decrementButton); // 1
    fireEvent.press(incrementButton); // 2
    fireEvent.press(incrementButton); // 3
    
    expect(screen.getByText('Count: 3')).toBeTruthy();
    
    fireEvent.press(resetButton);
    expect(screen.getByText('Count: 0')).toBeTruthy();
  });
});