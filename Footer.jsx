import React from "react";
 
function Footer() 

{
  var currYear = new Date().getFullYear(); 
  return(
    <footer>
      <p>Complete the project
        from Latika Gupta
      </p>
      <p> Thankyou Shaurya </p>
      <p>Copyright @ {currYear}</p>
    </footer>
  );
  
}
export default Footer;
