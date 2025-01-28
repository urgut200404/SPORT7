export function startCounterAnimation() {
    const counters = document.getElementsByClassName('number-animate');

    for (let i = 0; i < counters.length; i++) {
        const counter = counters[i];
        const startNumber = +counter.getAttribute('number-animate-start');
        const target = +counter.getAttribute('number-animate-end');
        const delay = +counter.getAttribute('number-animate-delay');
        const add = +counter.getAttribute('number-animate-increment');
        let current = startNumber;
        let animationId;
        let isInView = false;

        const updateCounter = () => {
            if (current >= target) {
                clearInterval(animationId);
            } else if (add) {
                current += add;
                counter.textContent = current;
            } else {
                current++;
                counter.textContent = current;
            }
        };

        const checkInView = () => {
            const rect = counter.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const windowWidth = window.innerWidth || document.documentElement.clientWidth;

            const inView = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= windowHeight &&
                rect.right <= windowWidth
            );

            if (inView && !isInView) {
                isInView = true;
                current = startNumber;
                counter.textContent = current;
                animationId = setInterval(updateCounter, delay);
                counter.style.opacity = 1;
            } else if (!inView && isInView) {
                isInView = false;
                clearInterval(animationId);
                current = startNumber;
                counter.textContent = current;
                counter.style.opacity = 0;
            }
        };

        window.addEventListener('scroll', checkInView);
        window.addEventListener('resize', checkInView);
        checkInView(); // Check if already in view on page load
    }
}