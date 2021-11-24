const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deletemany();
  const categories = await Category.create([
        {
            name: "Taco",
        },
        {
            name: "Burger"
        },
        {
            name: "Pizza"
        },
        {
            name:"Pho"
        },
        {
            name:"Sushi"
        }
    ]);

  console.log("categories seeded");

  await Product.deletemany();
  const products = await Product.create([
    {
        name: "Tacos & Mountain Dew",
        description: "Two tacos and a delicious mountain dew!",
        image: "",
        alt: "",
        category: categories[0]._id,
        price: 10.0,
        quantity: 1,
        includedFood: 2,
    },
    {
        name: "Pizza & Gatorade",
        description: "Two slices of pizza and a gatorade!",
        image: "",
        alt: "",
        category: categories[0]._id,
        price: 15.0,
        quantity: 1,
        includedFood: 2,
    },
    {
        name: "Burger & Coke Zero",
        description: "One juicy burger and a HEALTHY coke zero to go along with it!",
        image: "",
        alt: "",
        category: categories[0]._id,
        price: 11.0,
        quantity: 1,
        includedFood: 2,
    },
    {
        name: "Pho & La Criox",
        description: "Pho and a La Croix to go with it!",
        image: "",
        alt: "",
        category: categories[0]._id,
        price: 12.0,
        quantity: 1,
        includedFood: 1,
    },
    {
        name: "Sushi & Dr. Pepper",
        description: "Some sushi with a side of dr. pepper to wash it down!",
        image: "",
        alt: "",
        category: categories[0]._id,
        price: 13.0,
        quantity: 1,
        includedFood: 1,
    },
  ]);

  console.log("products seeded");

  await User.deletemany();

  const users = await User.create([
    {
        firstName: "David",
        lastName: "Crane",
        email: "david@email.com",
        password: "password",
        orders: [{
            products: [products[5]._id, products[3]._id, products[1]._id]
        }]
    },
    
  
    ]);

  console.log("users seeded");

  process.exit();
});
