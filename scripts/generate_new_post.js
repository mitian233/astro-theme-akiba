import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getGenerateDate = () => {
    const time = new Date();
    const date = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate();
    const timeStr = (time.getHours() < 10 ? '0' + time.getHours() : time.getHours()) + ':' + (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()) + ':' + (time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds());
    return date + ' ' + timeStr;
}

const generateNewPost = (title) => {
    const date = getGenerateDate();
    const fileName = title + '.md';
    const filePath = './src/content/blog/' + fileName;
    const fileContent = `---
title: ${title}
excerpt: ''
publishDate: '${date}'
tags:
    - ''
isFeatured: false
---`;
    try {
        fs.writeFileSync(filePath, fileContent);
        console.log('Successfully generate your new post file: ' + filePath + ' at ' + date);
    } catch (err) {
        console.error(err);
    }
    process.exit(0);
};

const checkFileName = (fileName) => {
    const regex = /^[a-zA-Z0-9_\u4e00-\u9fa5\-]+$/;
    if (fileName.length > 0 && fileName.length <= 100 && regex.test(fileName)) {
        return true;
    } else {
        return false;
    }
};

rl.question('Please input the title of your new post: ', (answer) => {
    if (answer.length === 0) {
        console.log('The title of your new post can not be empty!');
        process.exit(0);
    } else if (!checkFileName(answer)) {
        console.log('The title of your new post can only contain Chinese, English, numbers, - and _!');
        process.exit(0);
    } else {
        generateNewPost(answer);
    }
});