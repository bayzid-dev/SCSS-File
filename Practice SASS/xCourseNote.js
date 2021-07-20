                         /// HERE ALL ABOUT SASS

                         // FIRST CLASS -> SASS Introdruction
      //*  Sass হচ্ছে CSS এর একটি পাওয়ারফুল এক্সটেনশন।
     //*  SASS ->  Syntactically Awesome Style Sheet
    //*  it's the extension of CSS

                          // WHY SASS
    //*  SASS has some special extra features that don't exist in css
   //*  Variable,     nested rules ,     mixins ,     imports ,     inheriatance   etc      
  //* to make our code simpler & more maintainable
 //* and don't need to repeat code again again the great feature of sass

                         // 2nd Class -> sass variables and nesting css rules!

  //*  SASS Variable declare er somoy variable er purbe must $ sign use korte hobe
 //*  and variable er por var er value dite hobe
//*  Using sass variable we can use -> number, string , colors, boolean, lists, null

  //* ekta color jodi common hisabe onk jaigai use kri ar oitake change korte cai tahole 
 //*sass variable use korbo eksathe onk gula color change hoye jabe
//*  lets make a sass variable 
                                 
                       // 3rd Class  -> SASS import & partial (_underscore)
  //* প্রতিটা ইম্পোর্ট ফাইল এর নাম এর আগে একটা partial(underScore) থাকা উচিত
  //* একটা SEPARATE FILE OPEN করে বার বার এটি ব্যবহার করার মাধ্যম ই হচ্ছে SASS IMPORT AND PARTIAL  
  //* এর দ্বারা কোড গুলু পড়তে সুবিধা ও বূঝটে সুবিধা                   
  //* underScore means kuchu amount er code rakhbe and eta css a transpile korar proyujon nei
                        
                    // 4rth Class  ->  














                    
@import "variable";


/* browser reset code */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  
       

main{
    background-color: $main-bgcolor;
}
// normal css 
// nav{
//     margin-top: 1.7rem;
//     margin-bottom: 1.04rem;
//     text-align: center;

// }
// nav ul{
//     list-style-type: none;
// }
// nav ul li{
//     display: inline-block;
//     margin-right: 1.1rem;
// }
// nav ul li a{
//     color: white;
//     text-decoration: none;
//     font-size: 1.6rem;
// }
// nav ul li a:hover{
//     background: black;
//     padding: .5em 1.2em ;
//     border-radius: .4em;
//     transition: .4s;

// }

// nesting css in scss 

nav{
    margin-top: 1.8rem;
    margin-bottom: 1.04rem;
    text-align: center;
    ul{
     list-style-type: none;
        li {
            display: inline-block;
            margin-right: 1.1rem;
             a {
                color: brown;
                text-decoration: none;
                font-size: 1.6rem;
         }
    }
    }
    
}
header{
    background-color: $header-bgcolor;
    text-align: center;
    font-size: 1.6rem;
}
 


nav ul li a:hover{
    background: black;
    padding: .5em 1.2em ;
    border-radius: .4em;
    transition: .4s;

}





#about p{
    font-size: $p-fontSize;
}
footer{
    background-color: khaki;
}

