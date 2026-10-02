let sequence = [];

let reversed = [];

let children = document.querySelectorAll('.child'); //Array

window.addEventListener('load', () => {
    if(sequence.length == 0){
        fillSequence();
    }
    
    
})



function fillSequence(){
    for (const child of children) {

    child.addEventListener('click', () => {
        if(sequence.length<8){
        sequence.push(child.id);
        child.classList.add('green');
        console.log(sequence.length);
        if(sequence.length == 8){
            emptySequence();
        }
        }
        
        
    })
    
}
}





function emptyCode() {
    return new Promise((resolve, reject) => {
        let id;
        let el;
        let pop = setTimeout(() => {
            id = sequence[sequence.length-1];
            el = document.getElementById(`${id}`);
            el.classList.remove('green');
            sequence.pop();
            console.log(sequence);
            resolve();
        }, 200);
        
    });
}



async function emptySequence() {
    try {
        await emptyCode();
        await emptyCode();
        await emptyCode();
        await emptyCode();
        await emptyCode();
        await emptyCode();
        await emptyCode();
        await emptyCode();
        
    } catch (error) {
        console.log(error);
    }
}