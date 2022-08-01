'''
Author: LetMeFly
Date: 2022-08-01 11:16:33
LastEditors: LetMeFly
LastEditTime: 2022-08-01 11:22:22
'''
import requests

def getOnePicByUrl(url_0="//res.hjfile.cn/pt/m/jp/50yin/img/gif/ping/ping_gif_a1.gif"):
    url = "https:" + url_0
    response = requests.get(url)
    print(url, response)
    fileName = url.split("/")[-1]
    with open("../source/img/Character/" + fileName, "wb") as f:
        f.write(response.content)

with open("PicSources.txt", "r", encoding="utf-8") as f:
    urls = f.read().split("\n")
for thisUrl in urls:
    getOnePicByUrl(thisUrl)
