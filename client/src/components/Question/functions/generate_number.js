
const generate_number = ( max) => {
    var generatedNumber = Math.floor(Math.random() * Math.floor(max));

    return generatedNumber;
}

export default generate_number;