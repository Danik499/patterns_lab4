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

    getTotalPrice() {
        return this.price
    }
}

function decorator(purchase) {
    let discountCategories = ["fruits", "cutlery", "detergents"],
        personalDiscountsList = ["Barack Obama", "George Bush", "Donald Trump"],
        totalDiscount = 0

    let checkDiscount = d => {
        if (d <= 0 || d > 1) throw new Error("Discount value must be between 0 and 1!")
    }

    let hours = purchase.time.getHours()
    purchase.nightTimeDiscount = discount => {
        checkDiscount(discount)
        hours >= 19 || hours <= 7 ? totalDiscount += discount : totalDiscount
    }
    purchase.categoriesDiscount = discount => {
        checkDiscount(discount)
        discountCategories.includes(purchase.category) ? totalDiscount += discount : totalDiscount
    }
    purchase.paymentMethodDiscount = discount => {
        checkDiscount(discount)
        purchase.paymentMethod == "card" ? totalDiscount += discount : totalDiscount
    }
    purchase.personalDiscount = discount => {
        checkDiscount(discount)
        personalDiscountsList.includes(purchase.buyer) ? totalDiscount += discount : totalDiscount
    }
    purchase.getTotalPrice = () => purchase.price * (1 - totalDiscount)

    return purchase
}

export { Purchase, decorator }
