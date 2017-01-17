import React, { Component, PropTypes } from 'react';
import * as thunkMiddleware from 'redux-thunk';
import {connect} from 'react-redux';
import * as actions from '../../actions';
class PostsShow extends Component{
    static contextTypes= {
        router:PropTypes.object
    }
    componentWillMount(){
    this.props.PostShow(this.props.params.id);
    }

    handleVoteClick(option){
        this.props.votePoll(option.id);
        // console.log( this.props.votePoll(option.id));
        this.context.router.push('/');
    }

    renderPost(post){
        // console.log(post);
        return post.map((posts) => {
        return (
            <div>
                <header className="hero-unit">
                <div className="container">
        <div className="row">
            <div class="col-md-12">
            <h3>{posts.question}</h3>
            </div>
                    </div>
                    </div>
                   </header>

                <div className="options-contain">
                    <h3 className="defaultColor"> Submit a vote</h3>
                    {posts.options.map(option =>
                        <div className="poll-choice" onClick={this.handleVoteClick.bind(this, option)}>

                            {option.option}
                        </div>
                    )}
                </div>


            </div>


               );
        });
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

export default connect(mapStateToProps,actions)(PostsShow);
