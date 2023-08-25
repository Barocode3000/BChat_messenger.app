import React, { useState } from 'react';
import { StyleSheet, View, FirebaseMessaging, intl } from 'react-native';
import Uuid from 'uuid';

const Utils = {
  getUUid() {
    return Uuid.v1();
  },

  async getFCMToken() {
    const token = await FirebaseMessaging.getToken();
    return token;
  },
};

const CustomDateTime = {
  formatToHHMM() {
    return intl.DateTimeFormat('HH:mm').format(this);
  },
};

const MessageTypeExtension = {
  format() {
    return this.name;
  },
};

const MessageTypeParser = {
  parse() {
    switch (this) {
      case 'text':
        return MessageType.text;
      case 'audio':
        return MessageType.audio;
      case 'video':
        return MessageType.video;
      case 'imageMedia':
        return MessageType.imageMedia;
      case 'url':
        return MessageType.url;
      case 'doc':
        return MessageType.doc;
      case 'upiPayment':
        return MessageType.upiPayment;
      case 'contact':
        return MessageType.contact;
      case 'location':
        return MessageType.location;
      default:
        return MessageType.text;
    }
  },
};

export default {
  Utils,
  CustomDateTime,
  MessageTypeExtension,
  MessageTypeParser,
};
