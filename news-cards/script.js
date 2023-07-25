
let articl = document.getElementById('section__container');

let img = 'https://media.wired.com/photos/64838ea49a01d944fee35efc/191:100/w_1280,c_limit/9-Years-After-the-Mt.-Gox-Hack,-Feds-Indict-Alleged-Culprits-Security-GettyImages-1197093074.jpg';
const time = 'June 29 2023'
let title = '9 Years After the Mt. Gox Hack, Feds Indict Alleged Culprits'
let discription = "Plus: Instagram's CSAM network gets exposed, Clop hackers claim credit for MOVEit Transfer exploit, and a $35 million crypto heist has North Korean ties.";

const url = fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=3553f00c26ac42c9aba89b3adc42d59a");
// const url = fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=3553f00c26ac42c9aba89b3adc42d59a");
   
url.then((result) => {
    return result.json();
}).then((result) => {
    console.log(result['articles'][1])
    for (let articles of result['articles']) {
        let news_card = `
                <article class="news__article" id="news__article">
                    <figure class="news__article__figure">
                    <img src="${articles['urlToImage']}" alt="" width="400px" height="auto">
                        <div class="date__time__container">
                            <span class="material-symbols-outlined">schedule</span>
                            <p class="date__time">${articles['publishedAt']}</p>
                        </div>
                    </figure>
                    <h3 class="news__article__title">${articles['title']}</h3>
                    <p class="news__article__discription">${articles['description']}</p>
                    <a href="" class="read__more__container">
                        <p class="read__more__text">Read more</p>
                        <span class="read__more__arrow material-symbols-outlined">arrow_forward</span>
                    </a>
                </article>
            `
            articl.insertAdjacentHTML("afterbegin", news_card);
    }
})