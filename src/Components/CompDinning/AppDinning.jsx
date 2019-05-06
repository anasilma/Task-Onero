import React, { Component } from 'react';
import './DinningStyles.css'
import {Tab, Tabs} from 'react-bootstrap'

class AppDinning extends Component {
    render() {
        return (
            
<section id="tabs" class="project-tab">

               <div className="content-dining">
                        <div className="dining-text">
                          
                                <div className="body-dining">
                                    <div class="title-dining">
                                        <h2>Find a Dining Pleasure</h2>
                                    </div>
                                    <div class="row">
			<div class="col-xs-12 ">
				<nav>
					<div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
						<a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Lululala</a>
						<a class="nav-item nav-link " id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">The Porte</a>
						<a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Montezuma</a>
						<a class="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">AJ Brandon</a>
					</div>
				</nav>
				<div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
					<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    For those with a sweet tooth or wanting something delicious and healthy we have our Lululala Artisan Patisserie. You will find here: delightful cakes, Homemade desserts, As well as a range of snacks and sandwiches accompanied by hot or cold drinks.
					</div>
				</div>
			
			</div>
		</div>
                                    <div className="col-lg-12">
                                        <div className="img-dining-bawah">
                                            <div className="col-lg-6 text-lg-left">
                                                <img className="logo-dining-kiri" src="https://res.cloudinary.com/lycoris/image/upload/v1556407828/asset/logo-lulu-lala_2x_kgb79u.png" height="75px" alt="" />
                                            </div>
                                            <div className="col-lg-6 text-lg-right">
                                                <img className="logo-dining-kanan" src="https://res.cloudinary.com/lycoris/image/upload/v1556408196/asset/Group_56_2x_g6kspc.png" height="24px" alt="" />
                                            </div>
                                        </div>
                                    </div>
                               
                            </div>
                        </div>
               </div>
              
            </section>
            
        );
    }
}

export default AppDinning;