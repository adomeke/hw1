export class Calculator {
  private display: string = '0';
  private previousValue: number = 0;
  private operation: string | null = null;
  private waitingForOperand: boolean = false;

  getDisplay(): string {
    return this.display;
  }

  inputDigit(digit: string): void {
    if (this.waitingForOperand) {
      this.display = digit;
      this.waitingForOperand = false;
    } else {
      this.display = this.display === '0' ? digit : this.display + digit;
    }
  }

  inputDecimal(): void {
    if (this.waitingForOperand) {
      this.display = '0.';
      this.waitingForOperand = false;
    } else if (this.display.indexOf('.') === -1) {
      this.display += '.';
    }
  }

  clear(): void {
    this.display = '0';
    this.previousValue = 0;
    this.operation = null;
    this.waitingForOperand = false;
  }

  performOperation(nextOperation: string): void {
    const inputValue = parseFloat(this.display);

    if (this.previousValue === 0) {
      this.previousValue = inputValue;
    } else if (this.operation) {
      const currentValue = this.previousValue || 0;
      const newValue = this.calculate(currentValue, inputValue, this.operation);

      this.display = String(newValue);
      this.previousValue = newValue;
    }

    this.waitingForOperand = true;
    this.operation = nextOperation;
  }

  calculate(
    firstValue: number,
    secondValue: number,
    operation: string
  ): number {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return secondValue !== 0 ? firstValue / secondValue : 0;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  }

  equals(): void {
    const inputValue = parseFloat(this.display);

    if (this.previousValue !== 0 && this.operation) {
      const newValue = this.calculate(
        this.previousValue,
        inputValue,
        this.operation
      );
      this.display = String(newValue);
      this.previousValue = 0;
      this.operation = null;
      this.waitingForOperand = true;
    }
  }
}
