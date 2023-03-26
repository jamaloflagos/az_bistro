import pepperedBeef from '../src/images/pepperedBeef.jpg'
import pepperedChicken from '../src/images/pepperedChicken.jpg'
import coleslaw from '../src/images/coleslaw.jpg'
import vegetableSalad from '../src/images/vegetableSalad.jpg'
import chickenSalad from '../src/images/chickenSalad.jpg'
import spaghettiJollof from '../src/images/spaghettiJollof.jpg'
import spaghettiSingapore from '../src/images/spaghettiSingapore.jpg'
import stirFryChicken from '../src/images/stirFryChicken.jpg'
import noodlesWithOmelete from '../src/images/noodlesWithOmelete.jpg'
import noodlesEgg from '../src/images/noodlesEgg.jpg'
import catfishBbq from '../src/images/catfishBbq.jpg'
import croakerBbq from '../src/images/croakerBbq.jpg'
import chickenBbq from '../src/images/chickenBbq.jpg'
import chickenSandwich from '../src/images/chickenSandwich.jpg'
import beefSandwich from '../src/images/beefSandwich.jpg'
import vegetableSandwich from '../src/images/vegetableSandwich.jpg'
import clubSandwich from '../src/images/clubSandwich.jpg'
import beefBurger from '../src/images/beefBurger.jpg'
import chickenBurger from '../src/images/chickenBurger.jpg'
import doubleBeef from '../src/images/doubleBeef.jpg'
import doubleChicken from '../src/images/doubleChicken.jpg'
import catfishPepper from '../src/images/catfishPepper.jpg'
import chickenPepper from '../src/images/chickenPepper.jpg'
import goatmeatPepper from '../src/images/goatmeatPepper.jpg'
import pizzaCheese from '../src/images/pizzaCheese.jpg'
import pizzaMagarita from '../src/images/pizzaMagarita.jpg'
import pizzaPepperoni from '../src/images/pizzaPepperoni.jpg'
import chickenPizza from '../src/images/chickenPizza.jpg'
import pizzaMeaty from '../src/images/pizzaMeaty.jpg'
import pizzaMexican from '../src/images/pizzaCheese.jpg'

const menu = [
   {
        starter : [
            {
                id: 0,
                foodName: 'Peppered Beef',
                foodImg: pepperedBeef,
                foodPrice: 'N1200',
                readyTime: '30 min',
                
            },
            {
                id: 1,
                foodName: 'Peppered Chicken',
                foodImg: pepperedChicken,
                foodPrice: 'N1500',
                readyTime: '30 min',
            }
        ]
    },
    {
       salad: [
        {
            id: '01',
            foodName: 'Coleslaw',
            foodImg: coleslaw,
            foodPrice: 'N250',
            readyTime: '',
            },
        {
            id: '02',
            foodName: 'Vegetable Salad',
            foodImg: vegetableSalad,
            foodPrice: 'N1000',
            readyTime: '',
            },
        {
            id: '03',
            foodName: 'Chicken Salad',
            foodImg: chickenSalad,
            foodPrice: 'N1500',
            readyTime: '',
        }
       ]
        
    },
    {
        pasta: [
            {
                id: '01',
                foodName: 'Spaghetti Jollof',
                foodImg: spaghettiJollof,
                foodPrice: 'N400',
                readyTime: '',
            },
            {
                id: '02',
                foodName: 'Spaghetti Singapore',
                foodImg: spaghettiSingapore,
                foodPrice: 'N2500',
                readyTime: '',
            },
            {
                id: '03',
                foodName: 'Stir fry Chicken Noodles',
                foodImg: stirFryChicken,
                foodPrice: 'N1500',
                readyTime: '',
            },
            {
                id: '04',
                foodName: 'Stir fry Beef Noodles',
                foodImg: stirFryChicken,
                foodPrice: 'N1500',
                readyTime: '',
            },
            {
                id: '05',
                foodName: 'Noodles with omalette',
                foodImg: noodlesWithOmelete,
                foodPrice: 'N1000',
                readyTime: '',
            },
            {
                id: '06',
                foodName: 'Noodle and 2 boiled eggs',
                foodImg: noodlesEgg,
                foodPrice: 'N800',
                readyTime: '',
            }
        ]
    },
    {
        barbeque: [
            {
                id: '01',
                foodName: 'Catfish Barbeque',
                foodImg: catfishBbq,
                foodPrice: ' N4000',
                readyTime: '',
            },
            {
                id: '02',
                foodName: 'Croaker Barbeque',
                foodImg: croakerBbq,
                foodPrice: 'N4000',
                readyTime: '',
            },
            {
                id: '03',
                foodName: 'Full chicken Barbeque',
                foodImg: chickenBbq,
                foodPrice: 'N5000',
                readyTime: '',
            }
        ]
    },
    {
        sandwich: [
            {
                id: '01',
                foodName: 'Chicken Sandwich',
                foodImg: chickenSandwich,
                foodPrice: 'N2000',
                readyTime: '',
            },
            {
                id: '02',
                foodName: 'Beef Sandwich',
                foodImg: beefSandwich,
                foodPrice: 'N2000',
                readyTime: '',
            },
            {
                id: '03',
                foodName: 'Vegetable Sandwich',
                foodImg: vegetableSandwich,
                foodPrice: 'N1000',
                readyTime: '',
            },
            {
                id: '04',
                foodName: 'Club Sandwich',
                foodImg: clubSandwich,
                foodPrice: 'N1500',
                readyTime: '',
            }
        ]
    },
    {
        burger: [
            {
                id: '01',
                foodName: 'Beef Burger',
                foodImg: beefBurger,
                foodPrice: 'N2000',
                readyTime: '',
            },
            {
                id: '02',
                foodName: 'Chicken Burger',
                foodImg: chickenBurger,
                foodPrice: 'N2000',
                readyTime: '',
            },
            {
                id: '03',
                foodName: 'Double decker Beef Burger',
                foodImg: doubleBeef,
                foodPrice: 'N3000',
                readyTime: '',
            },
            {
                id: '04',
                foodName: 'Double decker Chicken Burger',
                foodImg: doubleChicken,
                foodPrice: 'N3000',
                readyTime: '',
            }
        ]
    },
    {
        pepperSoup: [
            {
                id: '01',
                foodName: 'Catfish Peppersoup',
                foodImg: catfishPepper,
                foodPrice: 'N1500',
                readyTime: '',
            },
            {
                id: '02',
                foodName: 'Chicken Peppersoup',
                foodImg: chickenPepper,
                foodPrice: 'N1000',
                readyTime: '',
            },
            {
                id: '03',
                foodName: 'Goatmeat Peppersoup',
                foodImg: goatmeatPepper,
                foodPrice: 'N1000',
                readyTime: '',
            }
        ]
    },
    {
        pizza: [
            {
                id: '01',
                foodName: 'Pizza Cheese',
                foodImg: pizzaCheese,
                foodPrice: 'Medium: N2500 Large: N3000',
                readyTime: '',
            },
           
            {
                id: '02',
                foodName: 'Pizza Margarita',
                foodImg: pizzaMagarita,
                foodPrice: 'Medium: N2500 Large: N3500',
                readyTime: '',
            },
           
            {
                id: '03',
                foodName: 'Pizza Pepperoni',
                foodImg: pizzaPepperoni,
                foodPrice: 'Medium: N3500 Large: N4000',
                readyTime: '',
            },
            
            {
                id: '04',
                foodName: 'Chicken Pizza',
                foodImg: chickenPizza,
                foodPrice: 'Medium: N4000 Large: N5000',
                readyTime: '',
            },
                      
            {
                id: '05',
                foodName: 'Pizza Meaty',
                foodImg: pizzaMeaty,
                foodPrice: 'Medium: N4500 Large: N5500',
                readyTime: '',
            },
            
            {
                id: '06',
                foodName: 'Pizza Mexican',
                foodImg: pizzaMexican,
                foodPrice: 'Medium: N4000 Large: N5000',
                readyTime: '',
            }
        ]
    }
]

export default menu
