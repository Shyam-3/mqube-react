;(function(){
    // ================= ELEMENT REFERENCES =================
    const submitBtn = document.getElementById('submitBtn')
    const resetBtn = document.getElementById('resetBtn')

    const overlay = document.getElementById('overlay')
    const resetPopup = document.getElementById('resetPopup')
    const submitPopup = document.getElementById('submitPopup')

    const cancelReset = document.getElementById('cancelReset')
    const confirmReset = document.getElementById('confirmReset')
    const submitOk = document.getElementById('submitOk')

    // FORM FIELDS
    const fullname = document.getElementById('fullname')
    const email = document.getElementById('email')
    const contact = document.getElementById('contact')
    const whatsapp = document.getElementById('whatsapp')
    const address = document.getElementById('address')
    const iam = document.getElementById('iam')
    const gender = document.getElementById('gender')
    const board = document.getElementById('board')
    const grade = document.getElementById('grade')
    const vcode = document.getElementById('vcode')

    if (!submitBtn || !resetBtn) return

    // ================= HELPER FUNCTIONS =================
    function showError(input, message) {
        if (!input) return
        let error = input.parentElement.querySelector('.error-text')
        if (!error) {
            error = document.createElement('small')
            error.className = 'error-text text-danger'
            input.parentElement.appendChild(error)
        }
        error.textContent = message
    }

    function clearError(input) {
        if (!input) return
        const error = input.parentElement.querySelector('.error-text')
        if (error) error.textContent = ''
    }

    // ================= ONLY NUMBERS (10 DIGITS) =================
    function onlyTenDigits(input) {
        if (!input) return
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/g, '').slice(0, 10)

            if (input.value.length !== 10) {
                showError(input, 'Enter exactly 10 digits')
            } else {
                clearError(input)
            }
        })
    }

    onlyTenDigits(contact)
    onlyTenDigits(whatsapp)

    // ================= EMAIL VALIDATION =================
    if (email) {
        email.addEventListener('input', () => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailPattern.test(email.value)) {
                showError(email, 'Enter a valid email address')
            } else {
                clearError(email)
            }
        })
    }

    // ================= RESET LOGIC =================
    resetBtn.addEventListener('click', () => {
        overlay.style.display = 'block'
        resetPopup.style.display = 'block'
    })

    cancelReset && cancelReset.addEventListener('click', () => {
        resetPopup.style.display = 'none'
        overlay.style.display = 'none'
    })

    confirmReset && confirmReset.addEventListener('click', () => {
        fullname && (fullname.value = '')
        email && (email.value = '')
        contact && (contact.value = '')
        whatsapp && (whatsapp.value = '')
        address && (address.value = '')
        iam && (iam.selectedIndex = 0)
        gender && (gender.selectedIndex = 0)
        board && (board.selectedIndex = 0)
        grade && (grade.selectedIndex = 0)
        vcode && (vcode.value = '')

        document.querySelectorAll('.error-text').forEach((e) => (e.textContent = ''))

        resetPopup.style.display = 'none'
        overlay.style.display = 'none'
    })

    // ================= SUBMIT LOGIC =================
    submitBtn.addEventListener('click', async () => {
        let valid = true

        // REQUIRED FIELD CHECK
        ;[fullname, email, contact, whatsapp, address, vcode].forEach((field) => {
            if (!field || !field.value.trim()) {
                showError(field, 'This field is required')
                valid = false
            } else {
                clearError(field)
            }
        })

        if (
            (iam && iam.selectedIndex === 0) ||
            (gender && gender.selectedIndex === 0) ||
            (board && board.selectedIndex === 0) ||
            (grade && grade.selectedIndex === 0)
        ) {
            alert('Please select all dropdown fields.')
            valid = false
        }

        // CONTACT CHECK
        if (contact && contact.value.length !== 10) {
            showError(contact, 'Enter exactly 10 digits')
            valid = false
        }

        if (whatsapp && whatsapp.value.length !== 10) {
            showError(whatsapp, 'Enter exactly 10 digits')
            valid = false
        }

        // EMAIL CHECK
        if (email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailPattern.test(email.value)) {
                showError(email, 'Enter a valid email address')
                valid = false
            }
        }

        // ❌ STOP IF INVALID
        if (!valid) return

        // ✅ COLLECT FORM DATA
        const formData = {
            name: fullname.value,
            email: email.value,
            phone: contact.value,
            preferred_time: address.value, // Using address field for preferred time
            message: `I am: ${iam.value}, Gender: ${gender.value}, Board: ${board.value}, Grade: ${grade.value}`
        }

        // Disable button during submission
        submitBtn.disabled = true
        submitBtn.textContent = 'Submitting...'

        try {
            const response = await fetch('/api/free-demo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            const result = await response.json()

            if (response.ok) {
                // Show success popup
                overlay.style.display = 'block'
                submitPopup.style.display = 'block'
            } else {
                alert('Error submitting form: ' + (result.error || 'Unknown error'))
            }
        } catch (error) {
            console.error('Submission error:', error)
            alert('Network error. Please try again.')
        } finally {
            submitBtn.disabled = false
            submitBtn.textContent = 'Submit'
        }
    })

    // ================= SUBMIT OK =================
    submitOk && submitOk.addEventListener('click', () => {
        submitPopup.style.display = 'none'
        overlay.style.display = 'none'
    })
})()
