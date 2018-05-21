
登录(鉴权):
http://118.190.152.1:8084/auth

模拟:
①获取token
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"username":"admin","password":"admin"}' 'http://118.190.152.1:8084/auth'

②调用接口
curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTUyNzQyODI1MywiaWF0IjoxNTI2ODIzNDUzfQ.VbZJovQzJ8iZ2pXDWEWpgT-9buf_4cyNxePT5KkUkj7TbqLTt_U1DIK7a1Jcl6-8c8969yKLCM9gu-B5AUSwjQ' 'http://118.190.152.1:8082/admin/titleList/oneTitleList'