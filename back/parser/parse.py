import pymysql
host = "127.0.0.1"

try:
    connection = pymysql.connect(
        host=host,
        port=3306,
        user="root",
        database="stones",
        cursorclass=pymysql.cursors.DictCursor
    )
    print('success')
except Exception as e:
    print(1)
    print(e)
