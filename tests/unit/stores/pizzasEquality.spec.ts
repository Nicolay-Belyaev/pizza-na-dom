import {expect, it, describe, beforeEach} from "vitest";
import {createPinia, setActivePinia} from "pinia";
import {useCartStore} from "~/app/stores/cartStore";

describe('cartStore', ()=> {
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    it('toppingsEqualityTest', () => {
        const cartStore = useCartStore();
        const toppingsEq= cartStore.toppingsEquality;
        expect(toppingsEq(['mozzarella', 'tomatoes', 'chilli'], ['chilli', 'tomatoes', 'mozzarella'])).toBe(true)
        expect(toppingsEq(['mozzarella', 'tomatoes', 'chilli'], ['tomatoes', 'mozzarella'])).toBe(false)
        expect(toppingsEq(['mozzarella', 'tomatoes', 'chilli'], ['pepper','tomatoes', 'mozzarella'])).toBe(false)
    })
    it('pizzaEqualityTest', () => {
        const cartStore = useCartStore();
        const pizzasToCartEq= cartStore.pizzasToCartEquality;
        const pizza1: IPizzaToCart = {
            id: 'margherita-001',
            name: 'Margherita',
            description: 'Classic Margherita with tomato sauce, mozzarella, and fresh basil.',
            image: 'margherita.jpg',
            sizes: [
                {title: 'Small', value: 'small'},
                {title: 'Medium', value: 'medium'},
                {title: 'Large', value: 'large'}
            ],
            prices: [5, 7, 9],
            toppings: ['Basil', 'Mozzarella', 'Tomatoes'],
            selectedSize: 'medium',
            selectedToppings: ['Basil'],
            finalPrice: 7,
            amountInCart: 1
        }
        const pizza1withDifferentAmountInCart: IPizzaToCart = {
            id: 'margherita-001',
            name: 'Margherita',
            description: 'Classic Margherita with tomato sauce, mozzarella, and fresh basil.',
            image: 'margherita.jpg',
            sizes: [
                {title: 'Small', value: 'small'},
                {title: 'Medium', value: 'medium'},
                {title: 'Large', value: 'large'}
            ],
            prices: [5, 7, 9],
            toppings: ['Basil', 'Mozzarella', 'Tomatoes'],
            selectedSize: 'medium',
            selectedToppings: ['Basil'],
            finalPrice: 7,
            amountInCart: 3
        }

        const pizza1withDifferentSelectedSize: IPizzaToCart = {
            id: 'margherita-001',
            name: 'Margherita',
            description: 'Classic Margherita with tomato sauce, mozzarella, and fresh basil.',
            image: 'margherita.jpg',
            sizes: [
                {title: 'Small', value: 'small'},
                {title: 'Medium', value: 'medium'},
                {title: 'Large', value: 'large'}
            ],
            prices: [5, 7, 9],
            toppings: ['Basil', 'Mozzarella', 'Tomatoes'],
            selectedSize: 'large',
            selectedToppings: ['Basil'],
            finalPrice: 7,
            amountInCart: 1
        }
        const pizza1withDifferentFinalPrice: IPizzaToCart = {
            id: 'margherita-001',
            name: 'Margherita',
            description: 'Classic Margherita with tomato sauce, mozzarella, and fresh basil.',
            image: 'margherita.jpg',
            sizes: [
                {title: 'Small', value: 'small'},
                {title: 'Medium', value: 'medium'},
                {title: 'Large', value: 'large'}
            ],
            prices: [5, 7, 9],
            toppings: ['Basil', 'Mozzarella', 'Tomatoes'],
            selectedSize: 'medium',
            selectedToppings: ['Basil'],
            finalPrice: 70,
            amountInCart: 1
        }
        const pizza1withDifferentToppings: IPizzaToCart = {
            id: 'margherita-001',
            name: 'Margherita',
            description: 'Classic Margherita with tomato sauce, mozzarella, and fresh basil.',
            image: 'margherita.jpg',
            sizes: [
                {title: 'Small', value: 'small'},
                {title: 'Medium', value: 'medium'},
                {title: 'Large', value: 'large'}
            ],
            prices: [5, 7, 9],
            toppings: ['Mozzarella', 'Tomatoes'],
            selectedSize: 'medium',
            selectedToppings: ['Basil'],
            finalPrice: 70,
            amountInCart: 1
        }

        const pizza2: IPizzaToCart = {
            id: 'pepperoni-002',
            name: 'Pepperoni',
            description: 'Pepperoni pizza with a generous amount of pepperoni and cheese.',
            image: 'pepperoni.jpg', // Замените на реальный URL изображения
            sizes: [
                {title: 'Small', value: 'small' },
                {title: 'Medium', value: 'medium' },
                {title: 'Extra Large', value: 'extra-large' }
            ],
            prices: [6, 8, 11],
            toppings: ['Pepperoni', 'Mozzarella', 'Tomato Sauce'],
            selectedSize: 'large',
            selectedToppings: ['Pepperoni', 'Extra Cheese'],
            finalPrice: 11,
            amountInCart: 2
        }

        expect(pizzasToCartEq(pizza1, pizza1)).toBe(true)
        expect(pizzasToCartEq(pizza1, pizza1withDifferentAmountInCart)).toBe(true)

        expect(pizzasToCartEq(pizza1, pizza2)).toBe(false)
        expect(pizzasToCartEq(pizza1, pizza1withDifferentSelectedSize)).toBe(false)
        expect(pizzasToCartEq(pizza1, pizza1withDifferentFinalPrice)).toBe(false)
        expect(pizzasToCartEq(pizza1, pizza1withDifferentToppings)).toBe(false)
    })
    it.todo('addToCart', () => {

    })
})



