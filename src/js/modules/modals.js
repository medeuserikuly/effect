const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector/* , destroy = false */) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');
              scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                });
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "none";
                document.body.style.overflow = ""; 
                document.body.style.marginRight = `0px`;
            }
        });
    }

    

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.btn_consultation', '.modals__consultation', '.modals__consultation .modals__close');
    bindModal('.btn-services_letters', '.modals__letters', '.modals__letters .modals__close');
    bindModal('.btn-services_box', '.modals__box', '.modals__box .modals__close');
    bindModal('.btn-services_console', '.modals__console', '.modals__console .modals__close');
    bindModal('.btn-services_roof', '.modals__roof', '.modals__roof .modals__close');
    bindModal('.btn-services_steels', '.modals__steels', '.modals__steels .modals__close');
    bindModal('.btn-services_information', '.modals__information', '.modals__information .modals__close');
};

export default modals;