const operate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return Number(num1) + Number(num2);
    case 'x':
      return Number(num1) * Number(num2);
    case '-':
      return Number(num1) - Number(num2);
    case '÷':
      try {
        return Number(num1) / Number(num2);
      } catch (error) {
        return undefined;
      }
    default:
      return 0;
  }
};
export default operate;
