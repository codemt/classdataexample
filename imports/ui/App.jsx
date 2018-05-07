import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
 class App extends Component {


  Overview(){

        alert('you clicked me ');


  }

  render() {
    return (
      <div>
          <div className="container">
            <MuiThemeProvider>
                    <AppBar
                            title="ClassManager"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                            showMenuIconButton={false}
                        />
                      
                                <div className="row">
                                <div className="col s6" onClick={this.Overview.bind(this)}>
                                <Card>
                                  <CardActions>
                                <CardTitle title="Overview" subtitle="Manage your Tuitions Effectively!" />
                                <CardText>
                                Your Customizable Dashboard
                                </CardText>
                                </CardActions>
                            </Card> 
                            </div>
                            <div className="col s6"> 
                            <Card>
                                  <CardActions>
                                <CardTitle title="New Admission" subtitle="new Admissions to the class" />
                                <CardText>
                                 Create New Admissions , delete Admissions
                                </CardText>
                                </CardActions>
                            </Card> 
                             
                            
                                  </div>
                            
                                </div>

                             </MuiThemeProvider>   
                        </div>
                          


            
      </div>
    )
  }
}
export default App;