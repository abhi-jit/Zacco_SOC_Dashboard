
addEventListener('DOMContentLoaded',()=>{
    fetchData();
})

async function fetchData (){
    try {
        const response = await fetch('http://localhost:8000/api/my-data/');
        const data = await response.json();
        document.getElementById('result').innerText = `Data from Django: ${data.example}`;

    } catch (error) {
        
    }
}

document.getElementById('result').innerText = ' hey this is from js testing...'