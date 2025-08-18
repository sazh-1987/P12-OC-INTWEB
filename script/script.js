// =========================================================
// Collapses + accessibilité
// =========================================================
const setupCollapses = () => {
    const triggers = document.querySelectorAll('.img-click')

    triggers.forEach((el) => {
        el.setAttribute('tabindex', '0')
        el.setAttribute('role', 'button')
        el.setAttribute('aria-controls', el.dataset.target)
        el.setAttribute('aria-expanded', 'false')

        const targetId = el.dataset.target
        const panel = document.getElementById(targetId)

        if (panel) {
            panel.setAttribute('aria-hidden', 'true')
        }

        const toggle = () => {
            if (!panel) return
            const isOpen = panel.classList.toggle('open')
            el.setAttribute('aria-expanded', String(isOpen))
            panel.setAttribute('aria-hidden', String(!isOpen))
        }

        el.addEventListener('click', toggle)
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggle()
            }
        })
    })
}


// =========================================================
// Swap image hero au survol
// =========================================================
const setupHeroHoverSwap = () => {
    const heroImg = document.querySelector('.hero-visual img')
    if (!heroImg) return

    heroImg.addEventListener('mouseenter', () => {
        heroImg.src = 'assets/img/KL.webp'
    })
    heroImg.addEventListener('mouseleave', () => {
        heroImg.src = 'assets/img/KLlogo.webp'
    })
}


// =========================================================
// Menu hamburger (mobile)
// =========================================================
const setupHamburgerMenu = () => {
    const btn = document.querySelector('.hamburger')
    const navRoot = document.getElementById('primary-nav') || document.querySelector('header .container.nav > nav')
    if (!btn || !navRoot) return

    const navList = navRoot.tagName.toLowerCase() === 'ul' ? navRoot : navRoot.querySelector('ul')

    const openMenu = () => {
        document.body.classList.add('nav-open')
        btn.classList.add('is-open')
        btn.setAttribute('aria-expanded', 'true')
    }

    const closeMenu = () => {
        document.body.classList.remove('nav-open')
        btn.classList.remove('is-open')
        btn.setAttribute('aria-expanded', 'false')
    }

    const toggleMenu = () => {
        document.body.classList.contains('nav-open') ? closeMenu() : openMenu()
    }

    btn.addEventListener('click', toggleMenu)

    if (navList) {
        navList.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu))
    }

    const mq = window.matchMedia('(min-width: 768px)')
    mq.addEventListener('change', e => {
        if (e.matches) closeMenu()
    })
}

//=========================================================
// Appels à l’exécution
//=========================================================
setupCollapses()
setupHeroHoverSwap()
setupHamburgerMenu()