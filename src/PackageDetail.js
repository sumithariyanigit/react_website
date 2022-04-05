import React,  { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, Link } from "react-router-dom";
import OtherPackageCat from './Components/OtherPackageCat';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReviewUser from './Components/ReviewUser';
import ReviewAdd from './Components/ReviewAdd';
import FAQ from './Components/FAQ';


const ratingChanged = (newRating) => {
  console.log(newRating);
};


function PackageDetail() {

  useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("body_black");
        return () => {
          body.classList.remove("body_black");
        }
      } );
 
    return (
       <>
<Header />
     
<main>


<section className="about__area pb-45 pt-45 p-relative border-style">
            <div className="container">
               <div className="row ">
                  <div className="col-lg-12">
                  <Tabs>
                    <TabList>
                    <Tab>Reviews</Tab>
                    <Tab>Add a Review</Tab>
                    <Tab>FAQ</Tab>
                    </TabList>

                    <TabPanel>
                   <ReviewUser />
                    </TabPanel>

                    <TabPanel>
                    <ReviewAdd />

                    </TabPanel>
                    <TabPanel>
                   <FAQ />
                    </TabPanel>
                </Tabs>
                   </div>
                
               </div>
            </div>
</section>  

<OtherPackageCat />

<Footer />
</main>

    </>
  );
}

export default PackageDetail;