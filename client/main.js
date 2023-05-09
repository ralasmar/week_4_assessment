const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.querySelector('#fortuneButton');
const affirmationBtn = document.querySelector('#affirmationButton')
const selfCareBtn = document.querySelector('#selfCareButton')
const emailBtn = document.querySelector('#emailButton')
const unsubscribeBtn = document.querySelector('#unsubscribeButton')
const catBtn = document.querySelector('#catButton')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    console.log('Sending Fortune Request')
    
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
        .catch(err => console.log(err));
};

const selfCareGenerator = () => {
    axios.get("http://localhost:4000/api/selfCare")
        .then(res => {
            const data = res.data
            alert(data)
        })
        .catch(err => console.log(err));
};

const postAffirmation = (event) => {
    event.preventDefault();

    let body = {
        'affirmation' : document.getElementById('affirmation').value,
    }
    axios.post("http://localhost:4000/api/affirmation/", body)
        .then(res => {
            const data = res.data
            alert("great affirmation!")
            console.log(body)
        })
        .catch(err => console.log(err));
};

 
const joinEmail = (event) => {
    event.preventDefault();
    let body = {
        'user' : document.getElementById('email').value
    }
    axios.post("http://localhost:4000/api/email/", body)
        .then(res => { 
            const data = res.data
            alert(`successfully subscribed`)
            
            console.log(body)
        })
        .catch(err => console.log(err));
};

const deleteEmail = (event) => {
    event.preventDefault()
    axios.delete("http://localhost:4000/api/unsubscribe/")
        .then(res => {
            const data = res.data
            alert('successfully unsubscribed')
            console.log(data)
        })
        .catch(err => console.log('Could not find user'));
            
};

const updateCatPhoto = (event) => {
    event.preventDefault()
    let image = document.querySelector("#cat")
    image.src = document.getElementById('catLink').value
    axios.put("http://localhost:4000/api/catPhoto/")
        .then(res => {
            const data = res.data
        })
    .catch(err => console.log(err));
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
selfCareBtn.addEventListener('click', selfCareGenerator)
affirmationBtn.addEventListener('click', postAffirmation)
emailBtn.addEventListener('click', joinEmail)
unsubscribeBtn.addEventListener('click', deleteEmail)
catBtn.addEventListener('click', updateCatPhoto)


