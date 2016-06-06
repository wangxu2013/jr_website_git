# coding:utf-8

from flask import render_template
from scapp import app

# 首页
@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html")

# 首页
@app.route('/index_EN')
def index_EN():
    return render_template("index_En.html")

# 乾康领域
@app.route('/qkly')
def qkly():
    return render_template("qkly/qkly.html")

# 乾康领域
@app.route('/qkly_EN')
def qkly_EN():
    return render_template("qkly/qkly_EN.html")

# 乾康伙伴
@app.route('/qkhb')
def qkhb():
    return render_template("qkhb/qkhb.html")

# 乾康伙伴
@app.route('/qkhb_EN')
def qkhb_EN():
    return render_template("qkhb/qkhb_EN.html")

# 乾康家族
@app.route('/qkjz')
def qkjz():
    return render_template("qkjz/qkjz.html")

# 乾康家族
@app.route('/qkjz_EN')
def qkjz_EN():
    return render_template("qkjz/qkjz_EN.html")

# 加入乾康
@app.route('/jrqk')
def jrqk():
    return render_template("jrqk/jrqk.html")

# 加入乾康
@app.route('/jrqk_EN')
def jrqk_EN():
    return render_template("jrqk/jrqk_EN.html")

# 关于乾康
@app.route('/gyqk')
def gyqk():
    return render_template("gyqk/gyqk.html")

# 关于乾康
@app.route('/gyqk_EN')
def gyqk_EN():
    return render_template("gyqk/gyqk_EN.html")


# 管理员
@app.route('/admin')
def admin():
    return render_template("admin.html")

# 上传文件
@app.route('/file')
def file():
    return render_template("file.html")