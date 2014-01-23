# coding:utf-8

from flask import render_template
from scapp import app

# 首页
@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html")

# 首页
@app.route('/index_En')
def index_En():
    return render_template("index_En.html")

# 关于我们
@app.route('/gsjj')
def gsjj():
    return render_template("gywm/gsjj.html")

# 关于我们
@app.route('/gsjj_En')
def gsjj_En():
    return render_template("gywm/gsjj_En.html")

# 新闻动态
@app.route('/xwdt')
def xwdt():
    return render_template("xwdt/xwdt.html")

# 新闻动态
@app.route('/xwdt_En')
def xwdt_EN():
    return render_template("xwdt/xwdt.html")

# 解决方案
@app.route('/jjfa')
def jjfa():
    return render_template("jjfa/jjfa.html")

# 解决方案
@app.route('/jjfa_En')
def jjfa_En():
    return render_template("jjfa/jjfa_En.html")

# 银行内训
@app.route('/yhnx')
def yhnx():
    return render_template("yhnx/yhnx.html")

# 银行内训
@app.route('/yhnx_En')
def yhnx_En():
    return render_template("yhnx/yhnx_En.html")

# 成功案例
@app.route('/cgal')
def cgal():
    return render_template("cgal/cgal.html")

# 成功案例
@app.route('/cgal_En')
def cgal_En():
    return render_template("cgal/cgal_En.html")

# 合作伙伴
@app.route('/hzhb')
def hzhb():
    return render_template("hzhb/hzhb.html")

# 合作伙伴
@app.route('/hzhb_En')
def hzhb_En():
    return render_template("hzhb/hzhb_En.html")

# 金融咨询
@app.route('/jrzx')
def jrzx():
    return render_template("jrzx/jrzx.html")

# 金融咨询
@app.route('/jrzx_En')
def jrzx_En():
    return render_template("jrzx/jrzx_En.html")

# 需求反馈
@app.route('/xqfk')
def xqfk():
    return render_template("xqfk/xqfk.html")

# 需求反馈
@app.route('/xqfk_En')
def xqfk_En():
    return render_template("xqfk/xqfk_En.html")

# 招聘信息
@app.route('/zpxx')
def zpxx():
    return render_template("zpxx/zpxx.html")

# 招聘信息
@app.route('/zpxx_En')
def zpxx_En():
    return render_template("zpxx/zpxx_En.html")

# 管理员
@app.route('/admin')
def admin():
    return render_template("admin.html")

# 上传文件
@app.route('/file')
def file():
    return render_template("file.html")