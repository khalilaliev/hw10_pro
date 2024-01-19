const calculateSecond = () => {
    let numberOfHours = parseFloat(prompt('Enter any number:'));
    if(!isNaN(numberOfHours)){
        let calculateSecondsToOneHour = numberOfHours * 3600;
        alert(`You wrote ${numberOfHours} hours, that equal to ${calculateSecondsToOneHour} seconds!`);
    } else {
        alert('Enter a number!')
    }
}
calculateSecond();
