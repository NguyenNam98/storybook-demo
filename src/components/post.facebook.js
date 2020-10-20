import React from 'react';
import './Post.facebook.css';
import Avatar from 'react-avatar';
import persionalpicture from '../image/persional.jpg'
import picture from '../image/picture.svg'
import emotion from '../image/emotion.svg'
import usertag from '../image/usertag.svg'
class Post extends React.Component{
    render(){
        return<div className="main">
            <div className="title">
                <p>Tạo bài viết</p>
            </div>
            <div className="question">
                <Avatar className="Avatar" src={persionalpicture} size="40" round='true'/>
                <p>Anh Nam ơi, anh đang làm gì thế ?</p>
            </div>
            <div className="bar-footer">
                <div className="component">
                    <img src={picture}/>
                    <p>Ảnh/video</p>
                </div>
                <div className="component">
                    <img src={usertag}/>
                    <p>Gắn thẻ bạn bè</p>
                </div>
                <div className="component" >
                    <img src={emotion}/>
                    <p>Cảm xúc</p>
                </div>
                
            </div>
        </div> 
        
    }

}
export default Post;