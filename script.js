var diseaseList = {
     deseases : [{id: 0, icon: "headache_icon.png", content: {title: "Головная боль", value: "Боль может усиливаться при физической нагрузке"}, changed: false},
     {id: 1, icon: "stomach.png", content: {title: "Боль в животе", value: "Боль может возникать на фоне стресса"}, changed: false},
     {id: 2, icon: "eyes.png", content: {title: "Боль в глазу", value: ": покраснение глаза, размытое зрение, выпячивание глазного яблока"}, changed: false},
     
   
    ],

     drugs: [{id: 0, icon: "drug_icon.png", content: {title: "Лекарство", value: "Панадол, Аспирин"}},
     {id: 1, icon: "drug_icon.png", content: {title: "Лекарство", value: "ИБУПРОФЕН КАПС "}},
     {id: 2, icon: "drug_icon.png", content: {title: "Лекарство", value: " Увлажняющие капли -"}}],
     updateList: function(index) {
        if (this.drugs[index]) {
            var temp = this.deseases[index]
            this.deseases[index] = this.drugs[index]
            this.drugs[index] = temp
            this.deseases[index].changed = true
        }

        if (this.deseases[index].id == index && this.deseases.changed) {
            this.deseases[index] = this.drugs[index]
        }
     }
}

var handler = {
    onClick: function(e) {
        diseaseList.updateList(e)
        view.displayItems()
    }
}


var view = {
    displayItems: function() {
        var diseaseUl = document.querySelector('ul')
        diseaseUl.innerHTML = '';
         diseaseList.deseases.forEach(function(item, index) {
            var diseaseLi = document.createElement('li');
            diseaseLi.addEventListener("click", () => handler.onClick(item.id))
            var div = ` <div class="disease-box">
            <div class="disease-box-logo">
                <img src="/images/content/${item.icon}" alt="" class="disease-box-logo__image">
            </div>
            <div class="disease-box-content">
                <h4>${item.content.title}</h4>
                <p>${item.content.value}</p>
            </div>
        </div>`
            diseaseLi.innerHTML = div
            diseaseUl.appendChild(diseaseLi)
         }) 
           
        
    }
}


view.displayItems()
