import React from 'react';
import MiddleNav from '../MiddleNav/MiddleNav';
import './Lunch.css';

const Lunch = () => {

     const Lunch =[
        
          {
               id: "0001",
               title : "Pasta salad standbys",
               subTitle : "-Salad meal -",
               description : "While some recipes are tried and true, it has become more common for offices, party planners, and other similar businesses to search for a unique twist to make their occasions stand out. While it's important to focus on dependable standbys, ",
               subDescription: "Take fresh breakfast, enjoy your Day!",
               price : "$42.77",
               img1:"https://i.ibb.co/VNwwG4X/breakfast1.png",
               img2:"https://i.ibb.co/H4NKP7Z/breakfast2.png",
               img3:"https://i.ibb.co/M6zP9f9/breakfast3.png"
          },
          {
               id: "0002",
               title : "Root vegetables, and mushrooms",
               subTitle : "-Vegetable food-",
               description : "The following recipes add a fresh variation to some old favorites and will bring your catering company’s daring and bold tastes center stage",
               subDescription: "Take fresh breakfast, enjoy your Day!",
               price : "$24.90",
               img1:"https://i.ibb.co/H4NKP7Z/breakfast2.png",
               img2:"https://i.ibb.co/VNwwG4X/breakfast1.png",
               img3:"https://i.ibb.co/182v9KQ/breakfast4.png"
          },
          {
               id: "0003",
               title : "Methi parantha with onion chutney and greens Vegs",
               subTitle : "-Taragon Rubbed Salmon-",
               description : "Salmon is a classic standby in every chef’s repertoire, but instead of a traditional presentation, mix it up! Pair creamy pasta with pan-seared salmon and spaghetti Carbonara flavors to leave a lasting impression.",
               subDescription: "Take fresh breakfast, enjoy your Day!",
               price : "$54.79",
               img1:"https://i.ibb.co/M6zP9f9/breakfast3.png",
               img2:"https://i.ibb.co/LNnCxBf/breakfast6.png",
               img3:"https://i.ibb.co/nDMzzHJ/breakfast5.png"
          },
          {
               id: "0004",
               title : "Rice  sambhar and curd slight crunch",
               subTitle : "-Margarita nachos-",
               description : "Nothing can quite compare to a warm bowl of mom’s chicken noodle soup, but Thai coconut chicken soup stands out from the rest. ",
               subDescription: "Take fresh breakfast, enjoy your Day!",
               price : "$22.06",
               img1:"https://i.ibb.co/182v9KQ/breakfast4.png",
               img2:"https://i.ibb.co/M6zP9f9/breakfast3.png",
               img3:"https://i.ibb.co/H4NKP7Z/breakfast2.png"
          },
          {
               id: "0005",
               title : "Peas pulao with carrot raita",
               subTitle : "-Beef Steak-",
               description : "Mashed potatoes are a notorious staple side dish, but when you combine red potatoes with spicy chipotles, fresh scallions, and zesty adobo in chipotle mashed potatoes,",
               subDescription: "Take fresh breakfast, enjoy your Day!",
               price : "$19.56",
               img1:"https://i.ibb.co/nDMzzHJ/breakfast5.png",
               img2:"https://i.ibb.co/H4NKP7Z/breakfast2.png",
               img3:"https://i.ibb.co/VNwwG4X/breakfast1.png"
          },
          {
               id: "0006",
               title : " A less harsh taste than bitterness.",
               subTitle : "-Honey Soy Glazed Salmon with Peppers",
               description : "With Honey Soy Glazed, everyone will be happy! The bright sweet potato and subtle cauliflower flavors combine into a dish that is second to none",
               subDescription: "Take fresh breakfast, enjoy your Day!",
               price : "$15.66",
               img1:"https://i.ibb.co/LNnCxBf/breakfast6.png",
               img2:"https://i.ibb.co/H4NKP7Z/breakfast2.png",
               img3:"https://i.ibb.co/182v9KQ/breakfast4.png"
          }
     ]


     return (
          <div>
            <MiddleNav/>
               <h1>This is Lunch </h1>
          </div>
     );
};

export default Lunch;