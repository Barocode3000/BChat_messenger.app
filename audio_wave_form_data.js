import React, { useState } from 'react';
import { View } from 'react-native';

class AudioWaveFormData {
  constructor(version, channels, sampleRate, sampleSize, bits, length, data) {
    this.version = version;
    this.channels = channels;
    this.sampleRate = sampleRate;
    this.sampleSize = sampleSize;
    this.bits = bits;
    this.length = length;
    this.data = data;
    this._scaledData = null;
  }

  scaledData() {
    if (!this._isDataScaled()) {
      this._scaleData();
    }
    return this._scaledData;
  }

  frameIdxFromPercent(percent) {
    if (percent === null) {
      return 0;
    }

    if (percent < 0.0) {
      percent = 0.0;
    } else if (percent > 100.0) {
      percent = 100.0;
    }

    if (percent > 0.0 && percent < 1.0) {
      return Math.floor((this.data.length / 2) * percent);
    }

    let idx = Math.floor(
      (this.data.length / 2) * (percent / 100)
    );
    const maxIdx = Math.floor(
      (this.data.length / 2) * 0.98
    );
    if (idx > maxIdx) {
      idx = maxIdx;
    }
    return idx;
  }

  path(size, zoomLevel = 1.0, fromFrame = 0) {
    if (!this._isDataScaled()) {
      this._scaleData();
    }

    if (zoomLevel === null || zoomLevel < 1.0) {
      zoomLevel = 1.0;
    } else if (zoomLevel > 100.0) {
      zoomLevel = 100.0;
    }

    if (zoomLevel === 1.0 && fromFrame === 0) {
      return this._path(this._scaledData, size);
    }

    if (fromFrame * 2 > (this.data.length * 0.98)) {
      fromFrame = Math.floor((this.data.length / 2) * 0.98);
    }

    const endFrame = Math.floor(
      fromFrame * 2 + (
        (this._scaledData.length - fromFrame * 2) * (1.0 - (zoomLevel / 100))
      )
    );

    return this._path(this._scaledData.slice(fromFrame * 2, endFrame), size);
  }

  _path(samples, size) {
    const middle = size.height / 2;
    let i = 0;

    const minPoints = [];
    const maxPoints = [];

    const t = size.width / samples.length;
    for (let _i = 0, _len = samples.length; _i < _len; _i++) {
      const d = samples[_i];

      if (_i % 2 !== 0) {
        minPoints.push({ x: t * i, y: middle - middle * d });
      } else {
        maxPoints.push({ x: t * i, y: middle - middle * d });
      }

      i++;
    }

    const path = new Path2D();
    path.moveTo(0, middle);
    for (const o of maxPoints) {
      path.lineTo(o.x, o.y);
    }
    path.lineTo(size.width, middle);
    for (const o of minPoints.reverse()) {
      path.lineTo(o.x, middle - (middle - o.y));
    }

    path.closePath();
    return path;
  }

  _isDataScaled() {
    return (
      this._scaledData !== null &&
      this._scaledData.length === this.data.length
    );
  }

  _scaleData() {
    const max = Math.pow(2, this.bits - 1);

    const dataSize = this.data.length;
    this._scaledData = Array(dataSize).fill(0);
    for (let i = 0; i < dataSize; i++) {
      this._scaledData[i] = this.data[i] / max;
      if (this._scaledData[i] > 1.0) {
        this._scaledData[i] = 1.0;
      }
      if (this._scaledData[i] < -1.0) {
        this._scaledData[i] = -1.0;
      }
    }
  }
}

const AudioWaveFormDataComponent = () => {
  const [scaledData, setScaledData] = useState([]);

  // You can use the AudioWaveFormData class here to manipulate data

  return (
    <View style={{ flex: 1 }}>
      {/* Your UI components */}
    </View>
  );
};

export default AudioWaveFormDataComponent;
