document.addEventListener('DOMContentLoaded', () => {
    const portfolioTitle = document.querySelector('.portfolio-title');
    const avatarSmall = document.querySelector('.avatar-small');
    const sections = document.querySelectorAll('.section');
    
    let isTitleAnimated = false;

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    const animateTitle = (action) => {
        portfolioTitle.classList.add('animating');
        setTimeout(() => {
            if (action === 'add') {
                portfolioTitle.style.transform = 'translateX(20px)';
            } else {
                portfolioTitle.style.transform = 'translateX(0)';
            }
            portfolioTitle.addEventListener('transitionend', () => {
                portfolioTitle.classList.remove('animating');
                isTitleAnimated = action === 'add';
            }, { once: true });
        }, 10);
    };

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100 && !isTitleAnimated) {
            avatarSmall.style.display = 'block';
            setTimeout(() => {
                avatarSmall.classList.add('visible');
                animateTitle('add');
            }, 10); // Delay to trigger the transitiontainer.classList.add('avatar-small');
        } else if (window.scrollY <= 100 && isTitleAnimated) {
            avatarSmall.classList.remove('visible');
            setTimeout(() => {
                avatarSmall.style.display = 'block';
                animateTitle('remove');
            }, 300); // Delay to wait for the transition to finish            avatar.classList.remove('avatar-small');
        }
    });
});
