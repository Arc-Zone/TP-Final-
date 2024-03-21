let faqArticle = document.getElementById('faq-article')
fetch('../data/data.json')
    .then(response => response.json())
    .then(faqs=> {
        faqs.forEach(faq => {
                let article = document.createElement('article');
                article.innerHTML = `
                    <h3 >${faq.question}</h3>
                    <p class="answer"> <q>  ${faq.answer} </q></p>
                `
                article.classList.add("contain-answer");
                article.setAttribute("id" , `${faq.id}`)
                faqArticle.appendChild(article);

                let idArticle = document.getElementById(`${faq.id}`)
                idArticle.addEventListener('click' , function(){
                    let answer = article.querySelector('.answer');
                        if(answer.style.display === "block"){
                            answer.style.display = "none"
                        }else{
                            answer.style.display = "block"
                        }
                })
        });
    })


    //Coming soon features

    // let currentIndex = 0
    // const prevAwnser = document.getElementById("previous-awnser")
    // const nextAwnser = document.getElementById('next-awnser')
    // prevAwnser.addEventListener('click' , function(){
    //     let answers = document.querySelectorAll('.contain-answer');
    //     if (currentIndex > 0) {
    //         answers[currentIndex].style.display = 'none'; 
    //         currentIndex--; // Décrémenter l'index
    //         answers[currentIndex].style.display = 'block'; 
    //     }else if (currentIndex < 0){
    //         currentIndex = answers.length
    //     }
    // })
    // nextAwnser.addEventListener('click' , function(){
    //     let answers = document.querySelectorAll('.contain-answer'); 
    //     if (currentIndex < answers.length - 1) {
    //         answers[currentIndex].style.display = 'none'; 
    //         currentIndex++; // Incrémenter l'index
    //         answers[currentIndex].style.display = 'block'; 
    //     } else if (currentIndex === answers.length - 1) {
    //         answers[currentIndex].style.display = 'none';
    //         currentIndex = 0;
    //         answers[currentIndex].style.display = 'block'; 
    //     }
    // });
