const yes = document.getElementById('one').value
const no = document.getElementById('two').value

// function breakUp() {
// document.getElementByClass('remove').style.display = ''
// }
document.getElementById('#remove').addEventListener('click', functon = () => {
    if(yes.style.display != '') {
        no.style.display = '';
    } else if (no.style.display != '') {
        yes.style.display = '';
    }

})