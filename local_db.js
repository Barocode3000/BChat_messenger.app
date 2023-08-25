import React, { useState } from 'react';
import { StyleSheet, View, Hive } from 'react-native';
import LocalDBRoutes from './local_db_routes';
import User from './models/user';

const LocalDB = {
  async initialize() {
    Hive.initFlutter();
    await Promise.all(LocalDBRoutes.routes.map(async (e) => {
      await Hive.openBox(e);
    }));
  },

  isUserLoggedIn() {
    return Hive.box(LocalDBRoutes.userRoute).get(User.uuidKey) !== null;
  },

  getUser() {
    return User.fromJson(Hive.box(LocalDBRoutes.userRoute).toMap());
  },

  setUser(user) {
    return user === null
      ? Hive.box(LocalDBRoutes.userRoute).clear()
      : Hive.box(LocalDBRoutes.userRoute).putAll(user.toJson());
  },
};

export default LocalDB;
