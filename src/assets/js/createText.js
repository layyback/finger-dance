class CreateText {
  constructor(
    practiceLetters = "ENITRL",
    keyLetter = "E",
    minLength = 3,
    maxLenth = 6
  ) {
    this.practiceLetters = practiceLetters;
    this.keyLetter = keyLetter;
    this.minLength = minLength;
    this.maxLenth = maxLenth;
  }
  // 长度
  length() {
    return Math.floor(
      Math.random() * (this.maxLenth - this.minLength) + this.minLength + 1
    );
  }
  // 生成字母组
  create() {
    const len = this.length();
    const randomPosition = Math.floor(Math.random() * len);
    let str = "";
    for (let i = 0; i < len; i++) {
      str += randomPosition === i ? this.keyLetter : this.getOneRandomLetter();
    }
    return str;
  }
  // 随机取一个字母
  getOneRandomLetter() {
    const letters = this.practiceLetters;
    const len = letters.length;
    return letters[Math.floor(Math.random() * len)];
  }
}

export default CreateText;
