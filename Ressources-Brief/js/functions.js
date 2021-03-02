export function brief2() {
 
    document.addEventListener("keydown", pressFunction);

    function pressFunction(e) {
        
        let key = e.key;
        console.log(key);

        if (key == "a" || key == "z" || key == "e" || key == "r" || key == "t" || key == "y" || key == "u" || key == "i" || key == "o") {           
            play(key);
        }
    }

    function play(key) {
            
        let sound = document.getElementById(key);
        sound.load();
        sound.play();
        sound.previousElementSibling.classList.add("sound-active");
        sound.addEventListener("ended", (event)=>{
            sound.previousElementSibling.classList.remove("sound-active")
        })

    }
}