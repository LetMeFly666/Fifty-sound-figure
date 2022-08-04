'''
Author: LetMeFly
Date: 2022-08-04 11:44:34
LastEditors: LetMeFly
LastEditTime: 2022-08-04 11:48:29
'''
import requests
characters = "がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ"
characters_double = "きゃきゅきょぎゃぎゅぎょしゃしゅしょじゃじゅじょちゃちゅちょぢゃぢゅぢょにゃにゅにょひゃひゅひょびゃびゅびょぴゃぴゅぴょみゃみゅみょりゃりゅりょ"

def getOneAudio(charName="あ"):
    url = "http://res.hjfile.cn/pt/m/jp/50yin/audio/" + charName + ".mp3"
    response = requests.get(url)
    print(charName, response)
    with open("../source/audio/" + charName + ".mp3", "wb") as f:
        f.write(response.content)


for c in characters:
    getOneAudio(c)
for i in range(0, len(characters_double), 2):
    getOneAudio(characters_double[i : i + 2])
