// Insert individual car
db.cars.insertOne({model:"m1"})

// Insert multiple cars
db.cars.insertMany([
  {model:"m2"},
  {model:"m3"}
])

// Set initial price for all cars
db.cars.updateMany({},{$set:{price:20000}})

// Increment price of model "m2"
db.cars.updateOne(
  {model:"m2"},
  {$inc:{price:5000}}
)

// Add current date to all cars
db.cars.updateMany({},{$set:{date:new Date()}})

// Add variant array to model "m1"
db.cars.updateOne(
  {model:"m1"},
  {$set:{variant:["v1","v2","v2"]}}
)

// Update price with city-wise object (corrected)
db.cars.updateMany({},{$set:{price:{"Hyd":25000,"Mumbai":30000}}})

// Update or insert employee (corrected structure)
db.employees.updateOne(
  {email:"dan@gmail.com"},
  {
    $set:{
      name:"Danial",
      email:"dan@gmail.com",
      department:"HR",
      salary:5000,
      location:["FL","LA"],
      date:new Date()
    }
  },
  {upsert:true}
)

// Set variant to ["v1"] for all cars
db.cars.updateMany({},{$set:{variant:["v1"]}})

// Remove "v2" from variant array in model "m3"
db.cars.updateMany(
  {model:"m3"},
  {$pull:{variant:"v2"}}
)

// Find cars with price less than 25000
db.cars.find({price:{$lt:25000}})

// Find one car with points = 5
db.cars.findOne({points:5})

// Delete one car with points = 5
db.cars.deleteOne({points:5})

// Find all cars with model "m2"
db.cars.find({model:"m2"})

// Insert more cars
db.cars.insertOne({model:"m5"})
db.cars.insertOne({model:"m4"})
db.cars.insertOne({model:"m1"})

// Pagination examples
db.cars.find().skip(2)
db.cars.find().limit(1)
