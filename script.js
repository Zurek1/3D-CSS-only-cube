function Monitor() {
    const checkBox = document.getElementById('Destroy');
    if (checkBox.checked == true) {
        Destroy();
    }
    else {
        Restore();
    }
}

function Destroy() {
    document.getElementById('front').className = 'DestroyFront';
    document.getElementById('back').className = 'DestroyBack';
    document.getElementById('left').className = 'DestroyLeft';
    document.getElementById('right').className = 'DestroyRight';
    document.getElementById('top').className = 'DestroyTop';
    document.getElementById('bottom').className = 'DestroyBottom';
}

function Restore() {
    document.getElementById('front').className = 'Front';
    document.getElementById('back').className = 'Back';
    document.getElementById('left').className = 'Left';
    document.getElementById('right').className = 'Right';
    document.getElementById('top').className = 'Top';
    document.getElementById('bottom').className = 'Bottom';
}