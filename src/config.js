import {BsTelephone} from "react-icons/bs";
import {SlHandbag} from "react-icons/sl";
import pepperoni from "./assets/header-images/menu-list-images/pepperoni.png";
import vegetarian from "./assets/header-images/menu-list-images/vegetarian.png";
import specialty from "./assets/header-images/menu-list-images/specialty.png";
import hamCheese from "./assets/header-images/menu-list-images/hamCheese.png";
import onion from "./assets/header-images/menu-list-images/onion.png";
import margherita from "./assets/header-images/menu-list-images/margherita.png";
const CONFIG = {
    headerConfig: [
        {
            id: 1,
            title: "HOME",
            icon: null
        },
        {
            id: 2,
            title: "MENU",
            icon: null
        },
        {
            id: 3,
            title: "BLOG",
            icon: null
        },
        {
            id: 4,
            title: "RESERVATION",
            icon: null
        },
        {
            id: 5,
            title: "PAGES",
            icon: null
        },
        {
            id: 6,
            title: "+91 123 456 789",
            icon: <BsTelephone />
        },
        {
            id: 7,
            title: "0 items - $0.00",
            icon: <SlHandbag />
        },
        {
            id: 8,
            title: "ORDER ONLINE",
            icon: null
        }
    ],
    menuConfig: {
        pizzas: [
            {
                id: 1,
                img: pepperoni,
                name: "Pepperoni",
                price: "$12.99"
            },
            {
                id: 2,
                img: vegetarian,
                name: "Pepperoni",
                price: "$12.99"
            },
            {
                id: 3,
                img: specialty,
                name: "Pepperoni",
                price: "$12.99"
            },
            {
                id: 4,
                img: hamCheese,
                name: "Pepperoni",
                price: "$12.99"
            },
            {
                id: 5,
                img: onion,
                name: "Pepperoni",
                price: "$12.99"
            },
            {
                id: 6,
                img: margherita,
                name: "Pepperoni",
                price: "$12.99"
            }
        ],
        menuListConfig: [
            {
                id: 1,
                title: "Menu list"
            },
            {
                id: 2,
                title: "Menu grid"
            },
            {
                id: 3,
                title: "Special Pizza"
            },
            {
                id: 4,
                title: "All pizza"
            },
        ]
    },
    blogListConfig: [
        {
            id: 1,
            title: "Blog Leftside"
        },
        {
            id: 2,
            title: "Blog Rightside"
        },
        {
            id: 3,
            title: "Blog Detail"
        }
    ],
    pagesListConfig: [
        {
            id: 1,
            title: "About Us"
        },
        {
            id: 2,
            title: "Contact"
        },
        {
            id: 3,
            title: "Shop Grid"
        },
        {
            id: 4,
            title: "404"
        }
    ],
    selectedDishes: [
        {
            id: 1,
            title: "M"
        },
        {
            id: 2,
            title: "Contact"
        }
    ]
}
export default CONFIG;