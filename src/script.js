const = navBar = document.querySelectorAll('nav-bar');
const = contentsItem = document.querySelectorAll('content-item');

navBar.forEach((a) => {
    a.addEventListener('click', () => {
        const index = a.dataset.index;
        const contentitem.forEach((item) => {
            item.classList.add('active');
            if(item.dataset.index === index){
                item.classList.add('active');
            }
        });
    });
});