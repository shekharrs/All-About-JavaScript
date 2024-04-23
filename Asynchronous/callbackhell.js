/**
 * Callback hell👇
 * Callback hell, also known as "Pyramid of Doom," is a term used to describe the 
 * situation where multiple nested callback functions make the code hard to read, 
 * understand, and maintain. It typically occurs in asynchronous JavaScript 
 * programming when multiple asynchronous operations are dependent on each other.
  
 * 1 Pyramid Of Doom 
 * 2 Inversion of Control
 
 */

// bookHotel --> proceedPayment --> showBookingStatus --> updateBookingHistory  (APIs)

bookHotel(hoteId, function() {     // 1st
    if(error){
        handleError
    }else{
        proceedPayment(hoteId, function() {    // 2nd
            if(error){
                handleError
            }else{
                showBookingStatus(function() {     // 3rd
                    if(error){
                        handleError
                    }else{
                        updateBookingHistory(function() {  // 4th
                            if(error){
                                handleError
                            }else{
                                success
                            }
                        })
                    }
                })
            }
        })
    }
})