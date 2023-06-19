let isListToggle = false;
let toggleFilterMenu = false;
let isMobileMenuToggle = false;
const toggle_btn = document.querySelectorAll('#faq_section .toggle_btn');
const filter_menu = document.getElementById('filter_btn');
const menu = document.getElementById('filter_menu');
const close_btn = document.getElementById('filter_close_btn');
const hamburger = document.getElementById('hamburger_link');
const mobileMenu = document.getElementById('navigation');
const mobileMenuClose = document.getElementById('menu_close_btn');
filter_menu?.addEventListener('click',toggleMenu);
close_btn?.addEventListener('click',toggleMenu);
hamburger?.addEventListener('click', toggleMobileMenu);
mobileMenuClose?.addEventListener('click', toggleMobileMenu);

toggle_btn.forEach( button => {
    button.addEventListener("click", function(){
        isListToggle = !isListToggle;
        if(isListToggle){
            this.nextElementSibling?.classList.add('active');
            this.classList.add('active');
            
        } else {
            this.nextElementSibling?.classList.remove('active');
            this.classList.remove('active');
        }
        this.ariaExpanded = isListToggle;
    });
})

function toggleMenu() {
    toggleFilterMenu = !toggleFilterMenu;
    if(toggleFilterMenu) {
        this.classList.add('active');
        menu?.classList.add('open');
    } else {
        this.classList.remove('active');
        menu?.classList.remove('open');
    }
    this.ariaExpanded = toggleFilterMenu;
}

function toggleMobileMenu() {
    isMobileMenuToggle = !isMobileMenuToggle;
    if(isMobileMenuToggle) {
        this.classList.add('active');
        mobileMenu?.classList.add('open');
    } else {
        this.classList.remove('active');
        mobileMenu?.classList.remove('open');
    }
    this.ariaExpanded = isMobileMenuToggle;
}

