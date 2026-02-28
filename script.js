const recipes = [
{
name:"Masala Dosa",
image:"images/dosa.png",
baseServe:2,
nutrition:{cal:320,protein:"9g",carbs:"56g",fat:"7g",fiber:"6g"},
ingredients:[
{item:"Rice",qty:1,unit:"cup"},
{item:"Urad Dal",qty:0.5,unit:"cup"},
{item:"Potato",qty:2,unit:"nos"},
{item:"Onion",qty:1,unit:"nos"}
],
steps:[
"Wash rice and dal thoroughly to remove excess surface starch that may inhibit fermentation.",
"Soak separately for 6 hours. Hydration activates enzymes that convert starch into fermentable sugars.",
"Grind to smooth batter. Aeration traps air bubbles for softness.",
"Ferment overnight at 30°C. Lactic acid bacteria produce CO₂ making batter fluffy and digestible.",
"Chop onions finely — smaller cuts increase surface area, enhancing caramelization.",
"Boil potatoes, mash gently. Starch gelatinization creates creamy texture.",
"Heat pan to 190°C. Pour thin layer of batter. Rapid heat gelatinizes starch producing crisp texture.",
"Flip once golden brown. Fill potato masala and fold. Serve immediately for optimal crispness."
]
},

{
name:"Paneer Butter Masala",
image:"images/panner.png",
baseServe:2,
nutrition:{cal:420,protein:"18g",carbs:"22g",fat:"28g",fiber:"5g"},
ingredients:[
{item:"Paneer",qty:200,unit:"g"},
{item:"Tomato",qty:3,unit:"nos"},
{item:"Butter",qty:2,unit:"tbsp"},
{item:"Cream",qty:3,unit:"tbsp"}
],
steps:[
"Chop tomatoes roughly. Larger cuts reduce oxidation and preserve sweetness.",
"Heat butter slowly. Fat dissolves spice aromatics for rich flavor release.",
"Puree tomatoes and cook till oil separates — evaporation concentrates sugars.",
"Add spices and cream — dairy fats bind volatile aroma molecules enhancing mouthfeel.",
"Cube paneer gently — prevents protein breakage.",
"Simmer 5 mins allowing protein absorption of gravy flavors."
]
},

{
name:"Chicken Biryani",
image:"images/chicken.png",
baseServe:2,
nutrition:{cal:550,protein:"32g",carbs:"58g",fat:"22g",fiber:"6g"},
ingredients:[
{item:"Chicken",qty:300,unit:"g"},
{item:"Rice",qty:1,unit:"cup"},
{item:"Yogurt",qty:0.5,unit:"cup"}
],
steps:[
"Cut chicken into medium cubes — ensures even heat penetration.",
"Marinate in yogurt & spices. Lactic acid breaks collagen fibers tenderizing meat.",
"Wash rice gently to remove surface starch preventing stickiness.",
"Parboil rice till 70% cooked — partial gelatinization keeps grains separate.",
"Layer rice & chicken. Seal pot. Trapped steam circulates aroma compounds.",
"Slow cook 25 min — gentle heat prevents moisture loss and protein tightening."
]
},

{
name:"Vegetable Stir Fry",
image:"images/stir.png",
baseServe:2,
nutrition:{cal:240,protein:"7g",carbs:"30g",fat:"10g",fiber:"9g"},
ingredients:[
{item:"Mixed Vegetables",qty:2,unit:"cups"},
{item:"Oil",qty:1,unit:"tbsp"},
{item:"Garlic",qty:1,unit:"tbsp"}
],
steps:[
"Julienne vegetables into thin strips — increases surface area for fast cooking.",
"Heat oil until shimmering — ensures immediate searing.",
"Add garlic — sulfur compounds convert to aromatic allicin.",
"Add vegetables and toss rapidly. High heat preserves vitamins and chlorophyll.",
"Cook 4 minutes. Crunchy texture retains fiber and micronutrients."
]
},

{
name:"Vegetable Khichdi",
image:"images/kichdi.png",
baseServe:2,
nutrition:{cal:350,protein:"12g",carbs:"50g",fat:"9g",fiber:"7g"},
ingredients:[
{item:"Rice",qty:0.5,unit:"cup"},
{item:"Moong Dal",qty:0.5,unit:"cup"},
{item:"Vegetables",qty:1,unit:"cup"}
],
steps:[
"Wash rice & dal. Removes phytic acid improving mineral absorption.",
"Soak 20 minutes for faster starch hydration.",
"Pressure cook — high pressure raises boiling point accelerating starch gelatinization.",
"Final dish becomes easily digestible ideal for gut health."
]
},

{
name:"Idli",
image:"images/idli.png",
baseServe:2,
nutrition:{cal:280,protein:"8g",carbs:"52g",fat:"2g",fiber:"5g"},
ingredients:[
{item:"Rice",qty:1,unit:"cup"},
{item:"Urad Dal",qty:0.5,unit:"cup"}
],
steps:[
"Soak grains 6 hours — hydration activates fermenting microbes.",
"Grind and ferment overnight. CO₂ forms sponge structure.",
"Steam 12 minutes — moist heat coagulates proteins softly."
]
},

{
name:"Vegetable Soup",
image:"images/soup.png",
baseServe:2,
nutrition:{cal:180,protein:"6g",carbs:"25g",fat:"5g",fiber:"7g"},
ingredients:[
{item:"Vegetables",qty:2,unit:"cups"},
{item:"Water",qty:2,unit:"cups"}
],
steps:[
"Chop vegetables uniformly — ensures even heat transfer.",
"Simmer slowly — avoids nutrient destruction.",
"Slow cooking extracts soluble vitamins into broth."
]
},

{
name:"Egg Omelette",
image:"images/egg.png",
baseServe:2,
nutrition:{cal:290,protein:"20g",carbs:"3g",fat:"22g",fiber:"1g"},
ingredients:[
{item:"Eggs",qty:4,unit:"nos"},
{item:"Onion",qty:1,unit:"nos"},
{item:"Oil",qty:1,unit:"tbsp"}
],
steps:[
"Beat eggs — unfolds proteins allowing network formation.",
"Saute onions — caramelization releases sweetness.",
"Cook eggs gently — slow denaturation yields soft curds."
]
},

{
name:"Aloo Fry",
image:"images/alofry.png",
baseServe:2,
nutrition:{cal:340,protein:"6g",carbs:"48g",fat:"14g",fiber:"6g"},
ingredients:[
{item:"Potato",qty:3,unit:"nos"},
{item:"Oil",qty:1.5,unit:"tbsp"}
],
steps:[
"Slice potatoes thin — increases crisp surface area.",
"Parboil 5 min — partial gelatinization ensures soft inside.",
"Pan fry — Maillard browning forms crispy crust."
]
},

{
name:"Vegetable Pulao",
image:"images/pulav.png",
baseServe:2,
nutrition:{cal:390,protein:"9g",carbs:"60g",fat:"12g",fiber:"6g"},
ingredients:[
{item:"Rice",qty:1,unit:"cup"},
{item:"Vegetables",qty:1,unit:"cup"}
],
steps:[
"Wash rice till water runs clear — removes surface starch.",
"Saute spices — releases essential oils.",
"Cook rice absorption method — ensures fluffy grains."
]
},
];

const container=document.getElementById("recipeContainer");
const search=document.getElementById("search");

function displayRecipes(data){
container.innerHTML="";
data.forEach(r=>{
const card=document.createElement("div");
card.className="recipe-card";
card.innerHTML=`
<img src="${r.image}">
<h2>${r.name}</h2>
<button onclick='openRecipe(${JSON.stringify(r)})'>View Recipe</button>
`;
container.appendChild(card);
});
}

function openRecipe(r){
let p=parseInt(prompt("For how many people?",r.baseServe));
let ing=r.ingredients.map(i=>`${i.item}: ${(i.qty*p/r.baseServe).toFixed(2)} ${i.unit}`).join("\n");
let nut=`Calories: ${r.nutrition.cal*p/r.baseServe} kcal\nProtein: ${r.nutrition.protein}\nCarbs: ${r.nutrition.carbs}\nFat: ${r.nutrition.fat}\nFiber: ${r.nutrition.fiber}`;
alert(`${r.name}\n\nNUTRITION:\n${nut}\n\nINGREDIENTS:\n${ing}\n\nCOOKING SCIENCE:\n${r.steps.join("\n\n")}`);
}

search.addEventListener("input",e=>{
const v=e.target.value.toLowerCase();
displayRecipes(recipes.filter(r=>r.name.toLowerCase().includes(v)));
});

displayRecipes(recipes);