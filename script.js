
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Висота навігації + додатковий відступ
                const navbarHeight = navbar.offsetHeight; 
                const offset = targetElement.offsetTop - navbarHeight - 30; // 30px додаткового відступу
                
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Логіка для кнопки Full Case Study (тимчасова заглушка, яка просто переводить на іншу сторінку)
    // Оскільки action trigger - це <a> тeг, він працює за замовчуванням.
    const caseStudyBtn = document.querySelector('.full-case-study-btn');
    caseStudyBtn.addEventListener('click', (e) => {
        // e.preventDefault();
        console.log("Кнопка 'View Full Case Study' натиснута. Перехід на full_case_study.html");
    });
});





const themeToggleBtn = document.getElementById('theme-toggle-btn'); 
const body = document.body;


const cloudLeft = document.querySelector('.cloud-bg-left img');
const cloudRight = document.querySelector('.cloud-bg-right img');

const cloudAva = document.querySelector('.cloud-bg-ava img'); 


const CLOUD_ABOVE_LIGHT_SRC = "AvaCloud_group_above.svg";
const CLOUD_ABOVE_DARK_SRC = "AvaCloud_group_above_dark.svg"; 

const CLOUD_ABOVE1_LIGHT_SRC = "AvaCloud_group_above1.svg";
const CLOUD_ABOVE1_DARK_SRC = "AvaCloud_group_above1_dark.svg"; 

const CLOUD_AVA_LIGHT_SRC = "AvaCloud_group.svg"; 
const CLOUD_AVA_DARK_SRC = "AvaCloud_group_dark.svg"; 

function toggleTheme() {

    body.classList.toggle('dark-theme');


    const icon = themeToggleBtn.querySelector('i');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');


    const isDark = body.classList.contains('dark-theme');
    

    const aboveSrc = isDark ? CLOUD_ABOVE_DARK_SRC : CLOUD_ABOVE_LIGHT_SRC;
    const above1Src = isDark ? CLOUD_ABOVE1_DARK_SRC : CLOUD_ABOVE1_LIGHT_SRC;
    const avaSrc = isDark ? CLOUD_AVA_DARK_SRC : CLOUD_AVA_LIGHT_SRC;
    
    if (cloudLeft) cloudLeft.src = aboveSrc;
    if (cloudRight) cloudRight.src = above1Src;
    if (cloudAva) cloudAva.src = avaSrc; 
    

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}


themeToggleBtn.addEventListener('click', toggleTheme);

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const icon = themeToggleBtn.querySelector('i');
    

    let aboveSrc = CLOUD_ABOVE_LIGHT_SRC;
    let above1Src = CLOUD_ABOVE1_LIGHT_SRC;
    let avaSrc = CLOUD_AVA_LIGHT_SRC;
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
        aboveSrc = CLOUD_ABOVE_DARK_SRC;
        above1Src = CLOUD_ABOVE1_DARK_SRC;
        avaSrc = CLOUD_AVA_DARK_SRC;
    } else {
        body.classList.remove('dark-theme');
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
    }

    if (cloudLeft) cloudLeft.src = aboveSrc;
    if (cloudRight) cloudRight.src = above1Src;
    if (cloudAva) cloudAva.src = avaSrc; 
});