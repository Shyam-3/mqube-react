;(function(){
    // ================= ELEMENT REFERENCES =================
    const form = document.getElementById('studentForm')
    if (!form) return

    const resetBtn = document.querySelector('.btn-reset')
    const submitBtn = document.querySelector('.btn-submit')

    const contactNo = document.getElementById('contactNo')
    const whatsappNo = document.getElementById('whatsappNo')
    const emailId = document.getElementById('emailId')

    // POPUPS
    const resetOverlay = document.getElementById('resetOverlay')
    const resetCancel = document.getElementById('resetCancel')
    const resetConfirm = document.getElementById('resetConfirm')

    const successOverlay = document.getElementById('successOverlay')
    const successOk = document.getElementById('successOk')

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
    function allowOnlyNumbers(input) {
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

    allowOnlyNumbers(contactNo)
    allowOnlyNumbers(whatsappNo)

    // ================= EMAIL VALIDATION =================
    if (emailId) {
        emailId.addEventListener('input', () => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

            if (!emailPattern.test(emailId.value)) {
                showError(emailId, 'Enter a valid email address')
            } else {
                clearError(emailId)
            }
        })
    }

    // ================= RESET LOGIC =================
    if (resetBtn && resetOverlay) {
        resetBtn.addEventListener('click', () => {
            resetOverlay.style.display = 'flex'
        })

        if (resetCancel) {
            resetCancel.addEventListener('click', () => {
                resetOverlay.style.display = 'none'
            })
        }

        if (resetConfirm) {
            resetConfirm.addEventListener('click', () => {
                form.reset()
                document.querySelectorAll('.error-text').forEach((e) => (e.textContent = ''))
                resetOverlay.style.display = 'none'
            })
        }
    }

    // ---------- SUBMIT LOGIC ----------
    if (submitBtn && successOverlay && successOk) {
        submitBtn.addEventListener('click', async () => {
            // 🔴 Check if all required fields are filled
            if (!form.checkValidity()) {
                form.reportValidity() // shows browser validation messages
                return
            }

            // ✅ COLLECT FORM DATA
            const formInputs = form.querySelectorAll('input, select')
            const formData = {
                studentName: formInputs[0].value,
                parentName: formInputs[2].value,
                grade: formInputs[4].value,
                subject: formInputs[3].value,
                email: emailId.value,
                phone: contactNo.value
            }

            // Disable button during submission
            submitBtn.disabled = true
            submitBtn.textContent = 'Submitting...'

            try {
                const response = await fetch('/api/student', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                })

                const result = await response.json()

                if (response.ok) {
                    // Show success popup
                    successOverlay.style.display = 'flex'
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

        successOk.addEventListener('click', () => {
            successOverlay.style.display = 'none'
            form.reset()
        })
    }
})()
