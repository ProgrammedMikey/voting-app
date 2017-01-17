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


 renderPosts(posts) {

    return posts.map((post) => {
      return (
          <ul className="list-group col-md-12">

            <Link to={"posts/"+post.id}>
                <li className="list-group-item list-group-item-action backColor" key={post.id}><center>{ post.question }</center></li>
            </Link>

          </ul>
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
