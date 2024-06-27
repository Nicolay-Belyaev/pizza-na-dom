export const usePizzaStore = defineStore('pizzaStore', () => {
    const pizzaCards = ref<IPizza[]>([
        {
            id: "1",
            name: "Манго",
            description: "Томатный соус, моцарелла, творожный сыр, пюре манго, руккола.",
            image: "https://static.tildacdn.com/stor3137-3066-4533-b638-666639636363/11848312.jpg",
            sizes: ['25', '30', '35'],
            prices: ['400', '500', '600'],
            toppings: ['1', '2', '3'],
            sauces: ['1', '2', '3']
        },
        {
            id: "2",
            name: "Терияки пицца",
            description: "Classic American pizza with tomato sauce, mozzarella cheese, and pepperoni",
            image: "https://static.tildacdn.com/stor3137-3066-4533-b638-666639636363/11848312.jpg",
            sizes: ['25', '30', '35'],
            prices: ['400', '500', '600'],
            toppings: ['1', '2', '3'],
            sauces: ['1', '2', '3']
        },
        {
            id: "3",
            name: "Сальса",
            description: "Pizza loaded with fresh veggies like bell peppers, mushrooms, onions, and olives",
            image: "https://optim.tildacdn.com/stor3365-3731-4962-b936-383262666637/-/format/webp/74219337.jpg",
            sizes: ['25', '30', '35'],
            prices: ['400', '500', '600'],
            toppings: ['1', '2', '3'],
            sauces: ['1', '2', '3']
        },
        {
            id: "4",
            name: "XXXX-самая острая пицца в городе",
            description: "Pizza loaded with fresh veggies like bell peppers, mushrooms, onions, and olives",
            image: "https://optim.tildacdn.com/stor3137-3066-4533-b638-666639636363/-/resize/312x/-/format/webp/11848312.jpg",
            sizes: ['25', '30', '35'],
            prices: ['400', '500', '600'],
            toppings: ['1', '2', '3'],
            sauces: ['1', '2', '3']
        },
        {
            id: "5",
            name: "Макс Пейн",
            description: "Pizza loaded with fresh veggies like bell peppers, mushrooms, onions, and olives",
            image: "https://optim.tildacdn.com/tild3166-6665-4265-b338-336133376130/-/format/webp/photo.jpg",
            sizes: ['25', '30', '35'],
            prices: ['400', '500', '600'],
            toppings: ['1', '2', '3'],
            sauces: ['1', '2', '3']
        },
        {
            id: "6",
            name: "Пепперони",
            description: "Pizza loaded with fresh veggies like bell peppers, mushrooms, onions, and olives",
            image: "https://optim.tildacdn.com/tild3561-6630-4162-b362-613865343931/-/format/webp/_.jpg",
            sizes: ['25', '30', '35'],
            prices: ['400', '500', '600'],
            toppings: ['1', '2', '3'],
            sauces: ['1', '2', '3']
        }
    ]);

    const getPizzaById = (id: String) => {
        return pizzaCards.value.find(({id: string}) => id === id);
    };
    return { pizzaCards, getPizzaById };
});
