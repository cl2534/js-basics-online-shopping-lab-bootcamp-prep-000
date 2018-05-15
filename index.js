var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemname) {
  var count 
  var Price = Math.floor(Math.random() * 99)
  for (var i = 0; i < cart.length; i ++) {
    if (cart[i].itemName === itemname) {
     cart[i].Quantity++
    }
  var addons = {
    itemName: itemname,
    itemPrice: Price
    Quantity: count
  } 
  add a property 
  cart.push(addons)
  return `${itemname} has been added to your cart.`
}







function viewCart() {
  //"Var result" to begin with
  var result = 'In your cart, you have '
  
  // If empty, which is length = 0
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  
  // If not empty, and if length = 1, which means only one object in Arraylist, use cart[0]._ 
  } else if (cart.length === 1) {
    result += `${cart[0].itemName} at $${cart[0].itemPrice}.` 
  
  // Not one object, not empty, iterate through cart list and add to the "result" string. 
  } else {
    for (var i = 0; i < cart.length; i++) {
      
      // When printing out the last object, we need to have "and" in front of it. 
      if (cart[i].itemName[0] === 'b') {
        if (i === cart.length- 1) { 
          result += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        
      // Other than all those cases above, we need commas to sepearate each object and in order to do so, put comma at the end
        } else {
          result += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
    }
  }
  
  //Now return the result. 
  return result
}


//iterate through cart list and sum up itemPrice. 
function total() {
  var count = 0;
  for (var i =0; i < cart.length; i++) {
    count += cart[i].itemPrice
  }
  return count
}

//remove specific item in cart list if it matches by iterating through cart list and if the name matches the "itemName" which is key (property) in object, use splice(i,1) in which array.splice(start, deleteCount) and start here means its index (or location) and delete it (:count = 1)
function removeFromCart(item) {
 for (var i = 0; i < cart.length; i++) {
   if (item === cart[i].itemName) {
     cart.splice(i,1)
     return cart
   } 
 }
 // This case will occur after iterating through cart list and when no matches occur. 
 return 'That item is not in your cart.'
}

// 
function placeOrder(cardNumber) {
  //Call total function and store the result as "sum"
  var sum = total()
  if (cardNumber) {
    
    // empty the cart by reassigning cart as empty array. 
    cart = []
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}

