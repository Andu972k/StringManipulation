function Manipulate(): void {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("inputField");
    let selectElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("functionSelector");
    let divElement: HTMLDivElement = <HTMLDivElement>document.getElementById("output");


    let stringToManipulate: string = inputElement.value;
    let manipulationToPerform: string = selectElement.value;

    divElement.innerHTML = ManipulationHelper(stringToManipulate, manipulationToPerform);



}

function ManipulationHelper(stringToManipulate: string, manipulationToPerform: string): string {

    switch (manipulationToPerform) {
        case "Upper case":
            return stringToManipulate.toUpperCase();
        case "Lower case":
            return stringToManipulate.toLowerCase();
    }
    /*if (manipulationToPerform == "Upper case") {
        return stringToManipulate.toLocaleUpperCase();

    }
    else if (manipulationToPerform == "Lower case") {
        return stringToManipulate.toLocaleLowerCase();
    }*/



}

let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("actButton");
buttonElement.addEventListener("click", Manipulate);