import React from 'react';
import Breakfast from '../Breakfast/Breakfast';
import MiddleNav from '../MiddleNav/MiddleNav';
import ServiceFood from '../ServiceFood/ServiceFood';
import TopBanner from '../TopBanner/TopBanner';


const Home = () => {
     return (
          <div>
              <TopBanner/>
              <Breakfast/>
              <ServiceFood/>
          </div>
     );
};

export default Home;