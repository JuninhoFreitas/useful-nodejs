
// Mask 1 = (99) 9 9999-9999
function maskPhoneNumber(number){

    const formatPhone = String(number).replace(/\D/g, '').replace(/(\d{2})(\d)(\d{4})(\d{4})$/, '($1) $2 $3-$4')
    return formatPhone;
}

// Mask 2 = (99) 99999-9999
function maskPhoneNumber2(number){
    number = String(number)
    number=number.replace(/\D/g,"");            
    number=number.replace(/^(\d{2})(\d)/g,"($1) $2");
    number=number.replace(/(\d)(\d{4})$/,"$1-$2");
    return number;
}

console.log(maskPhoneNumber(51999354299));
console.log(maskPhoneNumber2(51999354299));