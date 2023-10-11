let input = document.getElementById('input')
let span = document.querySelector('span')

input.addEventListener('change', (event) => {
    let imge_file = event.target.files[0]
    console.log(imge_file)

})