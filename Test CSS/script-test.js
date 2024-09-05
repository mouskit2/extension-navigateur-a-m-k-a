const cursor = document.querySelector('.cursor');
const filtre = document.querySelector('.filtre-noir')

function moveMask() {

    document.addEventListener('mousemove', function (m) {
        // let position = filtre.getBoundingClientRect();

        filtre.style["mask-position"] = m.clientX + 'px ' + m.clientY + 'px'

    })
};
moveMask()