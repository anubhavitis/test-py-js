from pythonmonkey import require as js_require

js_lib = js_require('./index')

intput = int(input())

while input:
    js_lib.hello()
    intput-=1