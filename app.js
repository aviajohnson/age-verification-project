function ageVerification(birthDate) {
    
    let output = document.getElementById('output');
    let result = 'Of Age';
    var today = new Date();
    var year = today.getFullYear();
    var birthYear = birthday.getFullYear();
    if (year - birthYear < 18) {
        result = 'Not Old Enough';
    }
   output.innerText = result;
}

const birthday = new Date('December 10, 1995');
console.log(birthday);

ageVerification(birthday);