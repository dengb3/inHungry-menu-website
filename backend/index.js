const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const breakfastItems = [
  {
    name: "Pancakes",
    img_url:
      "https://thumbs.dreamstime.com/b/stack-pancakes-pouring-honey-dark-background-stack-pancakes-pouring-honey-dark-background-decoration-concept-147724590.jpg",
    description:
      "A pancake (or hotcake, griddlecake, or flapjack) is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter.",
    price: 17.99,
    category: "breakfast",
  },
  {
    name: "Omelettes",
    img_url:
      "https://thumbs.dreamstime.com/b/picture-appetizing-yellow-omelette-black-background-there-space-to-put-text-street-food-image-top-view-182957722.jpg",
    description: "An omelette is a dish made of beaten eggs fried with butter or oil and commonly folded around fillings like veggies, meat, or cheese. Milk, cream, or water may be added to the beaten eggs.",
    price: 18.99,
    category: "breakfast",
  },
  {
    name: "Crepes",
    img_url:
      "https://thumbs.dreamstime.com/b/stack-crepes-powdered-sugar-dark-background-stack-crepes-powdered-sugar-dark-background-pancakes-108177802.jpg",
    description:
      "Crêpes are thin pancakes served sweet or savory, filled with cheese, fruit, veggies, meats, or spreads. They can be flambéed, like crêpes Suzette.",
    price: 17.99,
    category: "breakfast",
  },
  {
    name: "waffles",
    img_url: "https://thumbs.dreamstime.com/b/viennese-waffles-black-belgian-wafer-closeup-isolated-background-134828767.jpg",
    description: "A waffle is a dish cooked in a patterned press, made from leavened batter or dough. Variations exist based on the iron and recipe used. They're enjoyed globally, especially in Belgium with many regional types.",
    price: 18.99,
    category: "breakfast",
  },
];

const lunchItems = [
  {
    name: "BLT Sandwich",
    img_url:
      "https://c1.wallpaperflare.com/preview/194/816/940/sandwich-food-healthy-lunch.jpg",
    description:
      "A BLT is a type of sandwich, named for the initials of its primary ingredients, bacon, lettuce, and tomato. It can be made with varying recipes according to personal preference",
    price: 15.99,
    category: "lunch",
  },
  {
    name: "Chicken Fillet Salad",
    img_url: "https://static2.bigstockphoto.com/4/4/3/large1500/344895424.jpg",
    description:
      "A chicken sandwich is made with boneless chicken breast or thigh, served between bread, a bun, or roll. Variations include the chicken burger, chickwich, hot chicken, and chicken salad sandwich",
    price: 15.99,
    category: "lunch",
  },
  {
      name: "Avocado Toast",
      img_url: "https://img.freepik.com/premium-photo/avocado-toast-with-tomatoes-stone-board-isolated-black-background-breakfast-concept_543222-353.jpg",
      description:
        "Avocado toast is a type of open sandwich consisting of toast with mashed avocado, and usually salt, black pepper, and sometimes citrus juice. Ingredients added to enhance the flavor include olive oil, hummus, red pepper flakes, feta, dukkah and tomato",
      price: 14.99,
      category: "lunch",
  },
  {
    name: "Caesar Salad",
    img_url: "https://www.shutterstock.com/image-photo/black-plate-caesar-salad-on-260nw-1934000738.jpg",
    description:
      "The Caesar salad is made of romaine lettuce and croutons, dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper. Originally, it was prepared and served tableside",
    price: 15,
    category: "lunch",
  },
];
const dinnerItems = [
  {
    name: "Chicken and Rice",
    img_url:
      "https://thumbs.dreamstime.com/b/fried-chicken-sticky-rice-dish-black-background-fried-chicken-sticky-rice-dish-black-background-image-183285003.jpg",
    description:
      "Chicken and rice is a common food combination in several cultures which have both chicken and rice as staple foods",
    price: 15.99,
    category: "Dinner",
  },
  {
    name: "Turkey with vegetables",
    img_url:
      "https://img.freepik.com/premium-photo/roast-turkey-thigh-fillet-with-vegetables-black-background-top-view_89816-5755.jpg?w=2000",
    description:
      "turkey is traditionally served stuffed or with dressing (on the side), with cranberry sauce and gravy. Common complementary dishes include mashed potatoes, corn on the cob, green beans, squash, and sweet potatoes.",
    price: 17.99,
    category: "Dinner",
  },
  {
    name: "Salmon with Rice",
    img_url:
      "https://thumbs.dreamstime.com/b/preparation-breakfast-steamed-salmon-rice-black-background-as-broccoli-white-plate-141430162.jpg",
    description:
      "Salmon is a common food fish classified as an oily fish[1] with a rich content of protein and omega-3 fatty acids",
    price: 17.99,
    category: "Dinner",
  },
  {
    name: "Pork and Asparagus",
    img_url:
      "https://img.freepik.com/premium-photo/fried-pork-with-asparagus-pepper-black-ceramic-plate-dark-tone-texture-background-top-view_133982-699.jpg?w=2000",
    description:
      "Pork is the culinary name for the meat of the pig (Sus domesticus). It is the most commonly consumed meat worldwide. Perennial flowering plant species in the genus Asparagus. Its young shoots are used as a spring vegetable.",
    price: 17.99,
    category: "Dinner",
  },
];

app.use(cors());

app.get("/breakfast", (req, res) => {
  res.send(breakfastItems);
});

app.get("/lunch", (req, res) => {
  res.send(lunchItems);
});

app.get("/dinner", (req, res) => {
  res.send(dinnerItems);
});

app.get("/drinks", (req, res) => {
  res.send(drinkstItems);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
