//your JS code here. If required.
 <script>
        let InitialValue = 0;
        const counter = document.getElementById("counter");
        const incrementBtn = document.getElementById("incrementBtn");

        incrementBtn.addEventListener("click", function () {
            alert( InitialValue);
            counterValue++;
            counter.textContent =  InitialValue;
        });
    </script>