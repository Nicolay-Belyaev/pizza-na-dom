import {it, describe, beforeEach} from "vitest";
import {createPinia, setActivePinia} from "pinia";
import {useCartStore} from "~/app/stores/cartStore";

describe('cartStore', ()=> {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it.todo('addToCart', () => {

    })

})


