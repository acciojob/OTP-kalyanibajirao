function handleInput(input) {
            const nextInput = input.nextElementSibling;
            const prevInput = input.previousElementSibling;

            if (input.value.length === 1) {
                if (nextInput) {
                    nextInput.focus();
                }
            } else if (input.value.length === 0) {
                if (prevInput) {
                    prevInput.focus();
                }
            }
        }