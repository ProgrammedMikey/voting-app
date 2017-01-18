import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import * as thunkMiddleware from 'redux-thunk';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import { Bar as BarChart } from 'react-chartjs';
import Chart from 'chart.js'

class ChartShow extends Component{

    static contextTypes= {
        router:PropTypes.object
    }

    componentWillMount(){
        this.props.PostShow(this.props.params.id);
    }

    renderPost(post){
         // console.log(post);

        var chartOptions = [ ];
        var chartVotes = [ ];

        for (var i=0; i < post.length; i++ ) {
            for (var j = 0; j < post[i].options.length; j++){
                chartOptions.push(post[i].options[j].option);
                chartVotes.push(post[i].options[j].votes);
            }
        }
        // console.log(chartOptions);

        let chartData = {
            labels: chartOptions,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    strokeColor: "rgba(220,220,220,0.8)",
                    highlightFill: "rgba(220,220,220,0.75)",
                    highlightStroke: "rgba(220,220,220,1)",
                    borderWidth: 1,
                    data: chartVotes
                }
            ]
        }
             let chartOption = {
                 scales: {
                     xAxes: [{
                         stacked: true
                     }],
                     yAxes: [{
                         stacked: true
                     }]
                 }
             }

            return (

                <div>
                    <header className="hero-unit">
                        <div className="container">
                            <div className="row">
                                <div class="col-md-12">
                                    {post.map((posts) =>
                                        <h3>{posts.question}</h3>
                                    )}
                                </div>
                            </div>
                        </div>
                    </header>


                    <div className="options-contain">
                    <BarChart data={chartData}  width="800" height="450" redraw/>
</div>
                </div>
            );

    }
    render(){
        const {post,loading,error} = this.props.activePost;
        if(loading == true){
            return <div className="loader"></div>;
        }
        return (
            <div>
                {this.renderPost(post)}
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        activePost:state.posts.activePost,
        authenticated:state.auth.authenticated
    }
}

export default connect(mapStateToProps,actions)(ChartShow);