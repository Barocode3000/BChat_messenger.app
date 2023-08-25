// Chat.js
import React from 'react';
import { View } from 'react-native';
import { ChatType, CustomListTileType } from './enums';
import User from './User';
import Message from '/models/message.js'; // Import the Message class you defined

class Chat {
  constructor({ user, chatType, lastMessage, unreadMessages, dateTime, chatId }) {
    this.user = user;
    this.chatType = chatType;
    this.lastMessage = lastMessage;
    this.unreadMessages = unreadMessages;
    this.dateTime = dateTime;
    this.chatId = chatId;
  }

  fromChatType() {
    switch (this.chatType) {
      case ChatType.Message:
        return CustomListTileType.Message;
      case ChatType.Group:
        return CustomListTileType.Group;
    }
  }

  render() {
    // Render the chat details using React Native components
    return (
      <View>
        {/* Render the chat details here */}
      </View>
    );
  }

  static fromJson(data) {
    return new Chat({
      user: User.fromJson(data.user),
      chatType: data.chatType === 'message' ? ChatType.Message : ChatType.Group,
      lastMessage: Message.fromJson(data.lastMessage),
      unreadMessages: data.unreadMessages,
      dateTime: new Date(data.dateTime),
      chatId: data.chatId,
    });
  }

  toJson() {
    return {
      user: this.user.toJson(),
      chatType: 'message',
      lastMessage: this.lastMessage.toJson(),
      unreadMessages: this.unreadMessages,
      dateTime: this.dateTime.toISOString(),
      chatId: this.chatId,
    };
  }
}

export default Chat;
