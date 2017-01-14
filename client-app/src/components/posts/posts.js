import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import {Link} from 'react-router';
import spinner from 'react-loader';

class Posts extends Component {

  componentWillMount(){
  this.props.fetchPost();
  this.props.userInfo();
  }

  handleEditButton(post) {
      if(this.props.authenticated){
      return ( 
            <Link  className="pull-xs-right btn btn-warning btn-sm" to ={"posts/"+post.id+"/edit"}>Edit</Link>
             );
      }
  }

 renderPosts(posts) {

    return posts.map((post) => {
      return (

        <div className="card col-md-3 col-sm-6 text-xs-center">
            <Link to={"posts/"+post.id}>
            <img className="card-img-top" src={post.body} alt="Book image" height="230" width="230"> </img>
            </Link>
            <div className="card-block">
            <h4 className="card-title"><center>{ post.title }</center></h4>
        </div>
            {this.handleEditButton(post)}
        </div>
      );
    });
  }

    render(){
        const {posts,loading,error} = this.props.postsList;
        if(loading === true){  
            return <div className="loader"></div>;
        }
        return (
                <div>

                {this.renderPosts(posts)}

                </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        postsList:state.posts.postsList,
        authenticated:state.auth.authenticated,
        userinfo : state.auth.userinfo
    }
}
export default connect(mapStateToProps,actions)(Posts);
