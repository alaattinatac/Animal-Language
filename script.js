let input = 'Hi, Human!';
let vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArr = [];


for (let i = 0; i < input.length; i++) {

    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArr.push(vowels[j])
            if (vowels[j] === "u" || vowels[j] === "e")
                resultArr.push(vowels[j])
        }
    }
}
console.log(resultArr.join('').toUpperCase())