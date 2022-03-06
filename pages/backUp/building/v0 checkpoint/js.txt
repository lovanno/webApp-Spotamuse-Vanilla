
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

    /*      shoppingCart -  separate modules (Modal 1)               */  
        var count = 1;  /*keeps track of number of items added*/
        let boxAddCount = 0;
        let cartContainer = document.querySelector(".cartContainer");  
        let cartTotalPrice = document.querySelector(".prodPrice");
        const totalShipping = document.querySelector("p.cartProdSale.-\\31");


        /*Cart Buttons*/
        cartOpener = document.querySelector("li.personalCartLink.\\33");
        var modalCheckoutCart = document.getElementById("modalCheckout");
        var cartCloseX = document.getElementsByClassName("close")[0];



        /*      productDesc -  separate modules (Modal 2)               */
        favOpener = document.querySelector("li.personalCartLink.\\32"); 
        var modalFavorites = document.getElementById("modalFavorites");
        var favModalCloseX = document.querySelector("#modalFavorites > div > div.modal-header.\\32  > span");



/*                  modal Functions                       */
        cartOpener.onclick = function() {   /*opens cart if cart btn is clicked*/
            document.body.style.overflowY = "hidden";
            modalCheckoutCart.style.display = "block";
        }

        cartCloseX.onclick = function() {        /*closes cartModal (Modal 1)*/
            document.body.style.overflowY = "visible";
            modalCheckoutCart.style.display = "none";
        }

        favOpener.onclick = function() {   /*opens cart if cart btn is clicked*/
            document.body.style.overflowY = "hidden";
            modalFavorites.style.display = "block";
        }

        favModalCloseX.onclick = function() {        /*closes favoritesModal (Modal 2)*/
            document.body.style.overflowY = "visible";
            modalFavorites.style.display = "none";
        }

        
        window.onclick = function(event) {        /*closes modal if click is outside of modal*/
            if (event.target == modalCheckoutCart) {
                modalCheckoutCart.style.display = "none";
                document.body.style.overflowY = "visible";
            }

            if (event.target == modalFavorites) {
                modalFavorites.style.display = "none";
                document.body.style.overflowY = "visible";
            }
        }
 

/***!          General Functions              !***/
        function hasClass(elem, className) {            /*allows to access created button elements*/
            return elem.classList.contains(className);
        }
 
        function htmlSlice(element, number){
            return element.innerHTML.slice(number);
        }

        function wordTest(str) { 
            return str.split(" ");
        }
 
        function spaceTens(num){
            return num.toString().replace(/\B(?<!\.\d*)(?=(\d{1})+(?!\d))/g, " ")
        }

        function retrieveProdImage(image){
            const prodImgRetrieve = window.getComputedStyle(image).backgroundImage; 
            const prodImgUrl = "url(\".." + prodImgRetrieve.slice(141, -1) + ")";
            return prodImgUrl
        }
 




/*          Cart Modal 1 Section   - separate Modules (Modal 1)                    */
            function newBox(){      /* Creates Product Boxes*/
                let X = boxAddCount++;    

                /*Div Wrapper "cartBox" */
                const newCartBox = document.createElement("div");
                newCartBox.classList.add("cartBox", + " " + X);
                cartContainer.appendChild(newCartBox);


                /*Div Image "cartProd-Image*/
                const newProdImg = document.createElement("div");
                newProdImg.classList.add("cartProd-image", + " " + X);
                newCartBox.appendChild(newProdImg);


                /*Nested Div Wrapper "textBox" */
                const newProdTextBox = document.createElement("div");
                newProdTextBox.classList.add("cartTextBox", + " " + X);
                newCartBox.before(newProdTextBox);        /*appends to cartBox and only needs to be called once. The rest already loaded*/
                newCartBox.appendChild(newProdTextBox);

                        /*Text for product Checkout Boxes */
                        const newProdHeader = document.createElement("p");
                        newProdHeader.innerHTML = "Product Header";
                        newProdHeader.classList.add("cartProdHeader", + " " + X); 
                        newProdTextBox.appendChild(newProdHeader);

                        const newProdPrice = document.createElement("p");
                        newProdPrice.innerHTML = "Product Price";
                        newProdPrice.classList.add("cartProdPrice", + " " + X);
                        newProdTextBox.appendChild(newProdPrice);

                        const newProdSale = document.createElement("p");
                        newProdSale.innerHTML = "Discount";
                        newProdSale.classList.add("cartProdSale", + " " + X);
                        newProdTextBox.appendChild(newProdSale);

                        const newProdCount = document.createElement("p");
                        newProdCount.innerHTML = "Quantity 0";
                        newProdCount.classList.add("cartProdCount", + " " + X);
                        newProdTextBox.appendChild(newProdCount);

                        const newProdColor = document.createElement("p");
                        newProdColor.innerHTML = "Color";
                        newProdColor.classList.add("cartProdColor", + " " + X);
                        newProdTextBox.appendChild(newProdColor);


                        const newProdSize = document.createElement("p");
                        newProdSize.innerHTML = "Size: ";
                        newProdSize.classList.add("cartProdSize", + " " + X);
                        newProdTextBox.appendChild(newProdSize);



                            /*Creates Trashcan SVG for Remove Product Button -  The SVG properties come from Iconify. I created the following to recreate that SVG */
                            var trashCanSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg'); /*  Creates a path for SVG  */
                            var gClass = document.createElementNS("http://www.w3.org/2000/svg", "g");   /* g class creates attributes */
                                gClass.setAttribute("class", "icon-tabler");
                                gClass.setAttribute("fill", "none");
                                gClass.setAttribute("stroke", "black");

                                gClass.setAttribute("stroke-width", "2");
                                gClass.setAttribute("stroke-linecap", "round");
                                gClass.setAttribute("stroke-linejoin", "round");
                                trashCanSvg.appendChild(gClass);

                            var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');     /*These paths create the lines needed to make a trash can */
                            var path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path'); 
                            var path3 = document.createElementNS("http://www.w3.org/2000/svg", 'path'); 
                            var path4 = document.createElementNS("http://www.w3.org/2000/svg", 'path'); 
                            var path5 = document.createElementNS("http://www.w3.org/2000/svg", 'path'); 

                                path1.setAttribute('d', "M4 7h16");
                                path2.setAttribute('d', "M10 11v6");
                                path3.setAttribute('d', "M14 11v6");
                                path4.setAttribute('d', "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12");
                                path5.setAttribute('d', "M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3");

                                gClass.appendChild(path1);
                                gClass.appendChild(path2);
                                gClass.appendChild(path3);
                                gClass.appendChild(path4);
                                gClass.appendChild(path5);

                                trashCanSvg.setAttribute("role", "img");
                                trashCanSvg.setAttribute("width", "1em");
                                trashCanSvg.setAttribute("height", "1em");
                                trashCanSvg.setAttribute("preserveAspectRatio", "xMidYMid meet");
                                trashCanSvg.setAttribute("viewBox", "0 0 24 24");



                /*          Btns            */
                const addProdDiv = document.createElement("div");   
                addProdDiv.classList.add("addProd", + " " + X);
                newCartBox.appendChild(addProdDiv);

                var newAddDropdown = document.createElement("select");
                newAddDropdown.classList.add("addProdDropdown", + " " + X);
                addProdDiv.appendChild(newAddDropdown);


                /* adds number options to dropdown menu */
                for (var i = 1; i < 9; i++) {
                    var newSelectProdNum = document.createElement("option");
                    newSelectProdNum.innerText = i;
                    newAddDropdown.appendChild(newSelectProdNum);
                }

                const newRemoveProdBtn = document.createElement("button");
                newRemoveProdBtn.classList.add("deleteProd", + " " + X);
                newCartBox.appendChild(newRemoveProdBtn);
                newRemoveProdBtn.appendChild(trashCanSvg);
            }




        /*Cart Modal Variables*/
        const cartTotalSelector = document.querySelector("p.cartProdColor.-\\31 ");  /*Cart Variables (The querySelectors won't correspond to what they truly are. These variables are shares with Products)*/
        const addTest = document.querySelectorAll("button.addItem");
        const spanInsertShipping = '<span class="textAlignRight">FREE</span>';

        var cartOrder = -1;
        var cartTotal = 0;
        let attempt3 = 0;
        var countTotal = 0;
        const cartProdOrder = [];


    /***    Cart Modal 1 Section >>         (16) menProdGrid       section16    |   (19) womenProdGrid          section19  ^16          ***/

            /*      addProd to Cart Section    */
            for(let aBtn of addTest){      
                aBtn.addEventListener("click", function(){          /*sorter will sort by ID. Initially thought to use name, color but ID is easiest*/
                    var prodIdRetrieve = (aBtn.parentElement.parentElement).id;

                    /*+ Creates new prodBox to display clicked item +*/
                    if(cartProdOrder.indexOf(prodIdRetrieve) == -1){   /*much simpler than creating a second array and comparing values between them (This is what's done in Lu Var, my previous project)*/
                        cartProdOrder.push(prodIdRetrieve);
                        newBox();
                        cartOrder++;          

                        const cartProdImage = document.querySelector("div.cartProd-image.\\3" + cartOrder);
                        const newProdCartImage = retrieveProdImage(aBtn.parentElement);
                        cartProdImage.style.backgroundImage = newProdCartImage;

                        const cartProdHeader = document.querySelector("p.cartProdHeader.\\3" + cartOrder);
                        const cartProdPriceSelector = document.querySelector("p.cartProdPrice.\\3" + cartOrder);
                        const cartProdColor = document.querySelector("p.cartProdColor.\\3" + cartOrder);

                        cartProdHeader.innerHTML = (aBtn.parentElement.nextElementSibling.firstElementChild).innerHTML;
                        cartProdPriceSelector.innerHTML = (aBtn.parentElement.nextElementSibling.firstElementChild.nextElementSibling).innerHTML;
                        cartProdColor.innerHTML = (aBtn.parentElement.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling).innerHTML;

                        /*var cartCount = (cartOpener.firstElementChild).textContent.slice(13, -1);*/
                        (totalShipping.previousElementSibling.previousElementSibling).style.color = "transparent";
                        totalShipping.style.display = "block";

                        totalShipping.innerHTML = "Shipping " + (spanInsertShipping);
                    }
                    cartContainer.insertBefore(document.querySelector("div.cartBox.\\3" + cartOrder), (document.querySelector("div.cartBox.-\\31")));

                    const cartProdSale = document.querySelector("p.cartProdSale.\\3" + cartOrder);
                    cartProdSale.style.display = "none"; 

                    /*cart element querySelector's */
                    const cartProdCount = document.querySelector("p.cartProdCount.\\3" + (cartProdOrder.indexOf(prodIdRetrieve)));
                    const cartProdAdder = parseInt(htmlSlice(cartProdCount, -1)) + 1;

                    
                    /* Updates quantity of products that have already been added*/
                    const selectPlaceholder = document.querySelector("select.addProdDropdown.\\3" + (cartProdOrder.indexOf(prodIdRetrieve)));
                    const cartProdPriceSelector2 = document.querySelector("p.cartProdPrice.\\3" + cartOrder);

                    if(selectPlaceholder.value < 8){
                        attempt3 +=  ((parseFloat(htmlSlice(cartProdPriceSelector2, 2))));
                        cartTotalSelector.innerHTML = "Total " + '<span class="textAlignRight">' + "$" + attempt3.toFixed(2) + '</span>';
                        cartProdCount.innerHTML = "Quantity: " + (cartProdAdder);
                        selectPlaceholder.value = cartProdAdder;

                        countTotal++;
                        (cartOpener.firstElementChild).textContent = "Shopping bag(" + countTotal + ")";
                    }
                    else{
                        console.log("You cannot exceed product limit");
                    }
                });
            }


        /*+     Dropdown Menu to select quantity of Products      +*/
        (function() {
            document.body.addEventListener("click", clickButtons);
            function clickButtons(evt) {
            
            try{
                const from = evt.target;
                const sliced = (from.className).slice(0, -2);

                    if(sliced == "addProdDropdown"){
                        const quantityTest = (from.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);
                        const priceChangeTest = (from.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling);

                        var tester2 = parseFloat(htmlSlice(quantityTest, 10));
                        var testerUpPrice = parseFloat(htmlSlice(priceChangeTest, 2));
                        quantityTest.innerHTML = "Quantity: " + from.value; 

                        const newAdder = testerUpPrice * (parseFloat(from.value));
                    

                        /*prevents adding values to total twice or indefinitely*/
                        if(parseInt(from.value) !== tester2){     
                            attempt3 -= testerUpPrice * tester2;    /*This expression subtracts the original product amount from the total. In the next line, the new chosen product quantity will be added to the total*/
                            attempt3 += newAdder;

                            countTotal -= tester2;
                            countTotal += parseFloat(from.value);
                            
                            (cartOpener.firstElementChild).textContent = "Shopping bag(" + countTotal + ")";
                            cartTotalSelector.innerHTML = "Total" + '<span class="textAlignRight">' + "$" + (attempt3).toFixed(2);
                        }
                }
            }
            catch{}

            }
        }())



        /*+     Add Discount to cartTotal       +*/
        document.body.addEventListener("click", function(event){
            const from = event.target;

            if (hasClass(from, 'discountBtn')) {
                const percentOff = parseInt((from.innerText).slice(0,-1));
                var cartTotal = parseFloat(htmlSlice(cartTotalSelector, 7));
                var discountedTotal =(cartTotal-(cartTotal*(percentOff/100)));
                cartTotalSelector.innerHTML = "Total $" + (discountedTotal.toFixed(2));

                attempt3 = discountedTotal;
                alert(percentOff + "% discount applied!");           /*update this. Make it a popup. Might change functionality by having an option to continue adding discount or undue*/
            } 


            if(hasClass(from, "deleteProd") || hasClass(from.parentElement, "deleteProd")){
                
                (document.querySelector("div.cartBox.\\3" + (from.parentElement.className).slice(-1))).style.display = "none";
                const prodDeletePrice = (document.querySelector("p.cartProdPrice.\\3" + ((from.parentElement.className).slice(-1))));
                const prodDeleteCount = (document.querySelector("p.cartProdCount.\\3" + ((from.parentElement.className).slice(-1))));


                countTotal -= (parseFloat(htmlSlice(prodDeleteCount, 9)));
                (cartOpener.firstElementChild).textContent = "Shopping bag(" + countTotal + ")";

                attempt3 -= ( (parseFloat(htmlSlice(prodDeletePrice, 1))) * (parseFloat(htmlSlice(prodDeleteCount, 9))) );        
                cartTotalSelector.innerHTML = "Total" + '<span class="textAlignRight">' + "$" + Math.abs((attempt3).toFixed(2));

                console.log("Reading Deleted Products has not been Developed");
                if(countTotal == 0){
                    (document.querySelector("p.cartProdHeader.-\\31")).style.color = "black";
                }
            }



        })



    /***    Favorites Modal 2 Section >>         (16) menProdGrid       section16    |   (19) womenProdGrid          section19  ^16          ***/
        const favTest = document.querySelectorAll("button.favoriteItem");
        const favProdIDOrder = [];

        /*+     Close/Open Sizes in favProd   +*/
        document.body.addEventListener("click", clickButtons);
        function clickButtons(evt) {
            const from = evt.target;
            const sliced = from.className.slice(0, -2);

            if (sliced == "openSize") { 
                (from.nextElementSibling).classList.toggle("hideFilterContainer");
            }    
        }
            
        (function() {
            document.body.addEventListener("click", clickButtons);

            function clickButtons(evt) {
                const from = evt.target;

                if(hasClass(from, "favoriteItem")) {
                    const prodIDGrabber = from.parentElement.parentElement.id;

                    if(favProdIDOrder.indexOf(prodIDGrabber) == -1){
                            favProdIDOrder.push(prodIDGrabber);
                    }
                }

                if (hasClass(from, "addFavCartBtn")) {
                    buttonFavOrder = parseInt(from.className.slice(14));

                    if(cartProdOrder.indexOf(favProdIDOrder[buttonFavOrder]) == -1){   /*much simpler than creating a second array and comparing values between them (This is what's done in Lu Var, my previous project*/
                        cartProdOrder.push(favProdIDOrder[buttonFavOrder]);

                        newBox();
                        cartOrder++;

                        const cartProdImage = document.querySelector("div.cartProd-image.\\3" + cartOrder);
                        const newProdCartImage = retrieveProdImage(from.parentElement.firstElementChild);
                        cartProdImage.style.backgroundImage = newProdCartImage;

                        const cartProdHeader = document.querySelector("p.cartProdHeader.\\3" + cartOrder);
                        const cartProdPriceSelector = document.querySelector("p.cartProdPrice.\\3" + cartOrder);
                        const cartProdColor = document.querySelector("p.cartProdColor.\\3" + cartOrder);

                        cartProdHeader.innerHTML = (from.parentElement.firstElementChild.nextElementSibling.firstElementChild).innerHTML;
                        cartProdPriceSelector.innerHTML = (from.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling).innerHTML;
                        cartProdColor.innerHTML = (from.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling).innerHTML;

                        (totalShipping.previousElementSibling.previousElementSibling).style.color = "transparent";
                        totalShipping.style.display = "block";
                        totalShipping.innerHTML = "Shipping " + (spanInsertShipping);

                        console.log("added newProd");     
                    }

                    cartContainer.insertBefore(document.querySelector("div.cartBox.\\3" + cartOrder), (document.querySelector("div.cartBox.-\\31")));

                    const cartProdSale = document.querySelector("p.cartProdSale.\\3" + cartOrder);
                        cartProdSale.style.display = "none"; 

                    const cartProdCount = document.querySelector("p.cartProdCount.\\3" + (cartProdOrder.indexOf(favProdIDOrder[buttonFavOrder])) );
                    const cartProdAdder = parseInt(htmlSlice(cartProdCount, -1)) + 1;
                    

                    const selectPlaceholder = document.querySelector("select.addProdDropdown.\\3" + (cartProdOrder.indexOf(favProdIDOrder[buttonFavOrder])));
                    const cartProdPriceSelector2 = document.querySelector("p.cartProdPrice.\\3" + cartOrder);

                    if(selectPlaceholder.value < 8){
                        attempt3 +=  ((parseFloat(htmlSlice(cartProdPriceSelector2, 2))));
                        cartTotalSelector.innerHTML = "Total " + '<span class="textAlignRight">' + "$" + attempt3.toFixed(2) + '</span>';
                        cartProdCount.innerHTML = "Quantity: " + (cartProdAdder);
                        selectPlaceholder.value = cartProdAdder;

                        countTotal++;
                        (cartOpener.firstElementChild).textContent = "Shopping bag(" + countTotal + ")";
                    }
                    else{
                        console.log("You cannot exceed product limit");
                    }
                }     
            }
        }())



        const favProdContDiv = document.querySelector("div.productGrid.container");
        var newFavCounter = 1;   
        
        /*Hides size dropDownMenu for favProd's - Modal 2*/
        function hideButtons(){
            var sizeTest5 = document.querySelectorAll("div.filtContainer.fav");
            Array.from(sizeTest5).forEach(sideTest5 => sideTest5.classList.add('hideFilterContainer'));
        }

                function newFavItem(){      
                    let X = newFavCounter++;     

                    /*Div Wrapper "cartBox" */
                    const prodContFav = document.createElement("div");
                    prodContFav.classList.add("prodCont", "fav", + X);
                    favProdContDiv.appendChild(prodContFav);

                    const prodImageFav = document.createElement("div");
                    prodImageFav.classList.add("prodImage", "fav", + X);
                    prodContFav.appendChild(prodImageFav);

                    const DeleteItemBtn = document.createElement("button");  
                    DeleteItemBtn.classList.add("deleteItem", + X);
                    prodImageFav.appendChild(DeleteItemBtn);

                    var trashIconSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg'); /*  Creates a path for SVG  */
                            trashIconSvg.setAttribute('class', 'trashIcon');
                            trashIconSvg.setAttribute("viewBox", "0 0 14 16");
                            trashIconSvg.setAttribute("focusable", "false");     

                        var pathTrashIcon1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');     /*These paths create the lines needed to make a trash can */
                            pathTrashIcon1.setAttribute('d', "M14 4v1h-1v10.455c0 .3-.224.545-.5.545h-11c-.276 0-.5-.244-.5-.545V5H0V4h14zm-2 1v10H2V5h10zM9.5 0a.5.5 0 01.5.5V2h4v1H0V2h4V.5a.5.5 0 01.5-.5h5zM9 1H5v1h4V1zM5 8h1v4H5V8zm3 0h1v4H8V8z");
                            pathTrashIcon1.setAttribute('fill-rule', "evenodd");
                            trashIconSvg.appendChild(pathTrashIcon1);
                            DeleteItemBtn.appendChild(trashIconSvg);



                    /*      Text        */
                    const prodTextboxFav = document.createElement("div");
                    prodTextboxFav.classList.add("prodTextBox", "fav", + X);
                    prodContFav.appendChild(prodTextboxFav);

                            const newProdFavHeader = document.createElement("p");
                            newProdFavHeader.innerHTML = "Slim Fit Jersey Shirt";
                            newProdFavHeader.classList.add("prodHeader", "fav", + X); 
                            prodTextboxFav.appendChild(newProdFavHeader);

                            const newProdFavPrice = document.createElement("p");
                            newProdFavPrice.innerHTML = "$ 12.99";
                            newProdFavPrice.classList.add("prodPrice", "fav", + X);
                            prodTextboxFav.appendChild(newProdFavPrice);

                            const newProdFavColor = document.createElement("p");
                            newProdFavColor.innerHTML = "Color: Black";
                            newProdFavColor.classList.add("prodType", "fav", + X);
                            prodTextboxFav.appendChild(newProdFavColor);


                    /* Select Size Menu */
                    const selectSizeDiv = document.createElement("div");
                    selectSizeDiv.classList.add("selectSize", + X);
                    prodContFav.appendChild(selectSizeDiv);

                        const openSizeBtn = document.createElement("button");  
                        openSizeBtn.classList.add("openSize", + X);
                        selectSizeDiv.appendChild(openSizeBtn);

                            const selectHeader = document.createElement("p");
                            selectHeader.innerHTML = "Select size";
                            selectHeader.classList.add("selectHeader", + X);
                            openSizeBtn.appendChild(selectHeader);

                            const dropDownIcon = document.createElement("div");
                            dropDownIcon.classList.add("dropIcon", + X);
                            openSizeBtn.appendChild(dropDownIcon);


                    const filtContFavDiv = document.createElement("div");
                    filtContFavDiv.classList.add("filtContainer", "fav", + X);
                    selectSizeDiv.appendChild(filtContFavDiv);

                        const sortSettingFavBtn1 = document.createElement("button");  
                        sortSettingFavBtn1.classList.add("sortSetting", "fav", + 1);
                        filtContFavDiv.appendChild(sortSettingFavBtn1);

                            const checkBoxFav1 = document.createElement("div");
                            checkBoxFav1.classList.add("checkBox", "fav", + 1);
                            sortSettingFavBtn1.appendChild(checkBoxFav1);

                            const settingNameFav1 = document.createElement("p");
                            settingNameFav1.innerHTML = "XS";
                            settingNameFav1.classList.add("settingName", "fav", + 1);
                            sortSettingFavBtn1.appendChild(settingNameFav1);


                        const sortSettingFavBtn2 = document.createElement("button");  
                        sortSettingFavBtn2.classList.add("sortSetting", "fav", + 2);
                        filtContFavDiv.appendChild(sortSettingFavBtn2);

                            const checkBoxFav2 = document.createElement("div");
                            checkBoxFav2.classList.add("checkBox", "fav", + 2);
                            sortSettingFavBtn2.appendChild(checkBoxFav2);

                            const settingNameFav2 = document.createElement("p");
                            settingNameFav2.innerHTML = "S";
                            settingNameFav2.classList.add("settingName", "fav", + 2);
                            sortSettingFavBtn2.appendChild(settingNameFav2);
                

                        const sortSettingFavBtn3 = document.createElement("button");  
                        sortSettingFavBtn3.classList.add("sortSetting", "fav", + 3);
                        filtContFavDiv.appendChild(sortSettingFavBtn3);

                            const checkBoxFav3 = document.createElement("div");
                            checkBoxFav3.classList.add("checkBox", "fav", + 3);
                            sortSettingFavBtn3.appendChild(checkBoxFav3);

                            const settingNameFav3 = document.createElement("p");
                            settingNameFav3.innerHTML = "M";
                            settingNameFav3.classList.add("settingName", "fav", + 3);
                            sortSettingFavBtn3.appendChild(settingNameFav3);


                        const sortSettingFavBtn4 = document.createElement("button");  
                        sortSettingFavBtn4.classList.add("sortSetting", "fav", + 4);
                        filtContFavDiv.appendChild(sortSettingFavBtn4);

                            const checkBoxFav4 = document.createElement("div");
                            checkBoxFav4.classList.add("checkBox", "fav", + 4);
                            sortSettingFavBtn4.appendChild(checkBoxFav4);

                            const settingNameFav4 = document.createElement("p");
                            settingNameFav4.innerHTML = "L";
                            settingNameFav4.classList.add("settingName", "fav", + 4);
                            sortSettingFavBtn4.appendChild(settingNameFav4);


                    /* Add favProd to Cart Btn*/
                    const addFavCartBtn = document.createElement("button");
                    addFavCartBtn.classList.add("addFavCartBtn", + X);
                    prodContFav.appendChild(addFavCartBtn);

                        var addBagSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg'); /*  Creates a path for SVG  */
                            addBagSvg.setAttribute('class', 'bagIcon');
                            addBagSvg.setAttribute("viewBox", "0 0 24 24");
                            addBagSvg.setAttribute("focusable", "false");     
                                           
                        var pathAddBag1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');     /*These paths create the lines needed to make a trash can */
                            pathAddBag1.setAttribute('d', "M12 .1c2.9 0 4.9 1.4 4.9 3.8v.6h3.8v5.1c0 4.7 2.1 13.3.5 13.3-.7 0-5 1.1-9.2 1.1-4.6 0-9.2-1.1-9.2-1.1 -1.5 0 .5 -8.7.5-13.3V4.4h3.8v-.6c0-2.4 2-3.7 4.9-3.7zm7.6 5.4h-2.7v2.2h-1.1V5.5H8.2v2.2H7.1V5.5H4.4v4c0 1.3-.1 2.9-.4 5.3l-.1.9c-.4 3-.5 3.9-.5 5v1.2c.8.1 1.6.3 2.4.4 2.1.3 4.2.5 6.1.5h.5c1.6 0 3.3-.2 5.2-.5.2 0 2-.4 2.9-.5v-1.4c0-1-.2-1.9-.5-4.7 0-.3-.1-.6-.1-.9-.3-2.4-.4-4-.4-5.3v-4zM12 1.2c-2.3 0-3.8 1-3.8 2.6v.6h7.6v-.6c0-1.7-1.5-2.6-3.8-2.6z");
                            addBagSvg.appendChild(pathAddBag1);
                            addFavCartBtn.appendChild(addBagSvg);
                            

                    const addBagDesc = document.createElement("p");
                    addBagDesc.innerHTML = "Add to Bag";
                    addBagDesc.classList.add("addBagDesc", + X);
                    addFavCartBtn.appendChild(addBagDesc);
                }
 

        
        /*+  Adds favProd to Favorites Modal  +*/
        const favDescDiv = document.querySelector("div.soldOutCont");
        var favProdOrder = 0;

            document.body.addEventListener("click", clickButtons);

            function clickButtons(evt) {
                const from = evt.target;

                if (hasClass(from, "openSize")) {
                    (from.parentElement.lastElementChild).classList.toggle("hideFilterContainer");
                }

                if (hasClass(from, "deleteItem")) {
                    if((from.parentElement.parentElement.parentElement).childElementCount == 2){
                        favDescDiv.style.display = "block";  /* make favDescDiv re-appear if there are no favProds */
                    }
                    (from.parentElement.parentElement).remove();
                }

                if (hasClass(from, "trashIcon")) {
                    if((from.parentElement.parentElement.parentElement.parentElement).childElementCount == 2){
                        favDescDiv.style.display = "block";  /* make favDescDiv re-appear if there are no favProds */
                    }
                    (from.parentElement.parentElement.parentElement).remove();
                }
            }
        


        for(let fBtn of favTest){  

            fBtn.addEventListener("click", function(){  
                const prodIDGrabber = fBtn.parentElement.parentElement.id;

                    if(favProdIDOrder.indexOf(prodIDGrabber) == -1){
                        favProdIDOrder.push(prodIDGrabber);
                        favProdOrder++;                
                        newFavItem();  
                        hideButtons();

                        var favProdImage = document.querySelector("div.prodImage.fav.\\3" + favProdOrder);
                        var favProdHeader = document.querySelector("p.prodHeader.fav.\\3" + favProdOrder);
                        var favProdPrice = document.querySelector("p.prodPrice.fav.\\3" + favProdOrder);
                        var favProdColor = document.querySelector("p.prodType.fav.\\3" + favProdOrder);

                        var newImageTest = retrieveProdImage(fBtn.parentElement);
                        favProdImage.style.backgroundImage = newImageTest;
                    
                        favProdHeader.innerHTML = (fBtn.parentElement.nextElementSibling.firstElementChild).innerHTML;
                        favProdPrice.innerHTML = (fBtn.parentElement.nextElementSibling.firstElementChild.nextElementSibling).innerHTML;
                        favProdColor.innerHTML = (fBtn.parentElement.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling).innerHTML;

                        /*make favDescDiv disappear if a favProd is added*/
                        favDescDiv.style.display = "none";
                    }
                    else{
                        console.log("Refresh to add to favorites again");
                    }
            });    
         }


     
     /***                                  (1) navBar                                      section1                             ***/
        /*SearchProd Section*/
        const inputTest = document.querySelector("input.searchProductInput");
        const sectionHeaders = document.querySelectorAll("h1.sectInfoHeader");
        const shownProgDiv = document.querySelectorAll("div.showAllProd.container");
        const trendingNowDiv = document.querySelector("div.trendingProd.section");
        const pageGrid = document.querySelector("div.shopPageGrid");

        var colorSwitch = 0;
        let arrMen = ['men', 'mens', "men's"];
        let arrWomen = ['women', 'womens', "women's"];
        

        inputTest.addEventListener('input', updateValue);
        function updateValue(e) {
            (inputTest.parentElement).style.color = "transparent";
        }


        /*checks to see if the enter key is pressed*/
        inputTest.onkeydown = function(e){              
            if(e.keyCode == 13){
                const searchTest = inputTest.value;
                /*inputTest.value = "";*/
                (inputTest.parentElement).style.color = "black";
                (inputTest.nextSibling).textContent = searchTest;
                inputTest.value = "";

                for(let e=0; e <sectionHeaders.length; e++){    /*Hides headers for men's and women's section and hides progress bar sections */
                    (sectionHeaders[e].nextElementSibling).style.display = "none";
                    shownProgDiv[e].style.display = "none";
                    trendingNowDiv.style.display = "none";
                }

                ((sectionHeaders[0]).parentElement.parentElement.nextElementSibling).style.display = "none";        
                (sectionHeaders[1]).style.display = "none";
                (sectionHeaders[0]).style.display = "block";
                ((sectionHeaders[0])).innerHTML = "You searched for \"" + searchTest + "\"";
                                

                if(searchTest.indexOf(' ') >=0){
                    console.log("You cannot start with a search with a Space");
                }

                /*+ Resets Product Grid and Displays Searched Product +*/
                for(let m = 0; m< (gridProdSet.children).length; m++){
                    gridProdSet.children[m].style.display = "none";
                    gridProdSet2.children[m].style.display = "none";
                    
                    var prodSearchID = ((gridProdSet.children[m]).id);
                    var prodSearchColor1 = ((gridProdSet.children[m].firstElementChild.nextElementSibling.lastElementChild.previousElementSibling).previousElementSibling).innerText;
                    var prodSearchColor2 = ((gridProdSet2.children[m].firstElementChild.nextElementSibling.lastElementChild.previousElementSibling).previousElementSibling).innerText;
                    


                    /*checks simple search - colors (EX: "black") */
                    if(prodSearchColor1.toLowerCase() == searchTest.toLowerCase()){
                        gridProdSet.children[m].style.display = "block";
                    }

                    if(prodSearchColor2.toLowerCase() == searchTest.toLowerCase()){
                        gridProdSet2.children[m].style.display = "block";
                    }

                

                    /* Uses Input Search and tests it against cases */
                    const splitWord = wordTest(searchTest);     /*This function splits the input into multiple words to allow complex searches (EX: "men's shirt" or "women's black")*/

                    for(word of splitWord){
                        if(prodSearchColor1.toLowerCase() !== word.toLowerCase()){
                            gridProdSet.children[m].style.display = "none";
                        }

                        switch (word.toLowerCase()) {
                            case 'men':
                            case 'mens':
                            case "men's":
                                gridProdSet.children[m].style.display = "block";
                                gridProdSet2.children[m].style.display = "none";
                                colorSwitch = 1;
                            break;
                        }



                        if(prodSearchColor2.toLowerCase() !== word.toLowerCase()){
                            gridProdSet2.children[m].style.display = "none";
                        }
  
                        switch (word.toLowerCase()) {
                            case 'women':
                            case 'womens':
                            case "women's":
                                
                                gridProdSet.children[m].style.display = "none";
                                gridProdSet2.children[m].style.display = "block";
                                colorSwitch = 2;
                            break;
                        }

                        switch (word.toLowerCase()) {
                            case 'pant':
                            case 'pants':
                            case 'jean':
                            case 'jeans':
                                if(prodSearchID < 33){   
                                    gridProdSet.children[m].style.display = "none";
                                    gridProdSet2.children[m].style.display = "none";
                                }
                                else{
                                    gridProdSet.children[m].style.display = "block";
                                    gridProdSet2.children[m].style.display = "block";
                                }
                            break;


                            case 'hoodie':
                            case 'hoodies':
                            case 'sweater':
                            case 'sweaters':
                            case 'sweatshirt':
                            case 'sweatshirts':
                            case 'pull-over' :
                            case 'pull-overs' :
                            case 'pullover':
                            case 'zip-up':
                            case 'zip-ups':
                            case 'zipup':
                            case 'zipups':
                            case 'graphic hoodie':
                            case 'graphic hoodies':
                                if(prodSearchID < 33 && prodSearchID > 16){   
                                    gridProdSet.children[m].style.display = "block";
                                    gridProdSet2.children[m].style.display = "block";
                                }
                                else{
                                    gridProdSet.children[m].style.display = "none";
                                    gridProdSet2.children[m].style.display = "none";
                                }
                            break;


                            case 'shirt':
                            case 'shirts':
                            case 't-shirt':
                            case 't-shirts':
                            case 'tee':
                            case 'tees':
                            case 'short-sleeve':
                            case 'short-sleeves':
                            case 'long-sleeve':
                            case 'long-sleeves':
                            case 'graphic':
                            case 'graphics':
                            case 'graphic shirt':
                            case 'graphic shirts':
                            case 'graphic t-shirts':
                            case 'graphic tee':
                            case 'graphic tees':
                                if(prodSearchID < 17){   
                                    gridProdSet.children[m].style.display = "block";
                                    gridProdSet2.children[m].style.display = "block";
                                }
                                else{
                                    gridProdSet.children[m].style.display = "none";
                                    gridProdSet2.children[m].style.display = "none";
                                }
                            break;
                        }



                        switch (word.toLowerCase()) {
                            case 'skirt':
                            case 'skirts':
                            case 'legging':
                            case "leggings":
                                if(prodSearchID < 33){   
                                    gridProdSet.children[m].style.display = "none";
                                }
                                else{
                                    gridProdSet2.children[m].style.display = "block";
                                }
                            break;


                            case 'top':
                            case 'tops':
                            case 'blouse':
                            case 'blouses':
                            case 'crop-top':
                            case 'crop-tops':
                            case 'croptop':
                            case 'croptops':
                                if(prodSearchID > 16){   
                                    gridProdSet.children[m].style.display = "none";
                                }
                                else{
                                    gridProdSet2.children[m].style.display = "block";
                                }
                            break;
                         }


                        
                        /*Checks if multiple words are inputed and narrows between men/women */
                        if(colorSwitch == 1){
                            pageGrid.classList.add('searchedMenGrid');
                            switch (word.toLowerCase()) {
                            case 'pant':
                            case 'pants':
                            case 'jean':
                            case 'jeans':
                                colorSwitch = 0;
                                if(prodSearchID > 32){   
                                     gridProdSet2.children[m].style.display = "none";
                                }
                            break;

                            case 'hoodie':
                            case 'hoodies':
                            case 'sweater':
                            case 'sweaters':
                            case 'sweatshirt':
                            case 'sweatshirts':
                            case 'pull-over' :
                            case 'pull-overs' :
                            case 'pullover':
                            case 'zip-up':
                            case 'zip-ups':
                            case 'zipup':
                            case 'zipups':
                            case 'graphic hoodie':
                            case 'graphic hoodies':
                                colorSwitch = 0;
                                if(prodSearchID < 33 && prodSearchID > 16){   
                                    gridProdSet2.children[m].style.display = "none";
                                }
                            break;
                            }


                            switch (word.toLowerCase()) {
                            case 'shirt':
                            case 'shirts':
                            case 't-shirt':
                            case 't-shirts':
                            case 'tee':
                            case 'tees':
                            case 'short-sleeve':
                            case 'short-sleeves':
                            case 'long-sleeve':
                            case 'long-sleeves':
                            case 'graphic':
                            case 'graphics':
                            case 'graphic shirt':
                            case 'graphic shirts':
                            case 'graphic t-shirts':
                            case 'graphic tee':
                            case 'graphic tees':
                                colorSwitch = 0;
                                if(prodSearchID < 17){   
                                    gridProdSet2.children[m].style.display = "none";
                                }
                            break;
                            }
                        }
                        else if(colorSwitch == 2){
                            pageGrid.classList.add('searchedWomanGrid');
                            switch (word.toLowerCase()) {
                            case 'pant':
                            case 'pants':
                            case 'jean':
                            case 'jeans':
                            case 'skirt':
                            case 'skirts':
                            case 'legging':
                            case "leggings":
                                colorSwitch = 0;
                                if(32 < prodSearchID){   
                                    gridProdSet.children[m].style.display = "none";
                                }

                            break;
                            }


                            switch (word.toLowerCase()) {
                            case 'hoodie':
                            case 'hoodies':
                            case 'sweater':
                            case 'sweaters':
                            case 'sweatshirt':
                            case 'sweatshirts':
                            case 'pull-over' :
                            case 'pull-overs' :
                            case 'pullover':
                            case 'zip-up':
                            case 'zip-ups':
                            case 'zipup':
                            case 'zipups':
                            case 'graphic hoodie':
                            case 'graphic hoodies':
                                colorSwitch = 0;
                                if(prodSearchID < 33 && prodSearchID > 16){   
                                    gridProdSet.children[m].style.display = "none";
                                }
                            break;
                            }


                            switch (word.toLowerCase()) {
                            case 'shirt':
                            case 'shirts':
                            case 't-shirt':
                            case 't-shirts':
                            case 'tee':
                            case 'tees':
                            case 'short-sleeve':
                            case 'short-sleeves':
                            case 'long-sleeve':
                            case 'long-sleeves':
                            case 'graphic':
                            case 'graphics':
                            case 'graphic shirt':
                            case 'graphic shirts':
                            case 'graphic t-shirts':
                            case 'graphic tee':
                            case 'graphic tees':

                            case 'top':
                            case 'tops':
                            case 'blouse':
                            case 'blouses':
                            case 'crop-top':
                            case 'crop-tops':
                            case 'croptop':
                            case 'croptops':
                                colorSwitch = 0;
                                if(prodSearchID < 17){   
                                    gridProdSet.children[m].style.display = "none";
                                }

                            break;
                            }
                        }
                    }

                }
            }
        }
 


 
    /*       (12) Footer                                 section12*             */
    const hideLegalBtn = document.querySelector("button.hideLegal");

    hideLegalBtn.addEventListener("click", function(){
        if((hideLegalBtn.previousElementSibling.firstElementChild).textContent == "The assets used for this site are the property of H&M Hennes & Mauritz AB. All rights are reserved to H&M Hennes & Mauritz AB. I do not claim to own H&M or their content and I am not affiliated with them. This website is for educational purposes only and does not receive revenue in any way. H&M's business concept is to offer fashion and quality at the best price. H&M has since it was founded in 1947 grown into one of the world's leading fashion companies."){
            (hideLegalBtn.previousElementSibling.firstElementChild).textContent = "The assets used for this site are the property of H&M Hennes & Mauritz AB. All rights are reserved to H&M Hennes & Mauritz AB. I do not claim to own H&M or their content and I am not affiliated with them.";
            hideLegalBtn.textContent = "read more";
        }  
        else{
            (hideLegalBtn.previousElementSibling.firstElementChild).textContent = "The assets used for this site are the property of H&M Hennes & Mauritz AB. All rights are reserved to H&M Hennes & Mauritz AB. I do not claim to own H&M or their content and I am not affiliated with them. This website is for educational purposes only and does not receive revenue in any way. H&M's business concept is to offer fashion and quality at the best price. H&M has since it was founded in 1947 grown into one of the world's leading fashion companies."
            hideLegalBtn.textContent = "read less";
        } 
    })
 
 
    /***                (14) prodFilters                                                           section14              ***/
        const filterMenus = document.querySelectorAll(".filtContainer");    /*Hides every filter container on launch*/
        for(let f=0; f <filterMenus.length; f++){
            filterMenus[f].classList.toggle("hideFilterContainer"); 
        }


    /***                (15) selectedFilters                                                           section15              ***/
        const customFiltDiv = document.querySelector("div.selectedFilters.section");    /*Hides Custom Filt Section on launch*/
        customFiltDiv.style.display = "none";

        /*Elements to create new filter div's*/
        const firstCustomFilt = document.querySelector("li.selectFiltName.\\30");
        const ulMenuDiv = document.querySelector("ul.selectedfiltersMenu");
        var filtCount = 0;

        function createNewFilt(){
            filtCount++;
            const newSelectFiltLI = document.createElement("li");
            newSelectFiltLI.classList.add("selectFilt", + " " + filtCount);
            ulMenuDiv.appendChild(newSelectFiltLI);

            const newSelectFiltName = document.createElement("p");
            newSelectFiltName.classList.add("selectFiltName", + " " + filtCount);
            newSelectFiltLI.appendChild(newSelectFiltName);

            const selectFiltDeleteBtn = document.createElement("button");
            selectFiltDeleteBtn.classList.add("selectFiltBtn", + " " + filtCount);
            newSelectFiltLI.appendChild(selectFiltDeleteBtn);
        }



        /* elements/arr for updating filters */
        var arrSortByCount = 0;
        var arrColorCount = 0;
        var arrSizeCount = 0;
        var toggleHidden = 0;

        const arrSortBy = ["recommended", "newest", "lowest price", "highest price"];
        const arrColor = ["beige", "black", "blue", "brown", "gray", "green", "white"];
        const arrSize = ["xs", "s", "m", "l"];

    


        /* large event listener | used to monitor clicks of filter headers and their options */
        document.body.addEventListener("click", function(event){
            const from = event.target;

            /*+ Opens/Closes Filter Headers +*/
            try{
                if (hasClass(from, 'filterBtn')) {  
                    const clickedBtn = (from.className).slice(10);
                    const showGroup = document.querySelector(".filtContainer.\\3" + clickedBtn);

                    /*This resets the filters to hidden everytime a filter is clicked*/
                    var  allFiltBtn= document.querySelectorAll(".filtContainer");
                    Array.from(allFiltBtn).forEach(allFiltBtn => allFiltBtn.classList.add('hideFilterContainer'));


                    /*Whenever a different button is pressed, the if statement isn't read. Only the else statement is read and updates the needed value for the boolean, then reset to repeat like a cycle. 
                    Think if it like entering and exiting a door. Once you enter, you can only exit. This allows a button to be toggled between hidden and visible. I can't just use toggle because all values are set to hidden above. */
                    if(toggleHidden == clickedBtn){
                       showGroup.classList.add("hideFilterContainer");
                       toggleHidden = -1;
                    }
                    else{
                        showGroup.classList.remove("hideFilterContainer");
                        toggleHidden = clickedBtn;
                    }
                }
            }
            catch{
                console.log("All Filter Settings Modal has not been developed");
            }


            /*+ When a Filter Option is Pressed, the Product Grid Updates  +*/
            if(hasClass(from, 'sortSetting')){
                (from.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling).style.display = "block";

                [...gridProdSet.children].forEach(element => {
                        element.style.display = "block";
                    });
                [...gridProdSet2.children].forEach(element2 => {
                        element2.style.display = "block";
                });

                createNewFilt();
                newCustomFilt = (from.firstElementChild.nextElementSibling).innerHTML;
                customFiltDiv.style.display = "block";

                if(filtCount < 10){
                    const newFilt = document.querySelector("p.selectFiltName.\\3" + filtCount);
                    newFilt.innerHTML = newCustomFilt;
                }
                else{
                    const newFilt = document.querySelector("p.selectFiltName.\\3" + spaceTens(filtCount));
                    newFilt.innerHTML = newCustomFilt;
                }



                /*Filter Section */
                if(newCustomFilt.toLowerCase() == "lowest price"){      /* lowest price filter */
                    arrSortByCount++;           
                    [...gridProdSet.children]
                        .sort((a,b)=>parseFloat(htmlSlice(a.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling, 2))>parseFloat(htmlSlice(b.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling, 2))?1:-1)
                        .forEach(node=>gridProdSet.appendChild(node));
                        
                    [...gridProdSet2.children]
                        .sort((a,b)=>parseFloat(htmlSlice(a.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling, 2))>parseFloat(htmlSlice(b.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling, 2))?1:-1)
                        .forEach(node=>gridProdSet2.appendChild(node));
                }


                if(newCustomFilt.toLowerCase() == "highest price"){     /* highest price filter */
                    arrSortByCount++;   
                    [...gridProdSet.children]
                        .sort((a,b)=>parseFloat(htmlSlice(b.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling, 2))>parseFloat(htmlSlice(a.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling, 2))?1:-1)
                        .forEach(node=>gridProdSet.appendChild(node));

                    [...gridProdSet2.children]
                        .sort((a,b)=>parseFloat(htmlSlice(b.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling, 2))>parseFloat(htmlSlice(a.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling, 2))?1:-1)
                        .forEach(node=>gridProdSet2.appendChild(node));
                }


                if(newCustomFilt.toLowerCase() == "newest"){    /* newest product filter */
                    arrSortByCount++;
                    [...gridProdSet.children].forEach(element => {
                        if(!(element.lastElementChild.lastElementChild).innerText.includes("New Arrival")){
                            element.style.display = "none";
                        }
                    });

                    [...gridProdSet2.children].forEach(element2 => {
                        if(!(element2.lastElementChild.lastElementChild).innerText.includes("New Arrival")){
                            element2.style.display = "none";
                        }
                    
                    });
                }

                if(arrSize.some(size => size == newCustomFilt.toLowerCase())){  /* product size filter */
                    arrSizeCount++
                }

                if(arrColor.some(color => color == newCustomFilt.toLowerCase())){   /* product color filter */
                    arrColorCount++; 
                    [...gridProdSet.children].forEach(element => {
                        if((element.lastElementChild.lastElementChild.previousElementSibling.previousElementSibling.innerHTML).toLowerCase() !== newCustomFilt.toLowerCase()){
                            element.style.display = "none";
                        }
                    });

                    [...gridProdSet2.children].forEach(element2 => {
                        if((element2.lastElementChild.lastElementChild.previousElementSibling.previousElementSibling.innerHTML).toLowerCase() !== newCustomFilt.toLowerCase()){
                            element2.style.display = "none";
                        }
                    });
                }

                    
                /* Hides Previous Filter Option IF | Next Filter that is pressed is in same section */
                const allCustomFilts = document.querySelectorAll("li.selectFilt");
                for(let j = 0; j<allCustomFilts.length; j++){
                    if(arrSizeCount > 1){
                        const index = [...arrSize].indexOf((allCustomFilts[j].firstElementChild.innerHTML).toLowerCase());
                            if (index > -1) {
                                allCustomFilts[j].remove();
                                break;
                            }     
                    }

                    if(arrSortByCount > 1){
                        const index = [...arrSortBy].indexOf((allCustomFilts[j].firstElementChild.innerHTML).toLowerCase());
                            if (index > -1) {
                                allCustomFilts[j].remove();
                                break;
                            }     
                    }

                    if(arrColorCount > 1){
                        const index = [...arrColor].indexOf((allCustomFilts[j].firstElementChild.innerHTML).toLowerCase());
                            if (index > -1) {
                                allCustomFilts[j].remove();
                                break;
                            }     
                    }
                }

                    
            }


            /*+ Resets Product Grid and Deletes Filter whenever X btn is pressed +*/
            if(hasClass(from, 'selectFiltBtn')){
                const allCustomFilts = document.querySelectorAll("li.selectFilt");  
                [...gridProdSet.children].forEach(element => {
                        element.style.display = "block";
                    });

                [...gridProdSet2.children].forEach(element2 => {
                        element2.style.display = "block";
                });


                if(allCustomFilts.length <= 2){
                    (from.parentElement.parentElement.parentElement.parentElement).style.display = "none";
                }

                (from.parentElement).remove();
            }


            /*+ Deletes all Filters and Resets Product Grid +*/
            if(hasClass(from, "clearSelectFilBtn")){
                const allCustomFilts = document.querySelectorAll("li.selectFilt");          /*updates nodes everytime because allCustomFilts is created everytime a new filter is pressed*/
                (from.parentElement.parentElement).style.display = "none";


                /*[...allCustomFilts].forEach(element=> element.remove());*/
                [...allCustomFilts].forEach(element=> {
                    if((element.firstElementChild.textContent) != "Enter Filter"){
                        element.remove();
                        alert("Readding Elements has not been Developed");
                    }
                });

                
                [...gridProdSet.children].forEach(element => {
                        element.style.display = "block";
                    });

                [...gridProdSet2.children].forEach(element2 => {
                        element2.style.display = "block";
                });
            }


        })
        





    /***       (17) showAllProd1 (mens)                   section17             |            (20) showAllProd2 (wmns)                        section20  ^17             ***/

        /*Creates Access to Products*/
        const gridProdSet = document.querySelector("div.menProdGrid.section > div.productGrid.container");
        const gridProdSet2 = document.querySelector("div.womenProd.section > div.productGrid.container");

        for(let m = 32; m< (gridProdSet.children).length; m++){     /*+ Makes last 16 products hidden when shopPage is opened +*/
            gridProdSet.children[m].style.display = "none";
            gridProdSet2.children[m].style.display = "none";
        }


        /*+ Allows User to see More Products or See Less + */
        const hideLastProd = document.querySelectorAll("button.showMoreBtn");
        const shownProdNum = document.querySelectorAll("p.numProdShown");
        const spanInsert = '<span class="upperCase">Showing</span>';

        for(const button of hideLastProd){
            button.addEventListener("click", function(){
                const buttonNum = parseInt((button.className).slice(12))-1;
                const progressBar = (button.previousElementSibling.firstElementChild);
                const prodGrid = (button.parentElement.parentElement.previousElementSibling).firstElementChild;
                const totalProdNum = (button.parentElement.parentElement.previousElementSibling).firstElementChild.childElementCount;


                if(prodGrid.children[prodGrid.children.length-1].style.display == "none"){
                    progressBar.style.width = "100%";
                    shownProdNum[buttonNum].innerHTML =  (spanInsert) + " " + totalProdNum + " of " + totalProdNum + " Items";
                    button.innerHTML = "Load Less Products";

                    for(let j = 32; j< (prodGrid.children).length; j++){
                        (prodGrid.children[j]).style.display = "block";
                    }
                }
                else{
                    progressBar.style.width = "66%";
                    shownProdNum[buttonNum].innerHTML =  (spanInsert) + " " + (totalProdNum-16) + " of " + totalProdNum + " Items";
                    button.innerHTML = "Load More Products"

                    for(let j = 32; j <(prodGrid.children).length; j++){
                        (prodGrid.children[j]).style.display = "none";
                    }
                }

            })
        }






    /***                (21) trendingProd                                                            section21             ***/
        const showMoreTest = document.querySelector("button.showTrendsBtn");
        const hideTrendsTest = document.querySelectorAll("button.trendProdName");
        const showedArray = [...hideTrendsTest].slice(3);
        const allCustomFilts = document.querySelectorAll("li.selectFilt");        


        for(const trends of showedArray){
            trends.classList.toggle("hideFilterContainer");
        }

        showMoreTest.addEventListener("click", function(){
            for(const trends of showedArray){
                trends.classList.toggle("hideFilterContainer"); 
            }

            if(showMoreTest.textContent == "Show More (+8)"){
                showMoreTest.textContent = "show less";
            }
            else{
                showMoreTest.textContent = "Show More (+8)";
            }
        })
 