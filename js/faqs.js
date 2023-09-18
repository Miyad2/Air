
// ===================  FAQ Part  =================================




// Show/Hide FAQs answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fas fa-plus'){
            icon.className = 'fas fa-minus';
        }
        else{
            icon.className = 'fas fa-plus';
        }

    });
});