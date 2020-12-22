const screen = document.getElementById('screen')
const grayBtn = document.querySelectorAll('.btn-secondary')
const warningBtn = document.querySelectorAll('.btn-warning')
const equalBtn = document.getElementById('equalbtn');
const clearBtn = document.getElementById('clearbtn');

// console.log(grayBtn)

const displayValue = (e) => {
    // Add another function if the value has a digit after a non word char
    screen.value += e.value;
}
const clearScr = () => {
    screen.value = '';
}
const evaluation = () => {
    let val = screen.value.replace(/\s/g, '');
    let newArr = val.split('')
    let digits = []
   calc_Mult(newArr,digits)
    // console.log(index)
    console.log(digits)

    screen.value = eval(screen.value).toFixed(2)
}


const calc_Mult = (arr,digArr) => {
    let index = arr.indexOf('*')
    let index0 = index - 1;
    let index1 = index + 1
        for (let i = 0; i < arr.length; i++) {
            if (arr.includes('*')) {
               return digArr.push(arr[index0], arr[index], arr[index1])
                break;
            }
        }}
        const calc_Div = (arr,digArr) => {

        }
        const calc_Sub = (arr,digArr) => {

        }
        const calc_Add = (arr,digArr) => {

        }