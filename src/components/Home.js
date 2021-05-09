import React from 'react';
import Header from './Header';
import Landing from './LandingPage';
import Footer from './footer';
//images

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
        
                <div className="container">
                    <Header />
                    <div className="section">
                        <Landing />
                    </div>
                    {/* <div className="footer"> */}
                        <Footer />
                    {/* </div> */}
                </div>
            
        )
    }
}
export default Home;