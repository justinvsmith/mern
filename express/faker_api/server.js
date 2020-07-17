const express = require('express');
const app = express();

const faker = require('faker');

class User {
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    };
};

class Company {
    constructor(){
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        };
    };
};

app.use(express.json());

app.get('/api/users/new', (req, res) => {
    let person = new User();
    res.json(person);

});

app.get('/api/companies/new', (req, res) => {
    let company = new Company();

    res.json(company);
});

app.get('/api/user/company', (req, res) => {
    let person = new User();
    let company = new Company();

    res.json({
        person,
        company
    });
});



app.listen(8000, () => console.log('listening on 8000!'));