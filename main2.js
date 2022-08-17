document.querySelector('.submit').addEventListener('click', function () {
    document.querySelector('.rinfo').innerText = "Loading...";
    document.querySelector('.percentage').innerText = "";
    document.querySelector('.result').innerText = "";
    document.querySelector('.heart').style.width = '2rem';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '05bc5ea270msh9a7ec4c24bd7e2bp143363jsn415336f04d3c',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };
    n1 = document.querySelector('#name').value;
    n2 = document.querySelector('#name2').value;
    console.log(n1,n2);
    fetch("https://love-calculator.p.rapidapi.com/getPercentage?sname=" + n1 + "&fname=" + n2 , options)
        .then(response => response.json())
        .then(response => {
            d = response;
            document.querySelector('.rinfo').innerText = "";
            document.querySelector('.percentage').innerText = d['percentage'];
            document.querySelector('.result').innerText = d['result'];
            let width = screen.width;
            console.log(width);
            if(width < 780){
                document.querySelector('.heart').style.width = '5rem';
            }
            else{
                document.querySelector('.heart').style.width = '10rem';
            }

        })
        .catch(err => console.error(err));
})