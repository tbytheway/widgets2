import React, { useState } from 'react'

export default function PrettyPrice() {
    const [prettyPrice, setPrettyPrice] = useState()
    
    let prettyPrice = (price, change) => { 
        return(price.parseInt(price, 10), price.parseFloat(price) + change)
      }
      prettyPrice(54.63, .99)


}