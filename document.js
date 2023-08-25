class Document {
    constructor(fileName, bytesSize, fileType) {
      this.fileName = fileName;
      this.bytesSize = bytesSize;
      this.fileType = fileType;
    }
  
    static fromJson(data) {
      return new Document(data.fileName, data.bytesSize, data.fileType);
    }
  
    toJson() {
      return {
        fileName: this.fileName,
        bytesSize: this.bytesSize,
        fileType: this.fileType,
      };
    }
  }
  
  export default Document;
  