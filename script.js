//your JS code here. If required.
const codeInputs = document.querySelectorAll('.code');

        codeInputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                if (e.target.value.length === 1) {
                    // Move focus to the next input
                    if (index < codeInputs.length - 1) {
                        codeInputs[index + 1].focus();
                    }
                } else if (e.target.value.length === 0) {
                    // Move focus to the previous input on backspace
                    if (index > 0) {
                        codeInputs[index - 1].focus();
                    }
                }
            });
        });