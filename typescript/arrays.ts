interface Iusers {
    name: string,
    age: number,
    isAdmin: boolean,
}


const user: Iusers[] = [
    {name: "jerry", age: 13, isAdmin: true},
    {name: "chris", age: 13, isAdmin: false},
    {name: "samuel", age: 13, isAdmin: false},
    {name: "david", age: 13, isAdmin: false},
    {name: "musa", age: 13, isAdmin: true},
    {name: "jacob", age: 13, isAdmin: true}
    
    ];

    console.log(user[0]);