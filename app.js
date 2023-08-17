const textarea = document.getElementById("textarea")
const wordCountp = document.getElementById("wordCountp")
// bold button
const boldButton = document.getElementById("boldButton").addEventListener("click", ()=>{
    if(textarea.style.fontWeight==="bold"){
        textarea.style.fontWeight="normal" 
    }
    else{
        textarea.style.fontWeight="bold"
    }
})
// size button
const sizeButton = document.getElementById("sizeButton").addEventListener("input",()=>{
    const sizevalue = document.getElementById("sizeButton").value
    textarea.style.fontSize = sizevalue+"px"
})
// italic button
const italic = document.getElementById("italic").addEventListener('click',()=>{
    if(textarea.style.fontStyle==="italic"){
        textarea.style.fontStyle ="normal"
    }
    else{
        textarea.style.fontStyle = "italic"
    }
})
// underLine button
const underLine = document.getElementById("underLine").addEventListener('click',()=>{
    if(textarea.style.textDecoration === "underline"){
        textarea.style.textDecoration = "none"
    }
    else{
        textarea.style.textDecoration = "underline"
    }
})
// alignLeft button
const alignLeft = document.getElementById("alignLeft").addEventListener('click',()=>{
    if(textarea.style.textAlign === "left"){
        textarea.style.textAlign = "left"
    }
    else{
        textarea.style.textAlign = "left"
    }
})
// alignCenter button
const alignCenter = document.getElementById("alignCenter").addEventListener('click',()=>{
    if(textarea.style.textAlign === "center"){
        textarea.style.textAlign = "left"
    }
    else{
        textarea.style.textAlign = "center"
    }
})
// alignRight button
const alignRight = document.getElementById("alignRight").addEventListener('click',()=>{
    if(textarea.style.textAlign === "right"){
        textarea.style.textAlign = "left"
    }
    else{
        textarea.style.textAlign = "right"
    }
})
// alignJustify button
const alignJustify = document.getElementById("alignJustify").addEventListener('click',()=>{
    if(textarea.style.textAlign === "justigy"){
        textarea.style.textAlign = "left"
    }
    else{
        textarea.style.textAlign = "justify"
    }
})
// fontColor button
const fontColor = document.getElementById("fontColor").addEventListener("input",()=>{
    // textarea.style.color = fontColor.value;
    const color =document.getElementById("fontColor").value
    textarea.style.color = color
    console.log(color)
})
// bgColor button
const bgColor = document.getElementById("bgColor").addEventListener("input",()=>{
    // textarea.style.color = fontColor.value;
    const color =document.getElementById("bgColor").value
    textarea.style.background = color
    console.log(color)
})
//fontFamily button
const fontFamily = document.getElementById("fontFamily").addEventListener('input',()=>{
    const family = document.getElementById("fontFamily").value
    if(family==="Ubuntu"){
        textarea.style.fontFamily = "'Ubuntu', sans-serif"
    }
    if(family==="Raleway"){
        textarea.style.fontFamily = "'Raleway', sans-serif"
    }
    if(family==="Kurale"){
        textarea.style.fontFamily = "'Kurale', serif"
    }
    if(family==="Bricolage Grotesque"){
        textarea.style.fontFamily = "'Bricolage Grotesque', sans-serif"
    }
    if(family==="Lato"){
        textarea.style.fontFamily = "'Lato', sans-serif"
    }
    if(family==="Montserrat"){
        textarea.style.fontFamily = "'Montserrat', sans-serif"
    }
    if(family==="Open Sans"){
        textarea.style.fontFamily = "'Open Sans', sans-serif"
    }
    if(family==="Poppins"){
        textarea.style.fontFamily = "'Poppins', sans-serif"
    }
    if(family==="Source Code Pro"){
        textarea.style.fontFamily = "'Source Code Pro', monospace"
    }
})

//word Count 
textarea.addEventListener('input',()=>{
    const mainSentence = textarea.value;
    const words = mainSentence.split(' ')
    const WordCount = words.length;
    wordCountp.innerText =WordCount +" Words"
})

//download button
const download = document.getElementById('download').addEventListener('click',()=>{
    const text = textarea.value;
    const bold = new Blob([text],{type:"text/plain"})
    const url = URL.createObjectURL(bold)
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "downloaded-text.txt";
      downloadLink.textContent = "Download";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(url);
})
