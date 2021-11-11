function navTop(){
    let select = document.getElementById("currency")
        let sel_cur = document.getElementById("sel_curr")
        
        sel_cur.style.display = "none";
        select.onclick = () => {
           if(sel_cur.style.display == "block"){
               sel_cur.style.display = "none";
           } else {
               sel_cur.style.display = "block";
               three_div.style.display = "none";
           }
        }

        let gold_rate = document.getElementById("gold_rate")
        let three_div = document.getElementById("three_div")
        
        three_div.style.display = "none";
        gold_rate.onclick = () => {
           if(three_div.style.display == "block"){
            three_div.style.display = "none";
           } else {
            three_div.style.display = "block";
            sel_cur.style.display = "none"
           }
        }
        
}

export {navTop};
   
    
    
    // document.getElementById("currency").onclick = () => {
    //     let select = document.getElementById("sel_cur")
    //     ind++;
    //     select.style.display = "block"
        // if(ind == 1){
        //     select.style.display = "block";
        //     ind = 0;
        // }
    //}