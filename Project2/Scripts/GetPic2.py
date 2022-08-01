'''
Author: LetMeFly
Date: 2022-08-01 12:07:36
LastEditors: LetMeFly
LastEditTime: 2022-08-01 12:11:35
'''
# from getPic import getOnePicByUrl

import requests

def getOnePicByUrl(url_0="//res.hjfile.cn/pt/m/jp/50yin/img/gif/ping/ping_gif_a1.gif"):
    url = "https:" + url_0
    response = requests.get(url)
    print(url, response)
    fileName = url.split("/")[-1]
    with open("../source/img/Character/" + fileName, "wb") as f:
        f.write(response.content)

appendUrls = [
    "//res.hjfile.cn/pt/m/jp/50yin/img/gif/pian/pian_gif_u48.gif",
    "//res.hjfile.cn/pt/m/jp/50yin/img/gif/pian/pian_gif_e49.gif",
    "//res.hjfile.cn/pt/m/jp/50yin/img/gif/pian/pian_gif_i47.gif",
    "//res.hjfile.cn/pt/m/jp/50yin/img/gif/pian/pian_gif_e39.gif",
    "//res.hjfile.cn/pt/m/jp/50yin/img/gif/pian/pian_gif_i37.gif",

    "//res.hjfile.cn/pt/m/jp/50yin/img/gif/ping/ping_gif_u48.gif",
    "//res.hjfile.cn/pt/m/jp/50yin/img/gif/ping/ping_gif_e49.gif",
    "//res.hjfile.cn/pt/m/jp/50yin/img/gif/ping/ping_gif_i47.gif",
    "//res.hjfile.cn/pt/m/jp/50yin/img/gif/ping/ping_gif_e39.gif",
    "//res.hjfile.cn/pt/m/jp/50yin/img/gif/ping/ping_gif_i37.gif",
]

for u in appendUrls:
    getOnePicByUrl(u)
