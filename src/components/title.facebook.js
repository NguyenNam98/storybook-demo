import React from 'react'
import setting from '../image/setting.svg'
import list1 from '../image/list1.svg'
import list2 from '../image/list2.svg'
import './Title.facebook.css'


class Title extends React.Component{
    render(){
        return<div className="main">
            <div className="header">
                <p className="post">Bài viết</p>
                <div className="listSet">
                    <div className="filter">
                        <img src={setting} />
                        <p>Bộ lọc</p>
                    </div>
                    <div className="managePost">
                        <img src={setting} />
                        <p>Quản lý bài viết</p>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="listDs">
                    <img src={list1} />
                    <p>xem theo danh sách</p>
                </div>
                <div className="listDs">
                    <img  src={list2}/>
                    <p>xem theo danh sách</p>
                </div>
            </div>
        </div>
    }
}
export default Title;