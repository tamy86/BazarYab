import React from 'react';


const divFooterStyle={
    backgroundColor:'#232f3e',
    width:'100%',
    height:'93px',
    direction:'rtl',

};


function BusinessFooter(){

    return(

        <div style={divFooterStyle} className="main-footer">
            <div  className="container">
                <div className="row">

                    <div className="col-md-3 col-sm-6">
                        <h4>test footer</h4>
                        <ul className="list-unstyled">
                            <li>col1</li>
                            <li>col2</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default BusinessFooter;
