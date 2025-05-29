import Banner from "../Banner/Banner";
import Partner from "../Partner/Partner";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div >
         <Helmet>
           <title>EduManage | Home</title>
         </Helmet>
         <Banner></Banner>
         <Partner></Partner>
    </div>
  );
};

export default Home;