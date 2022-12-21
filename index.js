const inquirer = reqiure('./node_modules/inquirer');
const fs = require('fs');
const Employee = require('./people/employee');
const Manager = require('./people/manager');
const Intern = require('./people/intern');
const Engineer = require('./people/engineer');
const employees = [];



function addManager() { }
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
        validate(answer) {
            if(!answer) {
                return "Enter the manager's name."
            } return true
        }
    },
    {
        type: 'number',
        name: 'id',
        message: "What is the manager's ID number?",
        validate(answer) {
            if (!answer) {
                return "Enter the manager's ID number"
            } return true
        }

    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?",
          validate(answer) {
            if(!answer) {
                return "Enter the manager's email address."
            }
            return true
        }
      },
])
.then(answers => {
    const newManager = new Manager(
    answers.name,
    answers.id,
    answers.email,
    answers.officeNumber,
    )
    employees.push(newManager);
    addEmployee();
});

function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'team',
            message: 'Who would you like to add to your team?',
            choices: ['Engineer',
        'Intern',
    'Done'
],
        },
    ])
    .then(answers => {
        if (answers.team === 'Engineer') {
            addEngineer();
        } else if (answers.team === 'Intern') {
            addIntern();
        } else {
            createPage();
        }
    })
};



function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate(answer) {
                if (!answer) {
                    return "Enter the engineer's ID number."
                } return true
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            validate(answer) {
                if (!answer) {
                    return "Enter the engineer's email address."
                } return true
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub profile?",
            validate(answer) {
                if (!answer) {
                    return "Enter the engineer's GitHub profile."
                } return true
            }
        }
    ]).then(answers => {
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github,
        )
        employees.push(newEngineer);
        addEmployee();
    })
};





function addIntern() {
    inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the Interns name?',
            validate(answer) {
              if(!answer) {
                  return "Please, enter the Intern name!"
              }
              return true
          }
        },
        {
          type: 'number',
          name: 'id',
          message: 'What is the Interns id number?',
            validate(answer) {
              if(!answer) {
                  return "Please, enter the Intern employee ID number!"
              }
              return true
          }
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is the Interns email address?',
            validate(answer) {
              if(!answer) {
                  return "Please, enter the Intern email address!"
              }
              return true
          }
        },
        {
          type: 'input',
          name: 'school',
          message: 'What is the Interns School name?',
            validate(answer) {
              if(!answer) {
                  return "Please, enter the Intern School name!"
              }
              return true
          }
        },
      ])
      .then(answers => {
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school,
        )
        employees.push(newIntern);
        addEmployee();
      })
};



function createPage() {
    const htmlContent = generateIndex(employees);
    fs.writeFile('./dist/index.html', htmlContent, (err) =>
    err ? console.log(err) : console.log('Success'))
}

function generateIndex(answers) {
    const cards = [];
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].getRole() === 'Manager') {
            const card =
            `<div class="col">
            <div class="card shadow mb-5" style="width: 20rem;">
            <div class="card-body" style="background-color: bisque;">
                <h2 class ="card-title">${answers[i].name}</h2>
                <h3 class="card-text">Manager</h3>
            </div>
            <ul class="list-group" style="background-color: aquamarine;">
            <li class="list-group-item">ID:${answers[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${answers[i].email}" class="card-link">${answers[i].email}</a></li>
            <li class="list-group-item">Office Number: ${answers[i].officeNumber}</li>
        </ul>
        </div>
    </div>`

    cards.push(card);
        
        } else if (answers[i].getRole() === 'Engineer') {
            const card = `<div class="col">
            <div class="card shadow mb-5" style="width: 20rem;">
            <div class="card-body" style="background-color: bisque;">
                <h2 class ="card-title">${answers[i].name} </h2>
                <h3 class="card-text">Engineer</h3>
            </div>
            <ul class="list-group" style="background-color: aquamarine;">
            <li class="list-group-item">ID: ${answers[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${answers[i].email}" class="card-link">${answers[i].email}</a></li>
            <li class="list-group-item">Github:<a href="https://github.com/${answers[i].github}">${answers[i].github}</a></li>
        </ul>
        </div>
    </div>`

    
        }
    }
}