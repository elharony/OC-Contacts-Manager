/* Contact Manager*/
let contacts = [
    {
        firstName: 'John',
        lastName: 'Smith'
    },
    {
        firstName: 'Jane',
        lastName: 'Doe'
    }
]


function init() {
    // Say Hi!
    welcomeMessage()
    // User Options
    userOptions()
}

function welcomeMessage() {
    console.log('Welcome to your contacts manager!')
}

function showAll(contacts) {
    for(let i = 0; i < contacts.length; i++) {
        console.log(`Last name: ${contacts[i].lastName}, first name: ${contacts[i].firstName}`)
    }
}

function addContact() {
    // Get user input data
    const firstName = prompt("What's the first name?")
    const lastName = prompt("What's the last name?")
    // Add new object to the Array
    const newContact = {
        firstName: firstName,
        lastName: lastName
    }
    contacts.push(newContact)
    // Give feedback to the user
    console.log("Contact added!")
}

function quit() {
    if(confirm('You are going to stop the "Contact Manager" App\nAre you sure?')) {
        console.log('App stopped successfully!')
    } else {
        this.userOptions()
    }
}

function userOptions() {
    console.log('Select an option:\n1: List All Contacts \n2: Add Contact\n0: Quit')
    
    let userInput
    do {
        userInput = prompt("Select an option:")
    } while(!userInput)
    

    switch(userInput) {
        case '0':
            quit()
        break;
        case '1':
            showAll(contacts)
            this.userOptions()
        break;
        case '2':
            addContact()
            this.userOptions()
        break;
    }
}

init()
