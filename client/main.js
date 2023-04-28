const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.querySelector('#fortuneButton');

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    console.log('Sending Fortune Request')
    
    axios.get("http://localhost:4000/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
        .catch(err => console.log(err));
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)