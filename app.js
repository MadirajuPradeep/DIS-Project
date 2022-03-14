const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')


menu.addEventListener('click',function()
{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

let Protein = [22,32,12,43,78,24,64];

let days = ['Jan 1','Jan 2','Jan 3','Jan 4','Jan 5','Jan 6','Jan 7'];



// data.map((item)=>{

//     coinNames.push(item.slug);

//     coinPrices.push(item.metrics.market_data.price_usd);

// })


// let date = moment(new Date()).format('lll');



new Chart(document.getElementById("barchartexample"), {
    type: 'line',

    data: {

        labels: days,

        datasets: [

        {

            label: "Coin Price (USD)",

            backgroundColor: 'transparent',
            borderColor: '#2a71d0',
            borderWidth: 4,
            data: Protein

        }

        ]

    },

    options: 
    {

        legend: { display: false },

        title: 
        {

        display: true,

        text: 'Protein Consumption Chart'
        }
    }
});
