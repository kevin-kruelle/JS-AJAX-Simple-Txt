console.log('connected...')

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('data').innerHTML = this.responseText
    }
};

xhr.open('GET', 'https://class-demo-files-and-resources.s3.amazonaws.com/shakespeare.txt', true);

function sendAJAX() {
xhr.send()
document.getElementById('sendAJAX').style.display = 'none'
}

