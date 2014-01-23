#!/usr/bin/env python
#coding=utf-8
import sys

reload(sys)  
sys.setdefaultencoding('utf8')

from flask import Flask

# 初始化
app = Flask(__name__)
    
#---------------------------------
#加载试图--johnny 放在最后防止循环引用
#---------------------------------
import views.index
