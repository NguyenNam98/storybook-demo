import React from 'react';
import Friend from '../components/FriendRefer.facebook.js';

export default {
    title: 'Example/Friend',
    component: Friend
  };
  
  const Template = (args) => <Friend {...args} />;
  
  export const friendFace = Template.bind({});
  
  friendFace.args = {
    Name:'Vũ Thị Ngọc'
  };