
tinymce.PluginManager.add("synonym", function (editor, url) {

  /*add the custom button to the editor toolbar and customize the action events and UI*/

  editor.addButton("synonym", {
    text: "Lookup Synonyms",
    icon: false,
    onclick: function () {
 
      let whitebg = document.getElementById("white_background");
      let dlg = document.getElementById("syn_dlg");

      whitebg.style.display = "block";
      dlg.style.display = "block";
      
      let winWidth = window.innerWidth;
      let winHeight = window.innerHeight;
      
      console.log( `${winWidth/2}-${480/2}px`);
      dlg.style.left= `${(winWidth/2)-(480/2)}px`;
      dlg.style.top= `60px` ; 

    },
  });

});

// const closeDlg = ()=>{
//   history.back();
// }


const closeDlg = () => {
   let whitebg = document.getElementById("white_background");
   let dlg = document.getElementById("syn_dlg");
   let wordplace = document.getElementById("word");

      whitebg.style.display = "none";
      dlg.style.display = "none";
      // wordplace.value = ``;
    
}

const fetchSynonym = () => {

  let display = document.querySelector(".display");
  let word = document.getElementById("word").value;
  let parent = document.getElementById("selector_syn");

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }

  removeAllChildNodes(parent);


  let url = `https://api.datamuse.com//words?ml=${word}`;

  
  fetch(url).then((response)=>{
    return response.json();  
  }).then((data)=>{
    // let[top1,top2,top3,top4,top5,top6,top7,top8] = data; 
    
    data.forEach((element) => {
      let addOption = `<option class="count_syn" value"=${element.word}">${element.word}</option>`;
      selector_syn.insertAdjacentHTML('beforeend',addOption);
    });
    
  })

}

const selector = () => {

  let out_scr = document.getElementById("count_syn");
  let selectElement = document.getElementById("selector_syn");
  
  let valueSelected = selectElement.options[selectElement.selectedIndex].value;
  out_scr.value = valueSelected;

  document.getElementById("count_syn").select();
  document.execCommand("copy");

}