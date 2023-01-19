let firstname = document.getElementById('firstname')
let lastnamee = document.getElementById('lastnamee')
let emaill = document.getElementById('emaill')
let numberr = document.getElementById('numberr')
let city = document.getElementById('city')
let birthdate = document.getElementById('birth_date')
let sex = document.getElementById('sex')
let education = document.getElementById('education')
let personalinfo = document.getElementById('personal_info')
let statuss = document.getElementById('status')


function getinformation () {

    let sectiontwo = document.getElementById('section_two')
    let description = document.getElementById('description')
    let namee = document.getElementById('name').value
    let lastname = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let number = document.getElementById('number').value
    let dropdown = document.getElementById('dropdown').value
    let birthdateform = document.getElementById("Birth_Date").value
    let man = document.getElementById('man')
    let woman = document.getElementById('woman')
    let graduated = document.getElementById('graduated')
    let myinfo = document.getElementById('my_info').value

   console.log(myinfo.length)

   if(namee.length > 0 && lastname.length > 0 && email.length > 0 && number.length > 0 && (man.checked || woman.checked)) {
    sectiontwo.style.display = 'block'

description.innerText = "good luck!"
description.style.color = 'black'
firstname.innerText = "First name: " + namee
lastnamee.innerText = "Last name: " + lastname
emaill.innerText = "E-mail: " + email
numberr.innerText = "phone numeber: " + number
city.innerText = "City: " + dropdown
birthdate.innerText = "Birth date: " + birthdateform
if(man.checked){
    sex.innerText = "Sex: " + 'male'
} else {
    sex.innerText = "Sex: " + 'female'
}

if(graduated.checked){
    education.innerText = "Education: " + 'graduated from university'
} else {
    education.style.display = 'none' 
}

if(myinfo.length > 0){
    personalinfo.innerText = "About me:  " + myinfo
    personalinfo.style.display = 'block' 
} else {
    personalinfo.style.display = 'none' 
}

statuss.innerText = "Status: " + 'Active'
} else {
    description.innerText = "Please fill form with your information"
    description.style.color = 'red'
}

} 
