import React from 'react';
 


//this below is our component that returns JSX to index.html 
function Services(){

    return(
        <div className="container jumbotron">
        <div id="content-wrapper">

            <div className="container-fluid">
            <div className="card mb-3">
                <div className="card-header">
                <i className="fas fa-table"></i>
                ALL CARS</div>
                <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Status</th>
                        <th>City</th>
                        <th>Amount</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>City</th>
                            <th>Status</th>
                            <th>Amount</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                        <td>Isuzu</td>
                        <td>KB 100</td>
                        <td>2014</td>
                        <td>Booked</td>
                        <td>Pretoria</td>
                        <td>$320,800</td>
                        </tr>
                        <tr>
                        <td>Toyota</td>
                        <td>Corrola</td>
                        <td>2007</td>
                        <td>Available</td>
                        <td>Bulawayo</td>
                        <td>$170</td>
                        </tr>
                        <tr>
                        <td>Hyndai</td>
                        <td>Shoki</td>
                        <td>2019</td>
                        <td>Available</td>
                        <td>Johanesburg</td>
                        <td>$170</td>
                        </tr>
                        <tr>
                        <td>Toyota</td>
                        <td>Cruiser</td>
                        <td>2014</td>
                        <td>Booked</td>
                        <td>Pretoria</td>
                        <td>$320,800</td>
                        </tr>
                        <tr>
                        <td>Honda</td>
                        <td>Jazz</td>
                        <td>2007</td>
                        <td>Available</td>
                        <td>Johanesburg</td>
                        <td>$170</td>
                        </tr>
                        <tr>
                        <td>Mazda</td>
                        <td>323</td>
                        <td>2014</td>
                        <td>Booked</td>
                        <td>Pretoria</td>
                        <td>$320,800</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>

            <p className="small text-center text-muted my-5">
                <em>More table examples coming soon...</em>
            </p>

            </div>

            </div>
        </div>
    );
}



export default Services;
