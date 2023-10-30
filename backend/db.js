// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/foodapp")
//   .then(() => {
//     console.log("Connection successful...");

//     // const user_data = mongoose.Connection.db.collection('users')

//     const fetched_data = mongoose.connection.db.collection("food_items");
//     fetched_data
//       .find({})
//       .toArray()
//       .then((data) => {
//         global.food_items = data;
//         // console.log(global.food_items);

//         const foodCategory = mongoose.connection.db.collection("foodCategory");
//         return foodCategory.find({}).toArray();
//       })
//       .then((catData) => {
//         global.food_categories = catData;
//         // console.log(global.food_categories);

//         // You can do additional processing or operations here

//         // Don't forget to close the database connection when you're done
// mongoose.connection.close(); // we are facing problem because of this line, it close the connection with database.
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   })
//   .catch((e) => {
//     console.error(e);
//   });
// ************************************************************************************************
// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/foodapp")
//   .then(() => {
//     console.log("connection successful...");
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// **************************************************************************************************
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/foodapp")
  .then(() => {
    console.log("Connection successful...");

    const fetched_data = mongoose.connection.db.collection("food_items");
    fetched_data
      .find({})
      .toArray()
      .then((data) => {
        global.food_items = data;
        // console.log(global.food_items);

        const foodCategory = mongoose.connection.db.collection("foodCategory");
        return foodCategory.find({}).toArray();
      })
      .then((catData) => {
        global.food_categories = catData;
        // console.log(global.food_categories);

        // You can do additional processing or operations here
      })
      .catch((err) => {
        console.error(err);
      });
  })
  .catch((e) => {
    console.error(e);
  });
