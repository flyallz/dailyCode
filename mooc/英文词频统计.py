def getText():
    # 打开文档
    txt=open("xx.txt","r").read()
    # 转化大小写
    txt=txt.lower()
    # 使用空格替换所有的标点符号
    for ch in '!"#$%&()*+,-./:;<=>?@[\\]^_‘{|}~':
        txt=txt.replace(ch,"")
    return txt
    
# 文本归一化 用空格分割
xxTxt=getText()
words=xxTxt.split()
# 定义字典存储数据
counts={}
for word in words:
    counts[word]=counts.get(word,0)+1
    # 转成列表
items=list(counts.items())
# 对一个列表完成键值对的2个元素的第二个元素进行排序 排序方式是从大到小的倒排
items.sort(key=lambda x:x[1],reverse=True)
for i in range(10):
    word,count=items[i]
    print("{0:<10}{1:>5}".format(word,count))