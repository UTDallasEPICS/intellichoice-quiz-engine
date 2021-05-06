
import generate_number from './generate_number'

const addition_function = ({num1, num2}) => {

    return [num1, num2, num1 + num2];
}

const subtraction_function = ({num1, num2, max1, max2}) => {
    
    while (num1 < num2) {
        num1 = generate_number(max1);
        num2 = generate_number(max2);
    }

    return [num1, num2, num1 - num2];
}

const multiplication_function = ({num1, num2}) => {

    return [num1, num2, num1 * num2];
}

const division_function = ({num1, num2, max1, max2}) => {

    while (num1 % num2 !== 0 || num2 === 1 || num1 === 0) {
        num1 = generate_number(max1);
        num2 = generate_number(max2);
    }
    
    return [num1, num2, num1 / num2];
}

const answer_function = ({max1, max2, symbol}) => {
    
    var num1 = generate_number(max1);
    var num2 = generate_number(max2);

    if (symbol === '+')
        return addition_function({num1, num2});
    else if (symbol === '-')
        return subtraction_function({num1, num2, max1, max2});
    else if (symbol === '*')
        return multiplication_function({num1, num2});
    else if (symbol === '/' || symbol === '÷')
        return division_function({num1, num2, max1, max2});
}

export default answer_function;