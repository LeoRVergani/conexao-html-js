const logo = document.getElementById('logo');
console.log(logo);

const postAuthor1 = document.getElementsByClassName('post-autor')[0];
const postAuthor2 = document.getElementsByClassName('post-autor')[1];

console.log(postAuthor1);
console.log(postAuthor2);

// Prática:
// 1. datas dos posts
const dataposts1 = document.getElementsByClassName('post-data')[0];
const dataposts2 = document.getElementsByClassName('post-data')[1];

console.log(dataposts1);
console.log(dataposts2);


// 2. textos dos posts
// 3. listas com os links das redes sociais

// 4. segundo post
// 5. formulário
// 6. section com ambos os posts

const secondPostText = document.querySelector('#post02 .post-texto');
console.log(secondPostText);

const footerSocial = document.querySelectorAll('footer .lista_redes li');
    footerSocial.forEach((rede, index)) => {
        console.log(rede);
    }

