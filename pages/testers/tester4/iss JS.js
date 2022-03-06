    /*Sort data | 3 Tasks
    1: Sort by Alphabetical
    2: Sort by Age
    3: Sort by Country */





    const sortUser_api = 'https://randomuser.me/api/?inc=gender,name,location';
    const userPic_api = 'https://randomuser.me/api/?inc=picture';

    const getAllUsers = 'https://randomuser.me/api/?results=100'


    const nameArr = [];
    const sortAge = [];
    const sortCountry = [];

    async function getAlpha(){
        
        const response = await fetch(getAllUsers);
        const data = await response.json();


        for(let user of data.results){
            let {first, last} = user.name;
            let fullName = first + " " + last;

            nameArr.push(fullName);
            nameArr.sort();
        }


        for(let h = 0; h<nameArr.length; h++){
            console.log(nameArr[h]);
        }
        

    }






    async function getAge(){
        
        const response = await fetch(getAllUsers);
        const data = await response.json();


        for(let user of data.results){

            let {first, last} = user.name;
            let { age } = user.dob
            let fullName = first + " " + last;

            
            sortAge.push(
                {name: fullName,
                    age: age});
        
            

        }

        sortAge.sort(function(a, b){
                return a.age - b.age;
            });

    }





    async function getCountry(){
        const response = await fetch(getAllUsers);
        const data = await response.json();


        for(let user of data.results){


            let { first, last } = user.name;

            let { country } = user.location;

            sortCountry.push(
                {
                    name: first + " " + last,
                    country: country

                }
            )
           
        }


         sortCountry.sort(function(a, b){
                return a.country - b.country;
            });

                 console.log(sortCountry);



    }

    getCountry();


 


/*

    async function getUser(){
        
        const response = await fetch(sortUser_api);
        const data = await response.json();

        const userData = data.results[0];

        let { country } = userData.location;


        console.log(country);


    }

    getUser();

























/*const retrieveAll_url1 = 'https://randomuser.me/api/';

    async function getSpecific(){
        const call = await fetch(retrieveAll_url1);

        const response = await call.json();

        const user1 = response.results[0];

        let { title, first, last } = user1.name;

        console.log(user1.name);

    }

    getSpecific();














/*
fetch (retrieveAll_url1, {
    method: 'GET',
    headers: {
        'Content-Type' : 'application/json'
    },
})
.then(res => res.json())
.then(data1 => console.log(data1))
.then(test =>{

    const data2 = await 
    {email, first_name};
    console.log(data2);
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*const issApi = 'https://api.wheretheiss.at/v1/satellites/25544';



    async function retrieveData(){

        const response = await fetch(issApi);

        const data = await response.json();


        console.log(data);

    }

    retrieveData();






    const regUser_api2 = "https://reqres.in/api/users";


    fetch(regUser_api2, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: 'user 1'

        })
    })
    .then(res => res.json())
    .then (data => console.log(data))











/*                  Section Functionality               

    (1) navBar                                      section1 
            Search for Products (Double Word Complexity // Max 2 Word Searches)
                + Resets Product Grid and Displays Searched Product Each Time
    
    (12) Footer                                     section12*             
            Hide/Show Legal Disclaimer 
        

    (14) prodFilters                                section14    |   (15) selectedFilters                          section15        
            Filters can update Shown Products 
                + Open/Close Filter Headers, Other Filter Options (Div) Close when a Different Filter Header is Pressed
                + When a Filter Option is Pressed, the Product Grid Updates to Display Product Filter
                + Resets Product Grid and Deletes Filter whenever X (Delete) Button is pressed 
                + Can deletes all chosen Filters and Reset Product Grid 


    /* (17) showAllProd1 (mens)                   section17             |            (20) showAllProd2 (wmns)                        section20  ^17             
            User Accesibility for Product Grid
                + User can save favorite products for later
                + User can add favorite products to Cart
                + Allows User to see More or Less Products with a button >> this updates the progress bar of products
    

    /*(21) trendingProd                   section21       
            Allows user to see Trending Fashion (Most Sold Product)   
                + Can show More or Less trending product Name Boxes
    
    
    
    
    /****!                                                       Shared Classes JS                                                              !****/














        /*const apiUrl = "https://api.wheretheiss.at/v1/satellites";


        async function(){

            const response = await fetch(apiUrl);


        }


        const response = [
            {
            "name": "iss",
            "id": 25544
            }
        ]*/
      

