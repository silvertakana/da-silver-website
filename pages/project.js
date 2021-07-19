var projectDisplayer = document.getElementById("projects displayer")
var searcher = document.getElementById("searcher")
var search = function(){}
fetch("projects.txt")
.then(r => r.text()).then(d=>{
    d = d
    var listofprojects = d.split(/\n/);
    search = function(){
        var searchinput = (searcher.value).toLowerCase();
        var possiblesearch = []
        listofprojects.forEach((item,id)=>{
            if(item.toLowerCase().includes(searchinput))possiblesearch.push(item)
        })
        projectDisplayer.innerHTML = ""
        possiblesearch.forEach((item,id)=>{
             let project = `
             <li class="project">
                <a href="https://github.com/silvertakana/${item}">${item}</a>
             </li>`
            //  console.log(projectDisplayer.innerHTML)
             projectDisplayer.innerHTML += project;
        })
        // var mdlink = "https://raw.githubusercontent.com/silvertakana/"
        // + i + "/main/description.txt"
        // fetch(mdlink).then(x => x.text()).then(y => {
        //     var mddata = y.split(/\n/)
        // });    
    }
    search()
    
})

