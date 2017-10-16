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
	
# 关于乾康
@app.route('/gyqk')
def gyqk():
    return render_template("gyqk/gyqk.html")
	
# 关于乾康
@app.route('/gyqk_EN')
def gyqk_EN():
    return render_template("gyqk/gyqk_En.html")

# 乾康领域
@app.route('/qkly')
def qkly():
    return render_template("qkly/qkly.html")

# 乾康领域
@app.route('/qkly_EN')
def qkly_EN():
    return render_template("qkly/qkly_En.html")

# 乾康家族
@app.route('/qkjz')
def qkjz():
    return render_template("qkjz/qkjz.html")

# 乾康家族
@app.route('/qkjz_EN')
def qkjz_EN():
    return render_template("qkjz/qkjz_En.html")
	
# 乾康新闻
@app.route('/qkxw')
def qkxw():
    return render_template("qkxw/qkxw.html")	
	
# 乾康新闻
@app.route('/qkxw_EN')
def qkxw_EN():
    return render_template("qkxw/qkxw_En.html")
	
# 金融家
@app.route('/jrj')
def jrj():
    return render_template("qkxw/jrj.html")	
		
# 金融家
@app.route('/jrj1')
def jrj1():
    return render_template("jrj/1.pdf")	
	
# 联系我们
@app.route('/lxwm')
def lxwm():
    return render_template("lxwm/lxwm.html")
	
# 联系我们
@app.route('/lxwm_EN')
def lxwm_EN():
    return render_template("lxwm/lxwm_En.html")

# 加入乾康
@app.route('/jrqk')
def jrqk():
    return render_template("jrqk/jrqk.html")

# 加入乾康
@app.route('/jrqk_EN')
def jrqk_EN():
    return render_template("jrqk/jrqk_En.html")
	
	
	
# 管理员
@app.route('/admin')
def admin():
    return render_template("admin.html")

# 上传文件
@app.route('/file')
def file():
    return render_template("file.html")