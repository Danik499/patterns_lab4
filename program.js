class Purchase {
    constructor(name, category, producer, price, description, time, paymentMethod, buyer) {
        this.name = name
        this.category = category
        this.producer = producer
        this.price = price
        this.description = description
        this.time = time
        this.paymentMethod = paymentMethod
        this.buyer = buyer
    }
}

function decorator(purchase) {
    let discountCategories = ["fruits", "cutlery", "detergents"],
        personalDiscountsList = ["Barack Obama", "George Bush", "Donald Trump"],
        totalDiscount = 0

    let hours = purchase.time.getHours()
    purchase.nightTimeDiscount = discount => hours >= 19 || hours <= 7 ? totalDiscount += discount : totalDiscount
    purchase.categoriesDiscount = discount => discountCategories.includes(purchase.category) ? totalDiscount += discount : totalDiscount
    purchase.paymentMethodDiscount = discount => purchase.paymentMethod == "card" ? totalDiscount += discount : totalDiscount
    purchase.personalDiscount = discount => personalDiscountsList.includes(purchase.buyer) ? totalDiscount += discount : totalDiscount
    purchase.getTotalPrice = () => purchase.price * (1 - totalDiscount)

    return purchase
}

export { Purchase, decorator }
