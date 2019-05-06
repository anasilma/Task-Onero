import React, { Component } from 'react';
import './DinningStyles.css'

class AppDinning extends Component {
    render() {
        return (
<section id="dining">
               <div className="content-dining">
                        <div className="box dining-text">
                            <div className="container">
                                <div className="row body-dining">
                                    <div className="col-lg-12 title-dining">
                                        <h4>Find a Dining Pleasure</h4>
                                    </div>
                                    <div className="col-lg-12 menu-dining">
                                        <ul className="menu-bar-dining">
                                            <li>Lululala</li>
                                            <li>The Porte</li>
                                            <li>Montezuma</li>
                                            <li>AJBrando</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-12 deskripsi-dining">
                                        <p>
                                        For those with a sweet tooth or wanting something 
                                        delicious and healthy we have our Lululala Artisan 
                                        Patisserie. You will find here: delightful cakes, Home-
                                        made desserts, As well as a range of snacks and 
                                        sandwiches accompanied by hot or cold drinks.
                                        </p>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="row img-dining-bawah">
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
               </div>
            </section>
        );
    }
}

export default AppDinning;