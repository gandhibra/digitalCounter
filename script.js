let isianEl = document.getElementById('isian-el')
let totalCount = isianEl.textContent
let countEl = document.getElementById('count_el')
let count = 0;

let error = new Audio('./error.mp3');
let notif = new Audio('./notif.mp3');

function clearCount() {
    count = 0;
    countEl.innerText = 0;
}

function addNew() {
    let newCount = prompt('Masukkan jumlah hitungan:')
    isianEl.textContent = newCount
    totalCount = newCount
}
    

function add() {
    if (count < totalCount -3) { 
        count += 1;
        countEl.innerText = count;
    } else if (count >= totalCount -3 && count < totalCount){
        notif.play()
        count += 1;
        countEl.innerText = count;
    } else {
        error.play()        
        alert(`jumlah hitungan sudah ${totalCount} kali`)
        clearCount()       
    }
}

function reset() {
    let konfirmasi = confirm('Mulai dari awal?')

    if(konfirmasi === true){
    clearCount()
} else {}

}

function newCount() {
    let konfirmasi = confirm('Masukkan jumlah hitungan baru?')

    if(konfirmasi === true){
    clearCount()
    addNew()
    // location.reload()
} else {}

}
