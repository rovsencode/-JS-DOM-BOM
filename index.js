

const btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    const fn = document.querySelector("#name").value
    const ln = document.querySelector("#surname").value
    const em = document.querySelector(".email").value
    if (fn.length<1 ) {
            document.getElementById("first-name").innerHTML = "wrong input,please make correct"
    }
    else {
         document.getElementById("first-name").innerHTML = fn;
    }
    if (ln.length<1) {
                document.getElementById("last-name").innerHTML="wrong input,please make correct"

    }
    else {
        document.getElementById("last-name").innerHTML = ln;
    }
       if (em.length<1) {
              document.getElementById("email").innerHTML="wrong input,please make correct "
        
    }
    else {
          document.getElementById("email").innerHTML = em;
    }
    
})
    
