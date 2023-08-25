import React from 'react';
import { View, Text } from 'react-native';

class Message {
  static dateTimeKey = 'dateTime';
  static messageKey = 'message';
  static gifUrlKey = 'gifUrl';
  static gifBytesKey = 'gifBytes';
  static audioKey = 'audio';
  static urlKey = 'url';
  static fileKey = 'file';
  static upiPaymentKey = 'upiPayment';
  static contactKey = 'contact';
  static latLngKey = 'latLng';
  static isIncomingMessageKey = 'isIncomingMessage';
  static messageTypeKey = 'messageType';

  constructor({
    dateTime,
    message,
    gifUrl,
    gifBytes,
    audio,
    url,
    file,
    upiPayment,
    contact,
    latLng,
    isIncomingMessage,
    messageType,
  }) {
    this.dateTime = dateTime;
    this.message = message;
    this.gifUrl = gifUrl;
    this.gifBytes = gifBytes;
    this.audio = audio;
    this.url = url;
    this.file = file;
    this.upiPayment = upiPayment;
    this.contact = contact;
    this.latLng = latLng;
    this.isIncomingMessage = isIncomingMessage;
    this.messageType = messageType;
  }

  get messageDateTime() {
    return this.dateTime || new Date();
  }

  render(chatId) {
    switch (this.messageType) {
      case 'text':
        return (
          <TextMessage
            message={this.message}
            isIncomingMessage={this.isIncomingMessage}
          />
        );
      case 'audio':
        return (
          <AudioMessage
            isIncomingMessage={this.isIncomingMessage}
          />
        );
      case 'video':
        return <View style={{ width: 0, height: 0 }} />;
      case 'imageMedia':
        return (
          <GifMessage
            gifUrl={this.gifUrl}
            isIncomingMessage={this.isIncomingMessage}
            gifBytes={this.gifBytes}
          />
        );
      case 'url':
        return (
          <UrlMessage
            url={this.url}
            isIncomingMessage={this.isIncomingMessage}
          />
        );
      case 'doc':
        return (
          <DocumentMessage
            file={this.file}
            isIncomingMessage={this.isIncomingMessage}
          />
        );
      case 'upiPayment':
        return (
          <PaymentMessage
            payment={this.upiPayment}
            isIncomingMessage={this.isIncomingMessage}
          />
        );
      case 'contact':
        return (
          <ContactMessage
            contact={this.contact}
            isIncomingMessage={this.isIncomingMessage}
            chatId={chatId}
          />
        );
      case 'location':
        return (
          <LocationMessage
            latLng={this.latLng}
            isIncomingMessage={this.isIncomingMessage}
          />
        );
      default:
        return <View style={{ width: 0, height: 0 }} />;
    }
  }
}

export default Message;
