db.users.insertMany(
    [
        {
            name:"name1",
        },
        {
            name:"name2",
        },
    ]
);
db.posts.insertMany([
    { title:"title1",desc:"desc1",userID:ObjectId("68086e6524bd7608f5b5f8a2")},
    {title:"title2",desc:"desc2",userID:ObjectId("68086e6524bd7608f5b5f8a2")},
    {title:"title3",desc:"desc3",userID:ObjectId("68086e6524bd7608f5b5f8a3")},
]);
db.userposts.insertMany([
    {name:"name1",title:"title1",desc:"desc1"},
    {name:"name1",title:"title2",desc:"desc2"},
    {name:"name2",title:"title3",desc:"desc3"},
]);
//query to display name,title from user posts
db.userposts.find({}, {name:1, title:1, _id:0});
db.userPosts.updateMany(
    { name: "name 1" },
    {
      $set: { name: "n1" },
    }
  );
  
  db.createCollection("cust", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "email"],
      },
    },
  });
  
  db.cust.insertOne({
      name:"customer 1",
      email:"customer1@email.com",
      city:"Hyd"
  })