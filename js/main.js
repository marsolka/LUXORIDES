document.addEventListener("DOMContentLoaded",
    function () {
        document.querySelector('.main-btn').addEventListener('click', () => {
            document.getElementById('cars').scrollIntoView();
        });
        const btns = document.getElementsByClassName('btn-reserve');
        for (let i = 0; i < btns.length; i++) {
            const btn = btns[i];
            btn.addEventListener('click', () => {
                document.getElementById('price').scrollIntoView();
            });
        }
        const layer = document.querySelector('.price-img');
        document.addEventListener('mousemove', (event) => {
            layer.style.transform = 'translate3d(' + ((event.clientX * 0.4) / 9) + 'px,' + ((event.clientY * 0.4) / 9) + 'px,0px)';
        });

        const elem = document.querySelector(".main");
        document.addEventListener('scroll', () => {
            elem.style.backgroundPositionX = '0' + (0.2 * window.pageYOffset) + 'px';
        });

        const priceForm = document.querySelector('.price-form'),
            errors = document.getElementById('inputs-error');
        let errorCount = 0;
        priceForm.addEventListener("submit", function (e) {
            e.preventDefault();
            errors.innerHTML = "";
            const inputs = priceForm.getElementsByClassName("form-input");
            for (let i = 0; i < inputs.length; i++) {
                const input = inputs[i];
                checkPriceFormInput(input);
            }
            if (errorCount === 0) {
                alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время.");
                priceForm.reset();
            }
        });

        function checkPriceFormInput(input) {
            if (input.value === "") {
                let msg = `<p>Поле ${input.id === "name" ? "имя" : input.id === "tel" ? "телефон" : "автомобиль"} не должно быть пустым!</p>`;
                input.classList.add("error");
                errors.insertAdjacentHTML("beforeend", msg);
                errorCount++;
            } else {
                input.classList.remove("error");
                if (errorCount > 0) errorCount--;
            }
        }
    });