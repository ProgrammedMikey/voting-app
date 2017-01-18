import React,{Component} from 'react';
import Posts from './posts/posts';

export default () => <div>
        <header className="jumbotron jumbotron-fluid hero-spacer jumboColor">
                <div class="container">
                <h1 className="display-3">Voting App</h1>
                <p className="lead">Select a poll to see the results and vote, or sign-in to make a new poll.</p>
                        </div>
        </header>


        <div className="row alignCenter">
                <div className="col-lg-12 alignCenter">
                        <h3 className="fancy2 alignCenter">At Your Service</h3>
                </div>
        </div>


        <div className="row text-center welcome-height">

                <div className="col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail">
                                        <div className="caption">
                                                <p>Keep your polls and come back later to access them.</p>
                                        </div>
                        </div>
                </div>

                <div className="col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail">
                                        <div className="caption">
                                                <p>Create a poll with any number of possible items. If you don't like the options on a poll, create a new option!</p>
                                        </div>
                        </div>
                </div>

                <div className="col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail">
                                        <div className="caption">
                                                <p>See and vote on everyone's polls and see the aggregate results of polls.</p>
                                        </div>
                        </div>
                </div>

                <div className="col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail">
                                        <div className="caption">
                                                <p>Share your polls with your friends.</p>
                                        </div>
                        </div>
                </div>

        </div>
        <br/>
        <div className="row">
                <div className="col-lg-12">
                        <h3 className="fancy2 alignCenter"><center>List of All Polls</center></h3>
                </div>
        </div>


        <Posts />
</div>
