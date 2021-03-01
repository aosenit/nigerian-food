const showTotal = () => {
    const totalP = []
    const prices = document.querySelectorAll('.resrved-price')
    prices.forEach(price => {

        totalP.push(parseFloat(price.textContent))
    })
    
    const totalMoney = totalP.reduce((totalP, price) => {
        totalP += price
        return totalP
    }, 0)

    const finalPrice = totalMoney.toFixed(2)
    const sumTotal = (parseFloat(finalPrice) + 10).toFixed(2)
    document.querySelector('.final-price').textContent = `$ ${totalMoney}`
    document.querySelector('.sum-total').textContent = `$ ${sumTotal}`
    document.querySelector('.delivery-fee').textContent = `$ 10`
}

const deleteItem = () => {
    const deleteBtns = Array.from(document.querySelectorAll('.remove-btn'))
    deleteBtns.forEach((deleteBtn, index) => {
        deleteBtn.addEventListener('click', (e) => {
             alert("Menu is removed from reservation")
            e.target.parentElement.parentElement.parentElement.parentElement.remove()
           
            const totalP = []
            const prices = document.querySelectorAll('.resrved-price')
            prices.forEach(price => {
                totalP = totalP + price
            })
            
        })
    })
    
    
}


//get all items in menu 
const addIcons = document.querySelectorAll('.add-icon')
addIcons.forEach((addIcon, index)=>{
    addIcon.addEventListener('click', (e) =>{
       
        const menuObject = {}
        const menuImage = e.target.closest("div").children[0].children[0].src
        const menuName = e.target.closest("div").children[1].textContent 
        const price = e.target.parentElement.children[0].textContent
        let menuPrice = price.slice(1)
        menuObject.foodImage = menuImage
        menuObject.foodName = menuName
        menuObject.foodPrice = menuPrice
        // const menuz = e.target.closest("div")
        // console.log(menuz.querySelector('.food-name').innerHTML)

        //create dynamic reservation item
const reservedItem = document.createElement('div')


reservedItem.classList.add(
    "shopping-main"
    )
reservedItem.innerHTML = `
<div class="shopping-main">
<div class="shopping-item">
    <div class="image-text">
        <div class="img-shopping">
            <img class="img-shop" src="${menuObject.foodImage}" alt="">
        </div>
        <div class="text">
            <h3>${menuObject.foodName}</h3>
            <h4 >PRICE: $ <span class="resrved-price"> ${menuObject.foodPrice}</span> </h4>
            <button class="remove-btn">REMOVE</button>
        </div>
    </div>

    <div class="input">
        <input class="input-num"  type="number" value="1" min="1" >
    </div>

    <div class="subtotal"><h4>$ ${menuObject.foodPrice}</h4></div>
</div>
</div>

`

const container = document.querySelector('.shopping-container')
const summation = document.querySelector('.summation')
 container.insertBefore(reservedItem, summation)
alert (' Menu added to reservation')
        
        deleteItem()
        showTotal()
    })

    
})

