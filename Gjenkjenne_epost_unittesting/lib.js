
/* 
Du skal lage en enkel funksjon som tar en tekst som parameter
og returnerer true eller false ut fra om teksten er en epostadresse eller ikke


Oppgave

I første omgang skal funksjonen si at det er en epostadresse kun hvis teksten inneholder @. 

Lag en test for dette og implementer så funksjonen. Hint: bruk indexOf()

I tillegg: teksten skal ikke inneholde mellomrom. Endre test og endre så funksjonen.
I tillegg: teksten skal inneholde et punktum før @. Og et punktum etter. Endre test og endre så funksjonen.
*/


function checkIfMail(text){
    let atWasFound = text.indexOf('@') >= 0;
    let spaceWasFound = text.indexOf(' ') >= 0;
    
    let atIndex = text.indexOf('@');
    let textAfterAt = text.substring(atIndex + 1);
    let dotBeforeAt = text.indexOf('.') >= 0 && text.indexOf('.') < atIndex;
    let dotAfterAt = textAfterAt.indexOf('.') >= 0;

    if(atWasFound && !spaceWasFound && dotBeforeAt && dotAfterAt){
        return true;

    } else{
        return false;
    }

}

