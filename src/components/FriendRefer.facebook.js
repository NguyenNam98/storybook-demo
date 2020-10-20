import React from'react';
import image from '../image/persional.jpg'
import './FriendRefer.facebook.css'
import Avatar from 'react-avatar';

class FriendRefer extends React.Component{
    render(){
        const {Name}=this.props;
        return <div className="rectangle">
            <div className="title">
                <p className="recomment">Gợi ý cho bạn</p>
                <p className="seeAll">Xem tất cả</p>
            </div>
            <div className="profiles">
               <Avatar className='Avatar' src={image} round="true" size="30"/>
                <div className="friendName">
                    <p className="name">{Name}</p>
                    <p>Gợi ý cho bạn</p>
                </div>
                <p className="follow">Theo dõi</p>
            </div>
            <div className="profiles">
               <Avatar className='Avatar' src={image} round="true" size="30"/>
                <div className="friendName">
                    <p className="name">{Name}</p>
                    <p>Gợi ý cho bạn</p>
                </div>
                <p className="follow">Theo dõi</p>
            </div>
            <div className="profiles">
               <Avatar className='Avatar' src={image} round="true" size="30"/>
                <div className="friendName">
                    <p className="name">{Name}</p>
                    <p>Gợi ý cho bạn</p>
                </div>
                <p className="follow">Theo dõi</p>
            </div>

        </div>
    }
}
export default FriendRefer;