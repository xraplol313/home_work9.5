function toasts() {
    let btn = document.querySelector('.button');
    let close = document.querySelector('.close');
    let modal = document.querySelector('.modal');

    btn.addEventListener('click', function () {
        modal.classList.add('open');
        timeout();
    })

    close.addEventListener('click', function () {
        modal.classList.remove('open');
    })

    function timeout() {
        setTimeout(function () {
            modal.classList.remove('open')
        }, 4000);
    }
}
toasts();


function Tooltips() {
    document.querySelectorAll('.btn').forEach((el) => {
        el.addEventListener('mouseover', function (e) {
            if (e.target.classList.contains('tooltip-top')) {
                e.target.classList.add('tool-t');
            }
            if (e.target.classList.contains('tooltip-left')) {
                e.target.classList.add('tool-l');
            }
            if (e.target.classList.contains('tooltip-right')) {
                e.target.classList.add('tool-r');
            }
            if (e.target.classList.contains('tooltip-bottom')) {
                e.target.classList.add('tool-b');
            }
        });
    });

    document.querySelectorAll('.btn').forEach((el) => {
        el.addEventListener('mouseout', function (e) {
            if (e.target.classList.contains('tooltip-top')) {
                e.target.classList.remove('tool-t');
            }
            if (e.target.classList.contains('tooltip-left')) {
                e.target.classList.remove('tool-l');
            }
            if (e.target.classList.contains('tooltip-right')) {
                e.target.classList.remove('tool-r');
            }
            if (e.target.classList.contains('tooltip-bottom')) {
                e.target.classList.remove('tool-b');
            }
        });
    })
};
Tooltips();
