db.employees.insertOne(
    {
    name: 'geetha',
    email: 'geetha@gmail.com',
    department: 'IT',
    salary: 5000,
    location: [ 'FL', 'OH' ],
    date: Date()
  });
  db.employees.insertOne(
    {
    name: 'jay',
    email: 'jaya@gmail.com',
    department: 'CSE',
    salary: 6000,
    location: [ 'FL', 'OH' ],
    date: Date()
  })