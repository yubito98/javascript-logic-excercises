function reverseString(string){
    let array = string.split("");
    let sortArray = array.reverse()
    return sortArray.join("")
}

console.log(reverseString("hello")); // Output: "olleh"