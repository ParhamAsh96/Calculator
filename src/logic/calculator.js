
import { ref } from 'vue';

export function useCalculator() {
  const display = ref('0');
  let firstOperand = null;
  let operator = null;
  let waitingForSecondOperand = false;

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      display.value = digit;
      waitingForSecondOperand = false;
    } else {
      display.value = display.value === '0' ? digit : display.value + digit;
    }
  };

  const inputDecimal = () => {
    if (!display.value.includes('.')) {
      display.value += '.';
    }
  };

  const toggleSign = () => {
    display.value = (parseFloat(display.value) * -1).toString();
  };

  const inputPercent = () => {
    display.value = (parseFloat(display.value) / 100).toString();
  };

  const clear = () => {
    display.value = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display.value);

    if (firstOperand === null) {
      firstOperand = inputValue;
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      display.value = `${result}`;
      firstOperand = result;
    }

    waitingForSecondOperand = true;
    operator = nextOperator;
  };

  const calculate = (first, second, op) => {
    switch (op) {
      case '+':
        return first + second;
      case '-':
        return first - second;
      case '*':
        return first * second;
      case '/':
        return first / second;
      default:
        return second;
    }
  };

  const handleEquals = () => {
    if (!operator || waitingForSecondOperand) return;

    const secondOperand = parseFloat(display.value);
    const result = calculate(firstOperand, secondOperand, operator);
    display.value = `${result}`;
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
  };

  return {
    display,
    inputDigit,
    inputDecimal,
    toggleSign,
    inputPercent,
    clear,
    performOperation,
    handleEquals,
  };
}
