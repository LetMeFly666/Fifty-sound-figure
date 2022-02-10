'''
Author: LetMeFly
Date: 2022-02-09 11:57:55
LastEditors: LetMeFly
LastEditTime: 2022-02-10 10:51:18
'''
import os

# def dfs(dir_now):
#     for i in os.listdir(dir_now):
#         if os.path.isdir(i):
#             print("dir:", i)
#             for j in dfs(i):
#                 yield os.path.join(i, j)
#         else:
#             yield os.path.abspath(i)

def dfs(dir_now):
    ans = []
    for root, dirs, files in os.walk(dir_now):
        for file in files:
            ans.append(os.path.join(root, file))
    return ans


if __name__ == "__main__":
    to_replace = [
        ('https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js', '"../../../js/jquery-3.6.0.min.js"'),
        ('https://cdn.bootcss.com/bootstrap/4.1.0/css/bootstrap.min.css', '"../../../css/bootstrap.min.css"'),
        ('https://cdn.bootcss.com/bootstrap/4.1.0/js/bootstrap.min.js', '"../../../js/bootstrap.min.js"'),
        ('https://cdn.bootcss.com/popper.js/1.14.0/umd/popper.min.js', '"../../../js/popper.min.js"'),
        ('https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css', '"../../../css/APlayer.min.css"'),
        ('https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js', '"../../../js/APlayer.min.js"'),
        ('riyu-content-yintu tab-pane container', 'riyu-content-yintu tab-pane'),
        ('tab-pane container active', 'tab-pane active'),
        ('../../../riyu.html', '"../../../index.html"'),
        # ('logo-brzjomo.png', '"../../../imgs/logo-brzjomo.png"'),
        ('../../../"imgs/"../../../imgs/logo-brzjomo.png""', '"../../../imgs/logo-brzjomo.png"')
    ]


    files = dfs(os.getcwd())
    for file in files:
        if not file.endswith(".html"):
            continue
        print(file)
        with open(file, "r", encoding='utf-8') as f:
            content = f.read()
        for this_to_replace in to_replace:
            content = content.replace(this_to_replace[0], this_to_replace[1])
        with open(file, "w", encoding='utf-8') as f:
            f.write(content)


