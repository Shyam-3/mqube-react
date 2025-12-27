const MQUBE_CONFIG = {
    mapUrl: "https://maps.google.com/maps?q=3/6%20Ganapathy%20Nagar,%20L%20Poolangulam,%20Madurai%2020&t=&z=15&ie=UTF8&iwloc=&output=embed"
};

document.addEventListener('DOMContentLoaded', function() {
    if (!MQUBE_CONFIG.mapUrl) return;

    const mapIframes = document.querySelectorAll('.footer-map iframe, .contact-map-iframe');
    mapIframes.forEach((iframe) => {
        iframe.src = MQUBE_CONFIG.mapUrl;
    });
});
