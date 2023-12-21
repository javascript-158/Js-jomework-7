function loadFile () {
return new Promise ((resolve , reject)=>{
const fileInput = document.getElementById ("fileInput")
const file = fileInput.files[0]

if (file) {
const reader = new FileReader()
reader.readAsText (file)
reader.onload = function (e) {
content = e.target.result  //content არის გატოლებული ჰტმლ-ის ტექსტარეასთან
document.getElementById("textarea").value = content 
const countedContent = countWords(content)  // გამოვიძახე სიტყვების მთვლელი ფუნქცია
console.log(countedContent,"სიტყვაა ტექსტში"); //სიტყვების დათვლა
console.log(file.size,"სიმბოლოა სფეისის ჩათვლით"); // სიმბოლოების დათვლა სფეისის ჩათვლით 
const fileSymbolsWithoutSpace = countSymbolsWithoutWhitespace(content) //გამოვძახე უსპეისოდ მთვლელი
console.log(fileSymbolsWithoutSpace,"სიმბოლოა უსფეისოდ")
const fileLongestWord = findLongestWord (content)
console.log("ტექსტში ყველაზე გრძელი სიტყვაა ", fileLongestWord)
const fileShortestWord = findShortestWord(content)
console.log("ტექსტში ყველაზე მოკლე სიტყვაა ", fileShortestWord);
}
}else {
    reject('No file selected');
}})
}


function countWords(text) {   // სიტყვების მთვლელი ფუნქცია
    const words = text.match(/\b\w+\b/g);
    
    return words ? words.length : 0;
}

function countSymbolsWithoutWhitespace(text) { // სიმბოლოების მთვლელი ფუნქცია სფეისების გარეშე
    const textWithoutWhitespace = text.replace(/\s/g, "");
    return textWithoutWhitespace.length;
}

function findLongestWord(text) {   // დიდი სიტყვის მპოვნელი ფუნქცია
    const words = text.match(/\b\w+\b/g);

    if (!words || words.length === 0) {
        return null; 
    }

    let longestWord = words[0];

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}
function findShortestWord(text) {   // პატარა სიტყვის მპოვნელი ფუნქცია
    const words = text.match(/\b\w+\b/g);

    if (!words || words.length === 0) {
        return null; 
    }

    let shortestWord = words[0];

    for (const word of words) {
        if (word.length < shortestWord.length) {
            shortestWord = word;
        }
    }

    return shortestWord
}