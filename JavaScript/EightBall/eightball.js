var eightball = {
    advice: ["It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"],
    index: 0,
    shake: function() {
        for (i=0; i<this.advice.length; i++) {
            this.index = this.index+1;
            if (this.index >= this.advice.length) {
                this.index = 0;
            }        
        }
    },

    look: function() {
        return this.advice[Math.floor(Math.random()*this.advice.length)];
    }
};
// Math.floor(Math.random*this.advice.length)

eightball.shake();
console.log(eightball.look());