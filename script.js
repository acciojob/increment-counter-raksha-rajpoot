//your JS code here. If required.

        let InitialValue = 0;
        const counter = document.getElementById("counter");
        const incrementBtn = document.getElementById("incrementBtn");

        incrementBtn.addEventListener("click", function () {
            alert( InitialValue);
             InitialValue++;
            counter.textContent =  InitialValue;
        });
   