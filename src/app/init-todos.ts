export class Init {
    load() {
        if (localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
            console.log('No Todos Found... Creating...');
            let todos = [
                {
                    "firstName": "abc",
                    "lastName": "pqr",
                    "address": "abc@gmail.com",
                    "contact": "2323",
                    "password": "123456",
                    "id": 1,
                    "designation": "full stack developer",
                    "ToDoList": [{
                        "title": "todo 1",
                        "description": "no des",
                        "date": "2/10/2021"
                    }
                    ]
                },
                {
                    "id": 2,
                    "firstName": "Yash",
                    "lastName": "Katariya",
                    "designation": "Mean Stack Developer",
                    "contact": "123456",
                    "password": "123456",
                    "address": "yash@gmail.com",
                    "ToDoList": [{
                        "title": "todo 1",
                        "description": "no des",
                        "date": "2/10/2021"
                    }
                    ]
                },
                {
                    "id": 3,
                    "firstName": "suresh",
                    "lastName": "patel",
                    "designation": "TESTER",
                    "contact": "123456",
                    "address": "suresh@gmail.com",
                    "password": "123456",
                    "ToDoList": [{
                        "title": "todo 1",
                        "description": "no des",
                        "date": "2/10/2021"
                    }
                    ]
                }
            ];

            localStorage.setItem('todos', JSON.stringify(todos));
            return
        } else {
            console.log('Found Todos...');
        }
    }
}