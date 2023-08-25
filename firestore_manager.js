import React from 'react';
import { FirebaseFirestore } from 'react-native-firebase'; // Make sure you have installed the correct package

const Collections = {
  chats: 'chats',
  users: 'users',
  messages: 'messages',
};

class ChatAndUser {
  constructor(chat, user) {
    this.chat = chat;
    this.user = user;
  }
}

class FirestoreManager {
  constructor() {
    this._firestore = FirebaseFirestore.instance;
  }

  async isUserExist({ phoneNumber, uuid }) {
    if (!phoneNumber && !uuid) {
      throw new Error('phoneNumber and uuid both can\'t be null');
    }

    let userSnapshot;

    if (phoneNumber) {
      userSnapshot = await this._firestore
        .collection(Collections.users)
        .where('phoneNumberKey', '==', phoneNumber)
        .get();
    } else {
      userSnapshot = await this._firestore
        .collection(Collections.users)
        .where('uuidKey', '==', uuid)
        .get();
    }

    return userSnapshot.docs.length > 0;
  }

  async registerUser(user) {
    await this._firestore.collection(Collections.users).add(user.toJson());
  }

  async getUser(phoneNumber) {
    const userSnapshot = await this._firestore
      .collection(Collections.users)
      .where('phoneNumberKey', '==', phoneNumber)
      .get();
    
    if (userSnapshot.docs.length > 0) {
      return new User.fromJson(userSnapshot.docs[0].data());
    }
    
    return null; // Return null or throw an error if user not found
  }

  async getChat(phone) {
    let user;
    let chat;

    const userSnapshot = await this._firestore
      .collection(Collections.users)
      .where(User.phoneNumberKey, '==', phone)
      .get();

    if (userSnapshot.docs.length > 0) {
      const userDocRef = userSnapshot.docs[0].ref;
      const chatData = (await userDocRef
        .collection(Collections.chats)
        .where('uuid', '==', LocalDB.user.uuid)
        .get())
        .docs[0];

      if (chatData.exists) {
        chat = new Chat.fromJson(chatData.data());
      }

      user = new User.fromJson(userSnapshot.docs[0].data());
    }

    return new ChatAndUser(chat, user);
  }

  getUserChats(userId) {
    return this._firestore
      .collection(Collections.users)
      .doc(userId)
      .collection(Collections.chats)
      .orderBy('timestamp') // You need to provide the correct field name for ordering
      .get();
  }

  getChatMessages(chatId) {
    return this._firestore
      .collection(Collections.chats)
      .doc(chatId)
      .collection(Collections.messages)
      .orderBy('dateTimeKey') // You need to provide the correct field name for ordering
      .get();
  }

  async sendChatMessage(chatId, message) {
    await this._firestore
      .collection(Collections.chats)
      .doc(chatId)
      .collection(Collections.messages)
      .add(message.toJson());
  }
}

export default FirestoreManager;
