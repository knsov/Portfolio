function scrollToSection(blockId) {
    const element = document.getElementById(blockId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}