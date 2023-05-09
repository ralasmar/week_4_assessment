const userDatabase = []
let id = 0

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req,res) => {
        let fortunes = ["Everywhere you choose to go, friendly faces will greet you.", "A dubious friend may be an enemy in camouflage.", "A fresh start will put you on your way.", "A good time to finish up old tasks.", "A good friendship is often more important than a passionate romance.", "A hunch is creativity trying to tell you something.", "A truly rich life contains love and art in abundance." ];
       
        let random = Math.floor(Math.random() * fortunes.length);
        let fortune = fortunes[random];
        res.status(200).send(fortune);
    },

    selfCareGenerator: (req, res) => {
        const suggestions = ['Try meditation', 'Go on a walk', 'Take a hot bath', 'Listen to your favorite song', 'Explore your creativity', 'Call a friend', 'Drink a glass of water', 'Enjoy a snack', 'Give yourself affirmations']

        let random = Math.floor(Math.random() * suggestions.length);
        let suggestion = suggestions[random];
        res.status(200).send(suggestion)
    },

    postAffirmation: (req, res) => {
        let {affirmation} = req.body; 
        res.status(200).send(`Daily affirmation: ${affirmation}`)
        return affirmation
    },


    joinEmail: (req, res) => {
        let { email } = req.body
        let newUser = {...req.body, id: id };
        userDatabase.push(newUser);
        id++
        res.status(200).send(newUser)
    },

    deleteEmail: (req, res) => {
        let  existingEmail  = req.params.email
        for (let i=0; i<=userDatabase.length; i++){
            if (userDatabase[i].email === existingEmail) {
                userDatabase.splice(i,1)
                res.status(200).send(`User Unsubscribed`)  
            } else {
                res.status(400).send('User not found')
            }
        }
    },

    updateCatPhoto: (req, res) => {
        let {image} = req.body
        res.status(200).send('photo updated')
    },
    
}