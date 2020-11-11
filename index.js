import { Purchase, decorator } from "./program"

let p1 = new Purchase("mango", "fruits", "Buyer", 25, "nice fruit", new Date(2020, 11, 5, 14, 33), "card", "Richard Nixon"),
    p2 = new Purchase("tomato", "vegetables", "Torchyn", 70, "healthy tomatoes", new Date(2020, 11, 5, 13, 33), "cash", "Barack Obama")

p1 = decorator(p1)
p2 = decorator(p2)

p1.nightTimeDiscount(.05)
p1.categoriesDiscount(.05)
p1.paymentMethodDiscount(.1)
p1.personalDiscount(.2)

p2.nightTimeDiscount(.05)
p2.categoriesDiscount(.15)
p2.paymentMethodDiscount(.1)
p2.personalDiscount(.25)

console.log(`${p1.buyer} had to pay ${p1.price}. ${p1.buyer} payed ${p1.getTotalPrice()}`)
console.log(`${p2.buyer} had to pay ${p2.price}. ${p2.buyer} payed ${p2.getTotalPrice()}`)
