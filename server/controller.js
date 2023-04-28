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

}