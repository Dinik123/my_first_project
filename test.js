const paragraph = document.getElementById('paragraph')

paragraph.onclick = smileBlock

function smileBlock() {
    paragraph.innerText = 'smile!)'
}