const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

const coffee = "/images/coffee.jpg"
const turkish_coffee = "/images/turkish_coffee.jpg"
const latte = "/images/latte.jpg"
const latte2 = "/images/latte2.jpg"
const cookies = "/images/cookies.jpg"

const global = {
    "title": "The Coffee Coaster",
    "subtitle1": "We Love <br> Declious Coffee",
    "subtitle2": "Drink Healthy <br> Stay Healthy",
    "subtext": "With a stylish interior, warm and friendly atmosphere and a diverse and quiet public, it is the place to have a chat with friends or drink a cup of on the way to work or both. The character of the place makes it the focus of the neighborhood, the hub that binds the whole area together in a casual and intimate setting.",
    "main_img1": "images/main2.jpg",
    "main_img2": "images/main1.jpg",
    "about_img": "images/cafe2.jpg",
    "abouttext": "The little coffee shop at the corner is an excellent place to start the day, which makes it central to the neighborhood. All sorts of people living around visit it regularly to meet friends and begin their day with a cup of coffee in the circle of friends rather than alone in their kitchens. This makes it a great place and attracts the whole community to the area where they can take a break from their daily routines and inhale the aromatic drink with the magic awakening effect.",
    "about": {
        "images": [
            { "image": "/images/latte2.jpg", "caption": "Lattee" },
            { "image": "/images/burger.jpg", "caption": "Special Burger" },
            { "image": "/images/dessert2.jpg", "caption": "Cheese Cake" }
        ]
    },
    "chef": "images/chef.jpg",
    "time": [
        { "day": "MON - FRI", "hours": "9am-10pm" },
        { "day": " SATURDAY", "hours": "9pm-12pm" },
        { "day": "SUNDAY", "hours": "11am-12pm" }
    ],
    "footertext": "Best place to crash in and have some coffee."
}

const Data = [
    {
        image: coffee,
        name: "Coffee",
        price: "25₹",
        description: "Our Standard Black Coffee",
        category: "coffee"
    },
    {
        image: turkish_coffee,
        name: "Turkish Coffee",
        price: "35₹",
        description: "Our Bestseller",
        category: "coffee"
    }
    ,
    {
        image: latte,
        name: "Latte",
        price: "40₹",
        description: "A Refresher For Your Hectic Life",
        category: "coffee"
    },
    {
        image: latte2,
        name: "Hot Tea",
        price: "10₹",
        description: "Our Homemade Fresh & Aromatic Tea",
        category: "tea"
    }
    ,
    {
        image: cookies,
        name: "Chocolate Cookies",
        price: "25₹",
        description: "Home-Baked Chocolate Chip Cookies",
        category: "pastries"
    }
]


router.get('/', async (req, res, next) => {

    const data = req.context

    const itemCtr = Data
    data.coffee = itemCtr.filter(coffee => coffee.category === "coffee")
    data.tea = itemCtr.filter(lunch => lunch.category === "tea")
    data.pastries = itemCtr.filter(desert => desert.category === "pastries")

    res.render('home', data)
})


router.get('/blog', async (req, res, next) => {
    const data = req.context
    const glob = global
    console.log(glob)
    data.global = glob
    res.render('blog', data)
})


router.get('/items', async (req, res, next) => {
    const filters = req.query
    const itemCtr = controllers.item.instance()
    const item = await itemCtr.get(filters)

    res.json({ item })
})

router.get('/order', async (req, res, next) => {
    const orderData = req.body
    // const orderCtr = controllers.order.instance()
    // const order = await orderCtr.post(orderData)

    res.json(orderData)
})


module.exports = router