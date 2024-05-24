
let btn=document.querySelector('.btn');
let title=document.querySelector('.title');
async function handleclick(){
    let tab=await chrome.tabs.query({active: true, currentWindow: true});
    alert("Title is " + "--> "+ tab[0].title);
    title.innerHTML=`${tab[0].title}`
}
btn.addEventListener('click',async ()=>{
    handleclick();
})
