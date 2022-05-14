const projectList = [
    {
        "title": "Animated Infographic",
        "image": "images/projects/craziest.png",
        "imageAlt" : "project screenshot",
        "subtitle": "Website",
        "description": "Interactive infographic with attention grabbing custom animations! \nHandcoded based on <a href=\"https://www.emburse.com/assets/pdfs/21.emb.cmk_craziestexpenses_infographic-fa_outlined.pdf\" target=\"_blank\">static infographic</a> design",
        "buttons": [
            {
                "label": "<i class=\"fas fa-globe mr-2\"></i>View site",
                "ref": "https://www.emburse.com/learn/craziest-expenses-2021"
            },
            {
                "label": "<i class=\"fab fa-github mr-2\"></i>Source code",
                "ref": "https://github.com/weytools/Craziest-Expenses-2021"
            }

        ],
        "footer": "anime.js, currency.js, JavaScript, SVG, CSS"
    }, 
    {
        "title": "Cat Simulator",
        "image": "images/react-v2-small.png",
        "imageAlt" : "project screenshot",
        "subtitle": "React App",
        "description": "Randomly generated cats with depleting needs and button interactions!",
        "buttons": [
            {
                "label": "<i class=\"fas fa-globe mr-2\"></i>Launch app",
                "ref": "./react.html"
            },
            {
                "label": "<i class=\"fab fa-github mr-2\"></i>Source code",
                "ref": "https://github.com/weytools/react-cat-sim"
            }

        ],
        "footer": "React.js, JSX, API, Boostrap, Sass"
    },
    {
        "title": "ROI Calculator",
        "image": "images/projects/roi-calc.png",
        "imageAlt" : "project screenshot",
        "subtitle": "Website",
        "description": "Collaboration with demand gen team to create an engaging form with high fill rates. Captures user data for nurture campaigns and sales funnel",
        "buttons": [
            {
                "label": "<i class=\"fas fa-globe mr-2\"></i>View site",
                "ref": "https://www.emburse.com/solutions/roi-calculator"
            },
            {
                "label": "<i class=\"fab fa-github mr-2\"></i>Source code",
                "ref": "https://github.com/weytools/ROI-Calculator"
            }

        ],
        "footer": "jQuery, Marketo, API, CSS"
    }, 
    {
        "title": "Product Database & UI",
        "image": "images/blits/cover-pic.jpg",
        "imageAlt" : "project screenshot",
        "subtitle": "Desktop App",
        "description": "Normalized database and GUI, replacing handwritten audit system in a manufacturing plant! \nIncludes extra tools and custom calculators.",
        "buttons": [
            {
                "isModal": true,
                "modalTarget": "#blitsModal",
                "label": "<i class=\"fas fa-images mr-2\"></i>Image Gallery"
            },
            {
                "label": "<i class=\"fas fa-video mr-2\"></i>Training Video",
                "ref": "https://youtu.be/7Pq6wX2p1J8"
            }

        ],
        "footer": "WinForms, VB, SQL, WinAPI, Batch"
    },
    {
        "title": "Packing Slip Barcoder",
        "image": "images/barcoder-black.jpg",
        "imageAlt" : "project screenshot",
        "subtitle": " Desktop App",
        "description": "Lightweight utility for barcoding user input into an existing PDF",
        "buttons": [
            {
                "isModal": true,
                "modalTarget": "#barcoderModal",
                "label": "<i class=\"fas fa-images mr-2\"></i>Image Gallery"
            },
            {
                "label": "<i class=\"fab fa-github mr-2\"></i>Source code",
                "ref": "https://github.com/weytools/Lane-Pack-Barcoder"
            }

        ],
        "footer": ".NET, C#, WPF, XAML, iText Library"
    },
    {
        "title": "Urban Leaf",
        "image": "images/urban-leaf.png",
        "imageAlt" : "project screenshot",
        "subtitle": "Company site",
        "description": "Company site with full e-commerce functionality!",
        "buttons": [
            {
                "label": "<i class=\"fas fa-globe mr-2\"></i>View site",
                "ref": "https://urbanleafmaine.com/"
            },
            {
                "label": "<i class=\"far fa-times-circle mr-2\"></i>Private source",
                "ref": "#",
                "isDisabled": true
            }

        ],
        "footer": "ShopKeep, Authorize.Net, HTML, CSS"
    }
]

export default projectList