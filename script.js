let myLead = []

let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const tabBtn = document.getElementById ("tab-btn")


let leadFromLocalStorage = JSON.parse( localStorage.getItem("myLead") )



tabBtn.addEventListener("click", function(){
    // console.log(tabs[0].url)
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
       
    // })

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
     
        myLead.push(tabs[0].url)
        localStorage.setItem("myLead", JSON.stringify( myLead ))
        render(myLead)


    })
    
})


if (leadFromLocalStorage) {
    myLead = leadFromLocalStorage
    render(myLead)
}

deleteBtn.addEventListener("dblclick", function(){
    
    localStorage.clear()
    myLead = []
    render(myLead)
})


inputBtn.addEventListener("click", function() {
   myLead.push(inputEl.value)
   inputEl.value = ''
   localStorage.setItem("myLead", JSON.stringify(myLead))
   render(myLead)

   console.log(localStorage.getItem("myLead"))
})





function render(lead) {
        let listItems = ""

    for (let i = 0; i < lead.length; i++) {
        listItems += `<li>
        <a target= '_blank' href='${lead[i]}'> ${lead[i]}
        </a>
        </li>`
    
    }
        ulEl.innerHTML = listItems
} 
   
