import { describe, it, expect, beforeEach } from 'vitest';
import { Calculator } from '../src/utils/calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should initialize with display "0"', () => {
    expect(calculator.getDisplay()).toBe('0');
  });

  it('should input digits correctly', () => {
    calculator.inputDigit('5');
    expect(calculator.getDisplay()).toBe('5');

    calculator.inputDigit('3');
    expect(calculator.getDisplay()).toBe('53');
  });

  it('should handle decimal input', () => {
    calculator.inputDigit('5');
    calculator.inputDecimal();
    calculator.inputDigit('3');
    expect(calculator.getDisplay()).toBe('5.3');
  });

  it('should not allow multiple decimal points', () => {
    calculator.inputDigit('5');
    calculator.inputDecimal();
    calculator.inputDecimal();
    calculator.inputDigit('3');
    expect(calculator.getDisplay()).toBe('5.3');
  });

  it('should perform addition', () => {
    calculator.inputDigit('5');
    calculator.performOperation('+');
    calculator.inputDigit('3');
    calculator.equals();
    expect(calculator.getDisplay()).toBe('8');
  });

  it('should perform subtraction', () => {
    calculator.inputDigit('10');
    calculator.performOperation('-');
    calculator.inputDigit('3');
    calculator.equals();
    expect(calculator.getDisplay()).toBe('7');
  });

  it('should perform multiplication', () => {
    calculator.inputDigit('4');
    calculator.performOperation('*');
    calculator.inputDigit('3');
    calculator.equals();
    expect(calculator.getDisplay()).toBe('12');
  });

  it('should perform division', () => {
    calculator.inputDigit('15');
    calculator.performOperation('/');
    calculator.inputDigit('3');
    calculator.equals();
    expect(calculator.getDisplay()).toBe('5');
  });

  it('should handle division by zero', () => {
    calculator.inputDigit('5');
    calculator.performOperation('/');
    calculator.inputDigit('0');
    calculator.equals();
    expect(calculator.getDisplay()).toBe('0');
  });

  it('should clear the calculator', () => {
    calculator.inputDigit('5');
    calculator.performOperation('+');
    calculator.inputDigit('3');
    calculator.clear();
    expect(calculator.getDisplay()).toBe('0');
  });

  it('should handle chained operations', () => {
    calculator.inputDigit('5');
    calculator.performOperation('+');
    calculator.inputDigit('3');
    calculator.performOperation('*');
    calculator.inputDigit('2');
    calculator.equals();
    expect(calculator.getDisplay()).toBe('16');
  });
});
