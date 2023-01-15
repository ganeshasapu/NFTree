
export function myFunc() {
    let ivy1 = document.getElementById('ivy1');
    let ivy2 = document.getElementById('ivy2');

    window.addEventListener('scroll', () => {
        let x = window.scrollY;
        ivy1.style.top = Math.min(x * 0.05 -13, -1) + "vw";
        ivy1.style.left = Math.max(x * -0.1 + 78, 49) + "vw";
        ivy2.style.top = Math.min(x * + 0.05 -13, -1) +"vw";
        ivy2.style.left= Math.min(x * + 0.1 - 78 , -49) + "vw";
    })
}

