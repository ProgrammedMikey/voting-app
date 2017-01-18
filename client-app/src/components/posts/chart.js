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
         console.log(post);

         // post.map((posts) => {
         //
         //    var chartOptions = [ ];
         //    var chartVotes = [ ];
         //
         //    for (var i = 0; i < posts.options.length; i++) {
         //        chartOptions.push(posts.options[i].option);
         //        chartVotes.push(posts.options[i].votes);
         //    }
         //    console.log(chartOptions);
         // });

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
            datasets: [
                {
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


                    <BarChart data={chartData} options={chartOption} width="600" height="250" redraw/>

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