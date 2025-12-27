;(function(){
    const reviewModalEl = document.getElementById('reviewModal')
    if (!reviewModalEl) return

    reviewModalEl.addEventListener('show.bs.modal', (event) => {
        const trigger = event.relatedTarget
        if (!trigger) return
        const name = trigger.getAttribute('data-name') || ''
        const text = trigger.getAttribute('data-text') || ''
        const img = trigger.getAttribute('data-img') || ''
        const nameEl = document.getElementById('modalName')
        const textEl = document.getElementById('modalText')
        const photoEl = document.getElementById('modalPhoto')
        if (nameEl) nameEl.textContent = name
        if (textEl) textEl.textContent = text
        if (photoEl) {
            if (img) {
                photoEl.setAttribute('src', img)
            } else {
                photoEl.removeAttribute('src')
            }
            photoEl.setAttribute('alt', name || 'Reviewer')
        }
    })

    // Blur focus when modal fully hides to avoid aria-hidden warning on focused element
    reviewModalEl.addEventListener('hidden.bs.modal', () => {
        if (document.activeElement && typeof document.activeElement.blur === 'function') {
            document.activeElement.blur()
        }
    })
})()
