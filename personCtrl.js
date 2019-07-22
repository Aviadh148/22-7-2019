module.controller("personCtrl", FormCtrl)


// DI dependency injection - IOC
function PersonCtrl($scope) {
    $scope.person = new Person('')
    $scope.name = ''
    $scope.age = ''
    $scope.password = ''
    $scope.gender = ''
    $scope.vehicle = ''
    $scope.bike = false
}

function PersonFunc(name, age, password, gender, vehicle, Bike)
{
    this.name = name
    this.age = age
    this.password = password
    this.gender = gender
    this.vehicle = vehicle
    this.Bike = Bike
}

class Person {
    constructor ({name, age, password, gender, vehicle, bike}) {
        this._name = name
        this._age = age
        this._password = password
        this._gender = gender
        this._vehicle = vehicle
        this._bike = bike
        this.toString = () => {
            const {_name, _age, _password, _gender, _vehicle, _bike} = this
            console.log(`name: ${_name} age: ${_age} password: ${_password} gender: ${_gender} vehicle: ${_vehicle} bike: ${_bike}`)
        }
    }
    set name     (name)     {this._name = name}
    get name     ()         {return this._name}
    set age      (age)      {this._age = age}
    get age      ()         {return this._age}
    set password (password) {this.password = password}
    get password ()         {return this._password}
    set gender   (gender)   {this._gender = gender}
    get gender   ()         {return this._gender}
    set vehicle  (vehicle)  {this._vehicle = vehicle}
    get vehicle  ()         {return this._vehicle}
    set bike     (bike)     {this._bike = bike}
    get bike     ()         {return this._bike}
}

function getPerson(){
    let gen= "Other"
    let isGender= document.getElementsByName("gender")
    for(let g in isGender){
        if (isGender[g].checked){
            gen= isGender[g].value
        }
    }
    const per=  new Person(
    {
        "name": document.getElementById("name").value , 
        "age": document.getElementById("age").value ,
        "password": document.getElementById("password").value ,
        "gender": gen ,// document.getElementsByName("gender").checked.value ,
        "vehicle": document.getElementById("vehicle").value , 
        "bike": document.getElementById("bike").checked
    })
    per.toString()
}

// const person1 = {name : "Aviad" , age : 25 , password : "Aviad123" , gender : "Male" , vehicle : "KIA" , bike : false}
// const person2 = {name : "Tamar" , age : 26 , password : "Tamar123" , gender : "Female" , vehicle : "KIA" , bike : false}

// const per1 = new PersonFunc(person1)
// const per2 = new Person(person1)
