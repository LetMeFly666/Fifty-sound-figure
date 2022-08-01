'''
Author: LetMeFly
Date: 2022-08-01 11:57:10
LastEditors: LetMeFly
LastEditTime: 2022-08-01 11:59:57
'''
import requests
characters = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん"

def getOneAudio(charName="あ"):
    url = "http://res.hjfile.cn/pt/m/jp/50yin/audio/" + charName + ".mp3"
    response = requests.get(url)
    print(charName, response)
    with open("../source/audio/" + charName + ".mp3", "wb") as f:
        f.write(response.content)


for c in characters:
    getOneAudio(c)
