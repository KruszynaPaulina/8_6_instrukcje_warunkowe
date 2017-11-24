var a = prompt('Enter number "a"'),
b = prompt('Enter number "b"'),
value = (a * a) - (2 * a * b) + (b * b); 

console.log('Value = ' + value);

if (value > 0) {
    console.log('Wynik jest dodatni');
    alert('Value = ' + value + ' - Wynik jest dodatni');
} else if (value < 0) {
    console.log('Wynik jest ujemny');
    alert('Value = ' + value + ' - Wynik jest ujemny');
} else if (value == 0) {
    console.log('Wynik jest równy 0');
    alert('Value = ' + value + ' - Wynik jest równy 0');
} else {
    console.log('Wynik nie jest liczbą');
    alert('Value = ' + value + ' - Wynik nie jest liczbą');
}

